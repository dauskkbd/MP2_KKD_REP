const laptops = [
  {
    id: 0,
    image: "ASUS_ROG_ZEPHYRUS_GX501VI-GZ020T.jpg",

    // Product Information
    productColor: "Black",
    productType: "Notebook",
    formFactor: "Clamshell",
    marketPositioning: "Gaming",

    // Display Information
    display: {
      diagonal: 15.6,
      surface: "Matt",
      aspectRatio: "16:9",
      hdType: "Full HD",
      ledBacklight: true,
      touchscreen: false,
      resolution: "1920 x 1080",
      nativeAspectRatio: "16:9",
      brand: "ASUS",
      family: "ROG",
      series: "Zephyrus",
      modelName: "GX501VI-GZ020T",
      partNumber: "90NB0GU1-M00210",
      releaseDate: "28 June 2017",
      eanUpcCode: "4712900740677",
      price: 3195,
    },

    // Processor Information
    processor: {
      series: "Intel Core i7-7700 Mobile Series",
      manufacturer: "Intel",
      family: "Intel Core i7",
      frequency: "2.8 GHz",
      chipset: "Intel HM175",
      boostFrequency: "3.8 GHz",
      codename: "Kaby Lake",
      tdp: 45,
      model: "i7-7700HQ",
      cores: 4,
      threads: 8,
      cache: "6 MB",
      lithography: "14 nm",
      generation: "7th gen Intel Core i7",
    },

    // Memory Information
    memory: {
      type: "DDR4-SDRAM",
      size: 24,
      clockSpeed: 2400,
      maxCapacity: 24,
    },

    // Graphics Information
    graphics: {
      onboard: {
        hasAdapter: true,
        memoryType: "GDDR5",
        directXVersion: 12.0,
        model: "Intel HD Graphics 630",
        baseFrequency: 350,
        dynamicFrequencyMax: 1100,
        maxMemory: 64,
        displaysSupported: 3,
        openGLVersion: 4.4,
      },
      discrete: {
        hasAdapter: true,
        memoryType: "GDDR5",
        model: "NVIDIA GeForce GTX 1080",
        memory: 8,
      },
    },

    // Storage Information
    storage: {
      totalCapacity: 512,
      ssd: {
        count: 1,
        capacity: 512,
        interface: "PCI Express 3.0",
      },
      cardReader: false,
      mediaType: "SSD",
    },

    // Optical Drive Information
    opticalDrive: {
      type: null,
    },

    // Networking Information
    networking: {
      ethernet: false,
      wifi: true,
      wifiStandard: "Wi-Fi 5 (802.11ac)",
      wifiStandards: [
        "802.11a",
        "Wi-Fi 5 (802.11ac)",
        "802.11b",
        "802.11g",
        "Wi-Fi 4 (802.11n)",
      ],
      bluetooth: true,
      _4g: false,
      _3g: false,
    },

    // Ports & Interfaces Information
    portsAndInterfaces: {
      usbPorts: {
        typeA: 4,
        typeC: 1,
      },
      chargingPortType: "DC-in jack",
      hdmiVersion: "2.0",
      thunderboltPorts: 1,
      dviPort: false,
      dockingConnector: false,
      comboHeadphoneMicPort: true,
      hdmiPorts: 1,
      usbTypeCPorts: 1,
      usbTypeCDisplayPortAlternateMode: false,
    },

    // Audio Information
    audio: {
      microphone: true,
      speakerPower: 2,
    },

    // Camera Information
    camera: {
      front: true,
    },

    // Keyboard Information
    keyboard: {
      numericKeypad: false,
      fullSize: true,
      windowsKeys: true,
      pointingDevice: "Touchpad",
    },

    // Performance Information
    performance: {
      vrReady: true,
    },

    // Software Information
    software: {
      os: "Windows 10 Home",
      osArchitecture: "64-bit",
    },

    // Battery Information
    battery: {
      technology: "Lithium Polymer (LiPo)",
      numberOfCells: 4,
      capacity: 50,
    },

    // Weight & Dimensions Information
    weightAndDimensions: {
      weight: 2.25,
      height: {
        rear: 1.79,
        front: 1.69,
      },
      depth: 262,
      width: 379,
    },

    // Power Information
    power: {
      acAdapter: {
        power: 230,
        frequency: "50 - 60 Hz",
        inputVoltage: "100 - 240 V",
        outputVoltage: 19.5,
        outputCurrent: 16.9,
      },
    },

    // Security Information
    security: {
      cableLockSlot: true,
      cableLockSlotType: "Kensington",
    },
  },
  {
    id: 1,
    image: "lenovo_legion_pro_7.jpg",
    // DESIGN
    productColor: "Grey",
    productType: "Notebook",
    formFactor: "Clamshell",
    housingMaterial: "Aluminium",

    // DISPLAY
    display: {
      diagonal: "16 inch",
      maxRefreshRate: "240 Hz",
      contrastRatio: "1200:1",
      brightness: "500 cd/m²",
      panelType: "IPS",
      hdType: "WQXGA",
      ledBacklight: true,
      touchscreen: false,
      resolution: "2560 x 1600 pixels",
      hdrTechnology: ["DisplayHDR 400", "Dolby Vision"],
      rgbColorSpace: "sRGB",
      colorGamut: "100%",
      nativeAspectRatio: "16:10",
      hdrSupported: true,
      // BRAND
      brand: "Lenovo",
      family: "Legion",
      modelName: "Pro 7",
      partNumber: "82WQ005CUS",
      releaseDate: "13 February 2023",
      eanUpcCode: ["0196804591148", "196804591148"],
    },

    // PROCESSOR
    processor: {
      manufacturer: "Intel",
      family: "Intel Core i9",
      chipset: "Intel HM770",
      boostFrequency: "5.4 GHz",
      model: "i9-13900HX",
      cores: 24,
      cache: "36 MB",
      generation: "13th gen Intel Core i9",
      efficientCoreBoostFrequency: "3.9 GHz",
    },

    // MEMORY
    memory: {
      type: "DDR5-SDRAM",
      size: "32 GB",
      formFactor: "SO-DIMM",
      clockSpeed: "5600 MHz",
      slots: "2x SO-DIMM",
      maxInternalMemory: "32 GB",
      layout: "2 x 16 GB",
      channels: "Dual-channel",
    },

    // GRAPHICS
    graphics: {
      discreteMemoryType: "GDDR6",
      discreteManufacturer: "NVIDIA",
      onBoard: true,
      discrete: true,
      discreteModel: "NVIDIA GeForce RTX 4090",
      onBoardModel: "Intel UHD Graphics",
      discreteMemory: "16 GB",
    },

    // STORAGE
    storage: {
      totalCapacity: "1000 GB",
      numSSDs: 1,
      ssdCapacity: "1000 GB",
      ssdTotalCapacity: "1000 GB",
      ssdInterface: "PCI Express 4.0",
      ssdFormFactor: "M.2",
      cardReader: false,
      media: "SSD",
      nvme: true,
    },

    // OPTICAL DRIVE
    opticalDrive: {
      type: null,
    },

    // NETWORKING
    networking: {
      ethernet: true,
      ethernetRates: "100, 1000 Mbit/s",
      wifiStandard: "Wi-Fi 6E (802.11ax)",
      wifiStandards: "Wi-Fi 6E (802.11ax)",
      antennaType: "2x2",
      bluetooth: true,
      bluetoothVersion: "5.1",
      wwan: "Not installed",
    },

    // PORTS & INTERFACES
    portsInterfaces: {
      usbPorts: {
        gen1TypeA: 4,
        gen2TypeC: 1,
      },
      usbPowerDelivery: true,
      usbSleepChargePorts: 1,
      comboHeadphoneMicPort: true,
      hdmiPorts: 1,
      ethernetPorts: 1,
      usbTypeCAltMode: true,
      usbSleepCharge: true,
      thunderbolt4Ports: 1,
      intelThunderbolt4: true,
    },

    // AUDIO
    audio: {
      builtInMic: true,
      numBuiltInSpeakers: 2,
      audioSystem: "Nahimic Audio",
      speakerPower: "2 W",
      audioChip: "Realtek ALC3306",
      speakersManufacturer: "Harman Kardon",
      numMicrophones: 2,
    },

    // CAMERA
    camera: {
      front: true,
      privacyCamera: true,
      frontHdType: "Full HD",
      frontResolution: "1920 x 1080 pixels",
    },

    // KEYBOARD
    keyboard: {
      numericKeypad: true,
      backlitColor: "RGB",
      backlit: true,
      pointingDevice: "Touchpad",
      language: "US English",
      backlitZone: "Per-key RGB",
    },

    // SOFTWARE
    software: {
      osInstalled: "Windows 11 Home",
      osLanguage: "English",
      osArchitecture: "64-bit",
    },

    // BATTERY
    battery: {
      tech: "Lithium Polymer (LiPo)",
      capacity: "99.9 Wh",
      fastCharging: true,
    },

    // WEIGHT & DIMENSIONS
    weightDimensions: {
      weight: "2.8 kg",
      heightRear: "2.59 cm",
      heightFront: "2.19 cm",
      depth: "262.1 mm",
      width: "363.4 mm",
    },

    // POWER
    power: {
      acAdapterPower: "330 W",
      acAdapterFrequency: "50 - 60 Hz",
      acAdapterInputVoltage: "100 - 240 V",
    },

    // SECURITY
    security: {
      fingerprintReader: false,
      tpm: true,
      passwordProtection: true,
      passwordProtectionTypes: ["BIOS", "HDD", "Power on", "Supervisor"],
      tpmVersion: "2.0",
    },

    // OTHER FEATURES
    otherFeatures: {
      antiGlareScreen: true,
    },
  },
];

module.exports = { laptops };
