import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  // subcategory data
  subCategoriesFilterData = [
    { id: 1, categories: 'appliance', subcategories: 'mobile'},
    { id: 2, categories: 'appliance', subcategories: 'smart tv'},
    { id: 3, categories: 'appliance', subcategories: 'air cooler'},
    { id: 4, categories: 'appliance', subcategories: 'water purifier'},
    { id: 5, categories: 'fashion', subcategories: 'tshirt'},
    { id: 6, categories: 'fashion', subcategories: 'jeans'},
    { id: 7, categories: 'homeandfurniture', subcategories: 'sofa'},
    { id: 8, categories: 'homeandfurniture', subcategories: 'table'},
    { id: 9, categories: 'homeandfurniture', subcategories: 'bed'},
    { id: 10, categories: 'toys', subcategories: 'musical toys'},
    { id: 11, categories: 'toys', subcategories: 'cars'},
    { id: 12, categories: 'toys', subcategories: 'softtoys'},

  ]
  // category data
  categoriesData = [
    {
      id: 1,
      name: 'Fashion',
      img: "./assets/images/categoriesimg/fashion.JPG",
      code: 'fashion'
    },
    {
      id: 2,
      name: 'Home & Furniture', 
      img: "./assets/images/categoriesimg/furniture.jpg", 
      code: 'homeandfurniture'
    },
    {
      id: 3, 
      name: 'Appliance', 
      img: "./assets/images/categoriesimg/appliance.WEBP", 
      code: 'appliance'
    },
    {
      id: 4, 
      name: 'Toys', 
      img: "./assets/images/categoriesimg/toys.webp", 
      code: 'toys'
    }
  ]

  productData = [
    {
      pdId: 1,
      pdName: "Samsung Galaxy Z Fold4 5G (Phantom Black, 12GB RAM, 256GB Storage)",
      pdPrice: 109990,
      pdCategory: "appliance",
      pdSubCategory: "mobile",
      pdImg: "assets/images/productimg/samsungmobile.WEBP"
    },
    {
      pdId: 2,
      pdName: "OnePlus 12R (Cool Blue, 8GB RAM, 256GB Storage)",
      pdPrice: 42998,
      pdCategory: "appliance",
      pdSubCategory: "mobile",
      pdImg: "assets/images/productimg/oneplus.WEBP"
    },
    {
      pdId: 3,
      pdName: "Mi 108 cm (43 inches) X Series 4K Ultra HD Smart Google TV L43M8-A2IN (Black)",
      pdPrice: 147240,
      pdCategory: "appliance",
      pdSubCategory: "smart tv",
      pdImg: "assets/images/productimg/mitv.JPG"
    },
    {
      pdId: 4,
      pdName: "V-Guard RequPro True High Recovery RO UV UF Alkaline Water Purifier, 9 Stage Purification | Black",
      pdPrice: 16500,
      pdCategory: "appliance",
      pdSubCategory: "water purifier",
      pdImg: "assets/images/productimg/waterpurifier.JPG"
    },
    // fashion
    {
      pdId: 5,
      pdName: "zenlounge lavender graphic oversized t-shirt",
      pdPrice: 999,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "assets/images/productimg/oversizedtshirt.WEBP"
    },
    {
      pdId: 6,
      pdName: "Printed oversized t-shirt",
      pdPrice: 1299,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "assets/images/productimg/printedtshirt.WEBP"
    },
    {
      pdId: 7,
      pdName: "Void Grey Baggy Fit",
      pdPrice: 1799,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "assets/images/productimg/baggyjeans.WEBP"
    },
    {
      pdId: 8,
      pdName: "Zipper Pocket Sky Blue Skinny Jeans",
      pdPrice: 1599,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "assets/images/productimg/skinnyjeans.WEBP"
    },
    // homeandfurniture
    {
      pdId: 9,
      pdName: "AMATA Wood Elegant 4 Seater Sofa With Two Cushions Perfect For Home Office Guests Living Room (4-Person Sofa,L Shape, Ocean Blue1)",
      pdPrice: 20999,
      pdCategory: "homeandfurniture",
      pdSubCategory: "sofa",
      pdImg: "assets/images/productimg/sofa.JPG"
    },
    {
      pdId: 10,
      pdName: "VK Furniture Solid Sheesham Wood Four Seater Dining Table with 4 Cushion Chairs for Living Room Home| Wooden 4 Seater Dining Table Set for Office Restaurant | Warm Chestnut | L45 X W30 X H30",
      pdPrice: 13826,
      pdCategory: "homeandfurniture",
      pdSubCategory: "table",
      pdImg: "assets/images/productimg/diningtable.JPG"
    },
    {
      pdId: 11,
      pdName: "Adichwal Furniture Solid Sheesham Wood 4 Seater Dining Set Dining Table Set with Cushioned Chairs for Dining Room | Living Room | Home & Office | Hotels Restaurant (4 Seater, Honey E)",
      pdPrice: 13949,
      pdCategory: "homeandfurniture",
      pdSubCategory: "table",
      pdImg: "assets/images/productimg/diningtabletwo.WEBP"
    },
    {
      pdId: 12,
      pdName: "Solimo Tucana Engineered Wood Walnut Finish Queen Bed (Brown)",
      pdPrice: 6999,
      pdCategory: "homeandfurniture",
      pdSubCategory: "bed",
      pdImg: "assets/images/productimg/bed.JPG"
    },
    {
      pdId: 13,
      pdName: "Fiddlerz 360 Degree Rotating Musical Dancing Girl with 5D Light & Musical - Pink",
      pdPrice: 499,
      pdCategory: "toys",
      pdSubCategory: "musical toys",
      pdImg: "assets/images/productimg/babytoy.WEBP"
    },
    {
      pdId: 14,
      pdName: "Wembley RC Car High Speed Mini 1:24 Scale USB Rechargeable Remote Control Car for Kids | Racing Car (Black & Red)",
      pdPrice: 999,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "assets/images/productimg/cartoy.WEBP"
    },
    {
      pdId: 15,
      pdName: "Playzu Sports Car R/C 1:24 6years to 14years Distressed Box",
      pdPrice: 899,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "assets/images/productimg/sportscartoy.WEBP"
    },
    {
      pdId: 16,
      pdName: "DearJoy Small Sleeping Panda Soft Toy - Length 25 cm",
      pdPrice: 299,
      pdCategory: "toys",
      pdSubCategory: "softtoys",
      pdImg: "assets/images/productimg/panda.WEBP"
    }
  ]

}
