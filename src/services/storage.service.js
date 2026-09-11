const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: "private_fw96EGAkgTBNLjA3R5S/5Nik+Ds=",
});

async function uploadFile(buffer) {
  const result = await imagekit.files.upload({
    file: buffer,
    fileName: "image.jpg",
  });

  return result;
}
//Learning api key and private key are used to authenticate the request to the ImageKit API. The uploadFile function takes a buffer as input, which represents the file to be uploaded. It uses the ImageKit SDK to upload the file and returns the result of the upload operation.
module.exports = {
  uploadFile,
};
