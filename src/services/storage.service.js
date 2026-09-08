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

module.exports = {
  uploadFile,
};
