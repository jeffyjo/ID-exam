const flights = [{
  'id': 1,
  'airline': 'Airshop',
  'airline_code': 'FF',
  'plane_id': 'FF7623',
  'departure_date': '19/09/18',
  'departure_time': '07:00',
  'duration': '8:00',
  'arrival_date': '19/09/18',
  'arrival_time': '15:00',
  'price': '€5141,48',
  'origin': {
    'city': 'Copenhagen Airport',
    'location': 'Tårnby, Hovedstaden, Denmark',
    'country': 'Denmark',
    'country_code': 'DNK',
    'IATA': 'CPH',
    'ICAO': 'EKCH'
  },
  'destination': {
    'city': 'Atatürk International Airport',
    'location': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  }
}, {
  'id': 2,
  'airline': '*Oasis Hong Kong Airlines*',
  'airline_code': 'O8',
  'plane_id': 'O86569',
  'departure_date': '30/08/18',
  'departure_time': '19:00',
  'duration': '3:00',
  'arrival_date': '30/08/18',
  'arrival_time': '22:00',
  'price': '€8462,27',
  'origin': {
    'city': 'Paris-Charles de Gaulle Airport',
    'location': 'Roissy-en-France, Val d\'Oise, Île-de-France, France',
    'country': 'France',
    'country_code': 'FRA',
    'IATA': 'CDG',
    'ICAO': 'LFPG'
  },
  'destination': {
    'city': 'Atatürk International Airport',
    'location': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  }
}, {
  'id': 3,
  'airline': 'Advance Leasing Company',
  'airline_code': '4G',
  'plane_id': '4G3396',
  'departure_date': '24/02/19',
  'departure_time': '02:00',
  'duration': '2:00',
  'arrival_date': '24/02/19',
  'arrival_time': '04:00',
  'price': '€5377,85',
  'origin': {
    'city': 'John F. Kennedy International Airport',
    'location': 'Queens, New York City, New York, United States',
    'country': 'United States',
    'country_code': 'USA',
    'IATA': 'JFK',
    'ICAO': 'KJFK'
  },
  'destination': {
    'city': 'Seoul Incheon International Airport',
    'location': 'South Korea',
    'country_code': 'SGS',
    'IATA': 'ICN',
    'ICAO': 'RKSI'
  }
}, {
  'id': 4,
  'airline': 'Aero VIP',
  'airline_code': '2D',
  'plane_id': '2D6859',
  'departure_date': '04/05/19',
  'departure_time': '11:00',
  'duration': '6:00',
  'arrival_date': '04/05/19',
  'arrival_time': '17:00',
  'price': '€1895,98',
  'origin': {
    'city': 'London Heathrow Airport',
    'location': 'Hillingdon, Greater London, United Kingdom',
    'country': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LHR',
    'ICAO': 'EGLL'
  },
  'destination': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  }
}, {
  'id': 5,
  'airline': 'Air Horizon',
  'airline_code': '8C',
  'plane_id': '8C9801',
  'departure_date': '25/05/19',
  'departure_time': '20:00',
  'duration': '5:00',
  'arrival_date': '26/05/19',
  'arrival_time': '01:00',
  'price': '€5639,85',
  'origin': {
    'city': 'Atatürk International Airport',
    'location': 'Yeşilköy, Bakırköy, Istanbul, Turkey',
    'country': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  },
  'destination': {
    'city': 'Copenhagen Airport',
    'location': 'Denmark',
    'country_code': 'DNK',
    'IATA': 'CPH',
    'ICAO': 'EKCH'
  }
}, {
  'id': 6,
  'airline': 'Air Sahara',
  'airline_code': 'S2',
  'plane_id': 'S21548',
  'departure_date': '05/07/18',
  'departure_time': '02:00',
  'duration': '7:00',
  'arrival_date': '05/07/18',
  'arrival_time': '09:00',
  'price': '€8923,53',
  'origin': {
    'city': 'Amsterdam Airport Schiphol',
    'location': 'Haarlemmermeer, North Holland, Netherlands',
    'country': 'Netherlands',
    'country_code': 'NLD',
    'IATA': 'AMS',
    'ICAO': 'EHAM'
  },
  'destination': {
    'city': 'Hamad International Airport',
    'location': 'Qatar',
    'country_code': 'QAT',
    'IATA': 'DOH',
    'ICAO': 'OTBD'
  }
}, {
  'id': 7,
  'airline': 'Air Paradise International',
  'airline_code': 'AD',
  'plane_id': 'AD5679',
  'departure_date': '07/06/19',
  'departure_time': '22:00',
  'duration': '9:00',
  'arrival_date': '08/06/19',
  'arrival_time': '07:00',
  'price': '€2240,50',
  'origin': {
    'city': 'Singapore Changi Airport',
    'location': 'Changi, East Region, Singapore',
    'country': 'Singapore',
    'country_code': 'SGP',
    'IATA': 'SIN',
    'ICAO': 'WSSS'
  },
  'destination': {
    'city': 'Amsterdam Airport Schiphol',
    'location': 'Netherlands',
    'country_code': 'NLD',
    'IATA': 'AMS',
    'ICAO': 'EHAM'
  }
}, {
  'id': 8,
  'airline': 'Airnorth',
  'airline_code': 'TL',
  'plane_id': 'TL8978',
  'departure_date': '22/01/19',
  'departure_time': '17:00',
  'duration': '4:00',
  'arrival_date': '22/01/19',
  'arrival_time': '21:00',
  'price': '€9141,29',
  'origin': {
    'city': 'Antalya Airport',
    'location': 'Antalya, Turkey',
    'country': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'AYT',
    'ICAO': 'LTAI'
  },
  'destination': {
    'city': 'Antalya Airport',
    'location': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'AYT',
    'ICAO': 'LTAI'
  }
}, {
  'id': 9,
  'airline': 'US Helicopter',
  'airline_code': 'UH',
  'plane_id': 'UH6708',
  'departure_date': '13/05/19',
  'departure_time': '02:00',
  'duration': '7:00',
  'arrival_date': '13/05/19',
  'arrival_time': '09:00',
  'price': '€9952,85',
  'origin': {
    'city': 'London Gatwick Airport',
    'location': 'Crawley, West Sussex, United Kingdom',
    'country': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LGW',
    'ICAO': 'EGKK'
  },
  'destination': {
    'city': 'Manchester Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'MAN',
    'ICAO': 'EGCC'
  }
}, {
  'id': 10,
  'airline': 'Taquan Air Services',
  'airline_code': 'K3',
  'plane_id': 'K33271',
  'departure_date': '03/06/19',
  'departure_time': '07:00',
  'duration': '6:00',
  'arrival_date': '03/06/19',
  'arrival_time': '13:00',
  'price': '€4247,37',
  'origin': {
    'city': 'Atatürk International Airport',
    'location': 'Yeşilköy, Bakırköy, Istanbul, Turkey',
    'country': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  },
  'destination': {
    'city': 'Copenhagen Airport',
    'location': 'Denmark',
    'country_code': 'DNK',
    'IATA': 'CPH',
    'ICAO': 'EKCH'
  }
}, {
  'id': 11,
  'airline': '*Denim Air*',
  'airline_code': 'J7',
  'plane_id': 'J73456',
  'departure_date': '13/12/18',
  'departure_time': '18:00',
  'duration': '12:00',
  'arrival_date': '14/12/18',
  'arrival_time': '06:00',
  'price': '€5808,89',
  'origin': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Madrid, Comunidad de Madrid, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  },
  'destination': {
    'city': 'Dubai International Airport',
    'location': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'DXB',
    'ICAO': 'OMDB'
  }
}, {
  'id': 12,
  'airline': '*Astrakhan Airlines*',
  'airline_code': 'OB',
  'plane_id': 'OB8594',
  'departure_date': '08/05/19',
  'departure_time': '21:00',
  'duration': '4:00',
  'arrival_date': '09/05/19',
  'arrival_time': '01:00',
  'price': '€1219,13',
  'origin': {
    'city': 'Dublin Airport',
    'location': 'Dublin, County Dublin, Leinster, Ireland',
    'country': 'Ireland',
    'country_code': 'IRL',
    'IATA': 'DUB',
    'ICAO': 'EIDW'
  },
  'destination': {
    'city': 'Frankfurt Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  }
}, {
  'id': 13,
  'airline': 'Flyhy Cargo Airlines',
  'airline_code': 'W3',
  'plane_id': 'W39095',
  'departure_date': '16/10/18',
  'departure_time': '16:00',
  'duration': '7:00',
  'arrival_date': '16/10/18',
  'arrival_time': '23:00',
  'price': '€1954,56',
  'origin': {
    'city': 'Dubai International Airport',
    'location': 'Garhoud, Dubai, United Arab Emirates',
    'country': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'DXB',
    'ICAO': 'OMDB'
  },
  'destination': {
    'city': 'Zurich Airport',
    'location': 'Switzerland',
    'country_code': 'CHE',
    'IATA': 'ZRH',
    'ICAO': 'LSZH'
  }
}, {
  'id': 14,
  'airline': 'El Al Israel Airlines',
  'airline_code': 'LY',
  'plane_id': 'LY9886',
  'departure_date': '05/02/19',
  'departure_time': '12:00',
  'duration': '12:00',
  'arrival_date': '06/02/19',
  'arrival_time': '00:00',
  'price': '€1791,39',
  'origin': {
    'city': 'Copenhagen Airport',
    'location': 'Tårnby, Hovedstaden, Denmark',
    'country': 'Denmark',
    'country_code': 'DNK',
    'IATA': 'CPH',
    'ICAO': 'EKCH'
  },
  'destination': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  }
}, {
  'id': 15,
  'airline': 'RegionsAir',
  'airline_code': '3C',
  'plane_id': '3C8933',
  'departure_date': '24/11/18',
  'departure_time': '21:00',
  'duration': '10:00',
  'arrival_date': '25/11/18',
  'arrival_time': '07:00',
  'price': '€3059,39',
  'origin': {
    'city': 'Barcelona–El Prat Airport',
    'location': 'El Prat de Llobregat, Barcelona, Catalonia, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'BCN',
    'ICAO': 'LEBL'
  },
  'destination': {
    'city': 'Manchester Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'MAN',
    'ICAO': 'EGCC'
  }
}, {
  'id': 16,
  'airline': 'Keewatin Air',
  'airline_code': 'FK',
  'plane_id': 'FK3763',
  'departure_date': '05/08/18',
  'departure_time': '13:00',
  'duration': '6:00',
  'arrival_date': '05/08/18',
  'arrival_time': '19:00',
  'price': '€2804,10',
  'origin': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Racha Thewa, Bang Phli, Samut Prakan, Greater Bangkok, Thailand',
    'country': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  },
  'destination': {
    'city': 'Toronto Pearson International Airport',
    'location': 'Canada',
    'country_code': 'CAN',
    'IATA': 'YYZ',
    'ICAO': 'CYYZ'
  }
}, {
  'id': 17,
  'airline': 'Brussels Airlines',
  'airline_code': 'SN',
  'plane_id': 'SN5189',
  'departure_date': '29/06/18',
  'departure_time': '22:00',
  'duration': '4:00',
  'arrival_date': '30/06/18',
  'arrival_time': '02:00',
  'price': '€2477,99',
  'origin': {
    'city': 'Shanghai Pudong International Airport',
    'location': 'Pudong, Shanghai, China',
    'country': 'China',
    'country_code': 'CHN',
    'IATA': 'PVG',
    'ICAO': 'ZSPD'
  },
  'destination': {
    'city': 'London Heathrow Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LHR',
    'ICAO': 'EGLL'
  }
}, {
  'id': 18,
  'airline': 'Kalitta Charters II',
  'airline_code': 'CB',
  'plane_id': 'CB1712',
  'departure_date': '11/10/18',
  'departure_time': '06:00',
  'duration': '9:00',
  'arrival_date': '11/10/18',
  'arrival_time': '15:00',
  'price': '€2924,27',
  'origin': {
    'city': 'Taoyuan International Airport',
    'location': 'Dayuan, Taoyuan, Taiwan',
    'country': 'Taiwan',
    'country_code': 'SYR',
    'IATA': 'TPE',
    'ICAO': 'RCTP'
  },
  'destination': {
    'city': 'Manchester Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'MAN',
    'ICAO': 'EGCC'
  }
}, {
  'id': 19,
  'airline': 'Linhas Aéreas de Moçambique',
  'airline_code': 'TM',
  'plane_id': 'TM6118',
  'departure_date': '29/11/18',
  'departure_time': '20:00',
  'duration': '2:00',
  'arrival_date': '29/11/18',
  'arrival_time': '22:00',
  'price': '€8939,64',
  'origin': {
    'city': 'Abu Dhabi International Airport',
    'location': 'Abu Dhabi, United Arab Emirates',
    'country': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'AUH',
    'ICAO': 'OMAA'
  },
  'destination': {
    'city': 'Shanghai Pudong International Airport',
    'location': 'China',
    'country_code': 'CHN',
    'IATA': 'PVG',
    'ICAO': 'ZSPD'
  }
}, {
  'id': 20,
  'airline': 'Navitaire',
  'airline_code': '1N',
  'plane_id': '1N5445',
  'departure_date': '11/12/18',
  'departure_time': '18:00',
  'duration': '5:00',
  'arrival_date': '11/12/18',
  'arrival_time': '23:00',
  'price': '€8780,42',
  'origin': {
    'city': 'Singapore Changi Airport',
    'location': 'Changi, East Region, Singapore',
    'country': 'Singapore',
    'country_code': 'SGP',
    'IATA': 'SIN',
    'ICAO': 'WSSS'
  },
  'destination': {
    'city': 'Miami International Airport',
    'location': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  }
}, {
  'id': 21,
  'airline': 'Sierra Nevada Airlines',
  'airline_code': '1I',
  'plane_id': '1I6310',
  'departure_date': '21/07/18',
  'departure_time': '21:00',
  'duration': '8:00',
  'arrival_date': '22/07/18',
  'arrival_time': '05:00',
  'price': '€4255,39',
  'origin': {
    'city': 'London Heathrow Airport',
    'location': 'Hillingdon, Greater London, United Kingdom',
    'country': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LHR',
    'ICAO': 'EGLL'
  },
  'destination': {
    'city': 'Munich Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'MUC',
    'ICAO': 'EDDM'
  }
}, {
  'id': 22,
  'airline': 'Spirit Airlines',
  'airline_code': 'NK',
  'plane_id': 'NK8189',
  'departure_date': '20/09/18',
  'departure_time': '23:00',
  'duration': '3:00',
  'arrival_date': '21/09/18',
  'arrival_time': '02:00',
  'price': '€9576,39',
  'origin': {
    'city': 'Miami International Airport',
    'location': 'Miami-Dade County, Florida, United States',
    'country': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  },
  'destination': {
    'city': 'London Heathrow Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LHR',
    'ICAO': 'EGLL'
  }
}, {
  'id': 23,
  'airline': 'North Coast Aviation',
  'airline_code': 'N9',
  'plane_id': 'N97697',
  'departure_date': '16/08/18',
  'departure_time': '06:00',
  'duration': '8:00',
  'arrival_date': '16/08/18',
  'arrival_time': '14:00',
  'price': '€8749,97',
  'origin': {
    'city': 'Toronto Pearson International Airport',
    'location': 'Mississauga, Ontario, Canada',
    'country': 'Canada',
    'country_code': 'CAN',
    'IATA': 'YYZ',
    'ICAO': 'CYYZ'
  },
  'destination': {
    'city': 'Vienna International Airport',
    'location': 'Austria',
    'country_code': 'AUT',
    'IATA': 'VIE',
    'ICAO': 'LOWW'
  }
}, {
  'id': 24,
  'airline': 'Eurolot',
  'airline_code': 'K2',
  'plane_id': 'K24020',
  'departure_date': '13/07/18',
  'departure_time': '04:00',
  'duration': '6:00',
  'arrival_date': '13/07/18',
  'arrival_time': '10:00',
  'price': '€6690,19',
  'origin': {
    'city': 'Miami International Airport',
    'location': 'Miami-Dade County, Florida, United States',
    'country': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  },
  'destination': {
    'city': 'John F. Kennedy International Airport',
    'location': 'United States',
    'country_code': 'USA',
    'IATA': 'JFK',
    'ICAO': 'KJFK'
  }
}, {
  'id': 25,
  'airline': 'Comair',
  'airline_code': 'MN',
  'plane_id': 'MN1877',
  'departure_date': '08/06/19',
  'departure_time': '11:00',
  'duration': '10:00',
  'arrival_date': '08/06/19',
  'arrival_time': '21:00',
  'price': '€790,32',
  'origin': {
    'city': 'Abu Dhabi International Airport',
    'location': 'Abu Dhabi, United Arab Emirates',
    'country': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'AUH',
    'ICAO': 'OMAA'
  },
  'destination': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  }
}, {
  'id': 26,
  'airline': 'Eastar Jet',
  'airline_code': 'ZE',
  'plane_id': 'ZE2798',
  'departure_date': '17/11/18',
  'departure_time': '22:00',
  'duration': '4:00',
  'arrival_date': '18/11/18',
  'arrival_time': '02:00',
  'price': '€8970,96',
  'origin': {
    'city': 'Frankfurt Airport',
    'location': 'Flughafen, Frankfurt, Hesse, Germany',
    'country': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  },
  'destination': {
    'city': 'Paris-Charles de Gaulle Airport',
    'location': 'France',
    'country_code': 'FRA',
    'IATA': 'CDG',
    'ICAO': 'LFPG'
  }
}, {
  'id': 27,
  'airline': 'Delta Air Lines',
  'airline_code': 'DL',
  'plane_id': 'DL7126',
  'departure_date': '24/06/18',
  'departure_time': '07:00',
  'duration': '2:00',
  'arrival_date': '24/06/18',
  'arrival_time': '09:00',
  'price': '€3656,94',
  'origin': {
    'city': 'Hamad International Airport',
    'location': 'Doha, Qatar',
    'country': 'Qatar',
    'country_code': 'QAT',
    'IATA': 'DOH',
    'ICAO': 'OTBD'
  },
  'destination': {
    'city': 'Narita International Airport',
    'location': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  }
}, {
  'id': 28,
  'airline': 'Sylt Air GmbH',
  'airline_code': '7E',
  'plane_id': '7E5755',
  'departure_date': '22/07/18',
  'departure_time': '12:00',
  'duration': '3:00',
  'arrival_date': '22/07/18',
  'arrival_time': '15:00',
  'price': '€3495,86',
  'origin': {
    'city': 'Copenhagen Airport',
    'location': 'Tårnby, Hovedstaden, Denmark',
    'country': 'Denmark',
    'country_code': 'DNK',
    'IATA': 'CPH',
    'ICAO': 'EKCH'
  },
  'destination': {
    'city': 'Miami International Airport',
    'location': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  }
}, {
  'id': 29,
  'airline': 'Uzbekistan Airways',
  'airline_code': 'HY',
  'plane_id': 'HY3178',
  'departure_date': '04/06/19',
  'departure_time': '23:00',
  'duration': '12:00',
  'arrival_date': '05/06/19',
  'arrival_time': '11:00',
  'price': '€8179,35',
  'origin': {
    'city': 'Toronto Pearson International Airport',
    'location': 'Mississauga, Ontario, Canada',
    'country': 'Canada',
    'country_code': 'CAN',
    'IATA': 'YYZ',
    'ICAO': 'CYYZ'
  },
  'destination': {
    'city': 'Hong Kong International Airport',
    'location': 'Hong Kong',
    'country_code': 'HKG',
    'IATA': 'HKG',
    'ICAO': 'VHHH'
  }
}, {
  'id': 30,
  'airline': 'Amadeus IT Group',
  'airline_code': '1A',
  'plane_id': '1A7498',
  'departure_date': '26/09/18',
  'departure_time': '15:00',
  'duration': '6:00',
  'arrival_date': '26/09/18',
  'arrival_time': '21:00',
  'price': '€335,22',
  'origin': {
    'city': 'Dublin Airport',
    'location': 'Dublin, County Dublin, Leinster, Ireland',
    'country': 'Ireland',
    'country_code': 'IRL',
    'IATA': 'DUB',
    'ICAO': 'EIDW'
  },
  'destination': {
    'city': 'Narita International Airport',
    'location': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  }
}, {
  'id': 31,
  'airline': 'Kalitta Charters II',
  'airline_code': 'CB',
  'plane_id': 'CB2065',
  'departure_date': '21/07/18',
  'departure_time': '19:00',
  'duration': '11:00',
  'arrival_date': '22/07/18',
  'arrival_time': '06:00',
  'price': '€2816,71',
  'origin': {
    'city': 'Singapore Changi Airport',
    'location': 'Changi, East Region, Singapore',
    'country': 'Singapore',
    'country_code': 'SGP',
    'IATA': 'SIN',
    'ICAO': 'WSSS'
  },
  'destination': {
    'city': 'Vienna International Airport',
    'location': 'Austria',
    'country_code': 'AUT',
    'IATA': 'VIE',
    'ICAO': 'LOWW'
  }
}, {
  'id': 32,
  'airline': 'Palau Trans Pacific Airlines',
  'airline_code': 'GP',
  'plane_id': 'GP2420',
  'departure_date': '22/10/18',
  'departure_time': '11:00',
  'duration': '6:00',
  'arrival_date': '22/10/18',
  'arrival_time': '17:00',
  'price': '€2910,97',
  'origin': {
    'city': 'Barcelona–El Prat Airport',
    'location': 'El Prat de Llobregat, Barcelona, Catalonia, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'BCN',
    'ICAO': 'LEBL'
  },
  'destination': {
    'city': 'Leonardo da Vinci–Fiumicino Airport',
    'location': 'Italy',
    'country_code': 'ITA',
    'IATA': 'FCO',
    'ICAO': 'LIRF'
  }
}, {
  'id': 33,
  'airline': 'Austral Líneas Aéreas',
  'airline_code': 'AU',
  'plane_id': 'AU3641',
  'departure_date': '11/08/18',
  'departure_time': '10:00',
  'duration': '11:00',
  'arrival_date': '11/08/18',
  'arrival_time': '21:00',
  'price': '€7271,20',
  'origin': {
    'city': 'Singapore Changi Airport',
    'location': 'Changi, East Region, Singapore',
    'country': 'Singapore',
    'country_code': 'SGP',
    'IATA': 'SIN',
    'ICAO': 'WSSS'
  },
  'destination': {
    'city': 'Taoyuan International Airport',
    'location': 'Taiwan',
    'country_code': 'SYR',
    'IATA': 'TPE',
    'ICAO': 'RCTP'
  }
}, {
  'id': 34,
  'airline': 'Vanilla Air',
  'airline_code': 'JW',
  'plane_id': 'JW7824',
  'departure_date': '19/09/18',
  'departure_time': '21:00',
  'duration': '3:00',
  'arrival_date': '20/09/18',
  'arrival_time': '00:00',
  'price': '€6426,44',
  'origin': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Racha Thewa, Bang Phli, Samut Prakan, Greater Bangkok, Thailand',
    'country': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  },
  'destination': {
    'city': 'Paris-Charles de Gaulle Airport',
    'location': 'France',
    'country_code': 'FRA',
    'IATA': 'CDG',
    'ICAO': 'LFPG'
  }
}, {
  'id': 35,
  'airline': 'AirAsia India',
  'airline_code': 'I5',
  'plane_id': 'I58161',
  'departure_date': '28/05/19',
  'departure_time': '18:00',
  'duration': '10:00',
  'arrival_date': '29/05/19',
  'arrival_time': '04:00',
  'price': '€9321,03',
  'origin': {
    'city': 'London Gatwick Airport',
    'location': 'Crawley, West Sussex, United Kingdom',
    'country': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LGW',
    'ICAO': 'EGKK'
  },
  'destination': {
    'city': 'Brussels Airport',
    'location': 'Belgium',
    'country_code': 'BEL',
    'IATA': 'BRU',
    'ICAO': 'EBBR'
  }
}, {
  'id': 36,
  'airline': 'Qantaslink',
  'airline_code': 'QF',
  'plane_id': 'QF3112',
  'departure_date': '31/12/18',
  'departure_time': '05:00',
  'duration': '10:00',
  'arrival_date': '31/12/18',
  'arrival_time': '15:00',
  'price': '€1769,75',
  'origin': {
    'city': 'Narita International Airport',
    'location': 'Narita, Chiba, Kantō, Honshū, Japan',
    'country': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  },
  'destination': {
    'city': 'Zurich Airport',
    'location': 'Switzerland',
    'country_code': 'CHE',
    'IATA': 'ZRH',
    'ICAO': 'LSZH'
  }
}, {
  'id': 37,
  'airline': 'Finalair Congo',
  'airline_code': '4S',
  'plane_id': '4S1539',
  'departure_date': '16/04/19',
  'departure_time': '23:00',
  'duration': '5:00',
  'arrival_date': '17/04/19',
  'arrival_time': '04:00',
  'price': '€7084,19',
  'origin': {
    'city': 'Amsterdam Airport Schiphol',
    'location': 'Haarlemmermeer, North Holland, Netherlands',
    'country': 'Netherlands',
    'country_code': 'NLD',
    'IATA': 'AMS',
    'ICAO': 'EHAM'
  },
  'destination': {
    'city': 'Vienna International Airport',
    'location': 'Austria',
    'country_code': 'AUT',
    'IATA': 'VIE',
    'ICAO': 'LOWW'
  }
}, {
  'id': 38,
  'airline': 'Kabo Air',
  'airline_code': 'N2',
  'plane_id': 'N21610',
  'departure_date': '01/06/19',
  'departure_time': '00:00',
  'duration': '10:00',
  'arrival_date': '01/06/19',
  'arrival_time': '10:00',
  'price': '€9310,18',
  'origin': {
    'city': 'Dubai International Airport',
    'location': 'Garhoud, Dubai, United Arab Emirates',
    'country': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'DXB',
    'ICAO': 'OMDB'
  },
  'destination': {
    'city': 'Munich Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'MUC',
    'ICAO': 'EDDM'
  }
}, {
  'id': 39,
  'airline': 'US Airways',
  'airline_code': 'US',
  'plane_id': 'US4839',
  'departure_date': '09/01/19',
  'departure_time': '02:00',
  'duration': '11:00',
  'arrival_date': '09/01/19',
  'arrival_time': '13:00',
  'price': '€6563,70',
  'origin': {
    'city': 'Antalya Airport',
    'location': 'Antalya, Turkey',
    'country': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'AYT',
    'ICAO': 'LTAI'
  },
  'destination': {
    'city': 'Dubai International Airport',
    'location': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'DXB',
    'ICAO': 'OMDB'
  }
}, {
  'id': 40,
  'airline': 'Tropic Air',
  'airline_code': 'PM',
  'plane_id': 'PM2347',
  'departure_date': '18/10/18',
  'departure_time': '21:00',
  'duration': '1:00',
  'arrival_date': '18/10/18',
  'arrival_time': '22:00',
  'price': '€9082,15',
  'origin': {
    'city': 'Shanghai Pudong International Airport',
    'location': 'Pudong, Shanghai, China',
    'country': 'China',
    'country_code': 'CHN',
    'IATA': 'PVG',
    'ICAO': 'ZSPD'
  },
  'destination': {
    'city': 'Narita International Airport',
    'location': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  }
}, {
  'id': 41,
  'airline': 'Skywalk Airlines',
  'airline_code': 'AL',
  'plane_id': 'AL8651',
  'departure_date': '11/07/18',
  'departure_time': '20:00',
  'duration': '12:00',
  'arrival_date': '12/07/18',
  'arrival_time': '08:00',
  'price': '€1201,84',
  'origin': {
    'city': 'Frankfurt Airport',
    'location': 'Flughafen, Frankfurt, Hesse, Germany',
    'country': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  },
  'destination': {
    'city': 'Hong Kong International Airport',
    'location': 'Hong Kong',
    'country_code': 'HKG',
    'IATA': 'HKG',
    'ICAO': 'VHHH'
  }
}, {
  'id': 42,
  'airline': 'Wings Air',
  'airline_code': 'IW',
  'plane_id': 'IW2902',
  'departure_date': '04/02/19',
  'departure_time': '12:00',
  'duration': '3:00',
  'arrival_date': '04/02/19',
  'arrival_time': '15:00',
  'price': '€8425,42',
  'origin': {
    'city': 'Miami International Airport',
    'location': 'Miami-Dade County, Florida, United States',
    'country': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  },
  'destination': {
    'city': 'Narita International Airport',
    'location': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  }
}, {
  'id': 43,
  'airline': 'Mavial Magadan Airlines',
  'airline_code': 'H5',
  'plane_id': 'H51216',
  'departure_date': '22/11/18',
  'departure_time': '17:00',
  'duration': '11:00',
  'arrival_date': '23/11/18',
  'arrival_time': '04:00',
  'price': '€5861,27',
  'origin': {
    'city': 'Barcelona–El Prat Airport',
    'location': 'El Prat de Llobregat, Barcelona, Catalonia, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'BCN',
    'ICAO': 'LEBL'
  },
  'destination': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  }
}, {
  'id': 44,
  'airline': 'Biman Bangladesh Airlines',
  'airline_code': 'BG',
  'plane_id': 'BG9498',
  'departure_date': '23/08/18',
  'departure_time': '18:00',
  'duration': '8:00',
  'arrival_date': '24/08/18',
  'arrival_time': '02:00',
  'price': '€2627,94',
  'origin': {
    'city': 'Dublin Airport',
    'location': 'Dublin, County Dublin, Leinster, Ireland',
    'country': 'Ireland',
    'country_code': 'IRL',
    'IATA': 'DUB',
    'ICAO': 'EIDW'
  },
  'destination': {
    'city': 'Amsterdam Airport Schiphol',
    'location': 'Netherlands',
    'country_code': 'NLD',
    'IATA': 'AMS',
    'ICAO': 'EHAM'
  }
}, {
  'id': 45,
  'airline': 'Dirgantara Air Service',
  'airline_code': 'AW',
  'plane_id': 'AW7985',
  'departure_date': '21/05/19',
  'departure_time': '01:00',
  'duration': '8:00',
  'arrival_date': '21/05/19',
  'arrival_time': '09:00',
  'price': '€9958,07',
  'origin': {
    'city': 'London Gatwick Airport',
    'location': 'Crawley, West Sussex, United Kingdom',
    'country': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LGW',
    'ICAO': 'EGKK'
  },
  'destination': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  }
}, {
  'id': 46,
  'airline': 'Axis Airways',
  'airline_code': '6V',
  'plane_id': '6V6074',
  'departure_date': '28/04/19',
  'departure_time': '05:00',
  'duration': '1:00',
  'arrival_date': '28/04/19',
  'arrival_time': '06:00',
  'price': '€214,17',
  'origin': {
    'city': 'Zurich Airport',
    'location': 'Rümlang/Oberglatt, Bülach/Dielsdorf, Zürich, Switzerland',
    'country': 'Switzerland',
    'country_code': 'CHE',
    'IATA': 'ZRH',
    'ICAO': 'LSZH'
  },
  'destination': {
    'city': 'Miami International Airport',
    'location': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  }
}, {
  'id': 47,
  'airline': 'KLM Cityhopper',
  'airline_code': 'WA',
  'plane_id': 'WA3196',
  'departure_date': '08/11/18',
  'departure_time': '21:00',
  'duration': '9:00',
  'arrival_date': '09/11/18',
  'arrival_time': '06:00',
  'price': '€1719,03',
  'origin': {
    'city': 'Atatürk International Airport',
    'location': 'Yeşilköy, Bakırköy, Istanbul, Turkey',
    'country': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  },
  'destination': {
    'city': 'Paris-Charles de Gaulle Airport',
    'location': 'France',
    'country_code': 'FRA',
    'IATA': 'CDG',
    'ICAO': 'LFPG'
  }
}, {
  'id': 48,
  'airline': 'Norwegian Air Shuttle',
  'airline_code': 'DY',
  'plane_id': 'DY8993',
  'departure_date': '10/02/19',
  'departure_time': '16:00',
  'duration': '12:00',
  'arrival_date': '11/02/19',
  'arrival_time': '04:00',
  'price': '€6943,34',
  'origin': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Racha Thewa, Bang Phli, Samut Prakan, Greater Bangkok, Thailand',
    'country': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  },
  'destination': {
    'city': 'Hong Kong International Airport',
    'location': 'Hong Kong',
    'country_code': 'HKG',
    'IATA': 'HKG',
    'ICAO': 'VHHH'
  }
}, {
  'id': 49,
  'airline': 'Pacific Coastal Airlines',
  'airline_code': '8P',
  'plane_id': '8P3917',
  'departure_date': '06/10/18',
  'departure_time': '21:00',
  'duration': '7:00',
  'arrival_date': '07/10/18',
  'arrival_time': '04:00',
  'price': '€4639,49',
  'origin': {
    'city': 'Paris-Charles de Gaulle Airport',
    'location': 'Roissy-en-France, Val d\'Oise, Île-de-France, France',
    'country': 'France',
    'country_code': 'FRA',
    'IATA': 'CDG',
    'ICAO': 'LFPG'
  },
  'destination': {
    'city': 'Copenhagen Airport',
    'location': 'Denmark',
    'country_code': 'DNK',
    'IATA': 'CPH',
    'ICAO': 'EKCH'
  }
}, {
  'id': 50,
  'airline': 'Sundair',
  'airline_code': 'SR',
  'plane_id': 'SR2969',
  'departure_date': '03/08/18',
  'departure_time': '18:00',
  'duration': '10:00',
  'arrival_date': '04/08/18',
  'arrival_time': '04:00',
  'price': '€4676,11',
  'origin': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Madrid, Comunidad de Madrid, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  },
  'destination': {
    'city': 'Narita International Airport',
    'location': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  }
}, {
  'id': 51,
  'airline': 'Domodedovo Airlines',
  'airline_code': 'E3',
  'plane_id': 'E33021',
  'departure_date': '02/04/19',
  'departure_time': '18:00',
  'duration': '9:00',
  'arrival_date': '03/04/19',
  'arrival_time': '03:00',
  'price': '€6600,19',
  'origin': {
    'city': 'Atatürk International Airport',
    'location': 'Yeşilköy, Bakırköy, Istanbul, Turkey',
    'country': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  },
  'destination': {
    'city': 'Abu Dhabi International Airport',
    'location': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'AUH',
    'ICAO': 'OMAA'
  }
}, {
  'id': 52,
  'airline': 'Yakutia Airlines',
  'airline_code': 'R3',
  'plane_id': 'R33600',
  'departure_date': '17/11/18',
  'departure_time': '13:00',
  'duration': '10:00',
  'arrival_date': '17/11/18',
  'arrival_time': '23:00',
  'price': '€5648,74',
  'origin': {
    'city': 'Hamad International Airport',
    'location': 'Doha, Qatar',
    'country': 'Qatar',
    'country_code': 'QAT',
    'IATA': 'DOH',
    'ICAO': 'OTBD'
  },
  'destination': {
    'city': 'Zurich Airport',
    'location': 'Switzerland',
    'country_code': 'CHE',
    'IATA': 'ZRH',
    'ICAO': 'LSZH'
  }
}, {
  'id': 53,
  'airline': 'Air Luxor GB',
  'airline_code': 'L8',
  'plane_id': 'L83422',
  'departure_date': '04/08/18',
  'departure_time': '19:00',
  'duration': '1:00',
  'arrival_date': '04/08/18',
  'arrival_time': '20:00',
  'price': '€7076,70',
  'origin': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Racha Thewa, Bang Phli, Samut Prakan, Greater Bangkok, Thailand',
    'country': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  },
  'destination': {
    'city': 'Seoul Incheon International Airport',
    'location': 'South Korea',
    'country_code': 'SGS',
    'IATA': 'ICN',
    'ICAO': 'RKSI'
  }
}, {
  'id': 54,
  'airline': 'Royal Tongan Airlines',
  'airline_code': 'WR',
  'plane_id': 'WR7006',
  'departure_date': '25/03/19',
  'departure_time': '23:00',
  'duration': '1:00',
  'arrival_date': '26/03/19',
  'arrival_time': '00:00',
  'price': '€8387,14',
  'origin': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Madrid, Comunidad de Madrid, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  },
  'destination': {
    'city': 'Frankfurt Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  }
}, {
  'id': 55,
  'airline': 'JetStar Japan',
  'airline_code': 'GK',
  'plane_id': 'GK3965',
  'departure_date': '24/01/19',
  'departure_time': '23:00',
  'duration': '2:00',
  'arrival_date': '25/01/19',
  'arrival_time': '01:00',
  'price': '€8975,06',
  'origin': {
    'city': 'Copenhagen Airport',
    'location': 'Tårnby, Hovedstaden, Denmark',
    'country': 'Denmark',
    'country_code': 'DNK',
    'IATA': 'CPH',
    'ICAO': 'EKCH'
  },
  'destination': {
    'city': 'Seoul Incheon International Airport',
    'location': 'South Korea',
    'country_code': 'SGS',
    'IATA': 'ICN',
    'ICAO': 'RKSI'
  }
}, {
  'id': 56,
  'airline': 'Virgin Australia Airlines',
  'airline_code': 'VA',
  'plane_id': 'VA4513',
  'departure_date': '06/09/18',
  'departure_time': '01:00',
  'duration': '10:00',
  'arrival_date': '06/09/18',
  'arrival_time': '11:00',
  'price': '€223,61',
  'origin': {
    'city': 'Frankfurt Airport',
    'location': 'Flughafen, Frankfurt, Hesse, Germany',
    'country': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  },
  'destination': {
    'city': 'London Gatwick Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LGW',
    'ICAO': 'EGKK'
  }
}, {
  'id': 57,
  'airline': 'Bemidji Airlines',
  'airline_code': 'CH',
  'plane_id': 'CH4937',
  'departure_date': '26/09/18',
  'departure_time': '01:00',
  'duration': '7:00',
  'arrival_date': '26/09/18',
  'arrival_time': '08:00',
  'price': '€8792,30',
  'origin': {
    'city': 'Paris-Charles de Gaulle Airport',
    'location': 'Roissy-en-France, Val d\'Oise, Île-de-France, France',
    'country': 'France',
    'country_code': 'FRA',
    'IATA': 'CDG',
    'ICAO': 'LFPG'
  },
  'destination': {
    'city': 'Abu Dhabi International Airport',
    'location': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'AUH',
    'ICAO': 'OMAA'
  }
}, {
  'id': 58,
  'airline': '*Air Ivoire*',
  'airline_code': 'VU',
  'plane_id': 'VU5174',
  'departure_date': '27/04/19',
  'departure_time': '00:00',
  'duration': '12:00',
  'arrival_date': '27/04/19',
  'arrival_time': '12:00',
  'price': '€4125,54',
  'origin': {
    'city': 'Seoul Incheon International Airport',
    'location': 'Jung-gu, Incheon, South Korea',
    'country': 'South Korea',
    'country_code': 'SGS',
    'IATA': 'ICN',
    'ICAO': 'RKSI'
  },
  'destination': {
    'city': 'Manchester Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'MAN',
    'ICAO': 'EGCC'
  }
}, {
  'id': 59,
  'airline': 'Four Star Aviation / Four Star Cargo',
  'airline_code': 'HK',
  'plane_id': 'HK5874',
  'departure_date': '07/09/18',
  'departure_time': '00:00',
  'duration': '10:00',
  'arrival_date': '07/09/18',
  'arrival_time': '10:00',
  'price': '€3727,20',
  'origin': {
    'city': 'Taoyuan International Airport',
    'location': 'Dayuan, Taoyuan, Taiwan',
    'country': 'Taiwan',
    'country_code': 'SYR',
    'IATA': 'TPE',
    'ICAO': 'RCTP'
  },
  'destination': {
    'city': 'Hong Kong International Airport',
    'location': 'Hong Kong',
    'country_code': 'HKG',
    'IATA': 'HKG',
    'ICAO': 'VHHH'
  }
}, {
  'id': 60,
  'airline': 'BMI Regional',
  'airline_code': 'BM',
  'plane_id': 'BM6652',
  'departure_date': '24/12/18',
  'departure_time': '15:00',
  'duration': '7:00',
  'arrival_date': '24/12/18',
  'arrival_time': '22:00',
  'price': '€7475,16',
  'origin': {
    'city': 'Manchester Airport',
    'location': 'Manchester, Greater Manchester, United Kingdom',
    'country': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'MAN',
    'ICAO': 'EGCC'
  },
  'destination': {
    'city': 'London Heathrow Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LHR',
    'ICAO': 'EGLL'
  }
}, {
  'id': 61,
  'airline': 'Atlasjet',
  'airline_code': 'KK',
  'plane_id': 'KK8117',
  'departure_date': '14/09/18',
  'departure_time': '09:00',
  'duration': '5:00',
  'arrival_date': '14/09/18',
  'arrival_time': '14:00',
  'price': '€6814,56',
  'origin': {
    'city': 'Vienna International Airport',
    'location': 'Vienna, Austria',
    'country': 'Austria',
    'country_code': 'AUT',
    'IATA': 'VIE',
    'ICAO': 'LOWW'
  },
  'destination': {
    'city': 'Taoyuan International Airport',
    'location': 'Taiwan',
    'country_code': 'SYR',
    'IATA': 'TPE',
    'ICAO': 'RCTP'
  }
}, {
  'id': 62,
  'airline': 'Dba',
  'airline_code': 'DI',
  'plane_id': 'DI9790',
  'departure_date': '18/12/18',
  'departure_time': '11:00',
  'duration': '3:00',
  'arrival_date': '18/12/18',
  'arrival_time': '14:00',
  'price': '€5988,95',
  'origin': {
    'city': 'Toronto Pearson International Airport',
    'location': 'Mississauga, Ontario, Canada',
    'country': 'Canada',
    'country_code': 'CAN',
    'IATA': 'YYZ',
    'ICAO': 'CYYZ'
  },
  'destination': {
    'city': 'Antalya Airport',
    'location': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'AYT',
    'ICAO': 'LTAI'
  }
}, {
  'id': 63,
  'airline': 'Delta Air Lines',
  'airline_code': 'DL',
  'plane_id': 'DL5722',
  'departure_date': '20/08/18',
  'departure_time': '21:00',
  'duration': '6:00',
  'arrival_date': '21/08/18',
  'arrival_time': '03:00',
  'price': '€4882,95',
  'origin': {
    'city': 'Kuala Lumpur International Airport',
    'location': 'Sepang, Selangor, Malaysia',
    'country': 'Malaysia',
    'country_code': 'MYS',
    'IATA': 'KUL',
    'ICAO': 'WMKK'
  },
  'destination': {
    'city': 'Frankfurt Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  }
}, {
  'id': 64,
  'airline': 'Spring Airlines',
  'airline_code': '9C',
  'plane_id': '9C7603',
  'departure_date': '02/11/18',
  'departure_time': '09:00',
  'duration': '2:00',
  'arrival_date': '02/11/18',
  'arrival_time': '11:00',
  'price': '€6217,25',
  'origin': {
    'city': 'Antalya Airport',
    'location': 'Antalya, Turkey',
    'country': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'AYT',
    'ICAO': 'LTAI'
  },
  'destination': {
    'city': 'Frankfurt Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  }
}, {
  'id': 65,
  'airline': 'Futura International Airways',
  'airline_code': 'FH',
  'plane_id': 'FH8768',
  'departure_date': '28/12/18',
  'departure_time': '16:00',
  'duration': '5:00',
  'arrival_date': '28/12/18',
  'arrival_time': '21:00',
  'price': '€5055,99',
  'origin': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Racha Thewa, Bang Phli, Samut Prakan, Greater Bangkok, Thailand',
    'country': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  },
  'destination': {
    'city': 'Kuala Lumpur International Airport',
    'location': 'Malaysia',
    'country_code': 'MYS',
    'IATA': 'KUL',
    'ICAO': 'WMKK'
  }
}, {
  'id': 66,
  'airline': 'Hong Kong Air Cargo',
  'airline_code': 'RH',
  'plane_id': 'RH5731',
  'departure_date': '06/06/19',
  'departure_time': '08:00',
  'duration': '1:00',
  'arrival_date': '06/06/19',
  'arrival_time': '09:00',
  'price': '€6979,31',
  'origin': {
    'city': 'Leonardo da Vinci–Fiumicino Airport',
    'location': 'Fiumicino, Rome, Italy',
    'country': 'Italy',
    'country_code': 'ITA',
    'IATA': 'FCO',
    'ICAO': 'LIRF'
  },
  'destination': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  }
}, {
  'id': 67,
  'airline': 'Shanxi Airlines',
  'airline_code': '8C',
  'plane_id': '8C9822',
  'departure_date': '23/08/18',
  'departure_time': '02:00',
  'duration': '9:00',
  'arrival_date': '23/08/18',
  'arrival_time': '11:00',
  'price': '€2178,56',
  'origin': {
    'city': 'Narita International Airport',
    'location': 'Narita, Chiba, Kantō, Honshū, Japan',
    'country': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  },
  'destination': {
    'city': 'Barcelona–El Prat Airport',
    'location': 'Spain',
    'country_code': 'ESP',
    'IATA': 'BCN',
    'ICAO': 'LEBL'
  }
}, {
  'id': 68,
  'airline': 'Air Niugini',
  'airline_code': 'PX',
  'plane_id': 'PX6343',
  'departure_date': '24/07/18',
  'departure_time': '10:00',
  'duration': '5:00',
  'arrival_date': '24/07/18',
  'arrival_time': '15:00',
  'price': '€1635,35',
  'origin': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Madrid, Comunidad de Madrid, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  },
  'destination': {
    'city': 'Taoyuan International Airport',
    'location': 'Taiwan',
    'country_code': 'SYR',
    'IATA': 'TPE',
    'ICAO': 'RCTP'
  }
}, {
  'id': 69,
  'airline': 'Astral Aviation',
  'airline_code': '8V',
  'plane_id': '8V4650',
  'departure_date': '04/07/18',
  'departure_time': '22:00',
  'duration': '4:00',
  'arrival_date': '05/07/18',
  'arrival_time': '02:00',
  'price': '€9185,00',
  'origin': {
    'city': 'Munich Airport',
    'location': 'Oberding/Hallbergmoos/Marzling, Erding/Freising, Bavaria, Germany',
    'country': 'Germany',
    'country_code': 'DEU',
    'IATA': 'MUC',
    'ICAO': 'EDDM'
  },
  'destination': {
    'city': 'Hamad International Airport',
    'location': 'Qatar',
    'country_code': 'QAT',
    'IATA': 'DOH',
    'ICAO': 'OTBD'
  }
}, {
  'id': 70,
  'airline': 'Travelsky Technology',
  'airline_code': '1E',
  'plane_id': '1E1897',
  'departure_date': '10/02/19',
  'departure_time': '05:00',
  'duration': '9:00',
  'arrival_date': '10/02/19',
  'arrival_time': '14:00',
  'price': '€2361,25',
  'origin': {
    'city': 'Dubai International Airport',
    'location': 'Garhoud, Dubai, United Arab Emirates',
    'country': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'DXB',
    'ICAO': 'OMDB'
  },
  'destination': {
    'city': 'Kuala Lumpur International Airport',
    'location': 'Malaysia',
    'country_code': 'MYS',
    'IATA': 'KUL',
    'ICAO': 'WMKK'
  }
}, {
  'id': 71,
  'airline': 'AeroRepública',
  'airline_code': 'P5',
  'plane_id': 'P57752',
  'departure_date': '22/07/18',
  'departure_time': '11:00',
  'duration': '9:00',
  'arrival_date': '22/07/18',
  'arrival_time': '20:00',
  'price': '€8489,69',
  'origin': {
    'city': 'Manchester Airport',
    'location': 'Manchester, Greater Manchester, United Kingdom',
    'country': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'MAN',
    'ICAO': 'EGCC'
  },
  'destination': {
    'city': 'Shanghai Pudong International Airport',
    'location': 'China',
    'country_code': 'CHN',
    'IATA': 'PVG',
    'ICAO': 'ZSPD'
  }
}, {
  'id': 72,
  'airline': 'Travelsky Technology',
  'airline_code': '1E',
  'plane_id': '1E8221',
  'departure_date': '12/03/19',
  'departure_time': '23:00',
  'duration': '9:00',
  'arrival_date': '13/03/19',
  'arrival_time': '08:00',
  'price': '€7921,65',
  'origin': {
    'city': 'Narita International Airport',
    'location': 'Narita, Chiba, Kantō, Honshū, Japan',
    'country': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  },
  'destination': {
    'city': 'Frankfurt Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  }
}, {
  'id': 73,
  'airline': 'Transavia France',
  'airline_code': 'TO',
  'plane_id': 'TO4103',
  'departure_date': '18/02/19',
  'departure_time': '21:00',
  'duration': '8:00',
  'arrival_date': '19/02/19',
  'arrival_time': '05:00',
  'price': '€4350,85',
  'origin': {
    'city': 'Hamad International Airport',
    'location': 'Doha, Qatar',
    'country': 'Qatar',
    'country_code': 'QAT',
    'IATA': 'DOH',
    'ICAO': 'OTBD'
  },
  'destination': {
    'city': 'Miami International Airport',
    'location': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  }
}, {
  'id': 74,
  'airline': 'Maldivian (airline)',
  'airline_code': 'Q2',
  'plane_id': 'Q24316',
  'departure_date': '10/02/19',
  'departure_time': '06:00',
  'duration': '11:00',
  'arrival_date': '10/02/19',
  'arrival_time': '17:00',
  'price': '€6203,29',
  'origin': {
    'city': 'Miami International Airport',
    'location': 'Miami-Dade County, Florida, United States',
    'country': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  },
  'destination': {
    'city': 'Hong Kong International Airport',
    'location': 'Hong Kong',
    'country_code': 'HKG',
    'IATA': 'HKG',
    'ICAO': 'VHHH'
  }
}, {
  'id': 75,
  'airline': 'Novair',
  'airline_code': '1I',
  'plane_id': '1I4981',
  'departure_date': '28/03/19',
  'departure_time': '06:00',
  'duration': '12:00',
  'arrival_date': '28/03/19',
  'arrival_time': '18:00',
  'price': '€3091,30',
  'origin': {
    'city': 'Dubai International Airport',
    'location': 'Garhoud, Dubai, United Arab Emirates',
    'country': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'DXB',
    'ICAO': 'OMDB'
  },
  'destination': {
    'city': 'Toronto Pearson International Airport',
    'location': 'Canada',
    'country_code': 'CAN',
    'IATA': 'YYZ',
    'ICAO': 'CYYZ'
  }
}, {
  'id': 76,
  'airline': 'Aero Airlines',
  'airline_code': 'EE',
  'plane_id': 'EE1114',
  'departure_date': '20/04/19',
  'departure_time': '14:00',
  'duration': '8:00',
  'arrival_date': '20/04/19',
  'arrival_time': '22:00',
  'price': '€2915,30',
  'origin': {
    'city': 'Paris-Charles de Gaulle Airport',
    'location': 'Roissy-en-France, Val d\'Oise, Île-de-France, France',
    'country': 'France',
    'country_code': 'FRA',
    'IATA': 'CDG',
    'ICAO': 'LFPG'
  },
  'destination': {
    'city': 'Suvarnabhumi Airport',
    'location': 'Thailand',
    'country_code': 'TJK',
    'IATA': 'BKK',
    'ICAO': 'VTBS'
  }
}, {
  'id': 77,
  'airline': 'Air Burkina',
  'airline_code': '2J',
  'plane_id': '2J8333',
  'departure_date': '01/03/19',
  'departure_time': '11:00',
  'duration': '3:00',
  'arrival_date': '01/03/19',
  'arrival_time': '14:00',
  'price': '€5075,68',
  'origin': {
    'city': 'Brussels Airport',
    'location': 'Zaventem, Flemish Brabant, Flanders, Belgium',
    'country': 'Belgium',
    'country_code': 'BEL',
    'IATA': 'BRU',
    'ICAO': 'EBBR'
  },
  'destination': {
    'city': 'Munich Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'MUC',
    'ICAO': 'EDDM'
  }
}, {
  'id': 78,
  'airline': 'Astar Air Cargo',
  'airline_code': 'ER',
  'plane_id': 'ER5544',
  'departure_date': '27/09/18',
  'departure_time': '02:00',
  'duration': '3:00',
  'arrival_date': '27/09/18',
  'arrival_time': '05:00',
  'price': '€8013,84',
  'origin': {
    'city': 'Frankfurt Airport',
    'location': 'Flughafen, Frankfurt, Hesse, Germany',
    'country': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  },
  'destination': {
    'city': 'Brussels Airport',
    'location': 'Belgium',
    'country_code': 'BEL',
    'IATA': 'BRU',
    'ICAO': 'EBBR'
  }
}, {
  'id': 79,
  'airline': 'Polyot Sirena',
  'airline_code': '1U',
  'plane_id': '1U1217',
  'departure_date': '19/12/18',
  'departure_time': '02:00',
  'duration': '11:00',
  'arrival_date': '19/12/18',
  'arrival_time': '13:00',
  'price': '€4206,61',
  'origin': {
    'city': 'London Gatwick Airport',
    'location': 'Crawley, West Sussex, United Kingdom',
    'country': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'LGW',
    'ICAO': 'EGKK'
  },
  'destination': {
    'city': 'Leonardo da Vinci–Fiumicino Airport',
    'location': 'Italy',
    'country_code': 'ITA',
    'IATA': 'FCO',
    'ICAO': 'LIRF'
  }
}, {
  'id': 80,
  'airline': 'Titan Airways',
  'airline_code': 'ZT',
  'plane_id': 'ZT9531',
  'departure_date': '28/09/18',
  'departure_time': '04:00',
  'duration': '7:00',
  'arrival_date': '28/09/18',
  'arrival_time': '11:00',
  'price': '€7551,79',
  'origin': {
    'city': 'Amsterdam Airport Schiphol',
    'location': 'Haarlemmermeer, North Holland, Netherlands',
    'country': 'Netherlands',
    'country_code': 'NLD',
    'IATA': 'AMS',
    'ICAO': 'EHAM'
  },
  'destination': {
    'city': 'Manchester Airport',
    'location': 'United Kingdom',
    'country_code': 'GBR',
    'IATA': 'MAN',
    'ICAO': 'EGCC'
  }
}, {
  'id': 81,
  'airline': 'Novo Air',
  'airline_code': 'VQ',
  'plane_id': 'VQ8299',
  'departure_date': '04/10/18',
  'departure_time': '03:00',
  'duration': '7:00',
  'arrival_date': '04/10/18',
  'arrival_time': '10:00',
  'price': '€3471,49',
  'origin': {
    'city': 'Barcelona–El Prat Airport',
    'location': 'El Prat de Llobregat, Barcelona, Catalonia, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'BCN',
    'ICAO': 'LEBL'
  },
  'destination': {
    'city': 'Brussels Airport',
    'location': 'Belgium',
    'country_code': 'BEL',
    'IATA': 'BRU',
    'ICAO': 'EBBR'
  }
}, {
  'id': 82,
  'airline': 'Calm Air',
  'airline_code': 'MO',
  'plane_id': 'MO2586',
  'departure_date': '23/04/19',
  'departure_time': '19:00',
  'duration': '6:00',
  'arrival_date': '24/04/19',
  'arrival_time': '01:00',
  'price': '€9804,20',
  'origin': {
    'city': 'Atatürk International Airport',
    'location': 'Yeşilköy, Bakırköy, Istanbul, Turkey',
    'country': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  },
  'destination': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  }
}, {
  'id': 83,
  'airline': 'NetJets Europe',
  'airline_code': '1I',
  'plane_id': '1I8237',
  'departure_date': '29/11/18',
  'departure_time': '16:00',
  'duration': '5:00',
  'arrival_date': '29/11/18',
  'arrival_time': '21:00',
  'price': '€5369,27',
  'origin': {
    'city': 'Singapore Changi Airport',
    'location': 'Changi, East Region, Singapore',
    'country': 'Singapore',
    'country_code': 'SGP',
    'IATA': 'SIN',
    'ICAO': 'WSSS'
  },
  'destination': {
    'city': 'Kuala Lumpur International Airport',
    'location': 'Malaysia',
    'country_code': 'MYS',
    'IATA': 'KUL',
    'ICAO': 'WMKK'
  }
}, {
  'id': 84,
  'airline': 'Peruvian Airlines',
  'airline_code': 'P9',
  'plane_id': 'P91414',
  'departure_date': '09/07/18',
  'departure_time': '03:00',
  'duration': '2:00',
  'arrival_date': '09/07/18',
  'arrival_time': '05:00',
  'price': '€9311,50',
  'origin': {
    'city': 'Singapore Changi Airport',
    'location': 'Changi, East Region, Singapore',
    'country': 'Singapore',
    'country_code': 'SGP',
    'IATA': 'SIN',
    'ICAO': 'WSSS'
  },
  'destination': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  }
}, {
  'id': 85,
  'airline': 'Airblue',
  'airline_code': 'ED',
  'plane_id': 'ED7936',
  'departure_date': '24/11/18',
  'departure_time': '22:00',
  'duration': '7:00',
  'arrival_date': '25/11/18',
  'arrival_time': '05:00',
  'price': '€3602,54',
  'origin': {
    'city': 'Shanghai Pudong International Airport',
    'location': 'Pudong, Shanghai, China',
    'country': 'China',
    'country_code': 'CHN',
    'IATA': 'PVG',
    'ICAO': 'ZSPD'
  },
  'destination': {
    'city': 'Shanghai Pudong International Airport',
    'location': 'China',
    'country_code': 'CHN',
    'IATA': 'PVG',
    'ICAO': 'ZSPD'
  }
}, {
  'id': 86,
  'airline': 'Skynet Airlines',
  'airline_code': 'SI',
  'plane_id': 'SI7408',
  'departure_date': '04/07/18',
  'departure_time': '12:00',
  'duration': '3:00',
  'arrival_date': '04/07/18',
  'arrival_time': '15:00',
  'price': '€3492,18',
  'origin': {
    'city': 'Frankfurt Airport',
    'location': 'Flughafen, Frankfurt, Hesse, Germany',
    'country': 'Germany',
    'country_code': 'DEU',
    'IATA': 'FRA',
    'ICAO': 'EDDF'
  },
  'destination': {
    'city': 'Atatürk International Airport',
    'location': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  }
}, {
  'id': 87,
  'airline': 'Air Tahiti Nui',
  'airline_code': 'TN',
  'plane_id': 'TN8915',
  'departure_date': '24/06/18',
  'departure_time': '06:00',
  'duration': '11:00',
  'arrival_date': '24/06/18',
  'arrival_time': '17:00',
  'price': '€9718,63',
  'origin': {
    'city': 'Leonardo da Vinci–Fiumicino Airport',
    'location': 'Fiumicino, Rome, Italy',
    'country': 'Italy',
    'country_code': 'ITA',
    'IATA': 'FCO',
    'ICAO': 'LIRF'
  },
  'destination': {
    'city': 'Dublin Airport',
    'location': 'Ireland',
    'country_code': 'IRL',
    'IATA': 'DUB',
    'ICAO': 'EIDW'
  }
}, {
  'id': 88,
  'airline': 'China Airlines',
  'airline_code': 'CI',
  'plane_id': 'CI3069',
  'departure_date': '09/07/18',
  'departure_time': '16:00',
  'duration': '4:00',
  'arrival_date': '09/07/18',
  'arrival_time': '20:00',
  'price': '€4707,47',
  'origin': {
    'city': 'Narita International Airport',
    'location': 'Narita, Chiba, Kantō, Honshū, Japan',
    'country': 'Japan',
    'country_code': 'JPN',
    'IATA': 'NRT',
    'ICAO': 'RJAA'
  },
  'destination': {
    'city': 'Brussels Airport',
    'location': 'Belgium',
    'country_code': 'BEL',
    'IATA': 'BRU',
    'ICAO': 'EBBR'
  }
}, {
  'id': 89,
  'airline': 'Compass Airlines',
  'airline_code': 'CP',
  'plane_id': 'CP8065',
  'departure_date': '12/06/19',
  'departure_time': '19:00',
  'duration': '12:00',
  'arrival_date': '13/06/19',
  'arrival_time': '07:00',
  'price': '€1930,07',
  'origin': {
    'city': 'Shanghai Pudong International Airport',
    'location': 'Pudong, Shanghai, China',
    'country': 'China',
    'country_code': 'CHN',
    'IATA': 'PVG',
    'ICAO': 'ZSPD'
  },
  'destination': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  }
}, {
  'id': 90,
  'airline': 'Compania Mexicargo',
  'airline_code': 'GJ',
  'plane_id': 'GJ1523',
  'departure_date': '22/11/18',
  'departure_time': '03:00',
  'duration': '3:00',
  'arrival_date': '22/11/18',
  'arrival_time': '06:00',
  'price': '€6004,97',
  'origin': {
    'city': 'Brussels Airport',
    'location': 'Zaventem, Flemish Brabant, Flanders, Belgium',
    'country': 'Belgium',
    'country_code': 'BEL',
    'IATA': 'BRU',
    'ICAO': 'EBBR'
  },
  'destination': {
    'city': 'Kuala Lumpur International Airport',
    'location': 'Malaysia',
    'country_code': 'MYS',
    'IATA': 'KUL',
    'ICAO': 'WMKK'
  }
}, {
  'id': 91,
  'airline': 'Air Saint Pierre',
  'airline_code': 'PJ',
  'plane_id': 'PJ1687',
  'departure_date': '01/04/19',
  'departure_time': '14:00',
  'duration': '7:00',
  'arrival_date': '01/04/19',
  'arrival_time': '21:00',
  'price': '€117,53',
  'origin': {
    'city': 'Taoyuan International Airport',
    'location': 'Dayuan, Taoyuan, Taiwan',
    'country': 'Taiwan',
    'country_code': 'SYR',
    'IATA': 'TPE',
    'ICAO': 'RCTP'
  },
  'destination': {
    'city': 'Vienna International Airport',
    'location': 'Austria',
    'country_code': 'AUT',
    'IATA': 'VIE',
    'ICAO': 'LOWW'
  }
}, {
  'id': 92,
  'airline': 'Air Canada',
  'airline_code': 'AC',
  'plane_id': 'AC1727',
  'departure_date': '03/01/19',
  'departure_time': '09:00',
  'duration': '9:00',
  'arrival_date': '03/01/19',
  'arrival_time': '18:00',
  'price': '€7606,53',
  'origin': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Madrid, Comunidad de Madrid, Spain',
    'country': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  },
  'destination': {
    'city': 'Atatürk International Airport',
    'location': 'Turkey',
    'country_code': 'TUR',
    'IATA': 'IST',
    'ICAO': 'LTBA'
  }
}, {
  'id': 93,
  'airline': 'Tobruk Air',
  'airline_code': '7T',
  'plane_id': '7T7710',
  'departure_date': '27/05/19',
  'departure_time': '11:00',
  'duration': '5:00',
  'arrival_date': '27/05/19',
  'arrival_time': '16:00',
  'price': '€1354,46',
  'origin': {
    'city': 'Toronto Pearson International Airport',
    'location': 'Mississauga, Ontario, Canada',
    'country': 'Canada',
    'country_code': 'CAN',
    'IATA': 'YYZ',
    'ICAO': 'CYYZ'
  },
  'destination': {
    'city': 'Abu Dhabi International Airport',
    'location': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'AUH',
    'ICAO': 'OMAA'
  }
}, {
  'id': 94,
  'airline': 'MAP-Management and Planung',
  'airline_code': 'AQ',
  'plane_id': 'AQ9745',
  'departure_date': '31/03/19',
  'departure_time': '18:00',
  'duration': '2:00',
  'arrival_date': '31/03/19',
  'arrival_time': '20:00',
  'price': '€1761,13',
  'origin': {
    'city': 'Vienna International Airport',
    'location': 'Vienna, Austria',
    'country': 'Austria',
    'country_code': 'AUT',
    'IATA': 'VIE',
    'ICAO': 'LOWW'
  },
  'destination': {
    'city': 'Seoul Incheon International Airport',
    'location': 'South Korea',
    'country_code': 'SGS',
    'IATA': 'ICN',
    'ICAO': 'RKSI'
  }
}, {
  'id': 95,
  'airline': 'Batik Air',
  'airline_code': 'ID',
  'plane_id': 'ID7158',
  'departure_date': '15/01/19',
  'departure_time': '03:00',
  'duration': '10:00',
  'arrival_date': '15/01/19',
  'arrival_time': '13:00',
  'price': '€4137,47',
  'origin': {
    'city': 'Leonardo da Vinci–Fiumicino Airport',
    'location': 'Fiumicino, Rome, Italy',
    'country': 'Italy',
    'country_code': 'ITA',
    'IATA': 'FCO',
    'ICAO': 'LIRF'
  },
  'destination': {
    'city': 'Munich Airport',
    'location': 'Germany',
    'country_code': 'DEU',
    'IATA': 'MUC',
    'ICAO': 'EDDM'
  }
}, {
  'id': 96,
  'airline': 'Swiss International Air Lines',
  'airline_code': 'LX',
  'plane_id': 'LX4903',
  'departure_date': '11/04/19',
  'departure_time': '06:00',
  'duration': '10:00',
  'arrival_date': '11/04/19',
  'arrival_time': '16:00',
  'price': '€4152,65',
  'origin': {
    'city': 'Brussels Airport',
    'location': 'Zaventem, Flemish Brabant, Flanders, Belgium',
    'country': 'Belgium',
    'country_code': 'BEL',
    'IATA': 'BRU',
    'ICAO': 'EBBR'
  },
  'destination': {
    'city': 'Seoul Incheon International Airport',
    'location': 'South Korea',
    'country_code': 'SGS',
    'IATA': 'ICN',
    'ICAO': 'RKSI'
  }
}, {
  'id': 97,
  'airline': 'Régional Compagnie Aérienne Européenne',
  'airline_code': 'YS',
  'plane_id': 'YS3180',
  'departure_date': '19/01/19',
  'departure_time': '04:00',
  'duration': '1:00',
  'arrival_date': '19/01/19',
  'arrival_time': '05:00',
  'price': '€7072,82',
  'origin': {
    'city': 'Miami International Airport',
    'location': 'Miami-Dade County, Florida, United States',
    'country': 'United States',
    'country_code': 'USA',
    'IATA': 'MIA',
    'ICAO': 'KMIA'
  },
  'destination': {
    'city': 'Taoyuan International Airport',
    'location': 'Taiwan',
    'country_code': 'SYR',
    'IATA': 'TPE',
    'ICAO': 'RCTP'
  }
}, {
  'id': 98,
  'airline': 'Línea Aérea SAPSA',
  'airline_code': 'L7',
  'plane_id': 'L74053',
  'departure_date': '15/03/19',
  'departure_time': '04:00',
  'duration': '7:00',
  'arrival_date': '15/03/19',
  'arrival_time': '11:00',
  'price': '€278,22',
  'origin': {
    'city': 'Abu Dhabi International Airport',
    'location': 'Abu Dhabi, United Arab Emirates',
    'country': 'United Arab Emirates',
    'country_code': 'ARE',
    'IATA': 'AUH',
    'ICAO': 'OMAA'
  },
  'destination': {
    'city': 'Kuala Lumpur International Airport',
    'location': 'Malaysia',
    'country_code': 'MYS',
    'IATA': 'KUL',
    'ICAO': 'WMKK'
  }
}, {
  'id': 99,
  'airline': '*Interstate Airlines*',
  'airline_code': 'I4',
  'plane_id': 'I48776',
  'departure_date': '25/02/19',
  'departure_time': '15:00',
  'duration': '8:00',
  'arrival_date': '25/02/19',
  'arrival_time': '23:00',
  'price': '€8636,83',
  'origin': {
    'city': 'Vienna International Airport',
    'location': 'Vienna, Austria',
    'country': 'Austria',
    'country_code': 'AUT',
    'IATA': 'VIE',
    'ICAO': 'LOWW'
  },
  'destination': {
    'city': 'Madrid-Barajas Airport',
    'location': 'Spain',
    'country_code': 'ESP',
    'IATA': 'MAD',
    'ICAO': 'LEMD'
  }
}, {
  'id': 100,
  'airline': 'Aigle Azur',
  'airline_code': 'ZI',
  'plane_id': 'ZI6594',
  'departure_date': '24/08/18',
  'departure_time': '13:00',
  'duration': '11:00',
  'arrival_date': '25/08/18',
  'arrival_time': '00:00',
  'price': '€6144,58',
  'origin': {
    'city': 'John F. Kennedy International Airport',
    'location': 'Queens, New York City, New York, United States',
    'country': 'United States',
    'country_code': 'USA',
    'IATA': 'JFK',
    'ICAO': 'KJFK'
  },
  'destination': {
    'city': 'Taoyuan International Airport',
    'location': 'Taiwan',
    'country_code': 'SYR',
    'IATA': 'TPE',
    'ICAO': 'RCTP'
  }
}]

export default flights
