// Real photographs by Arnon Kurki from his old Squarespace site. Source file names are listed for traceability.
// No AI-generated or stock images. Order follows the file name prefix.
export interface PhotoMeta {
  alt: string;
  caption?: string;
  source: string;
}

export const portfolioMetadata: Record<string, PhotoMeta> = {
  "01-norja-vuono-ruska.jpg": {
    alt: "Tyyni vuono ja vihreät vuoret Norjassa, etualalla ruskan värjäämää rantakiveä",
    caption: "Norja",
    source: "8520ee3d_Road_Trip_Norja_With_Preset-89.jpg",
  },
  "02-norja-vesiputous.jpg": {
    alt: "Vesiputous laskee jyrkältä kalliolta Norjassa",
    caption: "Norja",
    source: "f27e4127_Road_Trip_Norja_With_Preset-37.jpg",
  },
  "03-norja-auringonlasku.jpg": {
    alt: "Vaaleanpunainen auringonlasku vuorten ja kivikkoisen rannan yllä Norjassa",
    caption: "Norja",
    source: "4b1dda73_Road_Trip_Norja_With_Preset-77.jpg",
  },
  "04-norja-kalliolla-vuono.jpg": {
    alt: "Punatakkinen ihminen seisoo kädet levällään kalliolla turkoosin vuonon rannalla",
    caption: "Norja",
    source: "864407cd_Road_Trip_Norja_With_Preset-58.jpg",
  },
  "05-norja-vuonon-rannalla.jpg": {
    alt: "Nainen katsoo selin tyyntä vuonoa ja vuoria",
    caption: "Norja",
    source: "c028168c_Road_Trip_day_8_Norja-Yykeänmuotka_Vikapäivä-4.jpg",
  },
  "06-italia-smaragdijarvi.jpg": {
    alt: "Nainen nojaa puiseen aitaan ja katsoo smaragdinvihreää vuoristojärveä",
    caption: "Italia",
    source: "302d80b9_Italia_Päivä_6-60.JPG",
  },
  "07-italia-vuoristojarvi.jpg": {
    alt: "Aikuinen ja lapsi kävelevät järven rannalla jyrkkien vuorten edessä",
    caption: "Italia",
    source: "0bfb5e71_Italia_Päivä_3_Part_2-3.JPG",
  },
  "08-muotokuva-tumma-tausta.jpg": {
    alt: "Muotokuva pitkähiuksisesta naisesta tummaa taustaa vasten",
    caption: "Potretti",
    source: "0da83298__DSC6392.jpg",
  },
  "09-meri-auringonlasku.jpg": {
    alt: "Nainen istuu rantakivellä ja katsoo auringonlaskua meren yllä",
    caption: "Miljöö",
    source: "b46dc8ec_Road_Trip_day_2_Vaasa-_Kalajoki-5.jpg",
  },
  "10-minun-lahti-radiomaki.jpg": {
    alt: "Lahden kerrostaloja ja Radiomäen mastot",
    caption: "Minun Lahti",
    source: "0ebb57ae_Minun-Lahti_Kevät-Näyttely_2024-10.jpg",
  },
  "11-minun-lahti-hyppyrimaet.jpg": {
    alt: "Lahden hyppyrimäet ja urheilukeskus ylhäältä kuvattuna",
    caption: "Minun Lahti",
    source: "c3169b01_Minun-Lahti_Kevät-Näyttely_2024-27.jpg",
  },
  "12-minun-lahti-kevatkukat.jpg": {
    alt: "Sinisiä kevätkukkia lähikuvassa",
    caption: "Minun Lahti",
    source: "9f1df5ae_Minun-Lahti_Kevät-Näyttely_2024-54.jpg",
  },
  "13-muistojen-kesa-silta.jpg": {
    alt: "Vihreä kaarisilta joen yllä kesäisessä metsässä",
    caption: "Muistojen kesä",
    source: "8a9db6cd_nettisivu_kuva-2.jpg",
  },
  "14-muistojen-kesa-daaliat.jpg": {
    alt: "Kaksi tummanpunaista daaliaa lähikuvassa",
    caption: "Muistojen kesä",
    source: "e11a0b00_nettisivu_kuva.jpg",
  },
  "15-syksyn-tunnelmat-lehdet.jpg": {
    alt: "Oranssinkeltaisia syyslehtiä puun oksistossa",
    caption: "Syksyn tunnelmat",
    source: "f672254d_Aikakauden_Sävyt_Syksyn_Tunnelmat_Squarespace.JPG",
  },
  "16-koivukuja-syksy.jpg": {
    alt: "Keltaisten koivujen reunustama kuja syksyllä",
    caption: "Miljöö",
    source: "3521e8ab_koivukuja.jpg",
  },
  "17-muotokuva-syksy.jpg": {
    alt: "Hattupäinen nainen syksyisessä maisemassa",
    caption: "Potretti",
    source: "16933191_11_Arnon-Kurki_VK_22parhaat.jpg",
  },
  "18-haat-kadet.jpg": {
    alt: "Hääpari pitää toisiaan kädestä, heidän varjonsa näkyvät maassa",
    caption: "Häät",
    source: "17199168_image-asset.jpeg",
  },
};

export const heroAlt = "Turkoosi tunturijärvi ja pilvien peittämät vuoret Norjassa";

export const serviceImages = {
  perhe: {
    file: "henkilo-perhe.jpg",
    alt: "Perhe kävelee hiekkatiellä metsän reunassa, lapsi isän olkapäillä",
    source: "0fb5d7a6_Harri_Eeva_Perhe_kuvia-9.jpg",
  },
  muotokuva: {
    file: "henkilo-muotokuva.jpg",
    alt: "Hymyilevä mies pipossa ja neuleessa punaisten puutalojen edessä",
    source: "252dd6d0_IMG_2478.JPG",
  },
  haat: {
    file: "haat-paripotretti.jpg",
    alt: "Hääpari seisoo valkoisen kaiteen äärellä järven rannalla",
    source: "6db5ec4a_Promokuva.jpg",
  },
  asunto: {
    file: "asunto-drone.jpg",
    alt: "Omakotitaloalue ja metsä ylhäältä dronella kuvattuna",
    source: "c4c4d220_Omakoti_kullan_kallis_10_of_2_.JPG",
  },
} as const;

export const aboutImage = {
  file: "arnon-mustavalkoinen.jpg",
  alt: "Valokuvaaja Arnon Kurki mustavalkoisessa muotokuvassa ruutupaidassa",
  source: "da5bac73_ebf0a3b9-909e-4918-9db6-d5f9129f0840.JPG",
};
