window.NCEA_32406_MOCK4_QUESTIONS = [
  // ============================================================
  // QUESTION ONE — WEEKEND MARKET
  // ============================================================
  {
    id:"1a", section:1, part:"a", title:"Weekend Market",
    prompt:"The table ranks market stalls by how much money they made during the summer season. A new stall made $1.05 million. If it is added to the table, what rank will it have?",
    table:[
      ["Rank","Market stall","Money made"],
      ["1","Harbour Produce","$1,420,000"],
      ["2","The Bread Shed","$1,180,000"],
      ["3","Garden Kitchen","$960,000"],
      ["4","Local Crafts","$740,000"],
      ["5","Sweet Corner","$580,000"]
    ],
    type:"mcq", options:["1","2","3","4","5"]
  },
  {
    id:"1b", section:1, part:"b", title:"Weekend Market",
    prompt:"A stall holder starts work at 9:35 a.m. and finishes at 1:20 p.m. How long is the shift?",
    type:"text", suffix:"hours and minutes"
  },
  {
    id:"1c", section:1, part:"c", title:"Weekend Market",
    prompt:"A customer's shopping costs $47.00 before discounts. A $6 membership gives 15% off the shopping. After including the membership cost, how much money does the customer save?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"1d", section:1, part:"d", title:"Weekend Market",
    prompt:"You want two sandwiches and two drinks. A sandwich costs $9.50 and a drink costs $4.20. A combo containing one sandwich and one drink costs $12.50. Is it cheaper to buy two combos or to buy all four items separately? Explain using calculations.",
    type:"longtext"
  },
  {
    id:"1e", section:1, part:"e", title:"Weekend Market",
    prompt:"The histogram shows how much 60 customers spent. A stall holder says, “About one quarter of the customers spent $30 or more.” Is this reasonable? Use numbers from the graph to explain your answer.",
    visual:"mock4SpendHistogram",
    type:"longtext"
  },
  {
    id:"1f", section:1, part:"f", title:"Weekend Market",
    prompt:"A rectangular storage crate is 50 cm long, 30 cm wide, and 24 cm high. How many litres does it hold? Note: 1 litre = 1000 cm³.",
    visual:"mock4Crate",
    type:"numeric", suffix:"L"
  },

  // ============================================================
  // QUESTION TWO — HEALTHY LIVING
  // ============================================================
  {
    id:"2a", section:2, part:"a", title:"Healthy Living",
    prompt:"A school has 360 students. About 35% usually walk or cycle to school. About how many students is this?",
    type:"numeric", suffix:"students"
  },
  {
    id:"2b", section:2, part:"b", title:"Healthy Living",
    prompt:"The diagram divides a daily water target into 5 equal parts. Two of the parts are drunk before lunchtime. What fraction of the daily target is drunk before lunchtime?",
    visual:"mock4WaterFraction",
    type:"mcq", options:["1/5","2/5","2/3","3/5","4/5"]
  },
  {
    id:"2c", section:2, part:"c", title:"Healthy Living",
    prompt:"A home exercise bike normally costs $650. It is on sale for 20% off. What is the sale price?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"2d", section:2, part:"d", title:"Healthy Living",
    prompt:"During an exercise session, a person keeps a stepping rate between 110 and 130 steps per minute. What is the greatest number of steps they should do in 8 minutes?",
    type:"numeric", suffix:"steps"
  },
  {
    id:"2e", section:2, part:"e", title:"Healthy Living",
    prompt:"The graph shows heart-rate readings during a workout. The recommended range is from 60 to 100 beats per minute, inclusive. How many readings are outside this range?",
    visual:"mock4HeartRate",
    type:"numeric", suffix:"readings"
  },
  {
    id:"2f", section:2, part:"f", title:"Healthy Living",
    prompt:"On a sunny day, a person's skin may start to burn after 12 minutes without protection. A sunscreen is described as giving protection for 25 times as long when used correctly. How many hours is this?",
    type:"numeric", suffix:"hours"
  },

  // ============================================================
  // QUESTION THREE — SCHOOL CAMP
  // ============================================================
  {
    id:"3a", section:3, part:"a", title:"School Camp",
    prompt:"Vegetarian meals make up 3/8 of all camp meals. If 18 vegetarian meals are prepared, how many meals are prepared in total?",
    type:"numeric", suffix:"meals"
  },
  {
    id:"3b", section:3, part:"b", title:"School Camp",
    prompt:"The camp is in September. The table shows suitable months for different activities. What is the earliest month after September when mountain biking is suitable?",
    table:[
      ["Activity","Suitable months"],
      ["Mountain biking","April, May, October, November"],
      ["Kayaking","September, October, November, December"],
      ["Tramping","March, April, May, September, October, November"]
    ],
    type:"mcq", options:["October","November","December","January"]
  },
  {
    id:"3c", section:3, part:"c", title:"School Camp",
    prompt:"Each tent needs a clear circular space with radius 1 m. Tents are arranged in straight rows and columns inside a rectangular campsite measuring 12 m by 8 m. What is the greatest number of tents that can fit?",
    visual:"mock4TentSpacing",
    type:"numeric", suffix:"tents"
  },
  {
    id:"3d", section:3, part:"d", title:"School Camp",
    prompt:"The activity survey shows that 20% of students chose cycling. What is the probability that a randomly selected student from the survey chose cycling?",
    table:[
      ["Activity","Percentage"],
      ["Tramping","40%"],
      ["Kayaking","25%"],
      ["Cycling","20%"],
      ["Other","15%"]
    ],
    type:"mcq", options:["0.15","0.20","0.25","0.40","0.80"]
  },
  {
    id:"3e", section:3, part:"e", title:"School Camp",
    prompt:"How many lines of symmetry does the camp logo below have?",
    visual:"mock4CampSymmetry",
    type:"numeric", suffix:"lines of symmetry"
  },
  {
    id:"3f", section:3, part:"f", title:"School Camp",
    prompt:"The graph shows the number of students attending camp over several years. A report says, “Attendance increased every year.” Is the report correct? Use values from the graph to explain your answer.",
    visual:"mock4CampAttendance",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FOUR — ELECTRIC CARS
  // ============================================================
  {
    id:"4a", section:4, part:"a", title:"Electric Cars",
    prompt:"An electric car has a cash price of $38,900. A payment plan requires a $5,000 deposit and 36 monthly payments of $980. How much more does the payment plan cost than paying cash?",
    type:"numeric", prefix:"$"
  },
  {
    id:"4b", section:4, part:"b", title:"Electric Cars",
    prompt:"A public charger has a fixed connection fee of $2.50 plus $0.28 for each kWh of electricity used. A car uses 42 kWh. How much does the charging session cost?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"4c", section:4, part:"c", title:"Electric Cars",
    prompt:"A car travels 54 km at an average speed of 72 km/h. About how many minutes does the trip take?",
    type:"numeric", suffix:"minutes"
  },
  {
    id:"4d", section:4, part:"d", title:"Electric Cars",
    prompt:"The scatter graph shows battery capacity and driving range for several electric cars. Based on the pattern, estimate the range of a car with a 65 kWh battery.",
    visual:"mock4CarScatter",
    type:"numeric", suffix:"km"
  },
  {
    id:"4e", section:4, part:"e", title:"Electric Cars",
    prompt:"The diagram shows the angle of a charging ramp using a protractor scale. What is the angle? Give your answer as a whole number.",
    visual:"mock4RampAngle",
    type:"numeric", suffix:"°"
  },
  {
    id:"4f", section:4, part:"f", title:"Electric Cars",
    prompt:"The graph shows the number of electric-car registrations over several years. A news post says, “Registrations increased every year.” Is the post correct? Use data from the graph to explain your answer.",
    visual:"mock4Registrations",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FIVE — COMMUNITY SPORTS
  // ============================================================
  {
    id:"5a", section:5, part:"a", title:"Community Sports",
    prompt:"A district has about 2,400 young people. About 58% take part in organised sport. About how many young people is this?",
    type:"mcq", options:["1,000","1,200","1,400","1,600","1,800"]
  },
  {
    id:"5b", section:5, part:"b", title:"Community Sports",
    prompt:"A student says the marked angle between two training lines is about 30°. Is that reasonable? Explain how the angle can be estimated without using a protractor.",
    visual:"mock4SportsAngle",
    type:"longtext"
  },
  {
    id:"5c", section:5, part:"c", title:"Community Sports",
    prompt:"A cyclist travels 15 km in 45 minutes. What is the cyclist's average speed in kilometres per hour?",
    type:"numeric", suffix:"km/h"
  },
  {
    id:"5d", section:5, part:"d", title:"Community Sports",
    prompt:"A rectangular water tank at a sports field is 2 m long, 1.5 m wide, and 0.8 m deep. How many cubic metres (m³) of water can it hold?",
    visual:"mock4SportsTank",
    type:"numeric", suffix:"m³"
  },
  {
    id:"5e", section:5, part:"e", title:"Community Sports",
    prompt:"The table shows race times. A commentator says, “The silver finisher was exactly one tenth of a second slower than the gold finisher.” Is the statement correct? Use a calculation with decimals to explain your answer.",
    table:[
      ["Place","Time"],
      ["Gold","38.47 seconds"],
      ["Silver","38.58 seconds"],
      ["Bronze","38.91 seconds"]
    ],
    type:"longtext"
  },
  {
    id:"5f", section:5, part:"f", title:"Community Sports",
    prompt:"An athlete finishes 3 km east and 7 km south of the start point. Which direction best describes the athlete's position from the start?",
    visual:"mock4SportsDirection",
    type:"mcq",
    options:[
      "Between South and South-east",
      "Between North and North-east",
      "Between South and South-west",
      "Between East and North-east"
    ]
  }
];
