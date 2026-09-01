window.NCEA_32406_MOCK1_QUESTIONS = [
  // ============================================================
  // QUESTION ONE — THEME PARK
  // ============================================================
  {
    id:"1a", section:1, part:"a", title:"Theme Park",
    prompt:"The table ranks theme parks by how much money they made last year. A new park, Summit Realm, made $1.08 billion. If Summit Realm is added to the table, what rank will it be?",
    table:[
      ["Rank","Theme park","Money made"],
      ["1","SkyQuest","$1,460,000,000"],
      ["2","Ocean Kingdom","$1,230,000,000"],
      ["3","Galaxy Park","$965,000,000"],
      ["4","Adventure Bay","$842,000,000"],
      ["5","Kiwi World","$715,000,000"]
    ],
    type:"mcq", options:["1","2","3","4","5"]
  },
  {
    id:"1b", section:1, part:"b", title:"Theme Park",
    prompt:"The histogram shows the waiting times for 90 rides during one afternoon. A visitor says, “About one third of the rides had a wait of 40 minutes or longer.” Is the visitor correct? Use numbers from the graph to explain your answer.",
    visual:"waitHistogram",
    type:"longtext"
  },
  {
    id:"1c", section:1, part:"c", title:"Theme Park",
    prompt:"A live show starts at 4:15 p.m. and lasts 107 minutes. What time will the show end?",
    type:"text", suffix:"p.m."
  },
  {
    id:"1d", section:1, part:"d", title:"Theme Park",
    prompt:"Two adults, one student, and one child are buying entry tickets. A $12 membership gives 20% off all ticket prices. How much money will they save by buying the membership? Include the $12 membership cost in your calculation.",
    table:[
      ["Ticket","Price"],
      ["Adult","$28.00"],
      ["Student","$23.00"],
      ["Child","$18.00"]
    ],
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"1e", section:1, part:"e", title:"Theme Park",
    prompt:"You want one large fries, two large drinks, and one ice cream. Is it cheaper to buy the combo and add the ice cream, or to pay the usual prices? Explain your answer using the prices below.",
    table:[
      ["Item","Usual price"],
      ["Large fries","$12.00"],
      ["Large drink","$10.00"],
      ["Ice cream","$7.00"],
      ["Combo: large fries + 2 large drinks","$30.50"]
    ],
    type:"longtext"
  },
  {
    id:"1f", section:1, part:"f", title:"Theme Park",
    prompt:"A rectangular souvenir box is 24 cm long, 10 cm wide, and 15 cm high. How many litres does the box hold? Note: 1 litre = 1000 cm³.",
    visual:"boxDimensions",
    type:"numeric", suffix:"L"
  },

  // ============================================================
  // QUESTION TWO — WELLBEING
  // ============================================================
  {
    id:"2a", section:2, part:"a", title:"Wellbeing",
    prompt:"The human body has about 640 skeletal muscles. About 15% of them are in the legs. About how many muscles is this?",
    type:"numeric", suffix:"muscles"
  },
  {
    id:"2b", section:2, part:"b", title:"Wellbeing",
    prompt:"The diagram represents a child's height using 6 equal parts. The head takes up 1 of those parts. What fraction of the child's total height is the head?",
    visual:"bodyFraction",
    type:"mcq", options:["1/4","1/5","1/6","1/7","1/3"]
  },
  {
    id:"2c", section:2, part:"c", title:"Wellbeing",
    prompt:"A fitness watch costs $480. It is on sale with a 25% discount. How much will it cost after the discount?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"2d", section:2, part:"d", title:"Wellbeing",
    prompt:"During a rowing workout, a person should row at a rate of 28 to 34 strokes per minute. What is the greatest number of strokes they should do in 12 minutes?",
    type:"numeric", suffix:"strokes"
  },
  {
    id:"2e", section:2, part:"e", title:"Wellbeing",
    prompt:"The graph shows a person's hydration score during the day. The recommended range is from 4 to 8, inclusive. How many readings are outside the recommended range?",
    visual:"hydrationGraph",
    type:"numeric", suffix:"readings"
  },
  {
    id:"2f", section:2, part:"f", title:"Wellbeing",
    prompt:"A reusable heat pack normally stays warm for 24 minutes. An insulated cover keeps it effective for 15 times as long. How many hours is this?",
    type:"numeric", suffix:"hours"
  },

  // ============================================================
  // QUESTION THREE — RECYCLING
  // ============================================================
  {
    id:"3a", section:3, part:"a", title:"Recycling",
    prompt:"Paper and cardboard make up 2/5 of the material collected by a school recycling programme. The school collects 8 bins of paper and cardboard each day. If the same proportions apply, how many bins of recycled material are collected in total each day?",
    type:"numeric", suffix:"bins"
  },
  {
    id:"3b", section:3, part:"b", title:"Recycling",
    prompt:"You live in Canterbury and replace an old electronic device in June. According to the collection timetable, what is the earliest month after June when you can take it to a regional e-waste collection?",
    table:[
      ["Region","Collection months"],
      ["Auckland","January, March, May, September, November"],
      ["Canterbury","February, April, September, November"],
      ["Otago","March, October, December"]
    ],
    type:"mcq", options:["July","August","September","October","November"]
  },
  {
    id:"3c", section:3, part:"c", title:"Recycling",
    prompt:"Circular sorting bins need a clear circular space with radius 0.30 m. The bins are placed in straight rows and columns in a rectangular storage area measuring 2.4 m by 3.6 m. What is the greatest number of bins that can fit?",
    visual:"binSpacing",
    type:"numeric", suffix:"bins"
  },
  {
    id:"3d", section:3, part:"d", title:"Recycling",
    prompt:"The table shows the percentage of households that recycled every week in two years. Select the statement that correctly uses the information.",
    table:[
      ["Year","Recycle weekly","Do not recycle weekly"],
      ["2015","44%","56%"],
      ["2025","63%","37%"]
    ],
    type:"mcq",
    options:[
      "Households recycled less material in 2015 than in 2025.",
      "About three in every five households recycled weekly in 2025.",
      "There was a 63% increase in weekly recycling between 2015 and 2025.",
      "Fewer households recycled weekly in 2025 than in 2015."
    ]
  },
  {
    id:"3e", section:3, part:"e", title:"Recycling",
    prompt:"The recycling-station design below has matching sections on opposite sides. How many lines of symmetry does the design have?",
    visual:"symmetryDesign",
    type:"numeric", suffix:"lines of symmetry"
  },
  {
    id:"3f", section:3, part:"f", title:"Recycling",
    prompt:"The graph shows the average monthly recycling collection fee. An online post says, “Collection fees are lowest in January.” Is the post correct? Use months and prices from the graph to explain your answer.",
    visual:"recyclingFees",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FOUR — E-BIKES
  // ============================================================
  {
    id:"4a", section:4, part:"a", title:"E-bikes",
    prompt:"An e-bike has a cash price of $1,799. On a payment plan, you pay $350 now and then four payments of $390. How much more does the payment plan cost than the cash price?",
    type:"numeric", prefix:"$"
  },
  {
    id:"4b", section:4, part:"b", title:"E-bikes",
    prompt:"Hiring an e-bike costs $1.50 to unlock, plus $0.42 per minute. Gina rides for 22 minutes. How much does she pay?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"4c", section:4, part:"c", title:"E-bikes",
    prompt:"A person travels 7.5 km on an e-bike at an average speed of 25 km/h. About how many minutes does the trip take?",
    type:"numeric", suffix:"minutes"
  },
  {
    id:"4d", section:4, part:"d", title:"E-bikes",
    prompt:"The scatter graph shows battery power and top speed for several e-bikes. Based on the pattern, estimate the top speed of a 700 W e-bike.",
    visual:"powerScatter",
    type:"numeric", suffix:"km/h"
  },
  {
    id:"4e", section:4, part:"e", title:"E-bikes",
    prompt:"The diagram shows the head angle of an e-bike using a protractor scale. What is the angle? Give your answer as a whole number.",
    visual:"protractor",
    type:"numeric", suffix:"°"
  },
  {
    id:"4f", section:4, part:"f", title:"E-bikes",
    prompt:"The graph shows the number of insurance claims made by e-bike riders from 2019 to 2025. Does the graph show that riders are making more insurance claims over time? Use information from the graph to explain your answer.",
    visual:"claimsGraph",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FIVE — OUTDOOR ADVENTURE
  // ============================================================
  {
    id:"5a", section:5, part:"a", title:"Outdoor Adventure",
    prompt:"A region has about 1,250,000 people. About 64% of them used a walking or tramping track last year. About how many people is this?",
    type:"mcq",
    options:["0.5 million","0.8 million","1.0 million","1.2 million","1.6 million"]
  },
  {
    id:"5b", section:5, part:"b", title:"Outdoor Adventure",
    prompt:"The red angle in the diagram is claimed to be 30°. Is that reasonable? Explain how the angle can be estimated without using a protractor.",
    visual:"angleEstimate",
    type:"longtext"
  },
  {
    id:"5c", section:5, part:"c", title:"Outdoor Adventure",
    prompt:"A hiker travels 7.2 km in 1.5 hours. What is the hiker's average speed in kilometres per hour?",
    type:"numeric", suffix:"km/h"
  },
  {
    id:"5d", section:5, part:"d", title:"Outdoor Adventure",
    prompt:"A rectangular water tank is 1.2 m long, 0.8 m wide, and 0.5 m deep. How many cubic metres (m³) of water can it hold?",
    visual:"waterTank",
    type:"numeric", suffix:"m³"
  },
  {
    id:"5e", section:5, part:"e", title:"Outdoor Adventure",
    prompt:"The table shows the finishing times of three competitors. A report says, “The silver finisher was exactly one tenth of a second slower than the gold finisher.” Is the statement correct? Use a calculation with decimals to explain your answer.",
    table:[
      ["Place","Time"],
      ["Gold","42.86 seconds"],
      ["Silver","42.95 seconds"],
      ["Bronze","43.31 seconds"]
    ],
    type:"longtext"
  },
  {
    id:"5f", section:5, part:"f", title:"Outdoor Adventure",
    prompt:"A tramper starts at Hut A and travels 6 km west and 2 km south to Hut B. Which direction best describes the journey from Hut A to Hut B?",
    visual:"directionMap",
    type:"mcq",
    options:[
      "Between East and North-east",
      "Between West and South-west",
      "Between East and South-east",
      "Between West and North-west"
    ]
  }
];
