import iphone from '../iphone.jpg'
import iphone1 from '../subProducts/iphone1.jpg'
import iphone2 from '../subProducts/iphone2.jpg'
import iphone3 from '../subProducts/iphone3.jpg'
import samsung from '../samsung.jpg'
import samsung1 from '../subProducts/samsung1.png'
import samsung2 from '../subProducts/samsung2.png'
import samsung3 from '../subProducts/samsung3.png'
import opo from '../opo.jpg'
import opo1 from '../subProducts/opo1.png'
import opo2 from '../subProducts/opo2.png'
import opo3 from '../subProducts/opo3.png'
import redmi from '../redmi.jpg'
import redmi1 from '../subProducts/redmi1.jpg'
import redmi2 from '../subProducts/redmi2.jpg'
import redmi3 from '../subProducts/redmi3.jpg'
import nokia from '../nokia.jpg'
import nokia1 from '../subProducts/nokia1.png'
import nokia2 from '../subProducts/nokia2.jpg'
import nokia3 from '../subProducts/nokia3.jpg'
import hauwai from '../hauwai.jpg'
import hauwai1 from '../subProducts/hauwai1.png'
import hauwai2 from '../subProducts/hauwai2.jpg'
import hauwai3 from '../subProducts/hauwai3.jpg'

import laptop1 from '../laptop-img/laptop.jpg'
import laptop2 from '../laptop-img/large2.jpg'
import laptop3 from '../laptop-img/large3.jpg'
import laptop4 from '../laptop-img/large4.jpg'
import laptop5 from '../laptop-img/medium1.jpg'
import laps1 from '../laptop-img/small1.jpg'
import laps2 from '../laptop-img/small2.jpg'
import laps3 from '../laptop-img/small3.jpg'
import laps4 from '../laptop-img/small4.jpg'
import laps5 from '../laptop-img/small5.jpg'
import laps2meduim from '../laptop-img/2/2-medium.jpg'
import laps2small from '../laptop-img/2/2-small.jpg'
import laps3medium from '../laptop-img/3/3-medium.jpg'
import laps3small from '../laptop-img/3/3-small.jpg'
import laps4meduim from '../laptop-img/4/4-medium.jpg'
import laps4small from '../laptop-img/4/4-small.jpg'
import laps5meduim from '../laptop-img/5/5-medium.jpg'
import laps5small from '../laptop-img/5/5-small.jpg'
import laps6meduim from '../laptop-img/6/6-medium.jpg'
import laps6small from '../laptop-img/6/6-small.jpg'
import laps7meduim from '../laptop-img/7/7-small.jpg'
import laps7small from '../laptop-img/7/7-small.jpg'
import laps8meduim from '../laptop-img/8/8-medium.jpg'
import laps8small from '../laptop-img/8/8-small.jpg'

import { v4 } from 'uuid'
export const mobileData = [
  {
    id: v4(),
    img: iphone,
    subImg: [iphone, iphone1, iphone2, iphone3],
    description:
      'Lorem ipsum DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Iphone11 pro ',
    price: 200,
    category: 'cheapest',
    inStock: true,
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Apple',
      Ram: '12 GB',
      Weight: '12inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: samsung,
    subImg: [samsung, samsung1, samsung2, samsung3],
    description:
      'Lorem ipsum dolor   DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Samsung S8',
    price: 100,
    inStock: true,

    category: 'cheapest',
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Apple',
      Ram: '12 GB',
      Weight: '12inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: opo,
    subImg: [opo, opo1, opo2, opo3],
    description:
      'Lorem , DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Opo A9',
    price: 80,

    category: 'latest',
    inStock: true,
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Apple',
      Ram: '12 GB',
      Weight: '12inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: redmi,
    subImg: [redmi, redmi1, redmi2, redmi3],
    description:
      'Lorem DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Redmi p2',
    price: 90,
    inStock: true,
    category: 'cheapest',
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Apple',
      Ram: '12 GB',
      Weight: '12inches ',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: nokia,
    subImg: [nokia, nokia1, nokia2, nokia3],
    description:
      'Lorem DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Nokia8_cirocco',
    price: 700,
    inStock: true,
    category: 'latest',
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Apple',
      Ram: '12 GB',
      Weight: '12inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: hauwai,
    subImg: [hauwai, hauwai1, hauwai2, hauwai3],
    description:
      'Lorem DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Huawai P20',
    price: 250,
    inStock: true,
    category: 'latest',
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Apple',
      Ram: '12 GB',
      Weight: '12inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      Talktime: '50 hours',
    },
  },

  {
    id: v4(),
    img: laptop2,
    subImg: [laps1, laps2, laps3, laps4],
    description:
      'Lorem ipsum DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Mac-20 pro ',
    price: 2000,
    category: 'cheapest',
    inStock: true,
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Mac',
      Ram: '500 GB',
      Weight: '12inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: laps2meduim,
    subImg: [laps2small, laps4, laps3, laps2],
    description:
      'Lorem ipsum dolor   DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Mac-ultra',
    price: 100,
    inStock: true,

    category: 'cheapest',
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Mac',
      Ram: '1tb',
      Weight: '15inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: laps3medium,
    subImg: [laps3small, laps3, laps2, laps1],
    description:
      'Lorem , DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Mac-67 Pro',
    price: 1800,

    category: 'latest',
    inStock: true,
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Mac',
      Ram: '1tb',
      Weight: '15inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: laps4meduim,
    subImg: [laps2small, laps1, laps3, laps2],
    description:
      'Lorem DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Mac-z10',
    price: 3000,
    inStock: true,
    category: 'cheapest',
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Mac',
      Ram: '500 GB',
      Weight: '18inches ',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: laps5meduim,
    subImg: [laps5small, laps4, laps1, laps5],
    description:
      'Lorem DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Mac-5r ',
    price: 4000,
    inStock: true,
    category: 'latest',
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Mac',
      Ram: '12 GB',
      Weight: '12inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
  {
    id: v4(),
    img: laps6meduim,
    subImg: [laps6small, laps4, laps1, laps5],
    description:
      'Lorem DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    name: 'Mac-Q5 pro',
    price: 4000,
    inStock: true,
    category: 'latest',
    quantity: 1,
    update: false,
    discount: 2,
    Details: {
      Os: 'Mac',
      Ram: '12 GB',
      Weight: '12inches',
      Dimensions: '17.6 x 9.6 x 5.2 cm',
      Batteries: '1 Lithium ion batteries required. (included)',
      Modelnumber: 'MWHJ2B/A',
      Wireless: 'LTE',
      Connectivity: 'Bluetooth',
      GPS: 'A-GPS',
      Specialfeatures: 'OLED Display, Camera',
      Display: 'OLED',
      Resolution: '1920 x 1080',
      Color: 'Space Gray',
      TalkTime: '50 hours',
    },
  },
]
