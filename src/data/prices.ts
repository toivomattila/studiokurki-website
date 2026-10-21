// Prices verified against Arnon Kurki’s archived site:
// /new-page (Hinnasto), /henkilokuvaus, /asuntokuvaus-uusi, /ajoneuvokuvaus-uusi.
// The old /asuntokuvaus-uusi page mislabelled the M and L home packages as "Ajoneuvokuvaus"; fixed here.
export interface PricePackage {
  name: string;
  price: number;
  details: string[];
}
export interface PriceGroup {
  id: string;
  title: string;
  service: string;
  packages: PricePackage[];
  extraPhotos: boolean;
}

export const EXTRA_PHOTO_PRICE = 15;

export const priceGroups: PriceGroup[] = [
  {
    id: "lapsi-ja-perhekuvaus",
    title: "Lapsi- ja perhekuvaus",
    service: "Henkilökuvaus",
    extraPhotos: true,
    packages: [
      {
        name: "S",
        price: 195,
        details: ["8 viimeisteltyä kuvaa", "Noin tunnin kuvausaika miljöössä tai studiossa"],
      },
      {
        name: "M",
        price: 250,
        details: ["15 viimeisteltyä kuvaa", "Noin tunnin kuvausaika miljöössä tai studiossa"],
      },
      {
        name: "L",
        price: 280,
        details: ["25 viimeisteltyä kuvaa", "Noin tunnin kuvausaika miljöössä tai studiossa"],
      },
      {
        name: "XL",
        price: 450,
        details: [
          "Gallerian kaikki kuvat, noin 40+ kuvaa",
          "Noin tunnin kuvausaika miljöössä tai studiossa",
        ],
      },
    ],
  },
  {
    id: "valmistujais-ja-muotokuvaus",
    title: "Valmistujais- ja muotokuvaus",
    service: "Henkilökuvaus",
    extraPhotos: true,
    packages: [
      {
        name: "S",
        price: 195,
        details: ["5 viimeisteltyä kuvaa", "Noin tunnin kuvausaika miljöössä"],
      },
      {
        name: "M",
        price: 250,
        details: ["10 viimeisteltyä kuvaa", "Noin tunnin kuvausaika miljöössä"],
      },
      {
        name: "L",
        price: 280,
        details: ["15 viimeisteltyä kuvaa", "Noin tunnin kuvausaika miljöössä"],
      },
    ],
  },
  {
    id: "haat",
    title: "Häät",
    service: "Hääkuvaus",
    extraPhotos: false,
    packages: [
      {
        name: "Kihlapotretit",
        price: 250,
        details: [
          "10 viimeisteltyä kuvaa",
          "Noin tunnin kuvaus valitsemassanne miljöössä",
          "Lisäkuvat 15 €/kpl",
        ],
      },
      {
        name: "Hääpotretit, 20 kuvaa",
        price: 370,
        details: ["20 viimeisteltyä kuvaa", "1–2 tunnin kuvaus valitsemassanne miljöössä"],
      },
      {
        name: "Hääpotretit, koko galleria",
        price: 450,
        details: [
          "Koko galleria, vähintään 50 kuvaa",
          "1–2 tunnin kuvaus valitsemassanne miljöössä",
        ],
      },
      {
        name: "Hääpotretit & vihkiminen",
        price: 780,
        details: ["Vihkimisen dokumentaarinen kuvaus", "Valmiita kuvia yhteensä 50–120 kpl"],
      },
      {
        name: "Hääpotretit, vihkiminen & juhlat, 6 h",
        price: 1150,
        details: ["Kuvausaika yhteensä 6 tuntia", "Vähintään 250 viimeisteltyä kuvaa"],
      },
      {
        name: "Hääpotretit, vihkiminen & juhlat, 8 h",
        price: 1650,
        details: ["Kuvausaika yhteensä 8 tuntia", "Vähintään 350 viimeisteltyä kuvaa"],
      },
      {
        name: "Hääpotretit, vihkiminen & juhlat, 10 h",
        price: 2200,
        details: ["Kuvausaika yhteensä 10 tuntia", "Vähintään 400 viimeisteltyä kuvaa"],
      },
    ],
  },
  {
    id: "asuntokuvaus",
    title: "Asuntokuvaus",
    service: "Asuntokuvaus",
    extraPhotos: false,
    packages: [
      {
        name: "S",
        price: 200,
        details: ["15 viimeisteltyä valokuvaa", "Dronekuvat", "Kuvaus sovitussa kohteessa"],
      },
      {
        name: "M",
        price: 300,
        details: ["25 viimeisteltyä valokuvaa", "Dronekuvat", "Kuvaus sovitussa kohteessa"],
      },
      {
        name: "L",
        price: 400,
        details: ["35 viimeisteltyä valokuvaa", "Dronekuvat", "Kuvaus sovitussa kohteessa"],
      },
    ],
  },
  {
    id: "ajoneuvokuvaus",
    title: "Ajoneuvokuvaus",
    service: "Ajoneuvokuvaus",
    extraPhotos: false,
    packages: [
      {
        name: "S",
        price: 300,
        details: ["5 viimeisteltyä valokuvaa", "Myyntivideo", "Kuvaus sovitussa miljöössä"],
      },
      {
        name: "M",
        price: 400,
        details: ["25 viimeisteltyä valokuvaa", "Myyntivideo", "Kuvaus sovitussa miljöössä"],
      },
      {
        name: "L",
        price: 500,
        details: ["35 viimeisteltyä valokuvaa", "Myyntivideo", "Kuvaus sovitussa miljöössä"],
      },
    ],
  },
];

export const priceNotes = [
  "Lapsi- ja perhekuvauksen (S–L), valmistujais- ja muotokuvauksen sekä kihlapotrettien lisäkuvat 15 €/kpl.",
  "Kuvat toimitetaan suojatun Google Drive -linkin kautta.",
  "Hinnat sisältävät arvonlisäveron.",
];

export const formatPrice = (value: number) =>
  `${new Intl.NumberFormat("fi-FI").format(value).replace(/\u00a0/g, " ")} €`;

export const allPrices = priceGroups.flatMap((g) => g.packages.map((p) => p.price));
