const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: "private_fw96EGAkgTBNLjA3R5S/5Nik+Ds=",
});

async function uploadFile(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64")
    fileName: "image.jpg",
  });

  return result;
}
//Learning API's
module.exports = {
  uploadFile,
};
