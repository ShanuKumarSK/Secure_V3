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
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Gateway_of_India%2C_Mumbai.jpg",
    caption: "Gateway of India, Mumbai",
  },
  RJ: {
    name: "Rajasthan",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Hawa_Mahal_2011.jpg",
    caption: "Hawa Mahal, Jaipur",
  },
  KL: {
    name: "Kerala",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Kumarakom_houseboat_kerala.jpg",
    caption: "Backwaters, Kumarakom",
  },
  TN: {
    name: "Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Meenakshi_Amman_Temple_entrance_tower.jpg",
    caption: "Meenakshi Temple, Madurai",
  },
  KA: {
    name: "Karnataka",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Mysore_Palace_in_the_evening.jpg",
    caption: "Mysore Palace",
  },
  GJ: {
    name: "Gujarat",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Statue_of_Unity_-_Attractions_-_View.jpg",
    caption: "Statue of Unity",
  },
  WB: {
    name: "West Bengal",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Victoria_Memorial_Kolkata.jpg",
    caption: "Victoria Memorial, Kolkata",
  },
  PB: {
    name: "Punjab",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Golden_Temple_-_Amritsar.jpg",
    caption: "Golden Temple, Amritsar",
  },
  HP: {
    name: "Himachal Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Shimla_scenery.jpg",
    caption: "Shimla Hills",
  },
  GA: {
    name: "Goa",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Palolem_beach%2C_Goa.jpg",
    caption: "Palolem Beach",
  },
  DL: {
    name: "Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/India_Gate_in_New_Delhi_03-2016_img3.jpg",
    caption: "India Gate",
  },
  BR: {
    name: "Bihar",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mahabodhi_Temple_in_Bodh_Gaya.jpg",
    caption: "Mahabodhi Temple, Bodh Gaya",
  },
  JH: {
    name: "Jharkhand",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Hundru_falls_Ranchi.jpg",
    caption: "Hundru Falls",
  },
  OD: {
    name: "Odisha",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Konark_Sun_Temple%2C_India.jpg",
    caption: "Konark Sun Temple",
  },
  MP: {
    name: "Madhya Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Mahakaleshwar_Temple%2C_Ujjain.jpg",
    caption: "Mahakaleswar Temple",
  },
  AS: {
    name: "Assam",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Kamakhya_Temple_Guwahati_Assam.jpg",
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
