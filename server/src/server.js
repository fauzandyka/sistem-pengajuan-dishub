const { express } = require("./utils/express");
const { routeAuth } = require("../src/routes/auth.routes");
const app = express();
const cors = require("cors");
const perbaikanRoute = require("./routes/perbaikan.routes");
const kendaraanRoute = require("./routes/kenderaan.routes");
const kerusakanRoute = require("./routes/kerusakan.routes");
const merkRoute = require("./routes/merk.routes");
const jenisRoute = require("./routes/jenis.routes");
const typeRoute = require("./routes/type.routes");
const port = 3001;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Is Running");
});

app.use("/auth", routeAuth);
app.use("/kerusakan", kerusakanRoute);
app.use("/perbaikan", perbaikanRoute);
app.use("/kendaraan", kendaraanRoute);
app.use("/merk", merkRoute);
app.use("/jenis", jenisRoute);
app.use("/type", typeRoute);
app.listen(port, () => {
  console.log(`Server Is Running on port ${port}`);
});
