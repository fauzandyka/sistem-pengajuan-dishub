const { addRefreshTokenToWhiteList } = require("../../services/auth.service");
const { createUser, findUserByEmail } = require("../../services/user.service");
const { generateTokens } = require("../../utils/jwt");
const { v4: uuidv4 } = require("uuid");
const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      res.status(400);
      throw new Error("You Not Provide Email Or Password");
    }

    const existsUser = await findUserByEmail(email);

    if (existsUser) {
      res.status(400);
      throw new Error("Email Already Exist");
    }

    const user = await createUser({ email, password });
    const jti = uuidv4();
    const { accessToken, refreshToken } = await generateTokens(user, jti);
    await addRefreshTokenToWhiteList({ jti, refreshToken, userId: user.id });

    res.status(200).json({
      refreshToken: refreshToken,
      accessToken: accessToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register };
