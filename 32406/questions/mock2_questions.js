window.NCEA_32406_MOCK2_QUESTIONS = [
  // ============================================================
  // QUESTION ONE — COASTAL JOURNEY
  // ============================================================
  {
    id:"1a", section:1, part:"a", title:"Coastal Journey",
    prompt:"A ferry leaves Picton at 8:35 a.m. and arrives in Wellington at 11:20 a.m. How long does the trip take?",
    type:"text", suffix:"hours and minutes"
  },
  {
    id:"1b", section:1, part:"b", title:"Coastal Journey",
    prompt:"From a campsite, the lighthouse is 3 km east and 4 km south. Which compass direction is the lighthouse from the campsite?",
    type:"mcq",
    options:["North-east","North-west","South-east","South-west"]
  },
  {
    id:"1c", section:1, part:"c", title:"Coastal Journey",
    prompt:"On a simplified map, 1 cm represents 40 km. The route from Town A to Town B measures 6.5 cm on the map. Approximately how far is the real journey?",
    type:"numeric", suffix:"km"
  },
  {
    id:"1d", section:1, part:"d", title:"Coastal Journey",
    prompt:"Two adults and two children are travelling. Adult tickets cost $42 each and child tickets cost $24 each. A family pass for the four travellers costs $120. Is the family pass cheaper? Explain using calculations.",
    type:"longtext"
  },
  {
    id:"1e", section:1, part:"e", title:"Coastal Journey",
    prompt:"The table shows the departure and arrival times for three buses. Which bus has the shortest travel time?",
    table:[
      ["Bus","Departs","Arrives"],
      ["A","09:15","11:05"],
      ["B","10:40","12:20"],
      ["C","13:05","14:50"]
    ],
    type:"mcq", options:["Bus A","Bus B","Bus C"]
  },
  {
    id:"1f", section:1, part:"f", title:"Coastal Journey",
    prompt:"The histogram shows the delays, in minutes, for 40 ferry trips. A traveller says, “About 25% of the ferries were delayed by 15 minutes or more.” Is the traveller correct? Use numbers from the graph to explain your answer.",
    visual:"delayHistogram",
    type:"longtext"
  },

  // ============================================================
  // QUESTION TWO — FOOD FESTIVAL
  // ============================================================
  {
    id:"2a", section:2, part:"a", title:"Food Festival",
    prompt:"There are 480 visitors at a food festival. About 35% of them buy lunch from the main food court. About how many visitors is this?",
    type:"numeric", suffix:"visitors"
  },
  {
    id:"2b", section:2, part:"b", title:"Food Festival",
    prompt:"Vegetables make up 2/5 of a recommended daily plate. If 6 servings of vegetables represent that 2/5, how many servings are recommended in total?",
    type:"numeric", suffix:"servings"
  },
  {
    id:"2c", section:2, part:"c", title:"Food Festival",
    prompt:"A food stall appliance normally costs $840. It is reduced by 15%. What is the sale price?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"2d", section:2, part:"d", title:"Food Festival",
    prompt:"A food truck pays a fixed $4.50 electricity fee plus $0.28 per minute while connected. It is connected for 45 minutes. How much does it pay?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"2e", section:2, part:"e", title:"Food Festival",
    prompt:"The table shows the reasons visitors gave for attending the festival. Which statement is best supported by the data?",
    table:[
      ["Reason","Percentage"],
      ["Food","52%"],
      ["Music","28%"],
      ["Friends / family","12%"],
      ["Other","8%"]
    ],
    type:"mcq",
    options:[
      "Exactly half of visitors came for the food.",
      "About one in four visitors came for the music.",
      "More visitors came for other reasons than for friends or family.",
      "Food and music together account for less than half of visitors."
    ]
  },
  {
    id:"2f", section:2, part:"f", title:"Food Festival",
    prompt:"Seven donation amounts are $10, $20, $15, $30, $20, $25, and $20. What is the median donation?",
    type:"numeric", prefix:"$"
  },

  // ============================================================
  // QUESTION THREE — WILDLIFE RESERVE
  // ============================================================
  {
    id:"3a", section:3, part:"a", title:"Wildlife Reserve",
    prompt:"A wildlife reserve is 600 m by 450 m. In a typical 30 m by 30 m sample area, researchers count about 6 birds. Estimate how many birds there may be in the whole reserve.",
    visual:"reserveSample",
    type:"numeric", suffix:"birds"
  },
  {
    id:"3b", section:3, part:"b", title:"Wildlife Reserve",
    prompt:"From the visitor centre, the bird hide is 4 km west and 3 km north. Which direction is the bird hide from the visitor centre?",
    type:"mcq",
    options:["North-east","North-west","South-east","South-west"]
  },
  {
    id:"3c", section:3, part:"c", title:"Wildlife Reserve",
    prompt:"A reserve has about 1,800 birds. About 22% are tūī. About how many tūī are there?",
    type:"numeric", suffix:"tūī"
  },
  {
    id:"3d", section:3, part:"d", title:"Wildlife Reserve",
    prompt:"If 45% of the birds in a survey are fantails, what is the probability that a randomly selected bird from the survey is a fantail?",
    type:"mcq",
    options:["0.15","0.25","0.45","0.55","0.65"]
  },
  {
    id:"3e", section:3, part:"e", title:"Wildlife Reserve",
    prompt:"Each circular feeding station needs a clear circle with radius 0.5 m. The stations are arranged in straight rows and columns inside a rectangular area 5 m by 8 m. What is the greatest number of stations that can fit?",
    visual:"feedingStations",
    type:"numeric", suffix:"stations"
  },
  {
    id:"3f", section:3, part:"f", title:"Wildlife Reserve",
    prompt:"The graph shows the estimated number of nesting pairs over several years. A report says, “The number of nesting pairs has increased steadily every year.” Is the report correct? Use data from the graph to explain your answer.",
    visual:"nestingGraph",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FOUR — HOME RENOVATION
  // ============================================================
  {
    id:"4a", section:4, part:"a", title:"Home Renovation",
    prompt:"A heat pump has a cash price of $2,240. A payment plan requires $400 now and six payments of $330. How much more does the payment plan cost than the cash price?",
    type:"numeric", prefix:"$"
  },
  {
    id:"4b", section:4, part:"b", title:"Home Renovation",
    prompt:"A rectangular room is 5.4 m long and 4.2 m wide. What is the floor area?",
    type:"numeric", suffix:"m²"
  },
  {
    id:"4c", section:4, part:"c", title:"Home Renovation",
    prompt:"Square floor tiles measure 30 cm by 30 cm. Ignoring waste, how many whole tiles are needed to cover a 22.68 m² floor?",
    type:"numeric", suffix:"tiles"
  },
  {
    id:"4d", section:4, part:"d", title:"Home Renovation",
    prompt:"A rectangular water tank is 80 cm long, 50 cm wide, and 40 cm high. How many litres does it hold? Note: 1 litre = 1000 cm³.",
    visual:"renovationTank",
    type:"numeric", suffix:"L"
  },
  {
    id:"4e", section:4, part:"e", title:"Home Renovation",
    prompt:"The scatter graph shows house floor area and the amount of paint used. Based on the pattern, estimate how many litres of paint would be used for a house with a floor area of 140 m².",
    visual:"paintScatter",
    type:"numeric", suffix:"L"
  },
  {
    id:"4f", section:4, part:"f", title:"Home Renovation",
    prompt:"The tile design below has rotational and reflection symmetry. How many lines of symmetry does the design have?",
    visual:"tileSymmetry",
    type:"numeric", suffix:"lines of symmetry"
  },

  // ============================================================
  // QUESTION FIVE — SCHOOL SPORTS DAY
  // ============================================================
  {
    id:"5a", section:5, part:"a", title:"School Sports Day",
    prompt:"A school has 1,250 students. About 68% take part in at least one sports-day event. About how many students is this?",
    type:"mcq",
    options:["650","750","850","950","1,050"]
  },
  {
    id:"5b", section:5, part:"b", title:"School Sports Day",
    prompt:"The diagram shows an angle made by two running lanes. A student says the angle is about 45°. Is that a reasonable estimate? Explain without using a protractor.",
    visual:"laneAngle",
    type:"longtext"
  },
  {
    id:"5c", section:5, part:"c", title:"School Sports Day",
    prompt:"A runner completes 100 metres in 16 seconds. What is the runner's average speed in metres per second?",
    type:"numeric", suffix:"m/s"
  },
  {
    id:"5d", section:5, part:"d", title:"School Sports Day",
    prompt:"A basketball court is 28 m long and 15 m wide. What is its area?",
    type:"numeric", suffix:"m²"
  },
  {
    id:"5e", section:5, part:"e", title:"School Sports Day",
    prompt:"A basketball player says, “I made exactly 72% of my free throws.” She made 18 shots out of 25 attempts. Is her statement correct? Use a calculation to explain your answer.",
    type:"longtext"
  },
  {
    id:"5f", section:5, part:"f", title:"School Sports Day",
    prompt:"A cross-country runner travels from the start point 5 km east and 2 km north. Which direction best describes the runner's position from the start?",
    visual:"sportsDirection",
    type:"mcq",
    options:[
      "Between East and North-east",
      "Between West and South-west",
      "Between East and South-east",
      "Between West and North-west"
    ]
  }
];
