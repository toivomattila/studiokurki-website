# Studio Kurki

## Suomeksi

Staattinen Astro-sivusto valokuvaaja Arnon Kurjelle Lahteen. Sivuston suomenkielinen sisältö pohjautuu Arnonin toimittamaan lopulliseen tekstiversioon (`/tmp/copy2-out.md`). Hinnat on tarkistettu Arnonin vanhalta Squarespace-sivustolta, ja ne ovat lähdekoodissa `src/data/prices.ts`; hinnat näkyvät aina tämän tiedoston tiedoista muodostettuina.

Valokuvat ovat Arnonin omasta Squarespace-arkistosta. Kaikki 18 portfolioaineiston tiedostonimeä, kuvaustekstit ja lähdenimet ovat `src/data/portfolio.ts`-tiedostossa. Palvelu-, hero- ja henkilökuvat ovat `src/assets/services/`, `src/assets/hero/` ja `src/assets/about/`. Emme käytä AI:lla luotuja tai kuvapankkikuvia. Brändin alkuperäiset logot ovat `src/assets/brand/`; asset-skripti skaalaa nosturimerkin ikoneihin ja täyden logon jakokuvaan.

Kehitys: Node.js 22 ja pnpm 10.34.6. Asenna riippuvuudet komennolla `pnpm install`. Tarkistukset: `pnpm format`, `pnpm format:check`, `pnpm lint`, `pnpm shadcn:lint`, `pnpm check`, `pnpm doctor`, `pnpm build`.

Julkaisuun siirryttäessä vaihda sivuston osoite kerran tiedostossa `src/data/site.ts` (`SITE_URL`). Kanoniset osoitteet, sitemap, JSON-LD ja WebMCP käyttävät samaa arvoa.

## English

Static Astro website for photographer Arnon Kurki in Lahti, Finland. Finnish page copy comes from Arnon's supplied final copy (`/tmp/copy2-out.md`). Prices were verified against Arnon's archived Squarespace site and live in `src/data/prices.ts`; pages render prices directly from that data.

Photographs come from Arnon's old Squarespace archive. The 18 portfolio filenames, alt text, captions, and source filenames are recorded in `src/data/portfolio.ts`. Service, hero, and portrait images are in `src/assets/services/`, `src/assets/hero/`, and `src/assets/about/`. No AI-generated or stock images are used. Original brand marks are in `src/assets/brand/`; the asset generator scales the crane mark for icons and the full logo for social sharing.

Use Node.js 22 and pnpm 10.34.6. Install with `pnpm install`; available checks are listed above. At launch, change `SITE_URL` once in `src/data/site.ts`. Canonicals, sitemap, JSON-LD, and WebMCP use that single value.
