const loki = require("lokijs");
const db = new loki("companies.json");
const path = require("path");
const fs = require("fs");
/**
 * web-quickstart1 - starter example showing use use of loki
 *   entirely in-memory with no persistence.
 */

// Since we don't pass a name parameter, our database will have
//   default name of 'loki'
// var db = new loki();

// lokijs is mostly synchronous except for persistence adapters.
// Since we are not auto-loading a persisted database in this
//   example, loki is entirely synchronous.

// add simple 'users' collection with default options
var companies = db.addCollection("companies");

// insert some documents
companies.insert([
  {
    name: "Agriconomie",
    location: "Other",
    youtube: "https://www.youtube.com/channel/UCo0QMlZUcF-WBP3C9koTLJw",
    url: "http://www.agriconomie.com/",
    description:
      "Agriconomie is the first and only marketplace entirely dedicated to agricultural supplies, allowing: - farmers to buy everything they need for their daily tasks directly online at a competitive price - physical suppliers to get online at zero cost, and immediately benefit from our significant audience (over 100K per month) to increase orders and revenue.",
    employees: "62",
    sector: "#Retail #FoodTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382421ff3935420fa91518/size_5_agriconomiejpg.jpg",
    id: "cj9pnqcwi00k801059imcqojg",
    facebook: "https://www.facebook.com/Agriconomie",
    tranch: "41 - 100",
    address: "11 Route Nationale 4, 51320 COOLE",
    twitter: "@Agriconomie",
    instagram: "undefined"
  },
  {
    name: "Cailabs",
    location: "French Tech Rennes St-Malo",
    youtube: "https://www.youtube.com/channel/UC7QfFdQk50Hrn-JIZrVLX9Q",
    url: "http://www.cailabs.com/",
    description:
      "The leading optical technology to increase the capacity of optical fibers. Shaping the light to shape the future of optical communications.",
    employees: "24",
    sector: "#IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382419ff3935420fa91513/size_5_cailabsjpg.jpg",
    id: "cj9pnqcwn00kz0151co1a43fu",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "8 rue du 7e d’Artillerie, 35000, Rennes",
    twitter: "@CAILabs",
    instagram: "undefined"
  },
  {
    name: "Attestation Légale",
    location: "Lyon French Tech",
    youtube: "https://www.youtube.com/user/AttestationLegale",
    url: "https://www.attestationlegale.fr/",
    description:
      "Attestation Légale, the professional social network connecting businesses. Connecting businesses means streamlining their everyday operation and securing their relationships with simplified, reliable management of their administrative documents. Our goal is to help you cut costs, manage risk and strengthen your corporate image.",
    employees: "63",
    sector: "#LegalTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964fefcff3935489a98ddfb/size_5_attestationlegale.png",
    id: "cj9pnqcwq00kb01054hk9d497",
    facebook: "undefined",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@Attest_Legale",
    instagram: "undefined"
  },
  {
    name: "Captain Contrat",
    location: "Paris",
    youtube: "undefined",
    url: "https://www.captaincontrat.com/",
    description:
      "Captain Contrat is a legal platform for SMBs based on a high performing lawyers’ marketplace. We built innovation digital tools for lawyers to help them being more productive and affordable for SMBs.",
    employees: "33",
    sector: "#Security #Privacy #LegalTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593824ecff39354282a9151a/size_5_captaincontratjpg.jpg",
    id: "cj9pnqcxd00l20151vewvivx8",
    facebook: "https://www.facebook.com/Captaincontrat/",
    tranch: "21 - 40",
    address: "12 rue du saint fiacre, 75002 Paris",
    twitter: "@CaptainContrat",
    instagram: "undefined"
  },
  {
    name: "CybelAngel",
    location: "Paris",
    youtube: "undefined",
    url: "https://www.cybelangel.com/",
    description:
      "We offer a service of data leaks detection on the Internet. We monitor the Dark Web and the Internet of Things to identify threats that could affect our customers.",
    employees: "34",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff1dff39355e6bdc6fd2/size_5_cybelangel.png",
    id: "cj9pnqcy400ke0105ftf687wo",
    facebook: "https://www.facebook.com/cybelangel/",
    tranch: "21 - 40",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@CybelAngel",
    instagram: "undefined"
  },
  {
    name: "Delairtech",
    location: "French Tech Toulouse",
    youtube: "https://www.youtube.com/channel/UCx8pnSVCQqHoL7clawE5VcA",
    url: "http://www.delair-tech.com/",
    description:
      "Headquartered in France and California, Delair-Tech is a global leader in commercial drone solutions, enabling leading industries to transform aerial imagery into actionable business intelligence. Specialized in drone manufacturing and aerial data processing, we offer end-to-end UAV solutions, including hardware, software and services. Core industry markets: Geospatial, Agriculture, Transportation, Power&Utilities, Oil&Gas, Security&Defense, Emergency.",
    employees: "99",
    sector: "#IoT #Manufacturing #Retail",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593824bbff393542eba91529/size_5_delairtechjpg.jpg",
    id: "cj9pnqcys00kh0105ix3anx0n",
    facebook: "https://www.facebook.com/pages/Delair-Tech/135470009887269",
    tranch: "41 - 100",
    address: "676 rue Max Planck 31670 Labège",
    twitter: "@DelairTech",
    instagram: "https://www.instagram.com/delairtech/"
  },
  {
    name: "Digitemis",
    location: "Nantes Tech",
    youtube:
      "https://www.youtube.com/channel/UCAmmg-n2RA-X5SmWQLKFBQA/playlists",
    url: "http://www.digitemis.com/",
    description:
      "Cybersecurity services and tool to help corporates to secure Information Technology and protect privacy",
    employees: "18",
    sector: "#Security #Privacy #IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593824b4ff393542eba91525/size_5_digitemisjpg.jpg",
    id: "cj9pnqczg00l501518h1kyy1a",
    facebook: "https://www.facebook.com/Digitemis-112851552762473/",
    tranch: "1 -20",
    address: "LA NOUE 85140 LA MERLATIERE",
    twitter: "@Digitemis",
    instagram: "undefined"
  },
  {
    name: "EasyRecrue",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.easyrecrue.com/",
    description:
      "The European leader in live and pre-recorded video interviewing, EASYRECRUE develops and markets innovative Software-as-a-Service recruitment solutions. Our teams support HR users with their recruitment issues and setting up innovative projects on a daily basis. We are currently working with over 350 customers in Europe, including Valeo, AccorHotels, Carrefour, and Voyage-privée.com.",
    employees: "38",
    sector: "#HR #EdTech #Entertainment",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382377ff393541a7a9150a/size_5_easyrecruejpg.jpg",
    id: "cj9pnqczm00kk0105svo3zzts",
    facebook: "https://www.facebook.com/pages/Easyrecrue/304738462986538",
    tranch: "21 - 40",
    address: "3bis rue de la Chaussée d'Antin, 75009 Paris",
    twitter: "@easyRECrue",
    instagram: "undefined"
  },
  {
    name: "Green Creative",
    location: "Paris",
    youtube: "https://www.youtube.com/channel/UC1O9Su6U8L4QcV68PvJ1yPg",
    url: "http://www.green-creative.com/en/",
    description: "Description coming soon.",
    employees: "23",
    sector: "#Industry",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff4aff39355f52dc6fec/size_5_greencreative.png",
    id: "cj9pnqd0c00kn0105ag3z1va3",
    facebook: "https://www.facebook.com/greencreative.valorisation.fr",
    tranch: "21 - 40",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@GreenCreativeSA",
    instagram: "undefined"
  },
  {
    name: "HalioDx",
    location: "Aix-Marseille French Tech",
    youtube: "undefined",
    url: "http://www.haliodx.com/",
    description:
      "HalioDx is a immuno-oncology diagnostic company providing oncologists with first-in-class Immune-based diagnostic products and services to guide cancer care. Immunoscore Colon is positioned as diagnostic standard for prognostic and tomorrow's predictive information and is commercialized worldwide. HalioDX works with Pharma companies to demonstrate clinical utility of its assays in various cancer indications.",
    employees: "111",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382365ff3935425ca91502/size_5_haliodxjpg.jpg",
    id: "cj9pnqd1g00kq0105uhq51n4c",
    facebook: "undefined",
    tranch: "101 - 200",
    address: "163 Avenue de Luminy, 13009 Marseille",
    twitter: "@HalioDx",
    instagram: "undefined"
  },
  {
    name: "Inventy",
    location: "Aix-Marseille French Tech",
    youtube: "http://www.youtube.com/user/InventySAP/",
    url: "http://www.inventy.com/fr",
    description:
      "Inventy helps large companies make their SAP® solutions fast, safe and cost-effective. By combining predictive analytics and support in decision-making, our Big Data platform, PERFORMER FOR SAP® (the first for continuous improvement of SAP® solutions) factually proves the use and added value of SAP® solutions allowing companies to measure and plan the best scenarios. Thanks to its expertise and its capacity to innovate, Inventy achieved 2000% growth in 5 years.",
    employees: "130",
    sector: "#Security #Privacy",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938234fff393541b1a91516/size_5_inventyjpg.jpg",
    id: "cj9pnqd1y00l80151qau4ao0e",
    facebook: "http://www.facebook.com/InventyConsulting/",
    tranch: "101 - 200",
    address: "LE DRAKKAR Bat D, 2405 Route des Dolines, 06560",
    twitter: "@InventyConsult",
    instagram: "undefined"
  },
  {
    name: "Matooma",
    location: "French Tech Montpellier",
    youtube: "http://www.youtube.com/c/MatoomaMontpellier",
    url: "https://www.matooma.com/en",
    description:
      "Founded in 2012, Matooma is a Machine to Machine company that provides a universal SIM cards connectivity solution and a management platform: M2MManager. The company connects more than 200 000 devices all around the world. Thanks to a full range of dedicated and centralized services, Matooma simplifies deployments and speeds productivity of every IoT projects.",
    employees: "35",
    sector: "#IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938245aff3935420fa9151d/size_5_matoomajpg.jpg",
    id: "cj9pnqd2d00lb0151psv2rq8d",
    facebook: "https://www.facebook.com/matoomam2m",
    tranch: "21 - 40",
    address:
      "Immeuble Le Liner ZAC de l’aéroport Entrée 2 SIS 2630, Avenue Georges Frêche, 34470 Pérols",
    twitter: "@MatoomaM2M",
    instagram: "undefined"
  },
  {
    name: "Medincell",
    location: "French Tech Montpellier",
    youtube: "https://www.youtube.com/channel/UCI8iPeMVL36nKuMTqoYKchA",
    url: "http://www.medincell.com/",
    description:
      "In order to service this truly global market, MedinCell is dedicated to delivering revolutionary medical treatments technologies to the global community, regardless of local economic conditions. We are empowering our partners to develop the next generation of best in class medicines that combine low manufacturing cost, potent ecological and compliance-related benefits.",
    employees: "90",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823eaff393541a7a9153a/size_5_medincelljpg.jpg",
    id: "cj9pnqd3r00kt0105v5dtdt5u",
    facebook: "https://www.facebook.com/medincell/",
    tranch: "41 - 100",
    address: "3 rue des frères lumière 34830 Jacou",
    twitter: "@MedinCell",
    instagram: "undefined"
  },
  {
    name: "Outremer Yatching",
    location: "French Tech Montpellier",
    youtube: "undefined",
    url: "http://www.catamaran-outremer.com/",
    description: "Design and production of long distance cruising catamarans",
    employees: "98",
    sector: "#CleanTech #Mobility",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823d8ff393541a7a91532/size_5_outremerjpg.jpg",
    id: "cj9pnqd4i00kw0105eqwuxc95",
    facebook: "https://www.facebook.com/OutremerCatamarans/?fref=ts",
    tranch: "41 - 100",
    address: "726 Avenue Robert Fages, 34280 La Grande-Motte",
    twitter: "@OutremerCat",
    instagram: "https://www.instagram.com/outremer_catamarans/"
  },
  {
    name: "Rythm",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.rythm.co/",
    description:
      "Dreem is the only active sleep solution that merges the latest and greatest in neuroscience research and advanced technology.",
    employees: "65",
    sector: "#HealthTech #IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823c7ff393541a7a9152a/size_5_dreemjpg.jpg",
    id: "cj9pnqd5800lf0151wt3eohba",
    facebook: "https://www.facebook.com/dreemrythm/",
    tranch: "41 - 100",
    address: "5 rue scribe, 75009 Paris",
    twitter: "@dreemrythm",
    instagram: "undefined"
  },
  {
    name: "Skilvioo",
    location: "Lyon French Tech",
    youtube: "undefined",
    url: "http://www.skilvioo.com/",
    description:
      "To enhance the accuracy of their look on individuals, Skilvioo enables firms, schools and employment operators to share the same referential of skills through a SaaS. Rich, harmonized and dynamic, this referential is already considered by most as a universal language of skills. Thanks to Skilvioo, the different actors in the labor market will always fluidify more their interactions.",
    employees: "22",
    sector: "#EdTech #Entertainment #HR",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938247eff393542eba9150d/size_5_skiliviojpg.jpg",
    id: "cj9pnqd6300li0151ghn9ew03",
    facebook: "https://www.facebook.com/skilvioo/",
    tranch: "21 - 40",
    address: "Tour Part-Dieu, 129 Rue Servient, 69003 Lyon",
    twitter: "@Skilvioo",
    instagram: "undefined"
  },
  {
    name: "Short Edition",
    location: "French Tech in the Alps",
    youtube: "undefined",
    url: "http://short-edition.com/",
    description:
      "Short Edition is the community publisher for short literature. Short Edition puts online, circulates and publishes everything you can read in less than 20 minutes. Short Edition also designed the Short Story Dispenser: a machine connected to our platform which prints, onto high-quality paper, stories of 1, 3 or 5 minutes’ duration.",
    employees: "16",
    sector: "#EdTech #Entertainment #IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823bcff393541a7a91526/size_5_shorteditionjpg.jpg",
    id: "cj9pnqd6g00kz0105oglcsia6",
    facebook: "http://facebook.com/ShortEdition",
    tranch: "1 -20",
    address: "12 rue Ampère, 38 000 Grenoble",
    twitter: "@short_edition",
    instagram: "undefined"
  },
  {
    name: "Tageos",
    location: "French Tech Montpellier",
    youtube: "http://www.youtube.com/user/TAGEOS?feature=watch",
    url: "http://www.tageos.com/",
    description:
      "Tageos designs, manufactures, and sells globally patented 100% paper-based passive UHF RFID labels for item-level tagging",
    employees: "25",
    sector: "#Retail #IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382311ff39354282a91502/size_5_tageosjpg.jpg",
    id: "cj9pnqd7200ll0151hjvqbsgd",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "515 Rue Alfred Nobel, 34000 Montpellier",
    twitter: "@Tageos",
    instagram: "undefined"
  },
  {
    name: "Ubi Transports",
    location: "Lyon French Tech",
    youtube: "undefined",
    url: "http://www.ubitransports.com/",
    description:
      "Ubi Transport publishes and integrates mobility software solutions, and offers for the first time in Europe innovative digital solutions, 100% Smartphone 100% Cloud, of fleet management services for the passengers road transport sector.",
    employees: "35",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff98ff39355e6bdc6fe2/size_5_ubitransports.png",
    id: "cj9pnqd7m00l20105ys8kl8y8",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@Ubitransport",
    instagram: "undefined"
  },
  {
    name: "Toucan Toco",
    location: "Paris",
    youtube: "https://www.youtube.com/channel/UCgxKgmbC2BamBu2XnhfRd5g",
    url: "https://toucantoco.com/en/",
    description:
      "Our mission? Make people successful with their data! Since 2014 Toucan Toco helps managers to make decision in a much faster and more efficient way thanks to data visualisation available on any portable device (iOS, Android) like tablet and smartphone but also on PC and Mac. Our additional value is a cross platform mobility, an agile way to work with clients, an efficient design and performing user experience, the enhance of your data with the aggregation of external/multiple sources and the automation of data update.",
    employees: "40",
    sector: "#Digital #Businessintelligence #Dataviz",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59676aea01e2a77838ae68d1/size_5_toucantoco.png",
    id: "cj9pnqd8k00l50105ffl8jnsa",
    facebook: "https://www.facebook.com/toucantocodata/",
    tranch: "21 - 40",
    address: "2-4 Rue Paul Cézanne, 75008 Paris",
    twitter: "@Toucan_Toco",
    instagram: "https://www.instagram.com/toucantoco/"
  },
  {
    name: "Younited Credit",
    location: "Paris",
    youtube: "https://www.youtube.com/channel/UCXeiV0jmbcyzefrXI-gHQpA",
    url: "https://www.younited-credit.com/",
    description:
      "Younited Credit is the first online lending platform in Continental Europe. Regulated as a Credit Institution, the company operates in 5 European countries (France, Spain, Italy, Germany, Austria). With a staff of 170, Younited Credit has originated half a Billion Euros in loans since its commercial launch in early 2012. Younited Credit has raised € 63 million in equity.",
    employees: "170",
    sector: "#FinTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382389ff393541a7a91512/size_5_younitedcreditjpg.jpg",
    id: "cj9pnqda300lo01510as5n7is",
    facebook: "https://www.facebook.com/younitedcreditfr",
    tranch: "101 - 200",
    address: "24 Rue Drouot, 75009 Paris",
    twitter: "@younited",
    instagram: "undefined"
  },
  {
    name: "Wizbii",
    location: "French Tech in the Alps",
    youtube: "undefined",
    url: "https://www.wizbii.com/",
    description:
      "WIZBII's mission is to promote youth employment and entrepreneurship around the world. To achieve our mission, we provide online services to students and young graduates through our website at the following address www.wizbii.com. These services allow them to meet, share ideas and projects, and to find a job.",
    employees: "48",
    sector: "#EdTech #Entertainment #HR",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382339ff393541b1a9150a/size_5_wizbeejpg.jpg",
    id: "cj9pnqdar00l80105kui97gp3",
    facebook: "https://www.facebook.com/wizbii/",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@wizbii_FR",
    instagram: "undefined"
  },
  {
    name: "Talentsoft",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.talentsoft.com/",
    description:
      "Talentsoft is the European leader in Cloud-based talent management and learning software. It offers an ultra-customizable collaborative digital platform that fosters interactions and transforms employees’ work experience. Our application helps install a continuous conversation between employees, managers and HR. It supports interactions and key moments of the employee’s life to help managers and HR in their decision-making and to promote the expression of all the talents within the organization.",
    employees: "600",
    sector: "#HR #EdTech",
    logo:
      "https://2268e15ae1206fc04954-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59dcece601e2a77d3a710a38/size_3_picture.png",
    id: "cj9pnqdej00lb01057jgxitmf",
    facebook: "https://www.facebook.com/TalentsoftGroup/",
    tranch: "200+",
    address: "8 rue Heyrault 92100 Boulogne Billancourt",
    twitter: "@TalentsoftGroup",
    instagram: "undefined"
  },
  {
    name: "Adyoulike",
    location: "Paris",
    youtube: "undefined",
    url: "https://www.adyoulike.com/",
    description: "Description coming soon",
    employees: "75",
    sector: "#AdTech #EdTech #Entertainment",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964f2beff393557f86cfbbd/size_5_adyoulike.png",
    id: "cj9pnqdhw00lr0151syarqys0",
    facebook: "https://www.facebook.com/adyoulike/",
    tranch: "41 - 100",
    address: "26 RUE RICHER - 75009 PARIS",
    twitter: "@Adyoulike",
    instagram: "https://www.instagram.com/Adyoulike/"
  },
  {
    name: "Alcméon",
    location: "Paris",
    youtube: "undefined",
    url: "http://alcmeon.com/3/fr/",
    description:
      "Alcméon is a cloud-based SaaS platform that seamlessly combines AI and human intervention to help leading B2C brands turbocharge their customer engagement and customer care on social networks & instant messaging. It has a unique proprietary suggestion technology and 3 levels of automation (Quick Replies, Plug your Bots, Auto Response). Alcméon has among its clients leading international brands like Voyages-sncf, Orange, Galeries Lafayette, etc.",
    employees: "11",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964fef1ff39355e6bdc6fc6/size_5_alcmeon.png",
    id: "cj9pnqdip00lu01513p1o7rge",
    facebook: "undefined",
    tranch: "1 - 20",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@alcmeon_answers",
    instagram: "undefined"
  },
  {
    name: "Awox",
    location: "French Tech Montpellier",
    youtube: "https://www.youtube.com/user/AwoxSolutions",
    url: "http://www.awox.com/en/",
    description:
      "AwoX is a smart home leader, providing both audio and lighting products, either white label or under Cabasse brand and AwoX brands.",
    employees: "78",
    sector: "#IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938250cff393541b1a91528/size_5_awoxjpg.jpg",
    id: "cj9pnqdjo00lx0151drv5antg",
    facebook: "https://www.facebook.com/AwoX",
    tranch: "41 - 100",
    address: "101 Place Pierre Duhem, 34000 Montpellier",
    twitter: "@AwoX",
    instagram: "undefined"
  },
  {
    name: "Apizee",
    location: "French Tech Brest+",
    youtube: "https://www.youtube.com/channel/UCpjrn6c9I9ruddrUBBvtbjA",
    url: "http://www.apizee.com/",
    description:
      "Apizee's SaaS platform enables easy roll-out of real-time customer engagement, visual assistance, telemedicine, and enterprise collaboration services. Based on WebRTC, a disruptive telecom technology that provides a friction-less web-based video experience, Apizee's solutions and APIs are leveraged by industry and software players such as Crédit Agricole, Safran, Enedis, ExxonMobil, Barclays and Renault.",
    employees: "21",
    sector:
      "#HealthTech #EdTech #Entertainment #FinTech #Security #Privacy #Retail",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382513ff393541b1a9152c/size_5_apizeejpg.jpg",
    id: "cj9pnqdlq00lf0105ij7dub6e",
    facebook: "https://www.facebook.com/Apizee-481024238743853/",
    tranch: "21 - 40",
    address: "4 Rue Ampère 22300 LANNION",
    twitter: "@apizee",
    instagram: "undefined"
  },
  {
    name: "Drivy",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.drivy.com/",
    description:
      "Created in 2010, Drivy is the leading car rental marketplace in Europe, enabling a growing community of 1,5 million users to rent one of the 45,000 private individuals' cars available on the platform, within walking distance of home and whenever they need one, while helping car owners to cover their costs. Drivy provides a full mobile experience to its users, from booking a car to check-in and check-out. Drivy operates in France, Germany, Spain, Austria and Belgium, and in the UK. More than 2 million rental days happened since Drivy was launched.",
    employees: "92",
    sector: "#Mobility #CleanTech",
    logo:
      "https://2268e15ae1206fc04954-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59e0cd2e01e2a71f826d6475/size_3_picture.png",
    id: "cj9pnqdlu00lh010575kue4er",
    facebook: "https://www.facebook.com/drivyfr",
    tranch: "41 - 100",
    address: "35 rue Greneta, 75002 Paris",
    twitter: "@drivyFR",
    instagram: "https://www.instagram.com/drivyfr/"
  },
  {
    name: "1001 Pharmacies",
    location: "French Tech Montpellier",
    youtube: "https://www.youtube.com/channel/UChLwpSs9nHs2xbYdbNEJqQg",
    url: "http://www.1001pharmacies.com/",
    description:
      "1001Pharmacies.com is a marketplace dedicated to the online sale of health / beauty products. We are intermediaries between Internet users and French pharmacies for online sales.",
    employees: "28",
    sector: "#HealthTech #Retail",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382428ff3935425ca91516/size_5_1001pharmaciesjpg.jpg",
    id: "cj9pnqdnz00m20151uquxci8q",
    facebook: "https://www.facebook.com/1001Pharmacies/",
    tranch: "21 - 40",
    address: "Parc Eureka 256 r Thor, 34000 MONTPELLIER",
    twitter: "@1001pharma",
    instagram: "https://www.instagram.com/1001pharmacies/?hl=fr"
  },
  {
    name: "Mazeberry",
    location: "French Tech Lille",
    youtube: "https://www.youtube.com/user/Mazeberry",
    url: "http://www.mazeberry.com/",
    description:
      "Mazeberry is a technology company that provides web advertisers with a total control over their marketing spend. Founded in 2011, the company has since then received many awards distinguishing its R&D efforts towards building its innovative eponymous solution: the Mazeberry Solution.",
    employees: "30",
    sector: "#Retail",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938248cff393542eba91515/size_5_mazeberryjpg.jpg",
    id: "cj9pnqdom00lk0105tpbox8kl",
    facebook: "https://www.facebook.com/mazeberry/",
    tranch: "21 - 40",
    address: "40 Rue de l'Abbé Lemire, 59110 La Madeleine",
    twitter: "@mazeberry_fr",
    instagram: "undefined"
  },
  {
    name: "Moulinot",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.moulinot.fr/moulinot/home",
    description:
      "Founded by a restaurateur, Moulinot Compost & Biogas is a social responsible company, specialized in the food waste (biowaste). Moulinot developed an innovative process of vermicomposting which allows the production of a high-fashion compost.",
    employees: "26",
    sector: "#Industry",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff6eff39355e6bdc6fd6/size_5_moulinot.png",
    id: "cj9pnqdpr00m50151ryhkse4p",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "31 Rue Gustave Eiffel, 38000 Grenoble",
    twitter: "undefined",
    instagram: "undefined"
  },
  {
    name: "OSE Immunotherapeutics",
    location: "Nantes Tech",
    youtube: "undefined",
    url: "http://ose-immuno.com/",
    description:
      "OSE Immunotherapeutics is a biotechnology company dedicated to the development of innovative immunotherapies acting on effector and suppressor cells to stimulate or inhibit the immune response and to restore immune disorders in immuno-oncology, autoimmune diseases and transplantation.",
    employees: "20",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382332ff39354282a91506/size_5_oseimmunotherapeuticsjpg.jpg",
    id: "cj9pnqdqs00ln0105kjnresza",
    facebook: "undefined",
    tranch: "1 -20",
    address: "22 Boulevard Benoni Goullin, 44200 Nantes",
    twitter: "@OSEIMMUNO",
    instagram: "undefined"
  },
  {
    name: "Provepharm",
    location: "Aix-Marseille French Tech",
    youtube: "undefined",
    url: "http://www.provepharm.com/",
    description:
      "Provepharm is a subsidiary of the Provence Technologies group that is specialized in the development and commercialization of pharmaceutical drug products derived from active substances synthesized and patented by its parent company Provence Technologies. Product line emphasized by the first Methylene Blue of pharmaceutical quality, developed and patented by the Group.",
    employees: "44",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff8dff39355e6bdc6fde/size_5_provepharm.png",
    id: "cj9pnqdrc00lq0105wufsjyk0",
    facebook: "undefined",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@provepharm",
    instagram: "undefined"
  },
  {
    name: "S4M",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.s4m.io/",
    description:
      "S4M – the Mobile Shopper Advertising Platform – is the first and only mobile advertising technology to connect brands with consumers, by bridging the gap between digital advertising and the real-world. Its unified technology empowers brands with full transparency and control from impression to consumer conversion (in apps or mobile sites) and physical points of sales.",
    employees: "144",
    sector: "#Data #AI #CleanTech #Mobility #AdTech",
    logo:
      "https://2268e15ae1206fc04954-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59e46b8d01e2a74bd7a2ee37/size_3_picture.png",
    id: "cj9pnqds200m801511g2ondaf",
    facebook: "https://www.facebook.com/S4Mob",
    tranch: "101 - 200",
    address: "43/45 Avenue de Clichy 75017 Paris",
    twitter: "@S4Mobile",
    instagram: "https://www.instagram.com/s4mobile/"
  },
  {
    name: "SBG Systems",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.sbg-systems.com/",
    description:
      "SBG Systems offers a complete line of high performance and miniature Attitude and Heading Reference Systems (AHRS), Motion Reference Unit (MRU), Inertial Navigation Systems (INS) with embedded GNSS receiver (INS/GNSS).",
    employees: "31",
    sector: "#CleanTech #Mobility #IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382322ff393541b1a91502/size_5_sbgsystemsjpg.jpg",
    id: "cj9pnqdsm00mb0151j0b81zp4",
    facebook: "undefined",
    tranch: "undefined",
    address: "undefined",
    twitter: "@SBG_Systems",
    instagram: "undefined"
  },
  {
    name: "Sensorion",
    location: "French Tech Montpellier",
    youtube: "undefined",
    url: "http://www.sensorion-pharma.com/",
    description:
      "Sensorion is a biopharmaceutical company committed to finding targeted and innovative treatments for inner ear disease. Our most advance clinical asset is in Phase 2",
    employees: "20",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382318ff393541a7a91502/size_5_sensorionjpg.jpg",
    id: "cj9pnqdui00lt0105xf17u5zg",
    facebook: "undefined",
    tranch: "1 -20",
    address: "375 RUE DU PROFESSEUR BLAYAC 34080 MONTPELLIER",
    twitter: "@SensorionPharma",
    instagram: "undefined"
  },
  {
    name: "Tabmo",
    location: "Paris",
    youtube: "undefined",
    url: "http://hawk-platform.io/",
    description:
      "TabMo is an adtech company running Hawk platform. Our product has been built to be the only Creative Mobile DSP. A unique marriage between Programmatic and Creativity.",
    employees: "60",
    sector: "#EdTech #Entertainment #AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823aeff393541a7a91522/size_5_tabmojpg.jpg",
    id: "cj9pnqdv400lw0105q97oco2z",
    facebook: "https://www.facebook.com/tabmofr/",
    tranch: "41 - 100",
    address: "2 Rue de Clichy, 75009 Paris",
    twitter: "@TabMo",
    instagram: "undefined"
  },
  {
    name: "Splio",
    location: "Paris",
    youtube: "undefined",
    url: "https://www.splio.com/",
    description:
      "Splio develops a comprehensive cloud software platform dedicated to the needs of retailers juggling e-commerce and physical store sales. Our Retail Marketing Cloud enables orchestration of cross-channel marketing campaigns centered on the consumer’s view. The platform integrates Distributed Marketing capabilities that allow store teams run their own marketing campaigns. The Clienteling tablet app puts actionable 360° customer insight into the hands of store personnel.",
    employees: "160",
    sector: "#Retail",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823b5ff3935425ca9150e/size_5_spliojpg.jpg",
    id: "cj9pnqdwr00lz0105pgtcgcoy",
    facebook: "https://www.facebook.com/spliogroup",
    tranch: "101 - 200",
    address: "103 Boulevard Haussmann, 75008 Paris",
    twitter: "@Splio",
    instagram: "undefined"
  },
  {
    name: "Télécom santé",
    location: "French Tech Rennes St-Malo",
    youtube: "undefined",
    url: "http://www.telecomsante.fr/",
    description:
      "Innovative technology company, Telecom Sante is specialized in digital solutions for healthcare industry. Telecom Sante advises hospitals and clinics management teams on their digital tools evolution and how to improve patient services, ease internal process and optimize staff’s daily tasks",
    employees: "45",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823a6ff393541a7a9151e/size_5_telecomsantcjpg.jpg",
    id: "cj9pnqdzf00me0151ziw2uub3",
    facebook: "http://www.facebook.com/TelecomSante/",
    tranch: "41 - 100",
    address: "8 Square du Chêne Germain, 35510 Cesson-Sévigné",
    twitter: "@TelecomSante",
    instagram: "undefined"
  },
  {
    name: "Wipple",
    location: "French Tech Lille",
    youtube: "undefined",
    url: "http://www.wipple.fr/",
    description:
      "Wipple Group (Wipple + Kickle) creates collaborative spaces that help you to create, manage and sell more effectively. We combine the best technologies and software that fit our customers and manage their whole projects from beginning to completion and beyond. Wipple is a value-added distributor: Wipple advises and distributes digital collaborative equipment. Kickle is a software editor: Kickle designs a collaborative videoconferencing product.",
    employees: "23",
    sector: "#EdTech #Entertainment #HR",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823fcff393541a7a91542/size_5_wipplejpg.jpg",
    id: "cj9pnqe0500mh0151mu19k0tm",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "99 A BOULEVARD CONSTANTIN DESCAT 59200 TOURCOING",
    twitter: "undefined",
    instagram: "undefined"
  },
  {
    name: "Visiomed",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.visiomed-lab.com/",
    description:
      "Visiomed Group is a company specialized in research, development and commercialization of digital health and telemedicine solutions intended for general audience and healthcare professionals. Under the brand BewellConnect with a wide range of connected medical devices associated with a unique, secure and easy-to-use service platform.",
    employees: "115",
    sector: "#HealthTech #IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938243dff393541a7a91552/size_5_visiomedjpg.jpg",
    id: "cj9pnqe0y00mk0151pkchmy4b",
    facebook: "undefined",
    tranch: "101 - 200",
    address: "112 Avenue Kléber, 75116 Paris",
    twitter: "@Visiomed_FR",
    instagram: "undefined"
  },
  {
    name: "Dedienne Santé",
    location: "French Tech Montpellier",
    youtube: "undefined",
    url: "http://www.dedienne-sante.com/",
    description:
      "Design and manufacture of implantable medical devices dedicated to orthopedic surgery.",
    employees: "90",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593824c5ff393542eba9152d/size_5_dediennesantcjpg.jpg",
    id: "cj9pnqe1x00m20105s0kgfjig",
    facebook: "undefined",
    tranch: "41 - 100",
    address: "217 Rue Charles Nungesser, 34130 Mauguio",
    twitter: "@DedienneSante",
    instagram: "undefined"
  },
  {
    name: "AB Tasty",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.abtasty.com/us/",
    description:
      "AB Tasty is an all-in-one CRO platform: it helps marketers optimize their websites and increase conversion rates through A/B testing, personalization and user engagement.",
    employees: "115",
    sector: "#AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382470ff393541b1a9151f/size_5_abtastyjpg.jpg",
    id: "cj9pnqe2t00m50105scthhsde",
    facebook: "https://www.facebook.com/abtasty/",
    tranch: "101 - 200",
    address: "3 Impasse de la Planchette, 75003 Paris",
    twitter: "@ABTasty",
    instagram: "undefined"
  },
  {
    name: "Adomik",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.adomik.com/",
    description:
      "Adomik organizes publisher trading data from all monetization partners to simplify the operations of yield management and increase revenue.",
    employees: "48",
    sector: "#AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382529ff393542eba91531/size_5_adomikjpg.jpg",
    id: "cj9pnqe3d00m80105w2kqhow2",
    facebook: "https://www.facebook.com/adomik.for.publishers/",
    tranch: "41 - 100",
    address: "4 Bis Rue Saint-Sauveur, 75002 Paris",
    twitter: "@adomik1",
    instagram: "undefined"
  },
  {
    name: "Artefact",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.artefact.is/",
    description:
      "Artefact is the digital one-stop shop blending consultants, techies and creatives around one shared purpose: guiding brands into the AI era. From strategy to ops and delivery, we help you grow the 21st century way.",
    employees: "120",
    sector: "#Retail #Data #AI #AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938249bff393542eba9151d/size_5_artefaxjpg.jpg",
    id: "cj9pnqe4a00mn0151wuy3nuhh",
    facebook: "http://www.facebook.com/artefact.digital",
    tranch: "101 - 200",
    address: "16, passage Jouffroy 75009 PARIS",
    twitter: "@ArtefactDigital",
    instagram: "undefined"
  },
  {
    name: "Biotech Dental",
    location: "Aix-Marseille French Tech",
    youtube: "undefined",
    url: "http://www.biotech-dental.com/en/",
    description:
      "Since its creation in 1987, Biotech Dental has been committed to develop a strong relationship of trust with dental surgeons and dental technicians. Together we devise and develop product ranges even more tailored to the challenges of the future. We bring together customers’ expectations, innovation and technology.",
    employees: "350",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382461ff393541b1a9151a/size_5_biotechdentaljpg.jpg",
    id: "cj9pnqe5d00mq0151h3gimwvr",
    facebook: "https://www.facebook.com/GroupeBiotechDental/",
    tranch: "200+",
    address: "305 Allées de Craponne, 13300 Salon-de-Provence",
    twitter: "@Biotech_Dental",
    instagram: "undefined"
  },
  {
    name: "Bureaux à partager",
    location: "Paris",
    youtube: "undefined",
    url: "https://www.bureauxapartager.com/",
    description:
      "BAP’s mission is to connect professionals seeking to share their office space. The leader in the French market sharing economy, and a rising power in the U.S (Share Your Office), BAP seeks to launch a new way of working which, beyond optimizing finances, will energize the workplace.",
    employees: "45",
    sector: "#Retail #CleanTech #Mobility #RealEstate",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593824f7ff39354282a9151e/size_5_bureauxapartagerjpg.jpg",
    id: "cj9pnqe5m00mb0105wpyjfnfm",
    facebook: "https://www.facebook.com/Bureauxapartager/",
    tranch: "41 - 100",
    address: "21 Place de la République, 75003 Paris",
    twitter: "@BureauAPartager",
    instagram: "https://www.instagram.com/bureauxapartager/"
  },
  {
    name: "Cooptalis",
    location: "French Tech Lille",
    youtube: "undefined",
    url: "http://www.cooptalis.com/",
    description:
      "Cooptalis assists companies with their talent acquisitions and candidates with their mobility projects, all around the world.",
    employees: "290",
    sector: "#HR",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382309ff3935420fa9150b/size_5_cooptalisjpg.jpg",
    id: "cj9pnqe7u00me0105vjcwel2z",
    facebook: "https://www.facebook.com/cooptalis/",
    tranch: "200+",
    address: "34 avenue de la Marne 59700 Marcq en Baroeul",
    twitter: "@cooptalis",
    instagram: "https://www.instagram.com/cooptalis/"
  },
  {
    name: "Adikteev",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.adikteev.com/",
    description:
      "Adikteev is the first digital one-stop-shop marketing platform, driven by our machine learning technology, offering three main solutions: desktop qualified traffic generation, tailor-made branding mobile advertising experiences, mobile app user acquisition & re-engagement",
    employees: "80",
    sector: "#Retail #Data #AI #AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382468ff3935425ca9151e/size_5_adikteevjpg.jpg",
    id: "cj9pnqe9800mu0151h2nnky6d",
    facebook: "https://www.facebook.com/adikteev/?ref=br_rs",
    tranch: "41 - 100",
    address: "35 Avenue de l'Opéra, 75002 Paris",
    twitter: "@Adikteev",
    instagram: "undefined"
  },
  {
    name: "Intercloud",
    location: "Paris",
    youtube: "undefined",
    url: "https://www.intercloud.com/",
    description:
      "The InterCloud Platform is a service-oriented platform that allows enterprises to take control over the delivery of their cloud applications. It natively supports multiple cloud providers and various connectivity models. Leveraging InterCloud Platform, enterprises solve security, performance and flexibility issues as they embark on their cloud journey.",
    employees: "66",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff5cff39355f52dc6ff0/size_5_intercloud.png",
    id: "cj9pnqecd00mh0105ghk6lurb",
    facebook: "undefined",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@theintercloud",
    instagram: "undefined"
  },
  {
    name: "Cosmo Tech",
    location: "Lyon French Tech",
    youtube: "undefined",
    url: "https://cosmotech.com/",
    description:
      "Cosmo Tech is a global technology company that helps the C-suite make optimal decisions. Through our unique methodology, we model and then simulate complex scenarios to accurately predict the outcome of events even if those events have never happened before.",
    employees: "74",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff12ff39355e6bdc6fce/size_5_cosmotech.png",
    id: "cj9pnqed300mk0105y6xzxodw",
    facebook: "https://www.facebook.com/cosmotechweb",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@cosmotechweb",
    instagram: "undefined"
  },
  {
    name: "My Flying Box",
    location: "Aix-Marseille French Tech",
    youtube: "undefined",
    url: "https://www.myflyingbox.com/en",
    description:
      "Offer to professionals in need of a shipping (e-merchant, e-marketplace, e-retailer, e-provide) “one-stop-shipping” solution to the best prices available. My Flying Box is relentlessly looking for the best express shipping partners all over the world in order to find what’s on top out there (DHL, UPS, Fedex, Aramex, Colissimo, Chronopost, Bpost…).",
    employees: "10",
    sector: "#Industry",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff78ff39355e6bdc6fda/size_5_myflyingbox.png",
    id: "cj9pnqeez00my01514vgdowi6",
    facebook: "https://www.facebook.com/myflyingbox/",
    tranch: "1 - 20",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@myflyingbox",
    instagram: "undefined"
  },
  {
    name: "Opera Energie",
    location: "Paris",
    youtube: "undefined",
    url: "http://opera-energie.com/",
    description:
      "Opéra Energie is the pioneer of energy brokerage for companies in France. Thanks to its innovative energy analysis and comparison solution, Opéra Energie enables its customers to optimize their natural gas and electricity purchases. Founded in 2014, Opera Energie has dealt with more than 4000 companies, thus becoming the leader in energy brokerage in France.",
    employees: "36",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff82ff3935489a98de03/size_5_operaenergie.png",
    id: "cj9pnqegf00mn0105qr69fees",
    facebook: "https://www.facebook.com/Op%C3%A9ra-Energie-214078788998822/",
    tranch: "21 - 40",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@OperaEnergie",
    instagram: "undefined"
  },
  {
    name: "ForCity",
    location: "Lyon French Tech",
    youtube: "undefined",
    url: "http://www.forcity.com/en/",
    description:
      "Using 4D simulation to support decision making. If you manage a business unit which impacts a city over time, chances are you are constantly confronted with the unexpected, the unpredictable. ForCity offers a suite of sector-specific applications allowing governments and private sector to plan and optimize their future in urban areas by playing out infinite amounts of scenarios over a long time frame.",
    employees: "76",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff42ff39355f52dc6fe8/size_5_forcity.png",
    id: "cj9pnqeha00mq0105mpbgq78u",
    facebook: "undefined",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@ForCity_Co",
    instagram: "undefined"
  },
  {
    name: "Evaneos",
    location: "Paris",
    youtube: "https://www.youtube.com/user/EvaneosVoyages",
    url: "http://www.evaneos.com/",
    description:
      "Evaneos Travel is the first online platform connecting travellers directly with ‘the local experts,’ 800 hand-picked, on-site travel agents in over 150 destinations across the globe. As one of the leading online travel players in Europe, Evaneos Travel allows holidaymakers to create tailor-made trips directly and securely through local travel agencies, and this platform is set to revolutionise the way travellers book their discovery and adventure holidays.",
    employees: "x",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff2fff39355f52dc6fe0/size_5_evaneos.png",
    id: "cj9pnqehh00n101512rd251p2",
    facebook: "undefined",
    tranch: "1 - 20",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@Evaneos",
    instagram: "undefined"
  },
  {
    name: "Famoco",
    location: "Paris",
    youtube: "https://www.youtube.com/channel/UCP_z7agVaSzE01eoc7iVtCA",
    url: "https://www.famoco.com/",
    description:
      "FAMOCO is the leader in Androaid professional terminals. FAMOCO was created in 2010 and is designated for markets in transport, payment, logistics, access control and equipment for field workers. Thanks to its range of secure and remotely administered terminals, the company has developed the first Android-based solution that can be adapted to all markets and requirements.",
    employees: "70",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff3aff39355f52dc6fe4/size_5_famoco.png",
    id: "cj9pnqeik00n40151e4wmb6ol",
    facebook: "undefined",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@famoco",
    instagram: "undefined"
  },
  {
    name: "Habiteo",
    location: "Paris",
    youtube: "undefined",
    url: "https://www.habiteo.com/",
    description:
      "Habiteo revolutionizes the property development industry by offering a sales and marketing platform that digitalizes and speeds up the entire sales sales cycle. Buyers are able to project themselves in their future purchase (apartment, office...) through 3D modeling and virtual tours by having all the information they need.",
    employees: "53",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59676ad601e2a77838ae68cd/size_5_habiteo.png",
    id: "cj9pnqel200mt01050w3t8r6y",
    facebook: "http://www.facebook.com/habiteo",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@HabiteoFR",
    instagram: "https://www.instagram.com/habiteofr"
  },
  {
    name: "Yoopies",
    location: "Paris",
    youtube: "undefined",
    url: "https://yoopies.fr/",
    description:
      "With over 600 000 caregivers in Europe, Yoopies' aim is to help families find quality caregivers safely and efficiently. The platform offers a comprehensive service, including online payment and automated administrative procedures. Yoopies leveraged the B2C model to build a B2B solution for companies to improve their employees' work/life balance. We have more than 20 clients (Société Générale, Publicis, SNCF, Agnès B, etc.).",
    employees: "34",
    sector: "#HR",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382390ff393541a7a91516/size_5_yoopiesjpg.jpg",
    id: "cj9pnqeli00n70151sgbuw591",
    facebook: "https://www.facebook.com/blog.maman",
    tranch: "21 - 40",
    address: "26 RUE RICHER - 75009 PARIS",
    twitter: "@yoopies",
    instagram: "undefined"
  },
  {
    name: "Isotropix",
    location: "French Tech Montpellier",
    youtube: "https://www.youtube.com/isotropix",
    url: "http://www.isotropix.com/",
    description:
      "Isotropix develops Clarisse, an innovative 3D graphics software dedicated to render high-end images for feature films and TV. Clarisse revolutionary paradigm shift increases productivity by 10 allowing CG artists to work interactively on their final images with an unprecedented level of detail!",
    employees: "38",
    sector: "#EdTech #Entertainment",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382493ff393542eba91519/size_5_isotropixjpg.jpg",
    id: "cj9pnqelr00na0151t42mcf05",
    facebook: "https://www.facebook.com/Isotropix",
    tranch: "21 - 40",
    address: "1 Place Francis Ponge, 34000 Montpellier",
    twitter: "@Isotropix",
    instagram: "undefined"
  },
  {
    name: "Boa Concept",
    location: "Lyon French Tech",
    youtube: "https://www.youtube.com/channel/UCxw62r8w_XkSQfb_6ExQwgg",
    url: "https://www.boa-concept.com/",
    description: "Description coming soon.",
    employees: "30",
    sector: "#Industry",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59676acf01e2a77838ae68c9/size_5_boaconcept.png",
    id: "cj9pnqemg00mw01053o8szkqy",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@BoaConcept",
    instagram: "undefined"
  },
  {
    name: "Mediaveille",
    location: "French Tech Rennes St-Malo",
    youtube: "undefined",
    url: "http://www.mediaveille.com/",
    description:
      "Mediaveille is a consulting agency specialized in digital strategy. We enable our clients to take advantage of the full potential offered by the Internet (web + mobile) to develop their businesses. Mediaveille is a certified Google Partner Premier employing a team of 100 experts in 8 fields of digital communication : Digital Strategy, SEO, Online Marketing, Web Ergonomics/Design, Business Intelligence, Data Analytics, Social Media, and Training.",
    employees: "100",
    sector: "#AdTech #EdTech #Entertainment",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823f2ff393541a7a9153e/size_5_mediaveillejpg.jpg",
    id: "cj9pnqemn00mz0105b90hb2a3",
    facebook: "https://www.facebook.com/Mediaveille",
    tranch: "41 - 100",
    address: "10 PARC DE BROCELIANDE 35760 SAINT GREGOIRE",
    twitter: "@Mediaveille",
    instagram: "undefined"
  },
  {
    name: "Ludilabel",
    location: "French Tech Toulouse",
    youtube: "undefined",
    url: "http://www.ludilabel.fr/",
    description:
      "Ludilabel is an online shop selling personalized name labels to tag clothes and items of children and elderlies to help supervisory staff identify their belongings.",
    employees: "14",
    sector: "#Retail",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382412ff3935425ca91512/size_5_ludilabeljpg.jpg",
    id: "cj9pnqenc00nd0151i96qgt3x",
    facebook: "undefined",
    tranch: "1 -20",
    address: "26 Rue de la Colombette, 31000 Toulouse",
    twitter: "@ludilabel",
    instagram: "undefined"
  },
  {
    name: "Median Technologies",
    location: "Aix-Marseille French Tech",
    youtube: "https://www.youtube.com/user/MEDIANTechnologies",
    url: "http://www.mediantechnologies.com/",
    description:
      "Median Technologies provides innovative imaging solutions and services for the analysis and management of medical images. Median enables the diagnostic and follow up of diseases in clinical trials and patient care. Through its iBiopsy® imaging platform, Median leverages the power of Imaging Phenomics to provide insights into novel therapies and treatment strategies for patients.",
    employees: "120",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382404ff393541a7a91546/size_5_mediantechnologyjpg.jpg",
    id: "cj9pnqens00ng0151w5t014pd",
    facebook: "undefined",
    tranch: "101 - 200",
    address: "1800 Route des Crêtes - Les Deux Arcs Batiment B, 06560 Valbonne",
    twitter: "@MEDIANTechno",
    instagram: "undefined"
  },
  {
    name: "Private Sport Shop",
    location: "French Tech Montpellier",
    youtube: "undefined",
    url: "http://www.privatesportshop.fr/",
    description:
      "Private Sport Shop specialises in flash sales of sporting goods. The company negotiates exclusive deals with sports brands and offers them to its members over a 7-day period.",
    employees: "145",
    sector: "#Retail #Sports",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823ceff393541a7a9152e/size_5_privatesportshopjpg.jpg",
    id: "cj9pnqeob00nj0151117yi53l",
    facebook:
      "http://www.facebook.com/pages/Private-Sport-Shop/169450433067114",
    tranch: "101 - 200",
    address: "129 av Compagnons, 34170 CASTELNAU LE LEZ",
    twitter: "@psportshop",
    instagram: "undefined"
  },
  {
    name: "Netatmo",
    location: "Paris",
    youtube: "undefined",
    url: "https://www.netatmo.com/en-GB/site/",
    description:
      "Netatmo is a revolutionary smart home company, developing groundbreaking, intuitive and beautifully-designed connected consumer electronics. Truly smart, Netatmo’s innovative products provide a seamless experience that helps users create a safer, healthier and more comfortable home. Netatmo carefully designs the mechanics, electronics and embedded software of all its products to the highest standards. Netatmo also creates the mobile and web applications that fully realise their potential.",
    employees: "200",
    sector: "#IoT #Manufacturing #RealEstate #AI",
    logo:
      "https://2268e15ae1206fc04954-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59dcebcfff39356b6727d9f0/size_3_picture.png",
    id: "cj9pnqeoh00n20105gkd1bp25",
    facebook: "undefined",
    tranch: "200+",
    address: "93 rue Nationale 92100 Boulogne-Billancourt",
    twitter: "@netatmo",
    instagram: "undefined"
  },
  {
    name: "Quantum Genomics",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.quantum-genomics.com/",
    description:
      "Quantum Genomics is a biopharmaceutical company with the mission of developing new therapies for unmet medical needs in the field of cardiovascular diseases, especially high blood pressure and heart failure",
    employees: "13",
    sector: "#HealthTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938232aff393541b1a91506/size_5_quantumgenomicsjpg.jpg",
    id: "cj9pnqep800n60105r3mg4pen",
    facebook: "undefined",
    tranch: "1 -20",
    address: "Tour Maine Montparnasse, 33 Avenue du Maine, 75015 Paris",
    twitter: "@ALQGC_EN",
    instagram: "undefined"
  },
  {
    name: "Sens Digital",
    location: "French Tech Montpellier",
    youtube: "undefined",
    url: "http://www.sensdigital.fr/",
    description:
      "SensDigital® supports companies and institutions in their digital transformation thanks to its 360 ° Phygital technology, adapted to any type of establishments (franchise networks, banks, malls, etc.). A real lever for performance, it combines physical and digital trough features, connected objects and data in order to connect consumers to their environment.",
    employees: "30",
    sector: "#Retail #AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382432ff393541a7a9154e/size_5_sensdigitaljpg.jpg",
    id: "cj9pnqep800n70105rufp5lzh",
    facebook: "https://www.facebook.com/SensDigital",
    tranch: "21 - 40",
    address: "Cap alpha l'europe, 9 Avenue de l'Europe, 34830 Clapiers",
    twitter: "@Sens_Digital",
    instagram: "undefined"
  },
  {
    name: "Mozoo",
    location: "Paris",
    youtube: "undefined",
    url: "http://mozoo.com/",
    description:
      "Mozoo is the first premium rich media and video ad-exchange on mobile in the world. Since 2010, the Paris born company has specialised in the creation of engaging mobile ads that respect user experience. Mozoo’s integrated global creative studio designs and produces rich media formats and innovative videos perfectly suited to smartphone navigation.",
    employees: "110",
    sector: "#AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382452ff393541a7a91556/size_5_mozoojpg.jpg",
    id: "cj9pnqepc00nm0151tf8jafsu",
    facebook: "https://www.facebook.com/MozooGroup/",
    tranch: "101 - 200",
    address: "98 Boulevard Victor Hugo, 92110 Clichy",
    twitter: "@mozoomobile",
    instagram: "http://instagram.com/mozoomobile"
  },
  {
    name: "Web Geo Services",
    location: "French Tech Montpellier",
    youtube: "undefined",
    url: "http://www.webgeoservices.com/",
    description:
      "Web Geo Services specialise in helping businesses across different industries such as Retail, eCommerce, Travel and Hospitality to design and implement successful strategies leveraging location. Web Geo Services has built “Woosmap” the local search engine as a Service for Retail and E-commerce Businesses. We help retailers to leverage their Google Maps as a powerful tool to engage with their customers and to drive conversion.",
    employees: "28",
    sector: "#Retail #AdTech #FinTech #Data #AI",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382397ff393541a7a9151a/size_5_webgeojpg.jpg",
    id: "cj9pnqepj00np0151acnkkua6",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "19 rue de la République 34000 MONTPELLIER",
    twitter: "@webgeoservices",
    instagram: "undefined"
  },
  {
    name: "Adveez",
    location: "French Tech Toulouse",
    youtube: "undefined",
    url: "http://www.adveez.fr/",
    description:
      "ADVEEZ delivers hardware, platforms, and analytics for advanced monitoring of assets and users.",
    employees: "33",
    sector: "#HealthTech #CleanTech #Mobility #IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938251aff393541b1a91530/size_5_adveezjpg.jpg",
    id: "cj9pnqepo00na0105k8cmyayg",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "12 Rue Michel Labrousse, 31100 Toulouse",
    twitter: "@AdveezFR",
    instagram: "undefined"
  },
  {
    name: "Advalo",
    location: "French Tech Rennes St-Malo",
    youtube: "undefined",
    url: "http://www.advalo.com/",
    description:
      "Advalo drives more revenue for retailers by transforming how they engage their customers throughout their lifecycle. By leveraging all their marketing data, Advalo allows the retailers to adapt to the unique life stages and behaviors of individual consumers and engage with them in a way that is individually effective.",
    employees: "27",
    sector: "#Retail",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382522ff393541b1a91534/size_5_advalojpg.jpg",
    id: "cj9pnqepo00ns0151hjn3rr6b",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "2 rue de la Mabilais",
    twitter: "@AdvaloFrance",
    instagram: "undefined"
  },
  {
    name: "Ector",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.ectorparking.com/",
    description:
      "Servicing a number of airports and railway stations since 2013, Ector is the first and most established valet parking company in France.",
    employees: "18",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff28ff39355f52dc6fdc/size_5_ector.png",
    id: "cj9pnqesr00nd0105heiuupdx",
    facebook: "https://www.facebook.com/smartparkfr/",
    tranch: "1 - 20",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@ectorparking",
    instagram: "https://www.instagram.com/ectorparking/?hl=fr"
  },
  {
    name: "Eove",
    location: "French Tech Bordeaux",
    youtube: "undefined",
    url: "http://www.eove.fr/",
    description:
      "EOVE is an innovative company specialized in design and manufacturing of homecare pulmonary ventilators for critical patient. EOVE own today the smallest and the lightest pulmonary ventilator, which increase significantly patient mobility. This device is also connected and allows getting full patient real time observance from everywhere.",
    employees: "27",
    sector: "#HealthTech #IoT #Manufacturing",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593824a9ff39354282a9150a/size_5_eovejpg.jpg",
    id: "cj9pnqetq00ng01059wnr477r",
    facebook: "undefined",
    tranch: "21 - 40",
    address: "4 rue jules Ferry Immeuble Newton 64000 Pau",
    twitter: "undefined",
    instagram: "undefined"
  },
  {
    name: "Une Petite Mousse",
    location: "French Tech in the Alps",
    youtube: "undefined",
    url: "https://unepetitemousse.fr/",
    description:
      "Une Petite Mousse is France #1 community of craft beer lover. Every month, we deliver at home a box with a selection of 6 craft beers from Europe. Our costumers actively take part in our community by rating the beers they taste and giving their opinion on the recipe of the next beers we will brew. We enable breweries to target the most relevant costumers according to the beers they sell.",
    employees: "18",
    sector: "#FoodTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938239fff3935425ca9150a/size_5_unepetitemoussejpg.jpg",
    id: "cj9pnqeuy00nj0105dd81eg4u",
    facebook: "https://facebook.com/UnePetiteMousse",
    tranch: "1 -20",
    address: "32 rue de Comboire, Bâtiment H, 38130 Échirolles",
    twitter: "@1petitemousse",
    instagram: "https://instagram.com/unepetitemousse"
  },
  {
    name: "Clic Emotion",
    location: "French Tech Montpellier",
    youtube: "undefined",
    url: "http://www.clic-emotion.com/",
    description:
      "We are innovative product and software designers dedicated to the world of event and leisure by the mean of photography. Our expertise in the field of photography allows us to anticipate our customers needs as the market evolves. Our products are primarily functional, self-service and interactive terminals, and concepts that meets a new customers demand.",
    employees: "9",
    sector: "#EdTech #Entertainment",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593824daff39354282a91512/size_5_clicemotionjpg.jpg",
    id: "cj9pnqevb00nv0151gv36tivt",
    facebook: "https://fr-fr.facebook.com/clicphotoevenement",
    tranch: "1 -20",
    address: "28 RUE DU CODRON 66680 CANOHES",
    twitter: "@BrunoRipoll",
    instagram: "https://www.instagram.com/clicemotion/"
  },
  {
    name: "Content Square",
    location: "Paris",
    youtube: "https://www.youtube.com/user/Weballwin1",
    url: "http://www.contentsquare.com/",
    description:
      "ContentSquare is a user experience analytics and optimization platform that helps businesses understand how and why users are interacting with their app, mobile and web sites. We compute billions of touch and mouse movements and transform this knowledge into profitable actions that increase engagement, reduce operational costs and maximize conversion rates.",
    employees: "201",
    sector: "#Retail #AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593824d0ff39354282a9150e/size_5_contentsquarejpg.jpg",
    id: "cj9pnqevn00nm0105mdbs3sik",
    facebook: "https://www.facebook.com/ContentSquareGlobal/",
    tranch: "200+",
    address: "50 Avenue Montaigne, 75008 Paris",
    twitter: "@ContentSquare",
    instagram: "undefined"
  },
  {
    name: "IDECSI",
    location: "Paris",
    youtube: "undefined",
    url: "http://www.idecsi.com/home",
    description:
      "Our mission: develop highly effective, advanced email security solutions that are easy to implement, use and maintain for all sensitive business applications.",
    employees: "22",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5964ff54ff3935489a98ddff/size_5_idecsi.png",
    id: "cj9pnqewc00ny0151q62w4b25",
    facebook: "https://fr-fr.facebook.com/pages/Idecsi/306865969441428",
    tranch: "21 - 40",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@IDECSI",
    instagram: "undefined"
  },
  {
    name: "Lemon Way",
    location: "Paris",
    youtube: "undefined",
    url: "http://lemonway.fr/",
    description:
      "Through its API, Lemon Way offers you state-of-the-art payment technology. Beyond their technological expertise, Lemon Way also offers a multitude of complementary regulation and management services. 3 million customer accounts opened in Europe via 1,000 platforms.",
    employees: "80",
    sector: "#FinTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382348ff393541b1a91512/size_5_lemonwayjpg.jpg",
    id: "cj9pnqez800o10151n6f4wyzc",
    facebook: "https://www.facebook.com/lemonway",
    tranch: "41 - 100",
    address: "14 RUE DE LA BEAUNE 93100 MONTREUIL SOUS BOIS",
    twitter: "@LemonWay",
    instagram: "undefined"
  },
  {
    name: "Ineat Conseil",
    location: "French Tech Lille",
    youtube: "undefined",
    url: "http://www.ineat-group.com/",
    description:
      "At the heart of digital transformation and disruptive service innovation, INEAT Group supports clients in the design and implementation of digital solutions (e-commerce, mobile, Web, CMS, IoT, etc.). What truly sets us at INEAT Group apart is our dual-value approach : technology and marketing expertise combine to deliver an exceptional customer experience.",
    employees: "140",
    sector: "#Retail #Data #AI #AdTech",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59382356ff3935420fa9150f/size_5_ineatjpg.jpg",
    id: "cj9pnqezv00o4015158l7n8rf",
    facebook: "https://www.facebook.com/ineatgroup/",
    tranch: "101 - 200",
    address: "2 Allée de la Haye du temple – 59160 Lomme",
    twitter: "@INEATgroup",
    instagram: "undefined"
  },
  {
    name: "Mapping Control",
    location: "Aix-Marseille French Tech",
    youtube: "undefined",
    url: "http://www.mappingcontrol.com/?lang=en",
    description:
      "Specialist of the connected vehicle, Mapping Control proposes to companies and public authorities, the services of embarked on-line data processing allowing to generate real savings on vehicle fleets. To meet the expectations and specificities of every company, Mapping Control offers a range of modular and evolutive services: Vehicle Tracking, Mobility, Fleet Management, Private Use Management, Driving Analysis, Carshare, Protection, Data Exchange. Our 2000 customers, representing 60 000 connected vehicles, processed everyday Mapping Control technology reduce the global cost of running their automobile fleet.",
    employees: "49",
    sector: "#Digital",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/59676ade01e2a778dbae69c6/size_5_mappingcontrol.png",
    id: "cj9pnqf0f00o70151y25x520v",
    facebook: "https://www.facebook.com/MappingControl/",
    tranch: "41 - 100",
    address: "31 Rue Gustave Eiffel, 38000 Grenobl",
    twitter: "@f_mapping",
    instagram: "undefined"
  },
  {
    name: "Nexenture",
    location: "Lyon French Tech",
    youtube: "undefined",
    url: "http://www.nexenture.fr/",
    description:
      "Nexenture is a B2B startup specializing in collaborative work. Our raison d'être is to value the commitment of all employees to the service of the company, through simple, useful digital solutions. Valuing engagement means highlighting and distinguishing committed employees and transforming this commitment into value for the company. In only a few years Nexenture has become a strategic partner of prestigious companies in their digital transformation.",
    employees: "15",
    sector: "#EdTech #Entertainment #HR",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938240bff393541a7a9154a/size_5_nexenturejpg.jpg",
    id: "cj9pnqf8m00nq01059g15w95n",
    facebook: "undefined",
    tranch: "1 -20",
    address: "21 Rue Longue, 69001 Lyon",
    twitter: "@Nexenture",
    instagram: "undefined"
  },
  {
    name: "Net Acheteur",
    location: "French Tech Montpellier",
    youtube: "undefined",
    url: "http://www.net-acheteur.com/",
    description:
      "We are a collaborative and digital platform dedicated to real estate buyers and properties hunters. Its aim is to simplify the purchasing process through an innovative customer experience, from the future owner or investors point of view. It is built upon the combination of the benefits from a digital platform (like Uber) and an essential human relationship, through a nationwide independent properties hunters network.",
    employees: "10",
    sector: "#Retail #RealEstate",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/593823e0ff393541a7a91536/size_5_netacheteursjpg.jpg",
    id: "cj9pnqfa700nt0105mrwac8rs",
    facebook: "https://www.facebook.com/netacheteur/",
    tranch: "1 -20",
    address:
      "Cap Omega – rond point Benjamin Franklin 34960 Montpellier cedex 2",
    twitter: "@Net_Acheteur",
    instagram: "undefined"
  },
  {
    name: "Imeon Energy",
    location: "French Tech Brest+",
    youtube: "undefined",
    url: "http://www.imeon-energy.com/",
    description:
      "IMEON ENERGY develops intelligent inverters dedicated to photovoltaic installations in self-consumption. It allows simultaneous use of several sources of energy (photovoltaic / battery / public network) to mitigate the fluctuation of solar production and ensure a constant supply of energy to the equipped site. IMEON now integrates true embedded intelligence. IMEON thus become the nerve center of a photovoltaic installation.",
    employees: "10",
    sector: "#CleanTech #Mobility",
    logo:
      "https://d25e16a427ed3ce77d27-76b466cd72f6b3a6e7219a8a02851d8e.ssl.cf1.rackcdn.com/files/5938235eff393541a7a91506/size_5_imeonenergyjpg.jpg",
    id: "cj9pnqfos00oa0151a2uks1u6",
    facebook: "undefined",
    tranch: "1 -20",
    address: "10 Rue Amiral romain Desfossés – 29200 Brest",
    twitter: "@imeon_energy",
    instagram: "undefined"
  }
]);

// run a 'find' query with a 'less-than-or-equal' range operator
//   to grab two of our documents.
var result = companies.find({ employees: { $lte: 60 } });

// inspect the result with sandbox logger.
// As documents are inserted into our collection they have
//   $loki property added which is a unique id you can pass to
//   collection.get(). They also have 'meta' property added which
//   is used internally.
fs.writeFile("./db.json", JSON.stringify(db, null, 2));
console.log(db);
