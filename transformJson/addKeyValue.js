const data = [
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
    instagram: "undefined",
    meta: {
      revision: 0,
      created: 1518095577651,
      version: 0
    },
    $loki: 76
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
    instagram: "undefined",
    meta: {
      revision: 0,
      created: 1518095577651,
      version: 0
    },
    $loki: 77
  }
];
var resultt = data.map(function(el) {
  var o = Object.assign({}, el);
  o.id = o.$loki;
  return o;
});
console.log(data);
console.log(resultt);
var arrOfObj = [
  {
    name: "eve"
  },
  {
    name: "john"
  },
  {
    name: "jane"
  }
];

var result = arrOfObj.map(function(el) {
  var o = Object.assign({}, el);
  o.isActive = true;
  return o;
});

console.log(arrOfObj);
console.log(result);
