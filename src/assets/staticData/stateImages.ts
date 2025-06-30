type StateImageMap = {
  [stateCode: string]: {
    name: string;
    image: string;
    caption?: string;
  };
};

export const stateImages: StateImageMap = {
  UP: {
    name: "Uttar Pradesh",
    image: "https://www.hindustantimes.com/ht-img/img/2025/02/07/550x309/PTI01-23-2025-000455A-0_1738935176027_1738935216443.jpg",
    caption: "Ram Mandir, Ayodhya",
  },
  MH: {
    name: "Maharashtra",
    image: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20241123_TWASP004.jpg",
    caption: "Gateway of India, Mumbai",
  },
  RJ: {
    name: "Rajasthan",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514",
    caption: "Mehrangarh Fort, Jodhpur",
  },
  KL: {
    name: "Kerala",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-jatayu-rock-kumarakom-kerala-2-city-hero?qlt=82&ts=1726672494503",
    caption: "Backwaters, Kumarakom",
  },
  TN: {
    name: "Tamil Nadu",
    image: "https://img.nayatrip.com/images/state/big/TAMIL-NADU.jpg",
    caption: "Temple",
  },
  KA: {
    name: "Karnataka",
    image: "https://remotetraveler.com/wp-content/uploads/2014/10/Mysore-Palace2.jpg",
    caption: "Mysore Palace",
  },
  GJ: {
    name: "Gujarat",
    image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/12/753361-statueofunity-reuters-110118.jpg",
    caption: "Statue of Unity",
  },
  WB: {
    name: "West Bengal",
    image: "https://res.cloudinary.com/kmadmin/image/upload/v1724217244/kiomoi/victoria_memorial_2480.jpg",
    caption: "Victoria Memorial, Kolkata",
  },
  PB: {
    name: "Punjab",
    image: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_479585620_20191024174904_20200407155734.jpg",
    caption: "Golden Temple, Amritsar",
  },
  HP: {
    name: "Himachal Pradesh",
    image: "https://images.trvl-media.com/lodging/97000000/96980000/96976300/96976240/fb966911.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    caption: "Shimla Hills",
  },
  GA: {
    name: "Goa",
    image: "https://clubmahindra.gumlet.io/blog/media/section_images/palolembea-b0b10c223bd68f2.webp?w=376&dpr=2.6",
    caption: "Palolem Beach",
  },
  DL: {
    name: "Delhi",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-1-attr-hero?qlt=82&ts=1727351922349",
    caption: "India Gate",
  },
  BR: {
    name: "Bihar",
    image: "https://clubmahindra.gumlet.io/blog/images/Great-Buddha-Statue-resized.jpg?w=376&dpr=2.6",
    caption: "Mahabodhi Temple, Bodh Gaya",
  },
  JH: {
    name: "Jharkhand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsZSr-MlA7KHIeEkbhlbOiGyaFMvmFwHYzA&s",
    caption: "Parasnath Hills",
  },
  OD: {
    name: "Odisha",
    image: "https://www.dailyartmagazine.com/wp-content/uploads/2024/06/Cover-Photo-768x464.jpg",
    caption: "Konark Sun Temple",
  },
  MP: {
    name: "Madhya Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Mahakaleshwar_Temple%2C_Ujjain.jpg",
    caption: "Mahakaleswar Temple",
  },
  AS: {
    name: "Assam",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-2-attr-hero?qlt=82&ts=1726741392778",
    caption: "Kamakhya Temple, Guwahati",
  },
  ML: {
    name: "Meghalaya",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Living_Root_Bridge_in_Mawlynnong_village.jpg",
    caption: "Living Root Bridges",
  },
  SK: {
    name: "Sikkim",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Tsomgo_Lake_Sikkim.jpg",
    caption: "Tsomgo Lake",
  },
  JK: {
    name: "Jammu and Kashmir",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Dal_Lake%2C_Srinagar%2C_India.jpg",
    caption: "Dal Lake, Srinagar",
  },
  // Add more if needed
};
