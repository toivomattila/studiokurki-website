import type { APIRoute } from "astro";
import { SITE_URL } from "../data/site";
import { business, fullPriceText } from "../data/business";
export const prerender = true;
export const GET: APIRoute = () =>
  new Response(
    `# Studio Kurki

Studio Kurki on valokuvaaja Arnon Kurjen yritys Lahdessa. Valokuvauspalvelut ihmisille, kodeille ja ajoneuvoille; työssä tekninen laatu ja tunnelma kulkevat yhdessä.

## Sivut
- [Etusivu](${SITE_URL}/)
- [Palvelut](${SITE_URL}/palvelut/)
- [Hinnasto](${SITE_URL}/hinnasto/)
- [Valokuvaaja](${SITE_URL}/valokuvaaja/)
- [Yhteystiedot](${SITE_URL}/yhteystiedot/)

## Palvelut
${business.services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}
- Maisemat: Portfolio esittelee Arnonin maisemakuvia.

## Hinnasto
${fullPriceText}

## Yhteystiedot
- Sähköposti: ${business.email}
- Instagram: [${business.instagramHandle}](${business.instagram})
- Facebook: [Studio Kurki](${business.facebook})
- Paikkakunta: ${business.locality}
- Y-tunnus: ${business.businessId}
`,
    { headers: { "Content-Type": "text/markdown; charset=utf-8" } },
  );
