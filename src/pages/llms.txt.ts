import type { APIRoute } from "astro";
import { SITE_URL } from "../data/site";
import { business } from "../data/business";

export const prerender = true;
export const GET: APIRoute = () =>
  new Response(
    `# Studio Kurki

Studio Kurki on valokuvaaja Arnon Kurjen yritys Lahdessa. Arnon on erikoistunut maisemakuvaukseen. Palveluihin kuuluvat maisema-, muotokuva-, hää- ja tapahtumakuvaus, kuvankäsittely sekä valokuvauksen opastus. Portfoliokuvat lisätään pian.

## Sivut
- [Etusivu](${SITE_URL}/)
- [Palvelut](${SITE_URL}/palvelut/)
- [Yhteystiedot](${SITE_URL}/yhteystiedot/)

## Yhteystiedot
- Sähköposti: ${business.email}
- Paikkakunta: Lahti
- Y-tunnus: ${business.businessId}
`,
    { headers: { "Content-Type": "text/markdown; charset=utf-8" } },
  );
