const { addRefreshTokenToWhiteList } = require("../../services/auth.service");
const { createUser, findUserByEmail } = require("../../services/user.service");
const { generateTokens } = require("../../utils/jwt");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../base.controller");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("You Not Provide Email Or Password");
    }
    const jti = uuidv4();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      sendErrorResponse(res, 400, "Make Sure Thats Email");
      return;
    }
    const existsUser = await findUserByEmail(email);
    if (existsUser) {
      sendErrorResponse(res, 400, "Email Already Exist");
      return;
    }

    const user = await createUser({ email, password });
    const { accessToken, refreshToken } = await generateTokens(user, jti);
    await addRefreshTokenToWhiteList({ jti, refreshToken, userId: user.id });

    sendSuccessResponse(
      res,
      {
        accessToken: accessToken,
      },
      201
    );
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      sendErrorResponse(res, 400, "You Not Provide Email Or Password");
      return;
    }
    const existsUser = await findUserByEmail(email);
    if (!existsUser) {
      sendErrorResponse(res, 403, "Invalid Credentials");
      return;
    }
    const checkPassword = await bcrypt.compare(password, existsUser.password);
    if (!checkPassword) {
      sendErrorResponse(res, 403, "Invalid Credentials");
      return;
    }
    const jti = uuidv4();
    const { accessToken, refreshToken } = await generateTokens(existsUser, jti);
    await addRefreshTokenToWhiteList({
      jti,
      refreshToken,
      userId: existsUser.id,
    });

    sendSuccessResponse(
      res,
      {
        accessToken: accessToken,
      },
      200
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
