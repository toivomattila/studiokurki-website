import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

await mkdir("public", { recursive: true });
const mark = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="#f5f3ee"/><rect x="30" y="30" width="452" height="452" fill="none" stroke="#59605b" stroke-width="2"/><text x="256" y="350" text-anchor="middle" font-family="Georgia,serif" font-size="300" fill="#242522">K</text></svg>`;
await writeFile("public/favicon.svg", mark);
const iconPng = (size) => sharp(Buffer.from(mark)).resize(size, size).png().toBuffer();
await Promise.all([
  iconPng(180).then((data) => sharp(data).toFile("public/apple-touch-icon.png")),
  iconPng(192).then((data) => sharp(data).toFile("public/icon-192.png")),
  iconPng(512).then((data) => sharp(data).toFile("public/icon-512.png")),
]);
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map(iconPng));
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
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f5f3ee"/><rect x="55" y="55" width="1090" height="520" fill="none" stroke="#d7d5cf" stroke-width="2"/><text x="100" y="190" font-family="Arial,sans-serif" font-size="22" letter-spacing="7" fill="#59605b">VALOKUVAAJA · LAHTI</text><text x="92" y="365" font-family="Georgia,serif" font-size="112" fill="#242522">Studio Kurki</text><path d="M100 415h140" stroke="#59605b" stroke-width="2"/><text x="100" y="490" font-family="Arial,sans-serif" font-size="30" letter-spacing="2" fill="#454641">Valokuvaaja Arnon Kurki · Lahti</text><text x="1035" y="530" font-family="Georgia,serif" font-size="115" fill="#59605b" opacity=".12">K</text></svg>`;
await sharp(Buffer.from(og)).png().toFile("public/og-image.png");
await writeFile(
  "public/site.webmanifest",
  JSON.stringify(
    {
      name: "Studio Kurki",
      short_name: "Studio Kurki",
      lang: "fi",
      start_url: "/",
      display: "standalone",
      background_color: "#f5f3ee",
      theme_color: "#f5f3ee",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    null,
    2,
  ) + "\n",
);
