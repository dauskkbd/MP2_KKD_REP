const accessories = [
  {
    id: 0,
    image: "ROG_delta_s_core.png",

    product: {
      name: "ROG Delta S Core",
      type: "3.5mm headset",
    },

    anc: {
      mic: "No",
      headphone: "No",
    },

    usageScenario: "Gaming",
    connector: "3.5mm",

    supportPlatform: [
      "PC",
      "MAC",
      "Nintendo Switch",
      "XBOX One",
      "XBOX Series X",
      "XBOX Series S",
    ],

    driver: {
      material: "Neodymium magnet",
      size: "50mm",
    },

    pickupPattern: "Unidirectional",

    sensitivity: "-40dB",

    headphoneImpedance: "32 Ohms",

    frequencyResponse: {
      headphone: "20 - 40,000 Hz",
      microphone: "100 ~ 10000 Hz",
    },
  },
];

module.exports = { accessories };
