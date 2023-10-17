const { express } = require("./utils/express");
const { routeAuth } = require("../src/routes/auth.routes");
const app = express();
const port = 3001;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server Is Running");
});

app.use("/auth", routeAuth);

app.listen(port, () => {
  console.log(`Server Is Running on port ${port}`);
});
