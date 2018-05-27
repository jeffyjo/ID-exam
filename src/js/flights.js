const flights = [{
  "id": 1,
  "airline": "All Nippon Airways",
  "airline_code": "NH",
  "plane_id": "NH1783",
  "departure_date": "24/11/18",
  "departure_time": "03:00",
  "duration": "4:00",
  "arrival_date": "24/11/18",
  "arrival_time": "07:00",
  "price": "€8346,15",
  "origin": {
    "city": "Zurich Airport",
    "location": "Rümlang/Oberglatt, Bülach/Dielsdorf, Zürich, Switzerland",
    "country": "Switzerland",
    "country_code": "CHE",
    "IATA": "ZRH",
    "ICAO": "LSZH"
  },
  "destination": {
    "city": "London Heathrow Airport",
    "location": "Hillingdon, Greater London, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LHR",
    "ICAO": "EGLL"
  }
}, {
  "id": 2,
  "airline": "Tianjin Airlines",
  "airline_code": "GS",
  "plane_id": "GS2765",
  "departure_date": "02/10/18",
  "departure_time": "20:00",
  "duration": "1:00",
  "arrival_date": "02/10/18",
  "arrival_time": "21:00",
  "price": "€6656,06",
  "origin": {
    "city": "London Gatwick Airport",
    "location": "Crawley, West Sussex, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LGW",
    "ICAO": "EGKK"
  },
  "destination": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  }
}, {
  "id": 3,
  "airline": "Novo Air",
  "airline_code": "VQ",
  "plane_id": "VQ8823",
  "departure_date": "29/09/18",
  "departure_time": "13:00",
  "duration": "2:00",
  "arrival_date": "29/09/18",
  "arrival_time": "15:00",
  "price": "€5910,66",
  "origin": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  },
  "destination": {
    "city": "Amsterdam Airport Schiphol",
    "location": "Haarlemmermeer, North Holland, Netherlands",
    "country": "Netherlands",
    "country_code": "NLD",
    "IATA": "AMS",
    "ICAO": "EHAM"
  }
}, {
  "id": 4,
  "airline": "Atlas Blue",
  "airline_code": "8A",
  "plane_id": "8A2841",
  "departure_date": "09/06/19",
  "departure_time": "02:00",
  "duration": "9:00",
  "arrival_date": "09/06/19",
  "arrival_time": "11:00",
  "price": "€6095,05",
  "origin": {
    "city": "Hong Kong International Airport",
    "location": "Chek Lap Kok, Islands, Hong Kong",
    "country": "Hong Kong",
    "country_code": "HKG",
    "IATA": "HKG",
    "ICAO": "VHHH"
  },
  "destination": {
    "city": "Dubai International Airport",
    "location": "Garhoud, Dubai, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "DXB",
    "ICAO": "OMDB"
  }
}, {
  "id": 5,
  "airline": "*American Falcon*",
  "airline_code": "WK",
  "plane_id": "WK7915",
  "departure_date": "12/07/18",
  "departure_time": "10:00",
  "duration": "2:00",
  "arrival_date": "12/07/18",
  "arrival_time": "12:00",
  "price": "€4087,49",
  "origin": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  },
  "destination": {
    "city": "Singapore Changi Airport",
    "location": "Changi, East Region, Singapore",
    "country": "Singapore",
    "country_code": "SGP",
    "IATA": "SIN",
    "ICAO": "WSSS"
  }
}, {
  "id": 6,
  "airline": "Turkish Airlines",
  "airline_code": "TK",
  "plane_id": "TK8566",
  "departure_date": "06/01/19",
  "departure_time": "23:00",
  "duration": "10:00",
  "arrival_date": "07/01/19",
  "arrival_time": "09:00",
  "price": "€7806,26",
  "origin": {
    "city": "Munich Airport",
    "location": "Oberding/Hallbergmoos/Marzling, Erding/Freising, Bavaria, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "MUC",
    "ICAO": "EDDM"
  },
  "destination": {
    "city": "Antalya Airport",
    "location": "Antalya, Turkey",
    "country": "Turkey",
    "country_code": "TUR",
    "IATA": "AYT",
    "ICAO": "LTAI"
  }
}, {
  "id": 7,
  "airline": "Binter Canarias",
  "airline_code": "NT",
  "plane_id": "NT9765",
  "departure_date": "22/04/19",
  "departure_time": "16:00",
  "duration": "8:00",
  "arrival_date": "23/04/19",
  "arrival_time": "00:00",
  "price": "€1122,63",
  "origin": {
    "city": "Kuala Lumpur International Airport",
    "location": "Sepang, Selangor, Malaysia",
    "country": "Malaysia",
    "country_code": "MYS",
    "IATA": "KUL",
    "ICAO": "WMKK"
  },
  "destination": {
    "city": "Abu Dhabi International Airport",
    "location": "Abu Dhabi, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "AUH",
    "ICAO": "OMAA"
  }
}, {
  "id": 8,
  "airline": "*Iceland Express*",
  "airline_code": "HC",
  "plane_id": "HC6533",
  "departure_date": "25/05/19",
  "departure_time": "20:00",
  "duration": "1:00",
  "arrival_date": "25/05/19",
  "arrival_time": "21:00",
  "price": "€3078,44",
  "origin": {
    "city": "Kuala Lumpur International Airport",
    "location": "Sepang, Selangor, Malaysia",
    "country": "Malaysia",
    "country_code": "MYS",
    "IATA": "KUL",
    "ICAO": "WMKK"
  },
  "destination": {
    "city": "Atatürk International Airport",
    "location": "Yeşilköy, Bakırköy, Istanbul, Turkey",
    "country": "Turkey",
    "country_code": "TUR",
    "IATA": "IST",
    "ICAO": "LTBA"
  }
}, {
  "id": 9,
  "airline": "Sudan Airways",
  "airline_code": "SD",
  "plane_id": "SD8220",
  "departure_date": "16/05/19",
  "departure_time": "01:00",
  "duration": "1:00",
  "arrival_date": "16/05/19",
  "arrival_time": "02:00",
  "price": "€7595,61",
  "origin": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  },
  "destination": {
    "city": "Kuala Lumpur International Airport",
    "location": "Sepang, Selangor, Malaysia",
    "country": "Malaysia",
    "country_code": "MYS",
    "IATA": "KUL",
    "ICAO": "WMKK"
  }
}, {
  "id": 10,
  "airline": "VIVA Aerobus",
  "airline_code": "VB",
  "plane_id": "VB5085",
  "departure_date": "10/11/18",
  "departure_time": "00:00",
  "duration": "1:00",
  "arrival_date": "10/11/18",
  "arrival_time": "01:00",
  "price": "€6554,33",
  "origin": {
    "city": "Madrid-Barajas Airport",
    "location": "Madrid, Comunidad de Madrid, Spain",
    "country": "Spain",
    "country_code": "ESP",
    "IATA": "MAD",
    "ICAO": "LEMD"
  },
  "destination": {
    "city": "Hamad International Airport",
    "location": "Doha, Qatar",
    "country": "Qatar",
    "country_code": "QAT",
    "IATA": "DOH",
    "ICAO": "OTBD"
  }
}, {
  "id": 11,
  "airline": "Eos Airlines",
  "airline_code": "E0",
  "plane_id": "E05731",
  "departure_date": "03/07/18",
  "departure_time": "00:00",
  "duration": "6:00",
  "arrival_date": "03/07/18",
  "arrival_time": "06:00",
  "price": "€8947,00",
  "origin": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  },
  "destination": {
    "city": "John F. Kennedy International Airport",
    "location": "Queens, New York City, New York, United States",
    "country": "United States",
    "country_code": "USA",
    "IATA": "JFK",
    "ICAO": "KJFK"
  }
}, {
  "id": 12,
  "airline": "Finnair Oyj",
  "airline_code": "AY",
  "plane_id": "AY2037",
  "departure_date": "22/11/18",
  "departure_time": "16:00",
  "duration": "8:00",
  "arrival_date": "23/11/18",
  "arrival_time": "00:00",
  "price": "€1773,00",
  "origin": {
    "city": "Munich Airport",
    "location": "Oberding/Hallbergmoos/Marzling, Erding/Freising, Bavaria, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "MUC",
    "ICAO": "EDDM"
  },
  "destination": {
    "city": "Munich Airport",
    "location": "Oberding/Hallbergmoos/Marzling, Erding/Freising, Bavaria, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "MUC",
    "ICAO": "EDDM"
  }
}, {
  "id": 13,
  "airline": "Tobruk Air",
  "airline_code": "7T",
  "plane_id": "7T5568",
  "departure_date": "30/11/18",
  "departure_time": "00:00",
  "duration": "6:00",
  "arrival_date": "30/11/18",
  "arrival_time": "06:00",
  "price": "€4119,29",
  "origin": {
    "city": "Madrid-Barajas Airport",
    "location": "Madrid, Comunidad de Madrid, Spain",
    "country": "Spain",
    "country_code": "ESP",
    "IATA": "MAD",
    "ICAO": "LEMD"
  },
  "destination": {
    "city": "Singapore Changi Airport",
    "location": "Changi, East Region, Singapore",
    "country": "Singapore",
    "country_code": "SGP",
    "IATA": "SIN",
    "ICAO": "WSSS"
  }
}, {
  "id": 14,
  "airline": "Dauair",
  "airline_code": "D5",
  "plane_id": "D58704",
  "departure_date": "24/07/18",
  "departure_time": "18:00",
  "duration": "3:00",
  "arrival_date": "24/07/18",
  "arrival_time": "21:00",
  "price": "€752,06",
  "origin": {
    "city": "Kuala Lumpur International Airport",
    "location": "Sepang, Selangor, Malaysia",
    "country": "Malaysia",
    "country_code": "MYS",
    "IATA": "KUL",
    "ICAO": "WMKK"
  },
  "destination": {
    "city": "Amsterdam Airport Schiphol",
    "location": "Haarlemmermeer, North Holland, Netherlands",
    "country": "Netherlands",
    "country_code": "NLD",
    "IATA": "AMS",
    "ICAO": "EHAM"
  }
}, {
  "id": 15,
  "airline": "Iran Aseman Airlines",
  "airline_code": "EP",
  "plane_id": "EP2671",
  "departure_date": "22/01/19",
  "departure_time": "04:00",
  "duration": "4:00",
  "arrival_date": "22/01/19",
  "arrival_time": "08:00",
  "price": "€4385,14",
  "origin": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  },
  "destination": {
    "city": "Dublin Airport",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "country": "Ireland",
    "country_code": "IRL",
    "IATA": "DUB",
    "ICAO": "EIDW"
  }
}, {
  "id": 16,
  "airline": "Stobart Air",
  "airline_code": "RE",
  "plane_id": "RE9916",
  "departure_date": "02/04/19",
  "departure_time": "09:00",
  "duration": "11:00",
  "arrival_date": "02/04/19",
  "arrival_time": "20:00",
  "price": "€734,21",
  "origin": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  },
  "destination": {
    "city": "London Gatwick Airport",
    "location": "Crawley, West Sussex, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LGW",
    "ICAO": "EGKK"
  }
}, {
  "id": 17,
  "airline": "Azul Linhas Aéreas Brasileiras",
  "airline_code": "AD",
  "plane_id": "AD6543",
  "departure_date": "05/05/19",
  "departure_time": "12:00",
  "duration": "1:00",
  "arrival_date": "05/05/19",
  "arrival_time": "13:00",
  "price": "€3629,87",
  "origin": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  },
  "destination": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  }
}, {
  "id": 18,
  "airline": "MAT Macedonian Airlines",
  "airline_code": "IN",
  "plane_id": "IN9353",
  "departure_date": "29/01/19",
  "departure_time": "09:00",
  "duration": "5:00",
  "arrival_date": "29/01/19",
  "arrival_time": "14:00",
  "price": "€1423,89",
  "origin": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  },
  "destination": {
    "city": "Shanghai Pudong International Airport",
    "location": "Pudong, Shanghai, China",
    "country": "China",
    "country_code": "CHN",
    "IATA": "PVG",
    "ICAO": "ZSPD"
  }
}, {
  "id": 19,
  "airline": "Independence Air",
  "airline_code": "DH",
  "plane_id": "DH3512",
  "departure_date": "12/03/19",
  "departure_time": "21:00",
  "duration": "4:00",
  "arrival_date": "13/03/19",
  "arrival_time": "01:00",
  "price": "€4190,42",
  "origin": {
    "city": "Hamad International Airport",
    "location": "Doha, Qatar",
    "country": "Qatar",
    "country_code": "QAT",
    "IATA": "DOH",
    "ICAO": "OTBD"
  },
  "destination": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  }
}, {
  "id": 20,
  "airline": "JAL Express",
  "airline_code": "JC",
  "plane_id": "JC2349",
  "departure_date": "15/06/19",
  "departure_time": "12:00",
  "duration": "5:00",
  "arrival_date": "15/06/19",
  "arrival_time": "17:00",
  "price": "€1376,16",
  "origin": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  },
  "destination": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  }
}, {
  "id": 21,
  "airline": "DAS Air Cargo",
  "airline_code": "WD",
  "plane_id": "WD3786",
  "departure_date": "15/10/18",
  "departure_time": "22:00",
  "duration": "9:00",
  "arrival_date": "16/10/18",
  "arrival_time": "07:00",
  "price": "€7609,47",
  "origin": {
    "city": "Vienna International Airport",
    "location": "Vienna, Austria",
    "country": "Austria",
    "country_code": "AUT",
    "IATA": "VIE",
    "ICAO": "LOWW"
  },
  "destination": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  }
}, {
  "id": 22,
  "airline": "Worldspan",
  "airline_code": "1P",
  "plane_id": "1P8330",
  "departure_date": "27/02/19",
  "departure_time": "17:00",
  "duration": "7:00",
  "arrival_date": "28/02/19",
  "arrival_time": "00:00",
  "price": "€2656,65",
  "origin": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  },
  "destination": {
    "city": "Singapore Changi Airport",
    "location": "Changi, East Region, Singapore",
    "country": "Singapore",
    "country_code": "SGP",
    "IATA": "SIN",
    "ICAO": "WSSS"
  }
}, {
  "id": 23,
  "airline": "BACH Flugbetriebsges",
  "airline_code": "B4",
  "plane_id": "B46626",
  "departure_date": "29/11/18",
  "departure_time": "23:00",
  "duration": "11:00",
  "arrival_date": "30/11/18",
  "arrival_time": "10:00",
  "price": "€9136,79",
  "origin": {
    "city": "Shanghai Pudong International Airport",
    "location": "Pudong, Shanghai, China",
    "country": "China",
    "country_code": "CHN",
    "IATA": "PVG",
    "ICAO": "ZSPD"
  },
  "destination": {
    "city": "Kuala Lumpur International Airport",
    "location": "Sepang, Selangor, Malaysia",
    "country": "Malaysia",
    "country_code": "MYS",
    "IATA": "KUL",
    "ICAO": "WMKK"
  }
}, {
  "id": 24,
  "airline": "Meridiana",
  "airline_code": "IG",
  "plane_id": "IG4052",
  "departure_date": "23/01/19",
  "departure_time": "05:00",
  "duration": "9:00",
  "arrival_date": "23/01/19",
  "arrival_time": "14:00",
  "price": "€3069,35",
  "origin": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  },
  "destination": {
    "city": "Vienna International Airport",
    "location": "Vienna, Austria",
    "country": "Austria",
    "country_code": "AUT",
    "IATA": "VIE",
    "ICAO": "LOWW"
  }
}, {
  "id": 25,
  "airline": "Dauair",
  "airline_code": "D5",
  "plane_id": "D54025",
  "departure_date": "04/02/19",
  "departure_time": "06:00",
  "duration": "3:00",
  "arrival_date": "04/02/19",
  "arrival_time": "09:00",
  "price": "€3935,77",
  "origin": {
    "city": "Singapore Changi Airport",
    "location": "Changi, East Region, Singapore",
    "country": "Singapore",
    "country_code": "SGP",
    "IATA": "SIN",
    "ICAO": "WSSS"
  },
  "destination": {
    "city": "London Gatwick Airport",
    "location": "Crawley, West Sussex, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LGW",
    "ICAO": "EGKK"
  }
}, {
  "id": 26,
  "airline": "BA Connect",
  "airline_code": "TH",
  "plane_id": "TH7750",
  "departure_date": "23/11/18",
  "departure_time": "18:00",
  "duration": "3:00",
  "arrival_date": "23/11/18",
  "arrival_time": "21:00",
  "price": "€7141,22",
  "origin": {
    "city": "Paris-Charles de Gaulle Airport",
    "location": "Roissy-en-France, Val d'Oise, Île-de-France, France",
    "country": "France",
    "country_code": "FRA",
    "IATA": "CDG",
    "ICAO": "LFPG"
  },
  "destination": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  }
}, {
  "id": 27,
  "airline": "Skyservice Airlines",
  "airline_code": "5G",
  "plane_id": "5G1963",
  "departure_date": "16/05/19",
  "departure_time": "06:00",
  "duration": "12:00",
  "arrival_date": "16/05/19",
  "arrival_time": "18:00",
  "price": "€5934,99",
  "origin": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  },
  "destination": {
    "city": "Madrid-Barajas Airport",
    "location": "Madrid, Comunidad de Madrid, Spain",
    "country": "Spain",
    "country_code": "ESP",
    "IATA": "MAD",
    "ICAO": "LEMD"
  }
}, {
  "id": 28,
  "airline": "Zimex Aviation",
  "airline_code": "C4",
  "plane_id": "C46286",
  "departure_date": "09/08/18",
  "departure_time": "09:00",
  "duration": "7:00",
  "arrival_date": "09/08/18",
  "arrival_time": "16:00",
  "price": "€2346,60",
  "origin": {
    "city": "Dublin Airport",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "country": "Ireland",
    "country_code": "IRL",
    "IATA": "DUB",
    "ICAO": "EIDW"
  },
  "destination": {
    "city": "London Gatwick Airport",
    "location": "Crawley, West Sussex, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LGW",
    "ICAO": "EGKK"
  }
}, {
  "id": 29,
  "airline": "Sierra National Airlines",
  "airline_code": "LJ",
  "plane_id": "LJ5986",
  "departure_date": "22/04/19",
  "departure_time": "20:00",
  "duration": "9:00",
  "arrival_date": "23/04/19",
  "arrival_time": "05:00",
  "price": "€3979,92",
  "origin": {
    "city": "Shanghai Pudong International Airport",
    "location": "Pudong, Shanghai, China",
    "country": "China",
    "country_code": "CHN",
    "IATA": "PVG",
    "ICAO": "ZSPD"
  },
  "destination": {
    "city": "Suvarnabhumi Airport",
    "location": "Racha Thewa, Bang Phli, Samut Prakan, Greater Bangkok, Thailand",
    "country": "Thailand",
    "country_code": "TJK",
    "IATA": "BKK",
    "ICAO": "VTBS"
  }
}, {
  "id": 30,
  "airline": "American Eagle Airlines",
  "airline_code": "MQ",
  "plane_id": "MQ5649",
  "departure_date": "03/04/19",
  "departure_time": "08:00",
  "duration": "9:00",
  "arrival_date": "03/04/19",
  "arrival_time": "17:00",
  "price": "€3720,11",
  "origin": {
    "city": "Zurich Airport",
    "location": "Rümlang/Oberglatt, Bülach/Dielsdorf, Zürich, Switzerland",
    "country": "Switzerland",
    "country_code": "CHE",
    "IATA": "ZRH",
    "ICAO": "LSZH"
  },
  "destination": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  }
}, {
  "id": 31,
  "airline": "Iberia Airlines",
  "airline_code": "IB",
  "plane_id": "IB3403",
  "departure_date": "13/09/18",
  "departure_time": "20:00",
  "duration": "5:00",
  "arrival_date": "14/09/18",
  "arrival_time": "01:00",
  "price": "€8000,98",
  "origin": {
    "city": "Dubai International Airport",
    "location": "Garhoud, Dubai, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "DXB",
    "ICAO": "OMDB"
  },
  "destination": {
    "city": "Dublin Airport",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "country": "Ireland",
    "country_code": "IRL",
    "IATA": "DUB",
    "ICAO": "EIDW"
  }
}, {
  "id": 32,
  "airline": "UVT Aero",
  "airline_code": "RT",
  "plane_id": "RT7624",
  "departure_date": "12/12/18",
  "departure_time": "21:00",
  "duration": "7:00",
  "arrival_date": "13/12/18",
  "arrival_time": "04:00",
  "price": "€2721,88",
  "origin": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  },
  "destination": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  }
}, {
  "id": 33,
  "airline": "JSC Transport Automated Information Systems",
  "airline_code": "1M",
  "plane_id": "1M7007",
  "departure_date": "19/03/19",
  "departure_time": "13:00",
  "duration": "8:00",
  "arrival_date": "19/03/19",
  "arrival_time": "21:00",
  "price": "€6959,31",
  "origin": {
    "city": "Atatürk International Airport",
    "location": "Yeşilköy, Bakırköy, Istanbul, Turkey",
    "country": "Turkey",
    "country_code": "TUR",
    "IATA": "IST",
    "ICAO": "LTBA"
  },
  "destination": {
    "city": "Antalya Airport",
    "location": "Antalya, Turkey",
    "country": "Turkey",
    "country_code": "TUR",
    "IATA": "AYT",
    "ICAO": "LTAI"
  }
}, {
  "id": 34,
  "airline": "Indonesia AirAsia",
  "airline_code": "QZ",
  "plane_id": "QZ2330",
  "departure_date": "18/02/19",
  "departure_time": "13:00",
  "duration": "12:00",
  "arrival_date": "19/02/19",
  "arrival_time": "01:00",
  "price": "€3304,32",
  "origin": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  },
  "destination": {
    "city": "Vienna International Airport",
    "location": "Vienna, Austria",
    "country": "Austria",
    "country_code": "AUT",
    "IATA": "VIE",
    "ICAO": "LOWW"
  }
}, {
  "id": 35,
  "airline": "Ansett Australia",
  "airline_code": "AN",
  "plane_id": "AN9032",
  "departure_date": "03/01/19",
  "departure_time": "00:00",
  "duration": "2:00",
  "arrival_date": "03/01/19",
  "arrival_time": "02:00",
  "price": "€4197,97",
  "origin": {
    "city": "Shanghai Pudong International Airport",
    "location": "Pudong, Shanghai, China",
    "country": "China",
    "country_code": "CHN",
    "IATA": "PVG",
    "ICAO": "ZSPD"
  },
  "destination": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  }
}, {
  "id": 36,
  "airline": "JetBlue Airways",
  "airline_code": "B6",
  "plane_id": "B69937",
  "departure_date": "31/05/19",
  "departure_time": "21:00",
  "duration": "12:00",
  "arrival_date": "01/06/19",
  "arrival_time": "09:00",
  "price": "€5417,82",
  "origin": {
    "city": "Zurich Airport",
    "location": "Rümlang/Oberglatt, Bülach/Dielsdorf, Zürich, Switzerland",
    "country": "Switzerland",
    "country_code": "CHE",
    "IATA": "ZRH",
    "ICAO": "LSZH"
  },
  "destination": {
    "city": "Hamad International Airport",
    "location": "Doha, Qatar",
    "country": "Qatar",
    "country_code": "QAT",
    "IATA": "DOH",
    "ICAO": "OTBD"
  }
}, {
  "id": 37,
  "airline": "SAETA",
  "airline_code": "EH",
  "plane_id": "EH9011",
  "departure_date": "12/12/18",
  "departure_time": "23:00",
  "duration": "2:00",
  "arrival_date": "13/12/18",
  "arrival_time": "01:00",
  "price": "€5369,80",
  "origin": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  },
  "destination": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  }
}, {
  "id": 38,
  "airline": "Sunstate Airlines",
  "airline_code": "QF",
  "plane_id": "QF8166",
  "departure_date": "03/04/19",
  "departure_time": "18:00",
  "duration": "12:00",
  "arrival_date": "04/04/19",
  "arrival_time": "06:00",
  "price": "€1863,58",
  "origin": {
    "city": "Amsterdam Airport Schiphol",
    "location": "Haarlemmermeer, North Holland, Netherlands",
    "country": "Netherlands",
    "country_code": "NLD",
    "IATA": "AMS",
    "ICAO": "EHAM"
  },
  "destination": {
    "city": "Hamad International Airport",
    "location": "Doha, Qatar",
    "country": "Qatar",
    "country_code": "QAT",
    "IATA": "DOH",
    "ICAO": "OTBD"
  }
}, {
  "id": 39,
  "airline": "Interjet",
  "airline_code": "4O",
  "plane_id": "4O8579",
  "departure_date": "28/09/18",
  "departure_time": "06:00",
  "duration": "1:00",
  "arrival_date": "28/09/18",
  "arrival_time": "07:00",
  "price": "€113,15",
  "origin": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  },
  "destination": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  }
}, {
  "id": 40,
  "airline": "APG Airlines",
  "airline_code": "GP",
  "plane_id": "GP8931",
  "departure_date": "23/03/19",
  "departure_time": "19:00",
  "duration": "3:00",
  "arrival_date": "23/03/19",
  "arrival_time": "22:00",
  "price": "€8820,77",
  "origin": {
    "city": "Abu Dhabi International Airport",
    "location": "Abu Dhabi, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "AUH",
    "ICAO": "OMAA"
  },
  "destination": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  }
}, {
  "id": 41,
  "airline": "Peruvian Airlines",
  "airline_code": "P9",
  "plane_id": "P94436",
  "departure_date": "15/05/19",
  "departure_time": "11:00",
  "duration": "7:00",
  "arrival_date": "15/05/19",
  "arrival_time": "18:00",
  "price": "€6711,91",
  "origin": {
    "city": "Frankfurt Airport",
    "location": "Flughafen, Frankfurt, Hesse, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "FRA",
    "ICAO": "EDDF"
  },
  "destination": {
    "city": "Abu Dhabi International Airport",
    "location": "Abu Dhabi, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "AUH",
    "ICAO": "OMAA"
  }
}, {
  "id": 42,
  "airline": "Eagle Air",
  "airline_code": "H7",
  "plane_id": "H73555",
  "departure_date": "30/04/19",
  "departure_time": "08:00",
  "duration": "1:00",
  "arrival_date": "30/04/19",
  "arrival_time": "09:00",
  "price": "€4277,76",
  "origin": {
    "city": "Singapore Changi Airport",
    "location": "Changi, East Region, Singapore",
    "country": "Singapore",
    "country_code": "SGP",
    "IATA": "SIN",
    "ICAO": "WSSS"
  },
  "destination": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  }
}, {
  "id": 43,
  "airline": "Air Chathams",
  "airline_code": "CV",
  "plane_id": "CV9056",
  "departure_date": "08/09/18",
  "departure_time": "10:00",
  "duration": "1:00",
  "arrival_date": "08/09/18",
  "arrival_time": "11:00",
  "price": "€5025,20",
  "origin": {
    "city": "Atatürk International Airport",
    "location": "Yeşilköy, Bakırköy, Istanbul, Turkey",
    "country": "Turkey",
    "country_code": "TUR",
    "IATA": "IST",
    "ICAO": "LTBA"
  },
  "destination": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  }
}, {
  "id": 44,
  "airline": "Air Greenland",
  "airline_code": "GL",
  "plane_id": "GL5903",
  "departure_date": "01/05/19",
  "departure_time": "18:00",
  "duration": "10:00",
  "arrival_date": "02/05/19",
  "arrival_time": "04:00",
  "price": "€2522,04",
  "origin": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  },
  "destination": {
    "city": "Paris-Charles de Gaulle Airport",
    "location": "Roissy-en-France, Val d'Oise, Île-de-France, France",
    "country": "France",
    "country_code": "FRA",
    "IATA": "CDG",
    "ICAO": "LFPG"
  }
}, {
  "id": 45,
  "airline": "Air Mauritanie",
  "airline_code": "MR",
  "plane_id": "MR7363",
  "departure_date": "26/01/19",
  "departure_time": "21:00",
  "duration": "3:00",
  "arrival_date": "27/01/19",
  "arrival_time": "00:00",
  "price": "€6338,35",
  "origin": {
    "city": "Barcelona–El Prat Airport",
    "location": "El Prat de Llobregat, Barcelona, Catalonia, Spain",
    "country": "Spain",
    "country_code": "ESP",
    "IATA": "BCN",
    "ICAO": "LEBL"
  },
  "destination": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  }
}, {
  "id": 46,
  "airline": "*AOM French Airlines*",
  "airline_code": "IW",
  "plane_id": "IW1442",
  "departure_date": "05/05/19",
  "departure_time": "03:00",
  "duration": "3:00",
  "arrival_date": "05/05/19",
  "arrival_time": "06:00",
  "price": "€9403,76",
  "origin": {
    "city": "Munich Airport",
    "location": "Oberding/Hallbergmoos/Marzling, Erding/Freising, Bavaria, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "MUC",
    "ICAO": "EDDM"
  },
  "destination": {
    "city": "Amsterdam Airport Schiphol",
    "location": "Haarlemmermeer, North Holland, Netherlands",
    "country": "Netherlands",
    "country_code": "NLD",
    "IATA": "AMS",
    "ICAO": "EHAM"
  }
}, {
  "id": 47,
  "airline": "Iran Aseman Airlines",
  "airline_code": "EP",
  "plane_id": "EP3976",
  "departure_date": "03/04/19",
  "departure_time": "17:00",
  "duration": "6:00",
  "arrival_date": "03/04/19",
  "arrival_time": "23:00",
  "price": "€7343,06",
  "origin": {
    "city": "Hamad International Airport",
    "location": "Doha, Qatar",
    "country": "Qatar",
    "country_code": "QAT",
    "IATA": "DOH",
    "ICAO": "OTBD"
  },
  "destination": {
    "city": "Hamad International Airport",
    "location": "Doha, Qatar",
    "country": "Qatar",
    "country_code": "QAT",
    "IATA": "DOH",
    "ICAO": "OTBD"
  }
}, {
  "id": 48,
  "airline": "Interlink Airlines",
  "airline_code": "ID",
  "plane_id": "ID6521",
  "departure_date": "25/05/19",
  "departure_time": "19:00",
  "duration": "12:00",
  "arrival_date": "26/05/19",
  "arrival_time": "07:00",
  "price": "€5489,16",
  "origin": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  },
  "destination": {
    "city": "Paris-Charles de Gaulle Airport",
    "location": "Roissy-en-France, Val d'Oise, Île-de-France, France",
    "country": "France",
    "country_code": "FRA",
    "IATA": "CDG",
    "ICAO": "LFPG"
  }
}, {
  "id": 49,
  "airline": "Air Plus Comet",
  "airline_code": "A7",
  "plane_id": "A76264",
  "departure_date": "29/04/19",
  "departure_time": "17:00",
  "duration": "3:00",
  "arrival_date": "29/04/19",
  "arrival_time": "20:00",
  "price": "€1734,50",
  "origin": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  },
  "destination": {
    "city": "Kuala Lumpur International Airport",
    "location": "Sepang, Selangor, Malaysia",
    "country": "Malaysia",
    "country_code": "MYS",
    "IATA": "KUL",
    "ICAO": "WMKK"
  }
}, {
  "id": 50,
  "airline": "Navitaire",
  "airline_code": "1N",
  "plane_id": "1N8882",
  "departure_date": "21/12/18",
  "departure_time": "10:00",
  "duration": "9:00",
  "arrival_date": "21/12/18",
  "arrival_time": "19:00",
  "price": "€5792,15",
  "origin": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  },
  "destination": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  }
}, {
  "id": 51,
  "airline": "Jatayu Airlines",
  "airline_code": "VJ",
  "plane_id": "VJ5269",
  "departure_date": "24/07/18",
  "departure_time": "12:00",
  "duration": "1:00",
  "arrival_date": "24/07/18",
  "arrival_time": "13:00",
  "price": "€4530,63",
  "origin": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  },
  "destination": {
    "city": "Paris-Charles de Gaulle Airport",
    "location": "Roissy-en-France, Val d'Oise, Île-de-France, France",
    "country": "France",
    "country_code": "FRA",
    "IATA": "CDG",
    "ICAO": "LFPG"
  }
}, {
  "id": 52,
  "airline": "China Postal Airlines",
  "airline_code": "8Y",
  "plane_id": "8Y4388",
  "departure_date": "19/10/18",
  "departure_time": "10:00",
  "duration": "10:00",
  "arrival_date": "19/10/18",
  "arrival_time": "20:00",
  "price": "€1894,19",
  "origin": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  },
  "destination": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  }
}, {
  "id": 53,
  "airline": "LATAM Peru",
  "airline_code": "LP",
  "plane_id": "LP4298",
  "departure_date": "19/04/19",
  "departure_time": "07:00",
  "duration": "4:00",
  "arrival_date": "19/04/19",
  "arrival_time": "11:00",
  "price": "€5636,82",
  "origin": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  },
  "destination": {
    "city": "London Heathrow Airport",
    "location": "Hillingdon, Greater London, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LHR",
    "ICAO": "EGLL"
  }
}, {
  "id": 54,
  "airline": "US Airways",
  "airline_code": "US",
  "plane_id": "US9339",
  "departure_date": "28/03/19",
  "departure_time": "13:00",
  "duration": "9:00",
  "arrival_date": "28/03/19",
  "arrival_time": "22:00",
  "price": "€4890,57",
  "origin": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  },
  "destination": {
    "city": "Amsterdam Airport Schiphol",
    "location": "Haarlemmermeer, North Holland, Netherlands",
    "country": "Netherlands",
    "country_code": "NLD",
    "IATA": "AMS",
    "ICAO": "EHAM"
  }
}, {
  "id": 55,
  "airline": "Continental Airlines",
  "airline_code": "CO",
  "plane_id": "CO7087",
  "departure_date": "17/08/18",
  "departure_time": "05:00",
  "duration": "6:00",
  "arrival_date": "17/08/18",
  "arrival_time": "11:00",
  "price": "€4422,15",
  "origin": {
    "city": "Shanghai Pudong International Airport",
    "location": "Pudong, Shanghai, China",
    "country": "China",
    "country_code": "CHN",
    "IATA": "PVG",
    "ICAO": "ZSPD"
  },
  "destination": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  }
}, {
  "id": 56,
  "airline": "Sky Airlines",
  "airline_code": "ZY",
  "plane_id": "ZY4546",
  "departure_date": "13/10/18",
  "departure_time": "08:00",
  "duration": "7:00",
  "arrival_date": "13/10/18",
  "arrival_time": "15:00",
  "price": "€9833,79",
  "origin": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  },
  "destination": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  }
}, {
  "id": 57,
  "airline": "Vieques Air Link",
  "airline_code": "V4",
  "plane_id": "V49507",
  "departure_date": "10/08/18",
  "departure_time": "18:00",
  "duration": "2:00",
  "arrival_date": "10/08/18",
  "arrival_time": "20:00",
  "price": "€6019,97",
  "origin": {
    "city": "Hong Kong International Airport",
    "location": "Chek Lap Kok, Islands, Hong Kong",
    "country": "Hong Kong",
    "country_code": "HKG",
    "IATA": "HKG",
    "ICAO": "VHHH"
  },
  "destination": {
    "city": "Amsterdam Airport Schiphol",
    "location": "Haarlemmermeer, North Holland, Netherlands",
    "country": "Netherlands",
    "country_code": "NLD",
    "IATA": "AMS",
    "ICAO": "EHAM"
  }
}, {
  "id": 58,
  "airline": "Travel Service",
  "airline_code": "7O[33]",
  "plane_id": "7O[33]8768",
  "departure_date": "09/06/19",
  "departure_time": "11:00",
  "duration": "12:00",
  "arrival_date": "09/06/19",
  "arrival_time": "23:00",
  "price": "€5387,33",
  "origin": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  },
  "destination": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  }
}, {
  "id": 59,
  "airline": "JetBlue Airways",
  "airline_code": "B6",
  "plane_id": "B69817",
  "departure_date": "17/12/18",
  "departure_time": "02:00",
  "duration": "6:00",
  "arrival_date": "17/12/18",
  "arrival_time": "08:00",
  "price": "€6634,21",
  "origin": {
    "city": "John F. Kennedy International Airport",
    "location": "Queens, New York City, New York, United States",
    "country": "United States",
    "country_code": "USA",
    "IATA": "JFK",
    "ICAO": "KJFK"
  },
  "destination": {
    "city": "Paris-Charles de Gaulle Airport",
    "location": "Roissy-en-France, Val d'Oise, Île-de-France, France",
    "country": "France",
    "country_code": "FRA",
    "IATA": "CDG",
    "ICAO": "LFPG"
  }
}, {
  "id": 60,
  "airline": "*Armenian Airlines*",
  "airline_code": "R3",
  "plane_id": "R31877",
  "departure_date": "16/09/18",
  "departure_time": "03:00",
  "duration": "1:00",
  "arrival_date": "16/09/18",
  "arrival_time": "04:00",
  "price": "€609,99",
  "origin": {
    "city": "Abu Dhabi International Airport",
    "location": "Abu Dhabi, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "AUH",
    "ICAO": "OMAA"
  },
  "destination": {
    "city": "Hong Kong International Airport",
    "location": "Chek Lap Kok, Islands, Hong Kong",
    "country": "Hong Kong",
    "country_code": "HKG",
    "IATA": "HKG",
    "ICAO": "VHHH"
  }
}, {
  "id": 61,
  "airline": "China Southern Airlines",
  "airline_code": "CZ",
  "plane_id": "CZ4616",
  "departure_date": "28/09/18",
  "departure_time": "01:00",
  "duration": "10:00",
  "arrival_date": "28/09/18",
  "arrival_time": "11:00",
  "price": "€6364,50",
  "origin": {
    "city": "Frankfurt Airport",
    "location": "Flughafen, Frankfurt, Hesse, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "FRA",
    "ICAO": "EDDF"
  },
  "destination": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  }
}, {
  "id": 62,
  "airline": "Air Caraïbes",
  "airline_code": "TX",
  "plane_id": "TX9030",
  "departure_date": "13/12/18",
  "departure_time": "08:00",
  "duration": "2:00",
  "arrival_date": "13/12/18",
  "arrival_time": "10:00",
  "price": "€1211,32",
  "origin": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  },
  "destination": {
    "city": "Antalya Airport",
    "location": "Antalya, Turkey",
    "country": "Turkey",
    "country_code": "TUR",
    "IATA": "AYT",
    "ICAO": "LTAI"
  }
}, {
  "id": 63,
  "airline": "Sayakhat Airlines",
  "airline_code": "W7",
  "plane_id": "W79511",
  "departure_date": "17/11/18",
  "departure_time": "08:00",
  "duration": "1:00",
  "arrival_date": "17/11/18",
  "arrival_time": "09:00",
  "price": "€2735,77",
  "origin": {
    "city": "London Gatwick Airport",
    "location": "Crawley, West Sussex, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LGW",
    "ICAO": "EGKK"
  },
  "destination": {
    "city": "Kuala Lumpur International Airport",
    "location": "Sepang, Selangor, Malaysia",
    "country": "Malaysia",
    "country_code": "MYS",
    "IATA": "KUL",
    "ICAO": "WMKK"
  }
}, {
  "id": 64,
  "airline": "Monarch Airlines",
  "airline_code": "ZB",
  "plane_id": "ZB1635",
  "departure_date": "01/09/18",
  "departure_time": "09:00",
  "duration": "10:00",
  "arrival_date": "01/09/18",
  "arrival_time": "19:00",
  "price": "€7241,48",
  "origin": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  },
  "destination": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  }
}, {
  "id": 65,
  "airline": "Tiara Air",
  "airline_code": "3P",
  "plane_id": "3P6917",
  "departure_date": "16/03/19",
  "departure_time": "22:00",
  "duration": "8:00",
  "arrival_date": "17/03/19",
  "arrival_time": "06:00",
  "price": "€875,01",
  "origin": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  },
  "destination": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  }
}, {
  "id": 66,
  "airline": "DanubeWings",
  "airline_code": "V5",
  "plane_id": "V52715",
  "departure_date": "18/09/18",
  "departure_time": "13:00",
  "duration": "2:00",
  "arrival_date": "18/09/18",
  "arrival_time": "15:00",
  "price": "€7281,93",
  "origin": {
    "city": "Madrid-Barajas Airport",
    "location": "Madrid, Comunidad de Madrid, Spain",
    "country": "Spain",
    "country_code": "ESP",
    "IATA": "MAD",
    "ICAO": "LEMD"
  },
  "destination": {
    "city": "Shanghai Pudong International Airport",
    "location": "Pudong, Shanghai, China",
    "country": "China",
    "country_code": "CHN",
    "IATA": "PVG",
    "ICAO": "ZSPD"
  }
}, {
  "id": 67,
  "airline": "Transmile Air Services",
  "airline_code": "TH",
  "plane_id": "TH7655",
  "departure_date": "26/06/18",
  "departure_time": "13:00",
  "duration": "5:00",
  "arrival_date": "26/06/18",
  "arrival_time": "18:00",
  "price": "€9061,72",
  "origin": {
    "city": "Vienna International Airport",
    "location": "Vienna, Austria",
    "country": "Austria",
    "country_code": "AUT",
    "IATA": "VIE",
    "ICAO": "LOWW"
  },
  "destination": {
    "city": "Hong Kong International Airport",
    "location": "Chek Lap Kok, Islands, Hong Kong",
    "country": "Hong Kong",
    "country_code": "HKG",
    "IATA": "HKG",
    "ICAO": "VHHH"
  }
}, {
  "id": 68,
  "airline": "SalamAir",
  "airline_code": "OV",
  "plane_id": "OV5228",
  "departure_date": "01/05/19",
  "departure_time": "07:00",
  "duration": "7:00",
  "arrival_date": "01/05/19",
  "arrival_time": "14:00",
  "price": "€991,75",
  "origin": {
    "city": "Shanghai Pudong International Airport",
    "location": "Pudong, Shanghai, China",
    "country": "China",
    "country_code": "CHN",
    "IATA": "PVG",
    "ICAO": "ZSPD"
  },
  "destination": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  }
}, {
  "id": 69,
  "airline": "Sudan Airways",
  "airline_code": "SD",
  "plane_id": "SD5677",
  "departure_date": "03/08/18",
  "departure_time": "08:00",
  "duration": "11:00",
  "arrival_date": "03/08/18",
  "arrival_time": "19:00",
  "price": "€5809,57",
  "origin": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  },
  "destination": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  }
}, {
  "id": 70,
  "airline": "Via Rail Canada",
  "airline_code": "2R",
  "plane_id": "2R6319",
  "departure_date": "09/03/19",
  "departure_time": "09:00",
  "duration": "6:00",
  "arrival_date": "09/03/19",
  "arrival_time": "15:00",
  "price": "€7977,86",
  "origin": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  },
  "destination": {
    "city": "Miami International Airport",
    "location": "Miami-Dade County, Florida, United States",
    "country": "United States",
    "country_code": "USA",
    "IATA": "MIA",
    "ICAO": "KMIA"
  }
}, {
  "id": 71,
  "airline": "Transaero Airlines",
  "airline_code": "UN",
  "plane_id": "UN8660",
  "departure_date": "08/08/18",
  "departure_time": "07:00",
  "duration": "7:00",
  "arrival_date": "08/08/18",
  "arrival_time": "14:00",
  "price": "€7436,65",
  "origin": {
    "city": "Amsterdam Airport Schiphol",
    "location": "Haarlemmermeer, North Holland, Netherlands",
    "country": "Netherlands",
    "country_code": "NLD",
    "IATA": "AMS",
    "ICAO": "EHAM"
  },
  "destination": {
    "city": "Hong Kong International Airport",
    "location": "Chek Lap Kok, Islands, Hong Kong",
    "country": "Hong Kong",
    "country_code": "HKG",
    "IATA": "HKG",
    "ICAO": "VHHH"
  }
}, {
  "id": 72,
  "airline": "Línea Aérea Amaszonas",
  "airline_code": "Z8",
  "plane_id": "Z83830",
  "departure_date": "24/04/19",
  "departure_time": "05:00",
  "duration": "11:00",
  "arrival_date": "24/04/19",
  "arrival_time": "16:00",
  "price": "€3831,99",
  "origin": {
    "city": "John F. Kennedy International Airport",
    "location": "Queens, New York City, New York, United States",
    "country": "United States",
    "country_code": "USA",
    "IATA": "JFK",
    "ICAO": "KJFK"
  },
  "destination": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  }
}, {
  "id": 73,
  "airline": "China Xinhua Airlines",
  "airline_code": "XO",
  "plane_id": "XO6090",
  "departure_date": "22/05/19",
  "departure_time": "18:00",
  "duration": "4:00",
  "arrival_date": "22/05/19",
  "arrival_time": "22:00",
  "price": "€6249,66",
  "origin": {
    "city": "Atatürk International Airport",
    "location": "Yeşilköy, Bakırköy, Istanbul, Turkey",
    "country": "Turkey",
    "country_code": "TUR",
    "IATA": "IST",
    "ICAO": "LTBA"
  },
  "destination": {
    "city": "Vienna International Airport",
    "location": "Vienna, Austria",
    "country": "Austria",
    "country_code": "AUT",
    "IATA": "VIE",
    "ICAO": "LOWW"
  }
}, {
  "id": 74,
  "airline": "Taquan Air Services",
  "airline_code": "K3",
  "plane_id": "K32959",
  "departure_date": "31/05/19",
  "departure_time": "15:00",
  "duration": "1:00",
  "arrival_date": "31/05/19",
  "arrival_time": "16:00",
  "price": "€5459,81",
  "origin": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  },
  "destination": {
    "city": "Vienna International Airport",
    "location": "Vienna, Austria",
    "country": "Austria",
    "country_code": "AUT",
    "IATA": "VIE",
    "ICAO": "LOWW"
  }
}, {
  "id": 75,
  "airline": "Sibaviatrans",
  "airline_code": "5M",
  "plane_id": "5M6350",
  "departure_date": "18/11/18",
  "departure_time": "10:00",
  "duration": "11:00",
  "arrival_date": "18/11/18",
  "arrival_time": "21:00",
  "price": "€9117,15",
  "origin": {
    "city": "London Gatwick Airport",
    "location": "Crawley, West Sussex, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LGW",
    "ICAO": "EGKK"
  },
  "destination": {
    "city": "Kuala Lumpur International Airport",
    "location": "Sepang, Selangor, Malaysia",
    "country": "Malaysia",
    "country_code": "MYS",
    "IATA": "KUL",
    "ICAO": "WMKK"
  }
}, {
  "id": 76,
  "airline": "Air Urga",
  "airline_code": "3N",
  "plane_id": "3N8291",
  "departure_date": "18/04/19",
  "departure_time": "18:00",
  "duration": "7:00",
  "arrival_date": "19/04/19",
  "arrival_time": "01:00",
  "price": "€2441,07",
  "origin": {
    "city": "Paris-Charles de Gaulle Airport",
    "location": "Roissy-en-France, Val d'Oise, Île-de-France, France",
    "country": "France",
    "country_code": "FRA",
    "IATA": "CDG",
    "ICAO": "LFPG"
  },
  "destination": {
    "city": "Dubai International Airport",
    "location": "Garhoud, Dubai, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "DXB",
    "ICAO": "OMDB"
  }
}, {
  "id": 77,
  "airline": "Kampuchea Airlines",
  "airline_code": "E2",
  "plane_id": "E25497",
  "departure_date": "22/09/18",
  "departure_time": "01:00",
  "duration": "5:00",
  "arrival_date": "22/09/18",
  "arrival_time": "06:00",
  "price": "€5234,58",
  "origin": {
    "city": "Dublin Airport",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "country": "Ireland",
    "country_code": "IRL",
    "IATA": "DUB",
    "ICAO": "EIDW"
  },
  "destination": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  }
}, {
  "id": 78,
  "airline": "Sat Airlines",
  "airline_code": "HZ",
  "plane_id": "HZ7228",
  "departure_date": "15/04/19",
  "departure_time": "20:00",
  "duration": "8:00",
  "arrival_date": "16/04/19",
  "arrival_time": "04:00",
  "price": "€6645,54",
  "origin": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  },
  "destination": {
    "city": "Zurich Airport",
    "location": "Rümlang/Oberglatt, Bülach/Dielsdorf, Zürich, Switzerland",
    "country": "Switzerland",
    "country_code": "CHE",
    "IATA": "ZRH",
    "ICAO": "LSZH"
  }
}, {
  "id": 79,
  "airline": "Jubba Airways",
  "airline_code": "6J",
  "plane_id": "6J5006",
  "departure_date": "01/09/18",
  "departure_time": "18:00",
  "duration": "10:00",
  "arrival_date": "02/09/18",
  "arrival_time": "04:00",
  "price": "€4685,16",
  "origin": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  },
  "destination": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  }
}, {
  "id": 80,
  "airline": "Worldspan",
  "airline_code": "1P",
  "plane_id": "1P7656",
  "departure_date": "14/08/18",
  "departure_time": "12:00",
  "duration": "4:00",
  "arrival_date": "14/08/18",
  "arrival_time": "16:00",
  "price": "€5656,37",
  "origin": {
    "city": "Frankfurt Airport",
    "location": "Flughafen, Frankfurt, Hesse, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "FRA",
    "ICAO": "EDDF"
  },
  "destination": {
    "city": "Singapore Changi Airport",
    "location": "Changi, East Region, Singapore",
    "country": "Singapore",
    "country_code": "SGP",
    "IATA": "SIN",
    "ICAO": "WSSS"
  }
}, {
  "id": 81,
  "airline": "Pace Airlines",
  "airline_code": "Y5",
  "plane_id": "Y52780",
  "departure_date": "15/01/19",
  "departure_time": "19:00",
  "duration": "3:00",
  "arrival_date": "15/01/19",
  "arrival_time": "22:00",
  "price": "€7602,59",
  "origin": {
    "city": "Paris-Charles de Gaulle Airport",
    "location": "Roissy-en-France, Val d'Oise, Île-de-France, France",
    "country": "France",
    "country_code": "FRA",
    "IATA": "CDG",
    "ICAO": "LFPG"
  },
  "destination": {
    "city": "John F. Kennedy International Airport",
    "location": "Queens, New York City, New York, United States",
    "country": "United States",
    "country_code": "USA",
    "IATA": "JFK",
    "ICAO": "KJFK"
  }
}, {
  "id": 82,
  "airline": "Africa World Airlines",
  "airline_code": "AW",
  "plane_id": "AW5415",
  "departure_date": "19/07/18",
  "departure_time": "20:00",
  "duration": "8:00",
  "arrival_date": "20/07/18",
  "arrival_time": "04:00",
  "price": "€4491,89",
  "origin": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  },
  "destination": {
    "city": "London Heathrow Airport",
    "location": "Hillingdon, Greater London, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LHR",
    "ICAO": "EGLL"
  }
}, {
  "id": 83,
  "airline": "Kalitta Air",
  "airline_code": "K4",
  "plane_id": "K46977",
  "departure_date": "10/02/19",
  "departure_time": "22:00",
  "duration": "3:00",
  "arrival_date": "11/02/19",
  "arrival_time": "01:00",
  "price": "€834,49",
  "origin": {
    "city": "Abu Dhabi International Airport",
    "location": "Abu Dhabi, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "AUH",
    "ICAO": "OMAA"
  },
  "destination": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  }
}, {
  "id": 84,
  "airline": "San Juan Airlines",
  "airline_code": "2G",
  "plane_id": "2G2735",
  "departure_date": "31/03/19",
  "departure_time": "11:00",
  "duration": "8:00",
  "arrival_date": "31/03/19",
  "arrival_time": "19:00",
  "price": "€3900,18",
  "origin": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  },
  "destination": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  }
}, {
  "id": 85,
  "airline": "Beijing Capital Airlines",
  "airline_code": "JD",
  "plane_id": "JD1313",
  "departure_date": "10/01/19",
  "departure_time": "03:00",
  "duration": "12:00",
  "arrival_date": "10/01/19",
  "arrival_time": "15:00",
  "price": "€9208,20",
  "origin": {
    "city": "Leonardo da Vinci–Fiumicino Airport",
    "location": "Fiumicino, Rome, Italy",
    "country": "Italy",
    "country_code": "ITA",
    "IATA": "FCO",
    "ICAO": "LIRF"
  },
  "destination": {
    "city": "Brussels Airport",
    "location": "Zaventem, Flemish Brabant, Flanders, Belgium",
    "country": "Belgium",
    "country_code": "BEL",
    "IATA": "BRU",
    "ICAO": "EBBR"
  }
}, {
  "id": 86,
  "airline": "Boliviana de Aviación",
  "airline_code": "OB",
  "plane_id": "OB8516",
  "departure_date": "19/06/18",
  "departure_time": "15:00",
  "duration": "1:00",
  "arrival_date": "19/06/18",
  "arrival_time": "16:00",
  "price": "€9513,17",
  "origin": {
    "city": "Hong Kong International Airport",
    "location": "Chek Lap Kok, Islands, Hong Kong",
    "country": "Hong Kong",
    "country_code": "HKG",
    "IATA": "HKG",
    "ICAO": "VHHH"
  },
  "destination": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  }
}, {
  "id": 87,
  "airline": "United Parcel Service",
  "airline_code": "5X",
  "plane_id": "5X2366",
  "departure_date": "29/08/18",
  "departure_time": "10:00",
  "duration": "8:00",
  "arrival_date": "29/08/18",
  "arrival_time": "18:00",
  "price": "€3223,62",
  "origin": {
    "city": "Munich Airport",
    "location": "Oberding/Hallbergmoos/Marzling, Erding/Freising, Bavaria, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "MUC",
    "ICAO": "EDDM"
  },
  "destination": {
    "city": "Shanghai Pudong International Airport",
    "location": "Pudong, Shanghai, China",
    "country": "China",
    "country_code": "CHN",
    "IATA": "PVG",
    "ICAO": "ZSPD"
  }
}, {
  "id": 88,
  "airline": "Thai AirAsia",
  "airline_code": "FD",
  "plane_id": "FD2683",
  "departure_date": "24/02/19",
  "departure_time": "00:00",
  "duration": "1:00",
  "arrival_date": "24/02/19",
  "arrival_time": "01:00",
  "price": "€8886,19",
  "origin": {
    "city": "Madrid-Barajas Airport",
    "location": "Madrid, Comunidad de Madrid, Spain",
    "country": "Spain",
    "country_code": "ESP",
    "IATA": "MAD",
    "ICAO": "LEMD"
  },
  "destination": {
    "city": "Miami International Airport",
    "location": "Miami-Dade County, Florida, United States",
    "country": "United States",
    "country_code": "USA",
    "IATA": "MIA",
    "ICAO": "KMIA"
  }
}, {
  "id": 89,
  "airline": "Alidaunia",
  "airline_code": "D4",
  "plane_id": "D42560",
  "departure_date": "09/06/19",
  "departure_time": "04:00",
  "duration": "12:00",
  "arrival_date": "09/06/19",
  "arrival_time": "16:00",
  "price": "€7080,22",
  "origin": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  },
  "destination": {
    "city": "London Heathrow Airport",
    "location": "Hillingdon, Greater London, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "LHR",
    "ICAO": "EGLL"
  }
}, {
  "id": 90,
  "airline": "Ryan Air Service",
  "airline_code": "7S",
  "plane_id": "7S8243",
  "departure_date": "26/12/18",
  "departure_time": "08:00",
  "duration": "10:00",
  "arrival_date": "26/12/18",
  "arrival_time": "18:00",
  "price": "€9096,86",
  "origin": {
    "city": "Hong Kong International Airport",
    "location": "Chek Lap Kok, Islands, Hong Kong",
    "country": "Hong Kong",
    "country_code": "HKG",
    "IATA": "HKG",
    "ICAO": "VHHH"
  },
  "destination": {
    "city": "Frankfurt Airport",
    "location": "Flughafen, Frankfurt, Hesse, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "FRA",
    "ICAO": "EDDF"
  }
}, {
  "id": 91,
  "airline": "Lankair",
  "airline_code": "IK",
  "plane_id": "IK8300",
  "departure_date": "04/08/18",
  "departure_time": "15:00",
  "duration": "4:00",
  "arrival_date": "04/08/18",
  "arrival_time": "19:00",
  "price": "€9384,31",
  "origin": {
    "city": "Abu Dhabi International Airport",
    "location": "Abu Dhabi, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "AUH",
    "ICAO": "OMAA"
  },
  "destination": {
    "city": "Taoyuan International Airport",
    "location": "Dayuan, Taoyuan, Taiwan",
    "country": "Taiwan",
    "country_code": "SYR",
    "IATA": "TPE",
    "ICAO": "RCTP"
  }
}, {
  "id": 92,
  "airline": "AVCOM",
  "airline_code": "J6",
  "plane_id": "J69523",
  "departure_date": "06/05/19",
  "departure_time": "06:00",
  "duration": "10:00",
  "arrival_date": "06/05/19",
  "arrival_time": "16:00",
  "price": "€2857,11",
  "origin": {
    "city": "Frankfurt Airport",
    "location": "Flughafen, Frankfurt, Hesse, Germany",
    "country": "Germany",
    "country_code": "DEU",
    "IATA": "FRA",
    "ICAO": "EDDF"
  },
  "destination": {
    "city": "Singapore Changi Airport",
    "location": "Changi, East Region, Singapore",
    "country": "Singapore",
    "country_code": "SGP",
    "IATA": "SIN",
    "ICAO": "WSSS"
  }
}, {
  "id": 93,
  "airline": "Finnair Oyj",
  "airline_code": "AY",
  "plane_id": "AY2566",
  "departure_date": "24/07/18",
  "departure_time": "02:00",
  "duration": "10:00",
  "arrival_date": "24/07/18",
  "arrival_time": "12:00",
  "price": "€4884,47",
  "origin": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  },
  "destination": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  }
}, {
  "id": 94,
  "airline": "Flightline",
  "airline_code": "B5",
  "plane_id": "B52983",
  "departure_date": "25/04/19",
  "departure_time": "04:00",
  "duration": "7:00",
  "arrival_date": "25/04/19",
  "arrival_time": "11:00",
  "price": "€5455,41",
  "origin": {
    "city": "Seoul Incheon International Airport",
    "location": "Jung-gu, Incheon, South Korea",
    "country": "South Korea",
    "country_code": "SGS",
    "IATA": "ICN",
    "ICAO": "RKSI"
  },
  "destination": {
    "city": "Vienna International Airport",
    "location": "Vienna, Austria",
    "country": "Austria",
    "country_code": "AUT",
    "IATA": "VIE",
    "ICAO": "LOWW"
  }
}, {
  "id": 95,
  "airline": "Cubana de Aviación",
  "airline_code": "CU",
  "plane_id": "CU2881",
  "departure_date": "16/06/18",
  "departure_time": "14:00",
  "duration": "8:00",
  "arrival_date": "16/06/18",
  "arrival_time": "22:00",
  "price": "€7431,49",
  "origin": {
    "city": "Dublin Airport",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "country": "Ireland",
    "country_code": "IRL",
    "IATA": "DUB",
    "ICAO": "EIDW"
  },
  "destination": {
    "city": "Madrid-Barajas Airport",
    "location": "Madrid, Comunidad de Madrid, Spain",
    "country": "Spain",
    "country_code": "ESP",
    "IATA": "MAD",
    "ICAO": "LEMD"
  }
}, {
  "id": 96,
  "airline": "Zimex Aviation",
  "airline_code": "C4",
  "plane_id": "C49293",
  "departure_date": "24/09/18",
  "departure_time": "08:00",
  "duration": "8:00",
  "arrival_date": "24/09/18",
  "arrival_time": "16:00",
  "price": "€4452,86",
  "origin": {
    "city": "Antalya Airport",
    "location": "Antalya, Turkey",
    "country": "Turkey",
    "country_code": "TUR",
    "IATA": "AYT",
    "ICAO": "LTAI"
  },
  "destination": {
    "city": "Zurich Airport",
    "location": "Rümlang/Oberglatt, Bülach/Dielsdorf, Zürich, Switzerland",
    "country": "Switzerland",
    "country_code": "CHE",
    "IATA": "ZRH",
    "ICAO": "LSZH"
  }
}, {
  "id": 97,
  "airline": "Air Zimbabwe",
  "airline_code": "UM",
  "plane_id": "UM7520",
  "departure_date": "25/11/18",
  "departure_time": "09:00",
  "duration": "2:00",
  "arrival_date": "25/11/18",
  "arrival_time": "11:00",
  "price": "€2771,29",
  "origin": {
    "city": "Copenhagen Airport",
    "location": "Tårnby, Hovedstaden, Denmark",
    "country": "Denmark",
    "country_code": "DNK",
    "IATA": "CPH",
    "ICAO": "EKCH"
  },
  "destination": {
    "city": "Manchester Airport",
    "location": "Manchester, Greater Manchester, United Kingdom",
    "country": "United Kingdom",
    "country_code": "GBR",
    "IATA": "MAN",
    "ICAO": "EGCC"
  }
}, {
  "id": 98,
  "airline": "Hongtu Airlines",
  "airline_code": "A6",
  "plane_id": "A64494",
  "departure_date": "07/12/18",
  "departure_time": "00:00",
  "duration": "12:00",
  "arrival_date": "07/12/18",
  "arrival_time": "12:00",
  "price": "€4715,73",
  "origin": {
    "city": "Abu Dhabi International Airport",
    "location": "Abu Dhabi, United Arab Emirates",
    "country": "United Arab Emirates",
    "country_code": "ARE",
    "IATA": "AUH",
    "ICAO": "OMAA"
  },
  "destination": {
    "city": "Singapore Changi Airport",
    "location": "Changi, East Region, Singapore",
    "country": "Singapore",
    "country_code": "SGP",
    "IATA": "SIN",
    "ICAO": "WSSS"
  }
}, {
  "id": 99,
  "airline": "Cirrus Airlines",
  "airline_code": "C9",
  "plane_id": "C93552",
  "departure_date": "10/03/19",
  "departure_time": "23:00",
  "duration": "2:00",
  "arrival_date": "11/03/19",
  "arrival_time": "01:00",
  "price": "€1869,26",
  "origin": {
    "city": "Toronto Pearson International Airport",
    "location": "Mississauga, Ontario, Canada",
    "country": "Canada",
    "country_code": "CAN",
    "IATA": "YYZ",
    "ICAO": "CYYZ"
  },
  "destination": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  }
}, {
  "id": 100,
  "airline": "Moldavian Airlines",
  "airline_code": "2M",
  "plane_id": "2M6110",
  "departure_date": "10/09/18",
  "departure_time": "13:00",
  "duration": "2:00",
  "arrival_date": "10/09/18",
  "arrival_time": "15:00",
  "price": "€2780,55",
  "origin": {
    "city": "Narita International Airport",
    "location": "Narita, Chiba, Kantō, Honshū, Japan",
    "country": "Japan",
    "country_code": "JPN",
    "IATA": "NRT",
    "ICAO": "RJAA"
  },
  "destination": {
    "city": "Zurich Airport",
    "location": "Rümlang/Oberglatt, Bülach/Dielsdorf, Zürich, Switzerland",
    "country": "Switzerland",
    "country_code": "CHE",
    "IATA": "ZRH",
    "ICAO": "LSZH"
  }
}]

export default flights
