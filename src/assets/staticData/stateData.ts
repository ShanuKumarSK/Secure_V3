type StateInfo = {
  name: string;
  worksReceived: number;
  firstApproval: number;
  finalApproval: number;
  consumedByMIS: null;
};

export const statesData: Record<string, StateInfo> = {
  "RJ": { name: "Rajasthan", worksReceived: 250, firstApproval: 90, finalApproval: 0, consumedByMIS: null },
  "PB": { name: "Punjab", worksReceived: 1831, firstApproval: 403, finalApproval: 132, consumedByMIS: null },
  "ML": { name: "Meghalaya", worksReceived: 1428, firstApproval: 0, finalApproval: 0, consumedByMIS: null },
  "UK": { name: "Uttarakhand", worksReceived: 149, firstApproval: 115, finalApproval: 32, consumedByMIS: null },
  "HR": { name: "Haryana", worksReceived: 45, firstApproval: 35, finalApproval: 4, consumedByMIS: null },
  "MN": { name: "Manipur", worksReceived: 82, firstApproval: 0, finalApproval: 0, consumedByMIS: null },
  "KA": { name: "Karnataka", worksReceived: 22589, firstApproval: 11905, finalApproval: 10232, consumedByMIS: null },
  "HP": { name: "Himachal Pradesh", worksReceived: 63, firstApproval: 4, finalApproval: 1, consumedByMIS: null },
  "SK": { name: "Sikkim", worksReceived: 1, firstApproval: 0, finalApproval: 0, consumedByMIS: null },
  "TR": { name: "Tripura", worksReceived: 362, firstApproval: 15, finalApproval: 15, consumedByMIS: null },
  "OD": { name: "Odisha", worksReceived: 1468, firstApproval: 655, finalApproval: 6, consumedByMIS: null },
  "MP": { name: "Madhya Pradesh", worksReceived: 7201, firstApproval: 3296, finalApproval: 2115, consumedByMIS: null },
  "NL": { name: "Nagaland", worksReceived: 2, firstApproval: 0, finalApproval: 0, consumedByMIS: null },
  "CT": { name: "Chhattisgarh", worksReceived: 316, firstApproval: 213, finalApproval: 3, consumedByMIS: null },
  "WB": { name: "West Bengal", worksReceived: 999, firstApproval: 0, finalApproval: 0, consumedByMIS: null },
  "KL": { name: "Kerala", worksReceived: 5615, firstApproval: 170, finalApproval: 127, consumedByMIS: null },
  "TG": { name: "Telangana", worksReceived: 17686, firstApproval: 13348, finalApproval: 7122, consumedByMIS: null },
  "GA": { name: "Goa", worksReceived: 16, firstApproval: 12, finalApproval: 11, consumedByMIS: null },
  "AP": { name: "Andhra Pradesh", worksReceived: 39106, firstApproval: 58237, finalApproval: 17302, consumedByMIS: null },
  "JK": { name: "Jammu and Kashmir", worksReceived: 1655, firstApproval: 0, finalApproval: 0, consumedByMIS: null },
  "UP": { name: "Uttar Pradesh", worksReceived: 6528, firstApproval: 2147, finalApproval: 1233, consumedByMIS: null },
  "TN": { name: "Tamil Nadu", worksReceived: 2197, firstApproval: 413, finalApproval: 330, consumedByMIS: null },
  "MH": { name: "Maharashtra", worksReceived: 2179, firstApproval: 2041, finalApproval: 1189, consumedByMIS: null },
  "AS": { name: "Assam", worksReceived: 699, firstApproval: 12, finalApproval: 5, consumedByMIS: null },
  "GJ": { name: "Gujarat", worksReceived: 1731, firstApproval: 138, finalApproval: 16, consumedByMIS: null },
  "MZ": { name: "Mizoram", worksReceived: 355, firstApproval: 208, finalApproval: 205, consumedByMIS: null },
  "BR": { name: "Bihar", worksReceived: 1861, firstApproval: 737, finalApproval: 443, consumedByMIS: null },
  "PY": { name: "Puducherry", worksReceived: 133, firstApproval: 8, finalApproval: 7, consumedByMIS: null },
  "LA": { name: "Ladakh", worksReceived: 0, firstApproval: 0, finalApproval: 0, consumedByMIS: null }
};
