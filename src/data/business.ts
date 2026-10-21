import { allPrices, formatPrice, priceGroups, priceNotes } from "./prices";
import { SITE_URL } from "./site";

export const business = {
  name: "Studio Kurki",
  url: SITE_URL,
  email: "arnon@studiokurki.fi",
  instagram: "https://www.instagram.com/studiokurki/",
  instagramHandle: "@studiokurki",
  facebook: "https://www.facebook.com/profile.php?id=61582904011645",
  locality: "Lahti",
  businessId: "2960962-9",
  founder: "Arnon Kurki",
  services: [
    {
      name: "Henkilökuvaus",
      description: "Luonnollisia kuvia lapsista, perheistä, valmistujaisista ja muotokuvista.",
    },
    {
      name: "Hääkuvaus",
      description: "Kihlapotretit, hääpotretit sekä vihkimisen ja juhlien tärkeät hetket.",
    },
    {
      name: "Asuntokuvaus",
      description: "Luonnolliset ja kutsuvat kuvat kodista, myös dronekuvat sovittaessa.",
    },
    {
      name: "Ajoneuvokuvaus",
      description: "Valokuvat ja myyntivideo, jotka tuovat ajoneuvon ilmeen esiin.",
    },
  ],
} as const;
export const priceSummary = `Hinnat ${formatPrice(Math.min(...allPrices))}–${formatPrice(Math.max(...allPrices))}.`;
export const fullPriceText =
  priceGroups
    .map(
      (g) =>
        `${g.title}\n${g.packages.map((p) => `- ${p.name}: ${formatPrice(p.price)} — ${p.details.join("; ")}`).join("\n")}`,
    )
    .join("\n\n") + `\n\nHuomioitavaa\n${priceNotes.map((n) => `- ${n}`).join("\n")}`;
export const webmcpTools = [
  {
    name: "get_services",
    description: "Hakee Studio Kurjen valokuvauspalvelut ja hintayhteenvedon.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_prices",
    description: "Hakee Studio Kurjen hinnaston ja hintahuomiot.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_contact",
    description: "Hakee Studio Kurjen yhteystiedot.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
] as const;
export const aiCatalog = {
  specVersion: "1.0",
  host: { displayName: business.name, documentationUrl: `${SITE_URL}/llms.txt` },
  entries: [
    {
      identifier: "urn:air:studiokurki.fi:business:studio-kurki-webmcp",
      displayName: "Studio Kurki WebMCP-manifesti",
      type: "application/json",
      url: `${SITE_URL}/.well-known/webmcp.json`,
      description: "Manifesti palveluiden, hintojen ja yhteystietojen lukemiseen.",
      representativeQueries: [
        "Mitä kuvauspalveluja Studio Kurki tarjoaa?",
        "Mitä Studio Kurjen kuvauspaketit maksavat?",
        "Miten saan yhteyden Studio Kurkeen?",
      ],
      metadata: {
        webmcpManifestUrl: `${SITE_URL}/.well-known/webmcp.json`,
        llmsTxtUrl: `${SITE_URL}/llms.txt`,
      },
    },
  ],
} as const;
