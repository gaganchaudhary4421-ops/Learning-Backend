const ImageKit = require("@imagekit/nodejs");
const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
async function upload(Buffer) {
  const result = await imagekit.upload({
    file: Buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return result;
}
