const fs = require("fs/promises");
const ono = require("@jsdevtools/ono");

async function getJsonContent(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    if (!data.trim()) {
      throw ono({
        status: 400,
        message: `The provided file is empty.`
      })
    }

    const jsonData = JSON.parse(data);

    return jsonData;
  } catch (error) {
    throw ono({
      status: error.status,
      message: error.message
    })
  }
}

module.exports = getJsonContent
