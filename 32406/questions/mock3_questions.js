window.NCEA_32406_MOCK3_QUESTIONS = [
  // ============================================================
  // QUESTION ONE — PUBLIC TRANSPORT
  // ============================================================
  {
    id:"1a", section:1, part:"a", title:"Public Transport",
    prompt:"The table ranks regional rail services by the number of passenger trips made last year. A new service recorded 1.35 million passenger trips. If it is added to the table, what rank will it have?",
    table:[
      ["Rank","Rail service","Passenger trips"],
      ["1","Harbour Line","1,820,000"],
      ["2","Northern Express","1,490,000"],
      ["3","Plains Link","1,120,000"],
      ["4","Coastal Rail","880,000"],
      ["5","Valley Line","610,000"]
    ],
    type:"mcq", options:["1","2","3","4","5"]
  },
  {
    id:"1b", section:1, part:"b", title:"Public Transport",
    prompt:"A train leaves at 9:48 a.m. and arrives at 12:23 p.m. How long is the journey?",
    type:"text", suffix:"hours and minutes"
  },
  {
    id:"1c", section:1, part:"c", title:"Public Transport",
    prompt:"On a route map, 1 cm represents 25 km. The route between two towns measures 7.2 cm. Approximately how far apart are the towns?",
    type:"numeric", suffix:"km"
  },
  {
    id:"1d", section:1, part:"d", title:"Public Transport",
    prompt:"A single bus trip costs $5.80. A visitor expects to make four bus trips in one day. A day pass costs $19.50. Is the day pass cheaper? Explain using calculations.",
    type:"longtext"
  },
  {
    id:"1e", section:1, part:"e", title:"Public Transport",
    prompt:"From the station, the museum is 5 km east and 2 km north. Which direction best describes the museum from the station?",
    type:"mcq",
    options:[
      "Between East and North-east",
      "Between West and South-west",
      "Between East and South-east",
      "Between West and North-west"
    ]
  },
  {
    id:"1f", section:1, part:"f", title:"Public Transport",
    prompt:"The histogram shows delays for 50 bus services. A commuter says, “About one quarter of the buses were delayed by 10 minutes or more.” Is the commuter correct? Use numbers from the graph to explain your answer.",
    visual:"mock3DelayHistogram",
    type:"longtext"
  },

  // ============================================================
  // QUESTION TWO — COMMUNITY CAFE
  // ============================================================
  {
    id:"2a", section:2, part:"a", title:"Community Cafe",
    prompt:"A community cafe serves about 620 customers in a week. About 15% buy a takeaway breakfast. About how many customers is this?",
    type:"numeric", suffix:"customers"
  },
  {
    id:"2b", section:2, part:"b", title:"Community Cafe",
    prompt:"A meal plan says that 3/8 of the daily servings should be fruit and vegetables. If this represents 9 servings, how many servings are recommended in total?",
    type:"numeric", suffix:"servings"
  },
  {
    id:"2c", section:2, part:"c", title:"Community Cafe",
    prompt:"A coffee machine normally costs $575. It is on sale for 20% off. What is the sale price?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"2d", section:2, part:"d", title:"Community Cafe",
    prompt:"A mobile coffee cart pays a fixed site fee of $6.00 plus $0.35 for each minute it uses an electrical outlet. It is connected for 32 minutes. How much does it pay?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"2e", section:2, part:"e", title:"Community Cafe",
    prompt:"Nine customer donations are $8, $12, $9, $15, $12, $20, $11, $12, and $18. What is the median donation?",
    type:"numeric", prefix:"$"
  },
  {
    id:"2f", section:2, part:"f", title:"Community Cafe",
    prompt:"A rectangular storage container is 40 cm long, 25 cm wide, and 30 cm high. How many litres does it hold? Note: 1 litre = 1000 cm³.",
    visual:"mock3CafeBox",
    type:"numeric", suffix:"L"
  },

  // ============================================================
  // QUESTION THREE — CONSERVATION PROJECT
  // ============================================================
  {
    id:"3a", section:3, part:"a", title:"Conservation Project",
    prompt:"A conservation area is 500 m by 360 m. Researchers count about 4 lizards in a typical 20 m by 20 m sample area. Estimate how many lizards may be in the whole conservation area.",
    visual:"mock3SampleArea",
    type:"numeric", suffix:"lizards"
  },
  {
    id:"3b", section:3, part:"b", title:"Conservation Project",
    prompt:"In one survey, 36% of the tracked animals are geckos. What is the probability that a randomly selected tracked animal is a gecko?",
    type:"mcq", options:["0.26","0.36","0.46","0.64","0.74"]
  },
  {
    id:"3c", section:3, part:"c", title:"Conservation Project",
    prompt:"You visit the reserve in August and will volunteer at the forest margin. The table shows suitable planting months. What is the earliest suitable month after August for the forest margin?",
    table:[
      ["Planting area","Suitable months"],
      ["Wetland edge","March, April, October, November"],
      ["Forest margin","April, May, September, October"],
      ["Open grassland","May, June, October"]
    ],
    type:"mcq", options:["September","October","November","December"]
  },
  {
    id:"3d", section:3, part:"d", title:"Conservation Project",
    prompt:"Each circular monitoring station needs a clear circle with radius 0.4 m. The stations are arranged in straight rows and columns inside a rectangular area measuring 4 m by 6.4 m. What is the greatest number of stations that can fit?",
    visual:"mock3Monitoring",
    type:"numeric", suffix:"stations"
  },
  {
    id:"3e", section:3, part:"e", title:"Conservation Project",
    prompt:"How many lines of symmetry does the reserve logo below have?",
    visual:"mock3Symmetry",
    type:"numeric", suffix:"lines of symmetry"
  },
  {
    id:"3f", section:3, part:"f", title:"Conservation Project",
    prompt:"The graph shows estimated nesting pairs from 2020 to 2025. A report says, “The number of nesting pairs increased every year.” Is the report correct? Use values from the graph to explain your answer.",
    visual:"mock3Nesting",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FOUR — HOME ENERGY
  // ============================================================
  {
    id:"4a", section:4, part:"a", title:"Home Energy",
    prompt:"A solar system has a cash price of $5,890. A payment plan requires $1,000 now and ten monthly payments of $520. How much more does the payment plan cost than paying cash?",
    type:"numeric", prefix:"$"
  },
  {
    id:"4b", section:4, part:"b", title:"Home Energy",
    prompt:"An electricity plan has a fixed daily charge of $1.20 plus $0.32 per kWh used. A household uses 18 kWh in one day. What is the total electricity charge for that day?",
    type:"numeric", prefix:"$", decimals:2
  },
  {
    id:"4c", section:4, part:"c", title:"Home Energy",
    prompt:"A 2 kW heater runs for 3.5 hours. Energy used is power × time. How many kWh of energy does the heater use?",
    type:"numeric", suffix:"kWh"
  },
  {
    id:"4d", section:4, part:"d", title:"Home Energy",
    prompt:"The scatter graph shows the number of solar panels and their approximate power output. Based on the pattern, estimate the output for 9 panels.",
    visual:"mock3SolarScatter",
    type:"numeric", suffix:"kW"
  },
  {
    id:"4e", section:4, part:"e", title:"Home Energy",
    prompt:"The diagram shows the angle of a roof. What is the angle? Give your answer as a whole number.",
    visual:"mock3RoofAngle",
    type:"numeric", suffix:"°"
  },
  {
    id:"4f", section:4, part:"f", title:"Home Energy",
    prompt:"The graph shows monthly electricity bills. A homeowner says, “The bill decreased every month.” Is the homeowner correct? Use data from the graph to explain your answer.",
    visual:"mock3Bills",
    type:"longtext"
  },

  // ============================================================
  // QUESTION FIVE — COMMUNITY TOURNAMENT
  // ============================================================
  {
    id:"5a", section:5, part:"a", title:"Community Tournament",
    prompt:"A community has about 1,600 young people. About 62% took part in a sports programme last year. About how many young people is this?",
    type:"mcq", options:["600","800","1,000","1,200","1,400"]
  },
  {
    id:"5b", section:5, part:"b", title:"Community Tournament",
    prompt:"Five players are available. One will be captain and a different player will be vice-captain. How many different captain–vice-captain combinations are possible?",
    type:"numeric", suffix:"combinations"
  },
  {
    id:"5c", section:5, part:"c", title:"Community Tournament",
    prompt:"A cyclist travels 12 km in 36 minutes. What is the cyclist's average speed in kilometres per hour?",
    type:"numeric", suffix:"km/h"
  },
  {
    id:"5d", section:5, part:"d", title:"Community Tournament",
    prompt:"A rectangular sports court is 24 m long and 14 m wide. What is its area?",
    type:"numeric", suffix:"m²"
  },
  {
    id:"5e", section:5, part:"e", title:"Community Tournament",
    prompt:"The table shows the finishing times in a race. A commentator says, “The silver finisher was exactly one tenth of a second slower than the gold finisher.” Is the statement correct? Use a calculation with decimals to explain your answer.",
    table:[
      ["Place","Time"],
      ["Gold","12.84 seconds"],
      ["Silver","12.93 seconds"],
      ["Bronze","13.18 seconds"]
    ],
    type:"longtext"
  },
  {
    id:"5f", section:5, part:"f", title:"Community Tournament",
    prompt:"A runner finishes 4 km west and 6 km north of the start point. Which direction best describes the runner's position from the start?",
    visual:"mock3Direction",
    type:"mcq",
    options:[
      "Between North and North-west",
      "Between North and North-east",
      "Between South and South-west",
      "Between West and South-west"
    ]
  }
];
