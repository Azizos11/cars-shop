// some sample cars
const initialCars = {
  car1: {
    model: "Mazda CX3",
    engine: "2.0-liter I-4 with 146 hp",
    blurb:
      "Serving as the brand’s entry-level crossover, the 2018 Mazda CX-3 slots below the larger CX-5. Front-wheel drive is standard on all trims and all-wheel drive is optional.",
    picture:
      "https://www.coastmazda.com/assets/shared/CustomHTMLFiles/Compliance/Mazda/MRP/CX-3/2021/images/2021-cx-3-sport-jet-black.png",
  },
  car2: {
    model: "Honda HRV",
    engine: "1.8-liter I-4 with 141 hp",
    blurb:
      "A new entry into the growing subcompact crossover segment, the Honda HR-V is practical and spacious. With seating for up to five passengers and multiple seating configurations, the HR-V is a capable, if slow, competitor for those who want an entry-level SUV.",
    picture:
      "https://evault.honda.com.my/pixelvault/2019-10/2a33543f557f5cb1a15324bc99e2cde77956097698067.png",
  },
  car3: {
    model: "Subaru Crosstrek",
    engine: "2.0-liter I-4 with 152 hp",
    blurb:
      "The Crosstrek is Subaru’s smallest crossover. Based on the Impreza hatchback, the Crosstrek has a lower starting price than the Forester and Outback.",
    picture:
      "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/thumbnails/large/chrome/78d34d23dc21e5e80b48a822ff16bcb4.png",
  },
  car4: {
    model: "Toyota CHR",
    engine: "2.0-liter I-4 with 144 hp",
    blurb:
      "The 2018 Toyota C-HR is the newest entry among subcompact crossovers, America’s fastest-growing segment. The C-HR puts an emphasis on style instead of practicality with its controversial exterior design.",
    picture:
      "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/2ead4c45d8f7dc42335ee044755372aa.png",
  },
};

const additionalCars = {
  car5: {
    model: "Honda CRV",
    engine: "2.4-liter I-4 with 184 hp",
    blurb:
      "One of the best-selling compact crossovers today, the Honda CR-V offers a spacious interior and seating for five, making it the perfect for family duty. Key competitors to the CR-V include the Toyota RAV4, Mazda CX-5, Hyundai Tucson, Ford Escape, and Subaru Forester.",
    picture:
      "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2022/CR-V/AW/Carshot/carshot_CR-V_front_CR-VHYBRIDEX_2022_ModernSteelMetallic_RT6H5NJW_NH-797M.png",
  },
  car6: {
    model: "Ford Escape",
    engine: "2.5-liter I-4 with 168 hp",
    blurb:
      "The compact 2018 Ford Escape crossover is positioned above the new subcompact EcoSport but below the midsize Edge, three-row Flex, three-row Explorer, and three-row Expedition SUVs.",
    picture:
      "https://2mtransport.net/storage/vehicles/c1559a6c-0b4e-490d-8e16-bdf90bc12113/b2a06d4660f62baee768cf0f50966902",
  },
  car7: {
    model: "Jeep Renegade",
    engine: "2.4-liter I-4 with 180 hp",
    blurb:
      "The smallest and least expensive model in Jeep’s SUV lineup, slotting below the Patriot, Compass, Wrangler, Cherokee, and Grand Cherokee. The Renegade shares the same platform as the Fiat 500X.",
    picture:
      "https://www.jeep.fr/content/dam/jeep/crossmarket/model/Renegade-80th-Anniversary/ICE/figurini/Jeep_Renegade_80th_099_granitecrystal_565x330.png",
  },
  car8: {
    model: "Toyota RAV4",
    engine: "2.5-liter I-4 with 176 hp",
    blurb:
      "The 2018 Toyota RAV4 is a compact crossover that slots below the larger, three-row Highlander and the above the new subcompact C-HR. ",
    picture:
      "https://s3.amazonaws.com/toyota.site.toyota-v5/tci-prod/toyota/media/build/rah/col/big/b21_dwrfv_fl1_01d6_a.png?ck=10282021120620",
  },
};

export { initialCars };
export { additionalCars };
