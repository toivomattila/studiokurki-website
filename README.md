# Studio Kurki

Staattinen suomenkielinen Astro-sivusto valokuvaaja Arnon Kurjelle Lahteen. Sivusto toimii ilman asiakaspuolen JavaScriptiä; pieni WebMCP-skripti rekisteröi vain luku -työkalut selaimissa, jotka tukevat niitä.

## Kehitys

Käytä Node.js 22:ta ja pnpm-versiota 10.34.6.

```sh
pnpm install
pnpm dev
```

## Tarkistukset ja build

```sh
pnpm format
pnpm format:check
pnpm lint
pnpm shadcn:lint
pnpm check
pnpm doctor
pnpm build
pnpm lhci
```

## Kuvat ja sisältö

Lisää portfoliokuvat hakemistoon `src/assets/portfolio/` JPG-, PNG- tai WebP-muodossa. Nimeä tiedostot järjestykseen, esimerkiksi `01-maisema-vesijarvi.jpg`; galleria järjestää ne tiedostonimen mukaan. Kirjoita alt-tekstit ja mahdolliset kuvatekstit tiedostoon `src/data/portfolio.ts` tiedostonimen perusteella. Hero-kuvan voi lisätä hakemistoon `src/assets/hero/`. Kun kuvia ei ole, sivusto näyttää paikkamerkin tekstillä “Kuva tulossa”.

Vaihda julkaisun yhteydessä `SITE_URL` tiedostossa `src/data/site.ts` osoitteeksi `https://studiokurki.fi`. Astro-konfiguraatio, canonical-osoitteet, sitemap, robots.txt sekä tekoälyrajapintojen linkit käyttävät samaa arvoa.

Kaikki sivuston tekstit perustuvat sallittuihin facts.md-lähteisiin: Arnon Kurjen omaan Freedomly-profiiliin (https://freedomly.io/u/674e1b7f-a87d-4182-886c-38da695fdae3), yrityksen rekisteri- ja toimialatietoihin (Proff.fi ja Kauppalehti), Arnonin omiin Studio Kurjen sähköposteihin sekä yhteystietona annettuun sähköpostiosoitteeseen.

## English

Static Finnish-language Astro website for photographer Arnon Kurki in Lahti. Add portfolio photographs to `src/assets/portfolio/` and an optional hero photo to `src/assets/hero/`. Use descriptive filenames; set verified alt text and optional captions in `src/data/portfolio.ts`, keyed by filename. Until real photos are added, intentional placeholders display “Kuva tulossa”. No stock or generated photos are used.

Use Node.js 22 and pnpm 10.34.6. Run `pnpm install`, `pnpm dev`, and the checks listed above. At launch, change `SITE_URL` once in `src/data/site.ts` to `https://studiokurki.fi`. All site copy is based on the sources listed in facts.md: Arnon's Freedomly profile, Finnish business register information via Proff.fi and Kauppalehti, and Arnon's own Studio Kurki emails.
