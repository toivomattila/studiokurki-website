import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
await mkdir("public", { recursive: true });
const paper = "#f5f3ee";
const mark = await sharp("src/assets/brand/kurki-mark.png").png().toBuffer();
const logo = await sharp("src/assets/brand/studio-kurki-logo.png").png().toBuffer();
const mark64 = mark.toString("base64");
const svgIcon = (size) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512"><rect width="512" height="512" fill="${paper}"/><image href="data:image/png;base64,${mark64}" x="72" y="72" width="368" height="368" preserveAspectRatio="xMidYMid meet"/></svg>`,
  );
const iconPng = (size) => sharp(svgIcon(size)).resize(size, size).png().toBuffer();
await writeFile("public/favicon.svg", svgIcon(512));
for (const [size, path] of [
  [180, "public/apple-touch-icon.png"],
  [192, "public/icon-192.png"],
  [512, "public/icon-512.png"],
])
  await writeFile(path, await iconPng(size));
const sizes = [16, 32, 48],
  pngs = await Promise.all(sizes.map(iconPng));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (const [i, size] of sizes.entries()) {
  const at = 6 + i * 16;
  header.writeUInt8(size, at);
  header.writeUInt8(size, at + 1);
  header.writeUInt16LE(1, at + 4);
  header.writeUInt16LE(32, at + 6);
  header.writeUInt32LE(pngs[i].length, at + 8);
  header.writeUInt32LE(offset, at + 12);
  offset += pngs[i].length;
}
await writeFile("public/favicon.ico", Buffer.concat([header, ...pngs]));
await sharp(logo).resize({ width: 600 }).png().toFile("public/logo.png");
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${paper}"/><image href="data:image/png;base64,${logo.toString("base64")}" x="70" y="115" width="510" height="400" preserveAspectRatio="xMidYMid meet"/><text x="630" y="300" font-family="Georgia,serif" font-size="54" fill="#242522">Valokuvaaja</text><text x="630" y="375" font-family="Georgia,serif" font-size="54" fill="#242522">Arnon Kurki · Lahti</text></svg>`;
await sharp(Buffer.from(ogSvg)).png().toFile("public/og-image.png");
await writeFile(
  "public/site.webmanifest",
  JSON.stringify(
    {
      name: "Studio Kurki",
      short_name: "Studio Kurki",
      lang: "fi",
      start_url: "/",
      display: "standalone",
      background_color: paper,
      theme_color: paper,
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    null,
    2,
  ) + "\n",
);
