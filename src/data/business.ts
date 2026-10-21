import { SITE_URL } from "./site";

export const business = {
  name: "Studio Kurki",
  url: SITE_URL,
  email: "arnon@studiokurki.com",
  instagram: "https://www.instagram.com/studiokurki/",
  instagramHandle: "@studiokurki",
  locality: "Lahti",
  businessId: "2960962-9",
  founder: "Arnon Kurki",
  services: [
    {
      name: "Maisemakuvaus",
      description: "Luonto, valot ja tunnelmat ovat minulle läheisiä.",
    },
    {
      name: "Muotokuvat",
      description: "Kuvaan myös muotokuvia. Kerro, millaisia kuvia tarvitset.",
    },
    {
      name: "Hääkuvaus",
      description:
        "Kuvaan myös häitä. Kerro hääpäivän ajankohta ja paikka sekä toiveet kuvaukselle.",
    },
    {
      name: "Tapahtumakuvaus",
      description: "Kuvaan myös tapahtumia. Kerro tapahtuman aihe, ajankohta ja paikka.",
    },
    {
      name: "Kuvankäsittely",
      description: "Teen yritysten kuvankäsittelyä kevyesti: säädän valoa, värejä ja yleisilmettä.",
    },
  ],
} as const;

export const webmcpTools = [
  {
    name: "get_services",
    description: "Hakee Studio Kurjen valokuvauspalvelut.",
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
      description: "Manifesti palveluiden ja yhteystietojen lukemiseen.",
      representativeQueries: [
        "Mitä kuvauspalveluja Studio Kurki tarjoaa?",
        "Miten saan yhteyden Studio Kurkeen?",
      ],
      metadata: {
        webmcpManifestUrl: `${SITE_URL}/.well-known/webmcp.json`,
        llmsTxtUrl: `${SITE_URL}/llms.txt`,
      },
    },
  ],
} as const;
