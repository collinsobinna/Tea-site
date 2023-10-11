import BlackTea from "../images/Black Tea.png";
import Chai from "../images/Chai.png";
import GreenTea from "../images/Green Tea.png";
import HerbalTea from "../images/Herbal Tea.png";
import Oolong from "../images/Oolong.png";
import Rooibos from "../images/Rooibos.png";
import Teaware from "../images/Teaware.png";
import Matcha from "../images/Matcha.png";
import WhiteTea from "../images/White Tea.png";

import image1 from "../images/Image Holder.png";
import image2 from "../images/Image Holder 1.png";
import image3 from "../images/Image Holder 3.png";
import image4 from "../images/Image Holder 4.png";
import image5 from "../images/Image Holder 5.png";
import image6 from "../images/Image Holder 6.png";
import image7 from "../images/Image Holder 7.png";
import image8 from "../images/Image Holder 8.jpg";

const data = [
  {
    id: 1,
    category: "BlackTea",
    name: "Ceylon Ginger",
    type: "Cinnamon chai tea",
    price: 4.85,
    image: BlackTea,
    gallery: [
      // "https://images.pexels.com/photos/6226209/pexels-photo-6226209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7988009/pexels-photo-7988009.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },

  {
    id: 2,
    category: "GreenTea",
    name: "Assam",
    type: "Keemun Black Tea",
    price: 7.99,
    image: GreenTea,
    gallery: [
      "https://images.pexels.com/photos/1581484/pexels-photo-1581484.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/92327/pexels-photo-92327.jpeg?auto=compress&cs=tinysrgb&w=600",

      // "https://images.pexels.com/photos/5078583/pexels-photo-5078583.jpeg?auto=compress&cs=tinysrgb&w=600",
      // "https://images.pexels.com/photos/3735171/pexels-photo-3735171.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },

  {
    id: 3,
    category: "WhiteTea",
    name: "Silver Needle",
    type: "Yin Zhen Bai Hao",
    price: 8.34,
    image: WhiteTea,
    gallery: [
      "https://images.pexels.com/photos/7988011/pexels-photo-7988011.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8329984/pexels-photo-8329984.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1581484/pexels-photo-1581484.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },

  {
    id: 4,
    category: "Matcha",
    name: "Ceremonial",
    type: "Culinary Good",
    price: 4.55,
    image: Matcha,
    gallery: [
      // "https://images.pexels.com/photos/5078600/pexels-photo-5078600.jpeg?auto=compress&cs=tinysrgb&w=600",
      // "https://images.pexels.com/photos/2958893/pexels-photo-2958893.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7144712/pexels-photo-7144712.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1581484/pexels-photo-1581484.jpeg?auto=compress&cs=tinysrgb&w=600",

      "https://images.pexels.com/photos/5168516/pexels-photo-5168516.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },

  {
    id: 5,
    category: "HerbalTea",
    name: "German Chamomile",
    type: "Hungarian chamomile",
    price: 8.75,
    image: HerbalTea,
    gallery: [
      "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1793034/pexels-photo-1793034.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5620874/pexels-photo-5620874.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },

  {
    id: 6,
    category: "Chai",
    name: "Ceylon Ginger",
    type: "Cinnamon chai tea",
    price: 10.11,
    image: Chai,
    gallery: [image1, image2, image3, image4],
  },

  {
    id: 7,
    category: "Oolong",
    name: "Jin Xuan",
    type: "Milk Oolong",
    price: 2.6,
    image: Oolong,
    gallery: [
      "https://images.pexels.com/photos/8329272/pexels-photo-8329272.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6351839/pexels-photo-6351839.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6351882/pexels-photo-6351882.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8330249/pexels-photo-8330249.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3193647/pexels-photo-3193647.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },

  {
    id: 8,
    category: "Rooibos",
    name: "Aspalathus linearis",
    type: "Fabaceae",
    price: 5.03,
    image: Rooibos,
    gallery: [
      "https://images.pexels.com/photos/6087602/pexels-photo-6087602.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/11213967/pexels-photo-11213967.jpeg?auto=compress&cs=tinysrgb&w=600",
      image7,
      image8,
    ],
  },

  {
    id: 9,
    category: "Teaware",
    name: "Kettle",
    type: "All types",
    price: 12.04,
    image: Teaware,
    gallery: [
      "https://images.pexels.com/photos/8951884/pexels-photo-8951884.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8079664/pexels-photo-8079664.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/18444664/pexels-photo-18444664/free-photo-of-an-empty-glass-on-a-leather-seat.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7162254/pexels-photo-7162254.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
];

export default data;
