const app = require("./app.js");
const dotenv = require("dotenv");
const router = require("./routes/index.js");

dotenv.config();
require("./config/database.js");
app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});