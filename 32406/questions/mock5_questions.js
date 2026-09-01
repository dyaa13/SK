window.NCEA_32406_MOCK5_QUESTIONS = [
  // ============================================================
  // QUESTION ONE — AIRPORT TRAVEL
  // ============================================================
  {
    id:"1a", section:1, part:"a", title:"Airport Travel",
    prompt:"The table ranks five domestic routes by the number of passengers carried last year. A new route carried 1.18 million passengers. If it is added to the table, what rank will it have?",
    table:[
      ["Rank","Route","Passengers"],
      ["1","Auckland–Christchurch","1,620,000"],
      ["2","Auckland–Wellington","1,340,000"],
      ["3","Wellington–Christchurch","1,050,000"],
      ["4","Auckland–Queenstown","870,000"],
      ["5","Christchurch–Queenstown","690,000"]
    ],
    type:"mcq", options:["1","2","3","4","5"]
  },
  {
    id:"1b", section:1, part:"b", title:"Airport Travel",
    prompt:"A flight leaves at 7:55 a.m. and lands at 9:20 a.m. How long is the flight?",
    type:"text", suffix:"hours and minutes"
  },
  {
    id:"1c", section:1, part:"c", title:"Airport Travel",
    prompt:"On a simplified flight map, 1 cm represents 120 km. The route between two airports measures 5.5 cm on the map. Approximately how far is the real flight?",
    type:"numeric", suffix:"km"
  },
  {
    id:"1d", section:1, part:"d", title:"Airport Travel",
    prompt:"Two adults and one child are travelling. Adult fares are $86 each and the child fare is $54. A family fare for all three travellers is $215. Is the family fare cheaper? Explain using calculations.",
    type:"longtext"
  },
  {
    id:"1e", section:1, part:"e", title:"Airport Travel",
    prompt:"From the airport, a hotel is 4 km west and 3 km south. Which direction best describes the hotel from the airport?",
    type:"mcq",
    options:[
      "Between West and South-west",
      "Between East and South-east",
      "Between West and North-west",
      "Between East and North-east"
    ]
  },
  {
    id:"1f", section:1, part:"f", title:"Airport Travel",
    prompt:"The histogram shows waiting times at airport security for 80 passengers. A report says, “About 20% of passengers waited 20 minutes or longer.” Is this reasonable? Use numbers from the graph to explain your answer.",
    visual:"mock5AirportHistogram",
    type:"longtext"
  },

  // ============================================================
  // QUESTION TWO — PET CARE
  // ============================================================
  {
    id:"2a", section:2, part:"a", title:"Pet Care",
    prompt:"A town has about 2,800 registered dogs. About 45% are under five years old. About how many dogs is this?",
    type:"numeric", suffix:"dogs"
  },
  {
    id:"2b", section:2, part:"b", title:"Pet Care",
    prompt:"A dog's daily food is divided into 4 equal portions. Three portions have been eaten. What fraction of the daily food has been eaten?",
    visual:"mock5PetFraction",
    type:"mcq", options:["1/4","1/3","1/2","3/4","4/3"]
  },
  {
    id:"2c", section:2, part:"c", title:"Pet Care",
    prompt:"A pet bed normally costs $96. It is on sale for 25% off. What is the sale price?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"2d", section:2, part:"d", title:"Pet Care",
    prompt:"A dog-walking service charges a $5 booking fee plus $0.60 per minute. A walk lasts 35 minutes. How much does the walk cost?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"2e", section:2, part:"e", title:"Pet Care",
    prompt:"The graph shows a dog's weight over six months. A vet says, “The dog's weight increased every month.” Is the vet correct? Use data from the graph to explain your answer.",
    visual:"mock5PetWeight",
    type:"longtext"
  },
  {
    id:"2f", section:2, part:"f", title:"Pet Care",
    prompt:"A rectangular pet-food container is 40 cm long, 25 cm wide, and 35 cm high. How many litres does it hold? Note: 1 litre = 1000 cm³.",
    visual:"mock5PetBox",
    type:"numeric", suffix:"L"
  },

  // ============================================================
  // QUESTION THREE — FARMING
  // ============================================================
  {
    id:"3a", section:3, part:"a", title:"Farming",
    prompt:"A rectangular paddock is 360 m by 250 m. In a typical 30 m by 25 m sample area, a farmer counts about 5 sheep. Estimate how many sheep there may be in the whole paddock.",
    visual:"mock5PaddockSample",
    type:"numeric", suffix:"sheep"
  },
  {
    id:"3b", section:3, part:"b", title:"Farming",
    prompt:"A farm survey shows that 28% of the animals are calves. What is the probability that a randomly selected animal from the survey is a calf?",
    type:"mcq", options:["0.18","0.28","0.38","0.72","0.82"]
  },
  {
    id:"3c", section:3, part:"c", title:"Farming",
    prompt:"The farmer wants to sow a winter crop after buying seed in July. According to the table, what is the earliest suitable month after July for the South Field?",
    table:[
      ["Field","Suitable sowing months"],
      ["North Field","March, April, August, September"],
      ["South Field","February, May, September, October"],
      ["River Field","April, August, November"]
    ],
    type:"mcq", options:["August","September","October","November"]
  },
  {
    id:"3d", section:3, part:"d", title:"Farming",
    prompt:"Each circular water trough needs a clear circle with radius 1.5 m. The troughs are arranged in straight rows and columns inside a rectangular yard measuring 18 m by 12 m. What is the greatest number of troughs that can fit?",
    visual:"mock5TroughSpacing",
    type:"numeric", suffix:"troughs"
  },
  {
    id:"3e", section:3, part:"e", title:"Farming",
    prompt:"How many lines of symmetry does the farm logo below have?",
    visual:"mock5FarmSymmetry",
    type:"numeric", suffix:"lines of symmetry"
  },
  {
    id:"3f", section:3, part:"f", title:"Farming",
    prompt:"The bar graph shows milk production over six months. A farm report says, “Milk production was lowest in May.” Is the report correct? Use months and values from the graph to explain your answer.",
    visual:"mock5MilkGraph",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FOUR — MOBILE PHONES
  // ============================================================
  {
    id:"4a", section:4, part:"a", title:"Mobile Phones",
    prompt:"A phone has a cash price of $1,299. A payment plan requires $99 now and 12 monthly payments of $110. How much more does the payment plan cost than paying cash?",
    type:"numeric", prefix:"$"
  },
  {
    id:"4b", section:4, part:"b", title:"Mobile Phones",
    prompt:"A mobile plan has a fixed monthly fee of $18 plus $2.50 for each extra gigabyte of data. A customer uses 4 extra gigabytes. What is the total monthly charge?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"4c", section:4, part:"c", title:"Mobile Phones",
    prompt:"A 900 MB file downloads at an average rate of 30 MB per second. About how many seconds does the download take?",
    type:"numeric", suffix:"seconds"
  },
  {
    id:"4d", section:4, part:"d", title:"Mobile Phones",
    prompt:"The scatter graph shows phone battery capacity and approximate battery life. Based on the pattern, estimate the battery life of a phone with a 5000 mAh battery.",
    visual:"mock5PhoneScatter",
    type:"numeric", suffix:"hours"
  },
  {
    id:"4e", section:4, part:"e", title:"Mobile Phones",
    prompt:"The diagram shows the viewing angle of a phone stand using a protractor scale. What is the angle? Give your answer as a whole number.",
    visual:"mock5PhoneAngle",
    type:"numeric", suffix:"°"
  },
  {
    id:"4f", section:4, part:"f", title:"Mobile Phones",
    prompt:"The graph shows monthly mobile-data use. A user says, “My data use decreased every month.” Is the statement correct? Use data from the graph to explain your answer.",
    visual:"mock5DataGraph",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FIVE — COMMUNITY EVENT
  // ============================================================
  {
    id:"5a", section:5, part:"a", title:"Community Event",
    prompt:"A city has about 85,000 residents. About 64% attended at least one community event last year. About how many residents is this?",
    type:"mcq", options:["34,000","44,000","54,000","64,000","74,000"]
  },
  {
    id:"5b", section:5, part:"b", title:"Community Event",
    prompt:"Six volunteers are available. One will be team leader and a different person will be deputy leader. How many different leader–deputy combinations are possible?",
    type:"numeric", suffix:"combinations"
  },
  {
    id:"5c", section:5, part:"c", title:"Community Event",
    prompt:"A participant walks 6 km in 1 hour 12 minutes. What is the average speed in kilometres per hour?",
    type:"numeric", suffix:"km/h"
  },
  {
    id:"5d", section:5, part:"d", title:"Community Event",
    prompt:"A rectangular stage is 9 m long and 6.5 m wide. What is the area of the stage?",
    type:"numeric", suffix:"m²"
  },
  {
    id:"5e", section:5, part:"e", title:"Community Event",
    prompt:"The table shows three race times. A reporter says, “The silver finisher was exactly one tenth of a second slower than the gold finisher.” Is the statement correct? Use a calculation with decimals to explain your answer.",
    table:[
      ["Place","Time"],
      ["Gold","51.76 seconds"],
      ["Silver","51.85 seconds"],
      ["Bronze","52.20 seconds"]
    ],
    type:"longtext"
  },
  {
    id:"5f", section:5, part:"f", title:"Community Event",
    prompt:"A walking route finishes 2 km west and 5 km north of the start. Which direction best describes the finishing point from the start?",
    visual:"mock5Direction",
    type:"mcq",
    options:[
      "Between North and North-west",
      "Between North and North-east",
      "Between South and South-west",
      "Between West and South-west"
    ]
  }
];
