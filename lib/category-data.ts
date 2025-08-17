export interface TrendItem {
  id: number
  title: string
  platform: string
  engagement: string
  growth: string
  viralScore: number
  description: string
  hashtags: string[]
  image: string
  imageAlt: string
}

export const fashionBeautyTrends: TrendItem[] = [
  {
    id: 1,
    title: "Sustainable Fashion Week",
    platform: "Instagram",
    engagement: "2.4M",
    growth: "+156%",
    viralScore: 92,
    description: "Eco-friendly fashion trends dominating social media",
    hashtags: ["#SustainableFashion", "#EcoFriendly", "#FashionWeek"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
    imageAlt: "Sustainable fashion runway with eco-friendly clothing"
  },
  {
    id: 2,
    title: "Minimalist Makeup Looks",
    platform: "TikTok",
    engagement: "1.8M",
    growth: "+89%",
    viralScore: 87,
    description: "Clean beauty and natural makeup tutorials trending",
    hashtags: ["#MinimalistMakeup", "#CleanBeauty", "#NaturalLook"],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=250&fit=crop",
    imageAlt: "Minimalist makeup products and natural beauty"
  },
  {
    id: 3,
    title: "Vintage Fashion Revival",
    platform: "Pinterest",
    engagement: "3.1M",
    growth: "+234%",
    viralScore: 95,
    description: "Retro styles and vintage aesthetics making a comeback",
    hashtags: ["#VintageFashion", "#RetroStyle", "#Throwback"],
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    imageAlt: "Vintage clothing and retro fashion accessories"
  },
  {
    id: 4,
    title: "Gender-Neutral Fashion",
    platform: "Twitter",
    engagement: "1.2M",
    growth: "+67%",
    viralScore: 78,
    description: "Breaking traditional fashion norms and boundaries",
    hashtags: ["#GenderNeutral", "#InclusiveFashion", "#FashionFreedom"],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=250&fit=crop",
    imageAlt: "Gender-neutral fashion collection"
  },
  {
    id: 5,
    title: "Skincare Routines",
    platform: "YouTube",
    engagement: "4.2M",
    growth: "+189%",
    viralScore: 96,
    description: "Comprehensive skincare guides and product reviews",
    hashtags: ["#SkincareRoutine", "#BeautyTips", "#SelfCare"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop",
    imageAlt: "Skincare products and beauty routine"
  },
  {
    id: 6,
    title: "Athleisure Fashion",
    platform: "Instagram",
    engagement: "2.8M",
    growth: "+145%",
    viralScore: 91,
    description: "Comfortable yet stylish workout and casual wear",
    hashtags: ["#Athleisure", "#WorkoutFashion", "#ComfortableStyle"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    imageAlt: "Athleisure fashion and workout clothing"
  }
]

export const technologyTrends: TrendItem[] = [
  {
    id: 1,
    title: "AI-Powered Smart Homes",
    platform: "YouTube",
    engagement: "3.2M",
    growth: "+245%",
    viralScore: 94,
    description: "Next-generation home automation and AI integration",
    hashtags: ["#SmartHome", "#AI", "#Automation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    imageAlt: "Smart home automation system"
  },
  {
    id: 2,
    title: "Web3 & Metaverse",
    platform: "Twitter",
    engagement: "2.1M",
    growth: "+178%",
    viralScore: 89,
    description: "Virtual reality and blockchain technology trends",
    hashtags: ["#Web3", "#Metaverse", "#Blockchain"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    imageAlt: "Virtual reality headset and metaverse concept"
  },
  {
    id: 3,
    title: "Electric Vehicles",
    platform: "Instagram",
    engagement: "1.9M",
    growth: "+134%",
    viralScore: 87,
    description: "Sustainable transportation and EV technology",
    hashtags: ["#ElectricVehicles", "#EV", "#Sustainability"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop",
    imageAlt: "Electric vehicle charging station"
  },
  {
    id: 4,
    title: "Cybersecurity Trends",
    platform: "LinkedIn",
    engagement: "1.5M",
    growth: "+98%",
    viralScore: 82,
    description: "Latest security threats and protection methods",
    hashtags: ["#Cybersecurity", "#Security", "#TechNews"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    imageAlt: "Cybersecurity and digital protection"
  },
  {
    id: 5,
    title: "5G Technology",
    platform: "TikTok",
    engagement: "2.7M",
    growth: "+167%",
    viralScore: 91,
    description: "Next-generation mobile network technology",
    hashtags: ["#5G", "#MobileTech", "#Innovation"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    imageAlt: "5G network technology and mobile connectivity"
  },
  {
    id: 6,
    title: "Quantum Computing",
    platform: "Reddit",
    engagement: "1.8M",
    growth: "+123%",
    viralScore: 85,
    description: "Breakthroughs in quantum computing technology",
    hashtags: ["#QuantumComputing", "#QuantumTech", "#FutureTech"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
    imageAlt: "Quantum computing and advanced technology"
  }
]

export const photographyTrends: TrendItem[] = [
  {
    id: 1,
    title: "Drone Photography",
    platform: "Instagram",
    engagement: "2.9M",
    growth: "+198%",
    viralScore: 93,
    description: "Aerial photography and cinematic drone shots",
    hashtags: ["#DronePhotography", "#AerialView", "#Cinematic"],
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=250&fit=crop",
    imageAlt: "Drone flying over scenic landscape"
  },
  {
    id: 2,
    title: "Street Photography",
    platform: "Flickr",
    engagement: "1.6M",
    growth: "+87%",
    viralScore: 79,
    description: "Urban life captured through candid street shots",
    hashtags: ["#StreetPhotography", "#UrbanLife", "#Candid"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
    imageAlt: "Street photography of urban life"
  },
  {
    id: 3,
    title: "Portrait Photography",
    platform: "Pinterest",
    engagement: "2.3M",
    growth: "+145%",
    viralScore: 88,
    description: "Creative portrait techniques and lighting",
    hashtags: ["#PortraitPhotography", "#Portraits", "#Creative"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    imageAlt: "Professional portrait photography"
  },
  {
    id: 4,
    title: "Nature Photography",
    platform: "500px",
    engagement: "1.9M",
    growth: "+112%",
    viralScore: 84,
    description: "Stunning landscapes and wildlife photography",
    hashtags: ["#NaturePhotography", "#Landscape", "#Wildlife"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    imageAlt: "Beautiful nature landscape photography"
  },
  {
    id: 5,
    title: "Food Photography",
    platform: "Instagram",
    engagement: "3.1M",
    growth: "+167%",
    viralScore: 90,
    description: "Culinary art and food styling trends",
    hashtags: ["#FoodPhotography", "#FoodPorn", "#Culinary"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
    imageAlt: "Delicious food photography with styling"
  },
  {
    id: 6,
    title: "Architecture Photography",
    platform: "Behance",
    engagement: "1.4M",
    growth: "+76%",
    viralScore: 81,
    description: "Modern architecture and urban design",
    hashtags: ["#ArchitecturePhotography", "#Architecture", "#UrbanDesign"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop",
    imageAlt: "Modern architecture photography"
  }
]

export const homeDecorTrends: TrendItem[] = [
  {
    id: 1,
    title: "Minimalist Interior Design",
    platform: "Pinterest",
    engagement: "2.8M",
    growth: "+189%",
    viralScore: 92,
    description: "Clean lines and clutter-free living spaces",
    hashtags: ["#MinimalistDesign", "#InteriorDesign", "#CleanSpace"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
    imageAlt: "Minimalist interior design with clean lines"
  },
  {
    id: 2,
    title: "Sustainable Home Decor",
    platform: "Instagram",
    engagement: "2.1M",
    growth: "+156%",
    viralScore: 89,
    description: "Eco-friendly furniture and decor materials",
    hashtags: ["#SustainableDecor", "#EcoFriendly", "#GreenHome"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    imageAlt: "Sustainable home decor with plants"
  },
  {
    id: 3,
    title: "Smart Home Integration",
    platform: "YouTube",
    engagement: "1.7M",
    growth: "+134%",
    viralScore: 85,
    description: "Technology meets home decoration",
    hashtags: ["#SmartHome", "#HomeTech", "#Automation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    imageAlt: "Smart home technology integration"
  },
  {
    id: 4,
    title: "Vintage Home Decor",
    platform: "TikTok",
    engagement: "1.9M",
    growth: "+123%",
    viralScore: 87,
    description: "Retro furniture and antique styling",
    hashtags: ["#VintageDecor", "#RetroStyle", "#Antique"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    imageAlt: "Vintage home decor and antique furniture"
  },
  {
    id: 5,
    title: "Small Space Solutions",
    platform: "Instagram",
    engagement: "2.4M",
    growth: "+178%",
    viralScore: 91,
    description: "Creative solutions for compact living",
    hashtags: ["#SmallSpace", "#TinyHome", "#SpaceSaving"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    imageAlt: "Small space interior design solutions"
  },
  {
    id: 6,
    title: "Color Psychology in Decor",
    platform: "Pinterest",
    engagement: "1.6M",
    growth: "+98%",
    viralScore: 83,
    description: "How colors affect mood and atmosphere",
    hashtags: ["#ColorPsychology", "#MoodColors", "#InteriorDesign"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    imageAlt: "Colorful interior design with mood lighting"
  }
]

export const gadgetsTrends: TrendItem[] = [
  {
    id: 1,
    title: "Wireless Earbuds",
    platform: "YouTube",
    engagement: "3.4M",
    growth: "+234%",
    viralScore: 95,
    description: "Latest wireless audio technology and reviews",
    hashtags: ["#WirelessEarbuds", "#AudioTech", "#Reviews"],
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=250&fit=crop",
    imageAlt: "Wireless earbuds and audio technology"
  },
  {
    id: 2,
    title: "Smart Watches",
    platform: "Instagram",
    engagement: "2.7M",
    growth: "+189%",
    viralScore: 91,
    description: "Fitness tracking and smart notifications",
    hashtags: ["#SmartWatch", "#FitnessTracker", "#WearableTech"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=250&fit=crop",
    imageAlt: "Smart watch with fitness tracking"
  },
  {
    id: 3,
    title: "Gaming Consoles",
    platform: "Twitch",
    engagement: "2.1M",
    growth: "+145%",
    viralScore: 88,
    description: "Next-gen gaming and streaming setups",
    hashtags: ["#GamingConsole", "#Gaming", "#Streaming"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
    imageAlt: "Gaming console and accessories"
  },
  {
    id: 4,
    title: "Smartphones",
    platform: "Twitter",
    engagement: "3.8M",
    growth: "+267%",
    viralScore: 96,
    description: "Latest mobile technology and features",
    hashtags: ["#Smartphone", "#MobileTech", "#TechNews"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    imageAlt: "Latest smartphone technology"
  },
  {
    id: 5,
    title: "Laptops & Computers",
    platform: "Reddit",
    engagement: "1.9M",
    growth: "+123%",
    viralScore: 85,
    description: "Professional and gaming computer setups",
    hashtags: ["#Laptop", "#Computer", "#TechSetup"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=250&fit=crop",
    imageAlt: "Modern laptop and computer setup"
  },
  {
    id: 6,
    title: "Smart Home Devices",
    platform: "Instagram",
    engagement: "2.3M",
    growth: "+167%",
    viralScore: 89,
    description: "IoT devices and home automation",
    hashtags: ["#SmartHome", "#IoT", "#Automation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    imageAlt: "Smart home devices and automation"
  }
]

export const skillsTrends: TrendItem[] = [
  {
    id: 1,
    title: "Digital Marketing",
    platform: "LinkedIn",
    engagement: "2.5M",
    growth: "+198%",
    viralScore: 93,
    description: "Online marketing strategies and techniques",
    hashtags: ["#DigitalMarketing", "#Marketing", "#OnlineBusiness"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    imageAlt: "Digital marketing and online business"
  },
  {
    id: 2,
    title: "Programming & Coding",
    platform: "GitHub",
    engagement: "1.8M",
    growth: "+145%",
    viralScore: 87,
    description: "Software development and coding tutorials",
    hashtags: ["#Programming", "#Coding", "#SoftwareDev"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    imageAlt: "Programming and coding on computer"
  },
  {
    id: 3,
    title: "Graphic Design",
    platform: "Behance",
    engagement: "2.2M",
    growth: "+167%",
    viralScore: 90,
    description: "Creative design and visual communication",
    hashtags: ["#GraphicDesign", "#Design", "#Creative"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315486d?w=400&h=250&fit=crop",
    imageAlt: "Graphic design and creative work"
  },
  {
    id: 4,
    title: "Content Creation",
    platform: "YouTube",
    engagement: "3.1M",
    growth: "+223%",
    viralScore: 94,
    description: "Video production and content strategy",
    hashtags: ["#ContentCreation", "#VideoProduction", "#Creator"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    imageAlt: "Content creation and video production"
  },
  {
    id: 5,
    title: "Data Science",
    platform: "Kaggle",
    engagement: "1.6M",
    growth: "+134%",
    viralScore: 86,
    description: "Analytics and machine learning skills",
    hashtags: ["#DataScience", "#Analytics", "#MachineLearning"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    imageAlt: "Data science and analytics"
  },
  {
    id: 6,
    title: "Language Learning",
    platform: "Duolingo",
    engagement: "2.0M",
    growth: "+156%",
    viralScore: 88,
    description: "Online language courses and apps",
    hashtags: ["#LanguageLearning", "#Education", "#OnlineLearning"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop",
    imageAlt: "Language learning and education"
  }
]

export const booksTrends: TrendItem[] = [
  {
    id: 1,
    title: "Self-Help & Personal Development",
    platform: "Goodreads",
    engagement: "2.8M",
    growth: "+189%",
    viralScore: 92,
    description: "Books for personal growth and motivation",
    hashtags: ["#SelfHelp", "#PersonalDevelopment", "#Motivation"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop",
    imageAlt: "Self-help books and personal development"
  },
  {
    id: 2,
    title: "Business & Entrepreneurship",
    platform: "Amazon",
    engagement: "2.1M",
    growth: "+145%",
    viralScore: 87,
    description: "Business strategy and startup books",
    hashtags: ["#Business", "#Entrepreneurship", "#Startup"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    imageAlt: "Business and entrepreneurship books"
  },
  {
    id: 3,
    title: "Fiction & Literature",
    platform: "BookTok",
    engagement: "3.2M",
    growth: "+234%",
    viralScore: 95,
    description: "Popular fiction and literary works",
    hashtags: ["#Fiction", "#Literature", "#BookTok"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    imageAlt: "Fiction books and literature"
  },
  {
    id: 4,
    title: "Science & Technology",
    platform: "Reddit",
    engagement: "1.7M",
    growth: "+123%",
    viralScore: 84,
    description: "Scientific discoveries and tech books",
    hashtags: ["#Science", "#Technology", "#NonFiction"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    imageAlt: "Science and technology books"
  },
  {
    id: 5,
    title: "Cookbooks & Food",
    platform: "Instagram",
    engagement: "2.4M",
    growth: "+167%",
    viralScore: 89,
    description: "Culinary arts and recipe books",
    hashtags: ["#Cookbooks", "#Food", "#Cooking"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
    imageAlt: "Cookbooks and food photography"
  },
  {
    id: 6,
    title: "Children's Books",
    platform: "Pinterest",
    engagement: "1.9M",
    growth: "+134%",
    viralScore: 86,
    description: "Educational and entertaining children's literature",
    hashtags: ["#ChildrensBooks", "#KidsBooks", "#Education"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    imageAlt: "Children's books and educational reading"
  }
]

export const giftsTrends: TrendItem[] = [
  {
    id: 1,
    title: "Personalized Gifts",
    platform: "Etsy",
    engagement: "2.6M",
    growth: "+178%",
    viralScore: 91,
    description: "Custom and personalized gift items",
    hashtags: ["#PersonalizedGifts", "#CustomGifts", "#UniqueGifts"],
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=250&fit=crop",
    imageAlt: "Personalized and custom gift items"
  },
  {
    id: 2,
    title: "Tech Gadgets",
    platform: "Amazon",
    engagement: "3.1M",
    growth: "+223%",
    viralScore: 94,
    description: "Latest technology gifts and gadgets",
    hashtags: ["#TechGifts", "#Gadgets", "#Technology"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    imageAlt: "Technology gadgets and gifts"
  },
  {
    id: 3,
    title: "Subscription Boxes",
    platform: "Instagram",
    engagement: "2.3M",
    growth: "+156%",
    viralScore: 88,
    description: "Monthly subscription gift services",
    hashtags: ["#SubscriptionBox", "#MonthlyGifts", "#SurpriseBox"],
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=250&fit=crop",
    imageAlt: "Subscription box and gift services"
  },
  {
    id: 4,
    title: "Experiential Gifts",
    platform: "Airbnb",
    engagement: "1.8M",
    growth: "+134%",
    viralScore: 85,
    description: "Experience-based gifts and activities",
    hashtags: ["#ExperientialGifts", "#Experiences", "#Adventure"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    imageAlt: "Experiential gifts and adventure activities"
  },
  {
    id: 5,
    title: "Sustainable Gifts",
    platform: "Pinterest",
    engagement: "2.0M",
    growth: "+145%",
    viralScore: 87,
    description: "Eco-friendly and sustainable gift options",
    hashtags: ["#SustainableGifts", "#EcoFriendly", "#GreenGifts"],
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=250&fit=crop",
    imageAlt: "Sustainable and eco-friendly gifts"
  },
  {
    id: 6,
    title: "Handmade & Artisan",
    platform: "Etsy",
    engagement: "1.7M",
    growth: "+112%",
    viralScore: 83,
    description: "Handcrafted and artisan gift items",
    hashtags: ["#Handmade", "#Artisan", "#CraftGifts"],
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=250&fit=crop",
    imageAlt: "Handmade and artisan gift items"
  }
]
