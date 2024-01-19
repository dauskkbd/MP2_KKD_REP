const laptops = [
  {
    id: 0,
    image: "ASUS_ROG_ZEPHYRUS_GX501GI-XS74.png",
    alt: "black laptop",

    product: {
      name: "ASUS ROG Zephyrus",
      model: "GX501GI-XS74",
    },

    os: "Windows 10 Pro",
    graphicsCard: {
      name: "NVIDIA® GeForce® GTX 1080",
      code: "GTX_1080",
      vram: "8GB GDDR5",
      description:
        " NVIDIA's GeForce GTX 1080 is powered by the award-winning NVIDIA Pascal ™ architecture. Discover amazing performance, power efficiency, and gaming experiences. This is the ultimate gaming platform. #GameReady.",
    },

    airflow: {
      description:
        " ROG-exclusive Active Aerodynamic System (AAS) includes several enhancements to make the cooler more effective, improving internal airflow and allowing the fan to spin slower and quieter while maintaining low temperatures.",
    },

    processor: {
      name: "Intel® Core™ i7-8750H",
      frequency: "2.2 GHz",
      boostFrequency: " 4.1 GHz",
    },
    ram: {
      type: "8GB DDR4-2666",
      expandable: "Yes",
      maxCapacity: "24GB",
      description:
        "8GB DDR4-2666 RAM for faster response and smoother gameplay Explandable up to 24GB",
    },

    storage: {
      capacity: "512GB PCIe® 3.0 NVMe™ M.2",
      type: "SSD",
    },

    display: {
      diagonalInch: "15.6",
      hdType: "FHD",
      aspectRatio: "16:9",
      resolution: "1920 x 1080",
      refreshRate: "144Hz",
      rgb: "Yes",
      description:
        "ROG Zephyrus' IPS display has a 144Hz refresh rate that lets you enjoy exceptionally smooth gaming at a true 144 frames per second, plus an ultra-fast 3ms response time that reduces blurring with rapid motion.",
    },

    price: {
      usd: "$2,199.00",
      php: "123,270.98 PHP",
    },
  },

  {
    id: 1,
    image: "ASUS_ROG_ZEPHYRUS_GX501GI-XS74.png",

    product: {
      name: "ROG Zephyrus G16 (2024)",
      model: "GU605MY-G16.U94090",
    },

    os: "Windows 11 Pro",

    graphicsCard: {
      name: "NVIDIA® GeForce RTX™ 4090",
      code: "RTX_4090",
      vram: "16GB GDDR6",
      description:
        "The NVIDIA® GeForce RTX™ 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create. ",
    },

    airflow: {
      description:
        "ROG Intelligent Cooling is a suite of components that work together in harmony to keep our high-performance laptops cool and quiet. The Zephyrus G16 boasts some never-before-seen additions to ROG's list of cooling technologies, including 2nd Generation Arc Flow Fans™ and a redesigned high-efficiency air outlet. ",
    },

    processor: {
      name: "Intel® Core™ Ultra 9 185H",
      frequency: "2.3 GHz",
      boostFrequency: " 5.1 GHz",
    },
    ram: {
      type: "16GB*2 LPDDR5X 7467",
      expandable: false,
      maxCapacity: "32GB",
      description:
        "Boasting up to 32GB capacity normally reserved for high-end workstations ultra-fast 7467MHz memory allows the Zephyrus to multitask with ease.",
    },
    storage: {
      capacity: "2TB PCIe® 4.0 NVMe™ M.2",
      type: "SSD",
    },
    display: {
      diagonalInch: "15.6",
      hdType: "FHD",
      aspectRation: "16:9",
      resolution: "1920 x 1080",
      refreshRate: "144Hz",
      rgb: "Yes",
      description:
        "For the first time on an ROG laptop, enjoy the ultra-fast response times and incredible contrast ratios that are only possible with OLED technology. This panel also boasts a 2.5K resolution, giving it incredible pixel density on a 16-inch screen, with a 144Hz refresh rate that makes all of your games look silky smooth. ",
    },

    price: {
      usd: "$2,199.00",
      php: "123,270.98 PHP",
    },
  },

  {
    id: 2,
    image: "ASUS_ROG_ZEPHYRUS_GX501GI-XS74.png",

    product: {
      name: "ROG Zephyrus G16 (2024)",
      model: "GU605MI-G16.U94070Y",
    },

    os: "Windows 11 Home",

    graphicsCard: {
      name: "NVIDIA® GeForce RTX™ 4070",
      code: "RTX_4070",
      vram: "8GB GDDR6",
      description:
        "Get equipped for supercharged gaming and creating with NVIDIA® GeForce RTX™ 4070 Ti SUPER, RTX 4070 SUPER, RTX 4070 Ti, and RTX 4070 graphics cards. They're built with the ultra-efficient NVIDIA Ada Lovelace architecture. Experience super fast ray tracing, AI-accelerated performance with DLSS 3, new ways to create, and much more.",
    },

    airflow: {
      description:
        "ROG Intelligent Cooling is a suite of components that work together in harmony to keep our high-performance laptops cool and quiet. The Zephyrus G16 boasts some never-before-seen additions to ROG's list of cooling technologies, including 2nd Generation Arc Flow Fans™ and a redesigned high-efficiency air outlet. ",
    },

    processor: {
      name: "Intel® Core™ Ultra 9 185H",
      frequency: "2.3 GHz",
      boostFrequency: " 5.1 GHz",
      cores: "16",
    },
    ram: {
      type: "8GB*2 LPDDR5X 7467",
      expandable: true,
      maxCapacity: "16GB",
      description:
        "Boasting up to 16GB capacity normally reserved for high-end workstations ultra-fast 7467MHz memory allows the Zephyrus to multitask with ease.",
    },
    storage: {
      capacity: "1TB PCIe® 4.0 NVMe™ M.2",
      type: "SSD",
    },
    display: {
      diagonalInch: "16",
      hdType: "OLED",
      aspectRation: "16:10",
      resolution: "2.5K 2560 x 1600",
      refreshRate: "240Hz",
      rgb: "Yes",
      description:
        "For the first time on an ROG laptop, enjoy the ultra-fast response times and incredible contrast ratios that are only possible with OLED technology. This panel also boasts a 2.5K resolution, giving it incredible pixel density on a 16-inch screen, with a 240Hz refresh rate that makes all of your games look silky smooth. ",
    },

    price: {
      usd: "$2,199.00",
      php: "123,270.98 PHP",
    },
  },
];

module.exports = { laptops };
