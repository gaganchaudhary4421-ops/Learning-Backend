const imagekit = require("@imagekit/nodejs");
const imagekit = new imagekit({
  privatekey: "private_fw96EGAkgTBNLjA3R5S/5Nik+Ds=",
});
async function uploadFile(buffer) {
  const result = await imagekit.client.upload({
    file: buffer,
    fileName: "image.jpg",
  });
  return result;
}
module.exports = storageService;
