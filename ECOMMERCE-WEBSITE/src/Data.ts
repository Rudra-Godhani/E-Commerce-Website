// import featured1 from "./assets/featured/featured-1.svg"
// import featured2 from "./assets/featured/featured-2.svg"
// import featured3 from "./assets/featured/featured-3.svg"
// import featured4 from "./assets/featured/featured-4.svg"
// import featured5 from "./assets/featured/featured-5.svg"
// import featured6 from "./assets/featured/featured-6.svg"
// import featured7 from "./assets/featured/featured-7.svg"
// import featured8 from "./assets/featured/featured-8.svg"

// import featuredPost1 from "./assets/featured-post/featured-post-1.svg";
// import featuredPost2 from "./assets/featured-post/featured-post-2.svg";
// import featuredPost3 from "./assets/featured-post/featured-post-3.svg";

// import heroFirst1 from "./assets/hero-1.jpg";
// import heroFirst2 from "./assets/carousal-3.jpg";

// import bestSeller1 from "./assets/productDatail/bestSeller1.svg";
// import bestSeller2 from "./assets/productDatail/bestSeller2.svg";
// import bestSeller3 from "./assets/productDatail/bestSeller3.svg";
// import bestSeller4 from "./assets/productDatail/bestSeller4.svg";
// import bestSeller5 from "./assets/productDatail/bestSeller5.svg";
// import bestSeller6 from "./assets/productDatail/bestSeller6.svg";

// import teamMember1 from "./assets/aboutUs/team-1-user-1.svg";
// import teamMember2 from "./assets/aboutUs/team-1-user-2.svg";
// import teamMember3 from "./assets/aboutUs/team-1-user-3.svg";

// import slider1 from "./assets/productListing/slider1.avif";
// import slider2 from "./assets/productListing/slider2.avif";
// import slider3 from "./assets/productListing/slider3.avif";
// import slider4 from "./assets/productListing/slider4.avif";
// import slider5 from "./assets/productListing/slider5.avif";
// import slider6 from "./assets/productListing/slider6.avif";
// import slider7 from "./assets/productListing/slider7.avif";
// import slider8 from "./assets/productListing/slider8.avif";

// interface FeaturedData {
//     id: string,
//     images: string[],
//     title: string,
//     description: string,
//     price: string,
//     retailPrice: string,
// }

// interface FeaturedPostData {
//     img: string,
//     title: string,
//     description: string,
//     date: string,
//     comments: string,
// }

// interface HeroFirst {
//     img: string,
//     content: object
// }

// const products: = [
//     {
//         id: 1,
//         title: "Wireless Bluetooth Headphones",
//         description: "High-quality wireless headphones with noise cancellation.",
//         price: 79.99,
//         retailPrice: 99.99,
//         images: [
//             "https://source.unsplash.com/400x300/?headphones",
//             "https://source.unsplash.com/400x300/?bluetooth-headphones",
//             "https://source.unsplash.com/400x300/?music-gadgets"
//         ],
//         colors: ["#000000", "#FFFFFF", "#1E90FF"], // Black, White, Dodger Blue
//         availability: true,
//         review: 4.5
//     },
//     {
//         id: 2,
//         title: "Smartwatch Series 5",
//         description: "Feature-packed smartwatch with health tracking and notifications.",
//         price: 199.99,
//         retailPrice: 249.99,
//         images: [
//             "https://source.unsplash.com/400x300/?smartwatch",
//             "https://source.unsplash.com/400x300/?wearable-tech",
//             "https://source.unsplash.com/400x300/?fitness-watch"
//         ],
//         colors: ["#000000", "#C0C0C0", "#FFC0CB"], // Black, Silver, Pink
//         availability: true,
//         review: 4.7
//     },
//     {
//         id: 3,
//         title: "Gaming Laptop",
//         description: "Powerful gaming laptop with RTX graphics and high refresh rate display.",
//         price: 1299.99,
//         retailPrice: 1499.99,
//         images: [
//             "https://source.unsplash.com/400x300/?gaming-laptop",
//             "https://source.unsplash.com/400x300/?laptop",
//             "https://source.unsplash.com/400x300/?computer-gaming"
//         ],
//         colors: ["#1C1C1C", "#A9A9A9"], // Dark Gray, Gray
//         availability: false,
//         review: 4.8
//     },
//     {
//         id: 4,
//         title: "Mechanical Keyboard",
//         description: "RGB backlit mechanical keyboard with tactile switches.",
//         price: 89.99,
//         retailPrice: 119.99,
//         images: [
//             "https://source.unsplash.com/400x300/?keyboard",
//             "https://source.unsplash.com/400x300/?mechanical-keyboard",
//             "https://source.unsplash.com/400x300/?rgb-keyboard"
//         ],
//         colors: ["#000000", "#FFFFFF"], // Black, White
//         availability: true,
//         review: 4.6
//     },
//     {
//         id: 5,
//         title: "4K Ultra HD Smart TV",
//         description: "65-inch 4K UHD Smart TV with HDR and streaming apps.",
//         price: 799.99,
//         retailPrice: 999.99,
//         images: [
//             "https://source.unsplash.com/400x300/?smart-tv",
//             "https://source.unsplash.com/400x300/?4k-tv",
//             "https://source.unsplash.com/400x300/?home-theater"
//         ],
//         colors: ["#000000"], // Black
//         availability: true,
//         review: 4.7
//     },
//     {
//         id: 6,
//         title: "Wireless Earbuds",
//         description: "True wireless earbuds with high-fidelity sound and noise isolation.",
//         price: 59.99,
//         retailPrice: 79.99,
//         images: [
//             "https://source.unsplash.com/400x300/?earbuds",
//             "https://source.unsplash.com/400x300/?wireless-earbuds",
//             "https://source.unsplash.com/400x300/?earphones"
//         ],
//         colors: ["#000000", "#FFFFFF", "#FF0000"], // Black, White, Red
//         availability: true,
//         review: 4.4
//     },
//     {
//         id: 7,
//         title: "Gaming Mouse",
//         description: "Ergonomic gaming mouse with programmable buttons and RGB lighting.",
//         price: 49.99,
//         retailPrice: 69.99,
//         images: [
//             "https://source.unsplash.com/400x300/?gaming-mouse",
//             "https://source.unsplash.com/400x300/?mouse",
//             "https://source.unsplash.com/400x300/?computer-mouse"
//         ],
//         colors: ["#FF4500", "#000000"], // Orange Red, Black
//         availability: true,
//         review: 4.6
//     },
//     {
//         id: 8,
//         title: "Smartphone",
//         description: "Latest model smartphone with OLED display and triple-camera system.",
//         price: 999.99,
//         retailPrice: 1099.99,
//         images: [
//             "https://source.unsplash.com/400x300/?smartphone",
//             "https://source.unsplash.com/400x300/?mobile-phone",
//             "https://source.unsplash.com/400x300/?cellphone"
//         ],
//         colors: ["#000000", "#C0C0C0", "#FFFFFF"], // Black, Silver, White
//         availability: true,
//         review: 4.9
//     },
//     {
//         id: 9,
//         title: "Tablet",
//         description: "10-inch tablet with retina display and powerful processor.",
//         price: 399.99,
//         retailPrice: 449.99,
//         images: [
//             "https://source.unsplash.com/400x300/?tablet",
//             "https://source.unsplash.com/400x300/?ipad",
//             "https://source.unsplash.com/400x300/?android-tablet"
//         ],
//         colors: ["#FFFFFF", "#808080"], // White, Gray
//         availability: true,
//         review: 4.5
//     },
//     {
//         id: 10,
//         title: "Wireless Charger",
//         description: "Fast wireless charger for smartphones and smartwatches.",
//         price: 29.99,
//         retailPrice: 39.99,
//         images: [
//             "https://source.unsplash.com/400x300/?wireless-charger",
//             "https://source.unsplash.com/400x300/?charging-pad",
//             "https://source.unsplash.com/400x300/?charger"
//         ],
//         colors: ["#000000", "#FFFFFF"], // Black, White
//         availability: true,
//         review: 4.2
//     },{
//         id: 11,
//         title: "Portable Bluetooth Speaker",
//         description: "Waterproof portable speaker with deep bass and long battery life.",
//         price: 49.99,
//         retailPrice: 69.99,
//         images: [
//             "https://source.unsplash.com/400x300/?bluetooth-speaker",
//             "https://source.unsplash.com/400x300/?portable-speaker",
//             "https://source.unsplash.com/400x300/?music-speaker"
//         ],
//         colors: ["#000000", "#FF0000", "#008080"], // Black, Red, Teal
//         availability: true,
//         review: 4.7
//     },
//     {
//         id: 12,
//         title: "DSLR Camera",
//         description: "Professional DSLR camera with 24MP sensor and 4K recording.",
//         price: 899.99,
//         retailPrice: 999.99,
//         images: [
//             "https://source.unsplash.com/400x300/?dslr-camera",
//             "https://source.unsplash.com/400x300/?camera",
//             "https://source.unsplash.com/400x300/?photography"
//         ],
//         colors: ["#000000"], // Black
//         availability: true,
//         review: 4.8
//     },
//     {
//         id: 13,
//         title: "External Hard Drive",
//         description: "1TB portable external hard drive with fast transfer speeds.",
//         price: 79.99,
//         retailPrice: 99.99,
//         images: [
//             "https://source.unsplash.com/400x300/?external-hard-drive",
//             "https://source.unsplash.com/400x300/?hard-drive",
//             "https://source.unsplash.com/400x300/?storage"
//         ],
//         colors: ["#A9A9A9", "#000000"], // Gray, Black
//         availability: true,
//         review: 4.6
//     },
//     {
//         id: 14,
//         title: "Gaming Monitor",
//         description: "27-inch 144Hz gaming monitor with ultra-low response time.",
//         price: 299.99,
//         retailPrice: 349.99,
//         images: [
//             "https://source.unsplash.com/400x300/?gaming-monitor",
//             "https://source.unsplash.com/400x300/?monitor",
//             "https://source.unsplash.com/400x300/?computer-screen"
//         ],
//         colors: ["#000000"], // Black
//         availability: true,
//         review: 4.7
//     },
//     {
//         id: 15,
//         title: "Smart Home Security Camera",
//         description: "1080p HD security camera with motion detection and night vision.",
//         price: 59.99,
//         retailPrice: 79.99,
//         images: [
//             "https://source.unsplash.com/400x300/?security-camera",
//             "https://source.unsplash.com/400x300/?smart-camera",
//             "https://source.unsplash.com/400x300/?home-security"
//         ],
//         colors: ["#FFFFFF", "#000000"], // White, Black
//         availability: true,
//         review: 4.5
//     },
//     {
//         id: 16,
//         title: "VR Headset",
//         description: "Virtual reality headset with immersive 3D experience.",
//         price: 349.99,
//         retailPrice: 399.99,
//         images: [
//             "https://source.unsplash.com/400x300/?vr-headset",
//             "https://source.unsplash.com/400x300/?virtual-reality",
//             "https://source.unsplash.com/400x300/?gaming-vr"
//         ],
//         colors: ["#000000", "#FFFFFF"], // Black, White
//         availability: true,
//         review: 4.6
//     },
//     {
//         id: 17,
//         title: "Smart Light Bulb",
//         description: "Wi-Fi-enabled smart light bulb with customizable colors.",
//         price: 19.99,
//         retailPrice: 29.99,
//         images: [
//             "https://source.unsplash.com/400x300/?smart-light",
//             "https://source.unsplash.com/400x300/?led-light",
//             "https://source.unsplash.com/400x300/?color-light"
//         ],
//         colors: ["#FFD700", "#00FF00", "#0000FF"], // Gold, Green, Blue
//         availability: true,
//         review: 4.3
//     },
//     {
//         id: 18,
//         title: "Electric Scooter",
//         description: "Foldable electric scooter with long battery life and fast speed.",
//         price: 499.99,
//         retailPrice: 599.99,
//         images: [
//             "https://source.unsplash.com/400x300/?electric-scooter",
//             "https://source.unsplash.com/400x300/?scooter",
//             "https://source.unsplash.com/400x300/?urban-mobility"
//         ],
//         colors: ["#000000", "#FF4500"], // Black, Orange Red
//         availability: true,
//         review: 4.4
//     },
//     {
//         id: 19,
//         title: "Smart Thermostat",
//         description: "Energy-efficient smart thermostat with remote control via app.",
//         price: 149.99,
//         retailPrice: 179.99,
//         images: [
//             "https://source.unsplash.com/400x300/?smart-thermostat",
//             "https://source.unsplash.com/400x300/?thermostat",
//             "https://source.unsplash.com/400x300/?home-tech"
//         ],
//         colors: ["#C0C0C0", "#000000"], // Silver, Black
//         availability: true,
//         review: 4.5
//     },
//     {
//         id: 20,
//         title: "Robot Vacuum Cleaner",
//         description: "Smart robotic vacuum cleaner with auto-charging and app control.",
//         price: 249.99,
//         retailPrice: 299.99,
//         images: [
//             "https://source.unsplash.com/400x300/?robot-vacuum",
//             "https://source.unsplash.com/400x300/?vacuum-cleaner",
//             "https://source.unsplash.com/400x300/?smart-cleaning"
//         ],
//         colors: ["#000000", "#A9A9A9"], // Black, Gray
//         availability: true,
//         review: 4.6
//     }
// ];

// export const featuredData: FeaturedData[] = [
//     {
//         id: "1",
//         img: featured1,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         id: "2",
//         img: featured2,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         id: "3",
//         img: featured3,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         id: "4",
//         img: featured4,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         id: "5",
//         img: featured5,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         id: "6",
//         img: featured6,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         id: "7",
//         img: featured7,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         id: "8",
//         img: featured8,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
// ];

// export const featuredPostData: FeaturedPostData[] = [
//     {
//         img: featuredPost1,
//         title: "Loudest à la Madison #1 (L'integral)",
//         description: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
//         date: "22 April 2021",
//         comments: "10"
//     },
//     {
//         img: featuredPost2,
//         title: "Loudest à la Madison #1 (L'integral)",
//         description: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
//         date: "22 April 2021",
//         comments: "10"
//     },
//     {
//         img: featuredPost3,
//         title: "Loudest à la Madison #1 (L'integral)",
//         description: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
//         date: "22 April 2021",
//         comments: "10"
//     }
// ]

// export const heroFirstData: HeroFirst[] = [
//     {
//         img: heroFirst1,
//         content: {
//             subtitle: "SUMMER 2020",
//             title: "NEW COLLECTION",
//             description: "We know how large objects will act, but things on a small scale."
//         },
//     },
//     {
//         img: heroFirst2,
//         content: {
//             subtitle: "SUMMER 2020",
//             title: "NEW COLLECTION",
//             description: "We know how large objects will act, but things on a small scale."
//         },
//     }
// ]

// interface FooterData {
//     city: string,
//     street: string,
//     no: string,
//     mobileNo: string,
//     fax: string

// }
// export const footerData: FooterData[] = [
//     {
//         city: "Paris",
//         street: "1901 Thorn ridge Cir. ",
//         no: "75000 Paris",
//         mobileNo: "+451 215 215 ",
//         fax: "+451 215 215"
//     },
//     {
//         city: "New York",
//         street: "2715 Ash Dr. San Jose, ",
//         no: "75000 Paris",
//         mobileNo: "+451 215 215 ",
//         fax: "+451 215 215"
//     },
//     {
//         city: "Berlin",
//         street: "4140 Parker Rd. ",
//         no: "75000 Paris",
//         mobileNo: "+451 215 215 ",
//         fax: "+451 215 215"
//     },
//     {
//         city: "London",
//         street: "3517 W. Gray St. Utica, ",
//         no: "75000 Paris",
//         mobileNo: "+451 215 215 ",
//         fax: "+451 215 215"
//     }
// ]

// interface BestSellerProductsData {
//     img: string,
//     title: string,
//     description: string,
//     price: string,
//     retailPrice: string,
// }

// export const bestSellerProductsData: BestSellerProductsData[] = [
//     {
//         img: bestSeller1,
//         title: "Pink Plate",
//         description: "Durable, good Quality Plate",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         img: bestSeller2,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         img: bestSeller3,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         img: bestSeller4,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         img: bestSeller5,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         img: bestSeller6,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         img: bestSeller1,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
//     {
//         img: bestSeller2,
//         title: "Yellow T-shirt",
//         description: "Premium Quality T-shirt",
//         price: "$16.48",
//         retailPrice: "$6.48"
//     },
// ];

// interface TeamDetail {
//     img: string,
//     username: string,
//     profession: string,
// }

// export const teamDetail: TeamDetail[] = [
//     {
//         img: teamMember1,
//         username: "Namita Thapar",
//         profession: "Frontend Developer"
//     },
//     {
//         img: teamMember2,
//         username: "Vineeta Singh",
//         profession: "Backend Developer"
//     },
//     {
//         img: teamMember3,
//         username: "Piyush Bansal",
//         profession: "FullStack Developer"
//     },
// ];

// interface ShopCardItems {
//     id: number,
//     image: string,
//     heading: string,
//     items: number
// }

// export const shopCardItems: ShopCardItems[] = [
//     {
//         id: 1,
//         image: slider1,
//         heading: "MEN'S CLOTHING",
//         items: 5,
//     },
//     {
//         id: 2,
//         image: slider2,
//         heading: "KIDS' CLOTHING",
//         items: 7,
//     },
//     {
//         id: 3,
//         image: slider3,
//         heading: "MEN'S CASUALS",
//         items: 15,
//     },
//     {
//         id: 4,
//         image: slider4,
//         heading: "FESTIVAL SPECIALS",
//         items: 12,
//     },
//     {
//         id: 5,
//         image: slider5,
//         heading: "JACKETS",
//         items: 18,
//     },
//     {
//         id: 6,
//         image: slider6,
//         heading: "ELECTRONICS",
//         items: 45,
//     },
//     {
//         id: 7,
//         image: slider7,
//         heading: "WINTER SPECIALS",
//         items: 25,
//     },
//     {
//         id: 8,
//         image: slider8,
//         heading: "COUPLE'S SPECIALS",
//         items: 20,
//     },
// ];


import featured1 from "./assets/featured/featured-1.svg"
import featured2 from "./assets/featured/featured-2.svg"
import featured3 from "./assets/featured/featured-3.svg"
import featured4 from "./assets/featured/featured-4.svg"
import featured5 from "./assets/featured/featured-5.svg"
import featured6 from "./assets/featured/featured-6.svg"
import featured7 from "./assets/featured/featured-7.svg"
import featured8 from "./assets/featured/featured-8.svg"

import featuredPost1 from "./assets/featured-post/featured-post-1.svg";
import featuredPost2 from "./assets/featured-post/featured-post-2.svg";
import featuredPost3 from "./assets/featured-post/featured-post-3.svg";

import heroFirst1 from "./assets/hero-1.jpg";
import heroFirst2 from "./assets/carousal-3.jpg";

import bestSeller1 from "./assets/productDatail/bestSeller1.svg";
import bestSeller2 from "./assets/productDatail/bestSeller2.svg";
import bestSeller3 from "./assets/productDatail/bestSeller3.svg";
import bestSeller4 from "./assets/productDatail/bestSeller4.svg";
import bestSeller5 from "./assets/productDatail/bestSeller5.svg";
import bestSeller6 from "./assets/productDatail/bestSeller6.svg";

import teamMember1 from "./assets/aboutUs/team-1-user-1.svg";
import teamMember2 from "./assets/aboutUs/team-1-user-2.svg";
import teamMember3 from "./assets/aboutUs/team-1-user-3.svg";

import slider1 from "./assets/productListing/slider1.avif";
import slider2 from "./assets/productListing/slider2.avif";
import slider3 from "./assets/productListing/slider3.avif";
import slider4 from "./assets/productListing/slider4.avif";
import slider5 from "./assets/productListing/slider5.avif";
import slider6 from "./assets/productListing/slider6.avif";
import slider7 from "./assets/productListing/slider7.avif";
import slider8 from "./assets/productListing/slider8.avif";

export interface Product {
    id: number,
    title: string,
    descriptionSmall: string,
    descriptionLong: string,
    price: number,
    retailPrice: number,
    images: string[],
    colors: string[],
    availability: boolean,
    reviewsText: string[],
    noOfReviews: number,
    rating: number,
    brand: string,
    category: string,
    additionalInformation: string
}

interface FeaturedPostData {
    img: string,
    title: string,
    description: string,
    date: string,
    comments: string,
}

interface HeroFirst {
    img: string,
    content: object
}

export const productsData: Product[] = [
    {
        "id": 1,
        "title": "Nike Air Max 270",
        "descriptionSmall": "Stylish and comfortable running shoes.",
        "descriptionLong": "The Nike Air Max 270 features a large Air unit for ultimate comfort and a sleek design for a modern look.",
        "price": 149.99,
        "retailPrice": 180.00,
        "images": [
            "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzaG91ZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMHNob3Vlc3xlbnwwfHwwfHx8MA%3D%3D"
        ],
        "colors": [
            "#000000",
            "#FFFFFF",
            "#FF0000"
        ],
        "availability": true,
        "reviewsText": [
            "Very comfortable and stylish!",
            "Perfect for running and casual wear."
        ],
        "noOfReviews": 120,
        "rating": 4.7,
        "brand": "Nike",
        "category": "Footwear",
        "additionalInformation": "The Nike Air Max 270 is inspired by two iconic Air Max models: the Air Max 180 and Air Max 93. The shoe boasts the largest Air heel unit ever seen in a Nike sneaker, ensuring unparalleled comfort. The upper is crafted from lightweight mesh, making it breathable and perfect for all-day wear. Whether you're running, walking, or just making a style statement, the Air Max 270 delivers exceptional performance and aesthetics. The rubber outsole provides great traction, making it suitable for various surfaces."
    },
    {
        "id": 2,
        "title": "Rolex Submariner",
        "descriptionSmall": "Luxury diving watch with timeless design.",
        "descriptionLong": "The Rolex Submariner is an iconic watch that combines elegance with performance, perfect for deep-sea adventures.",
        "price": 10999.99,
        "retailPrice": 12000.00,
        "images": [
            "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4276458/pexels-photo-4276458.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#000000",
            "#C0C0C0"
        ],
        "availability": true,
        "reviewsText": [
            "Absolutely stunning and worth the investment.",
            "A masterpiece of craftsmanship."
        ],
        "noOfReviews": 85,
        "rating": 4.9,
        "brand": "Rolex",
        "category": "Watches",
        "additionalInformation": "The Rolex Submariner is one of the most recognizable timepieces in the world. Originally introduced in 1953, it has evolved into a symbol of luxury and precision. The watch is water-resistant up to 300 meters, featuring a unidirectional rotatable bezel with a ceramic insert for measuring diving time. The luminescent markers ensure visibility in low-light conditions. Crafted from Oystersteel, the case is corrosion-resistant, maintaining its shine for years. The automatic movement, powered by Rolex's Caliber 3235, guarantees reliability and accuracy. Whether for deep-sea exploration or an elegant evening out, the Submariner is the perfect companion."
    },
    {
        "id": 3,
        "title": "Gucci GG Marmont Handbag",
        "descriptionSmall": "Elegant leather handbag with GG logo.",
        "descriptionLong": "The Gucci GG Marmont handbag features a soft structure, quilted leather, and the signature GG logo, perfect for any occasion.",
        "price": 2399.99,
        "retailPrice": 2700.00,
        "images": [
            "https://images.unsplash.com/photo-1566150906772-1b8d20ca63cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZ2JhZ3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.pexels.com/photos/1204464/pexels-photo-1204464.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5650019/pexels-photo-5650019.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#000000",
            "#F5F5DC",
            "#FF0000"
        ],
        "availability": true,
        "reviewsText": [
            "Stylish and perfect for any outfit.",
            "High-quality leather and craftsmanship."
        ],
        "noOfReviews": 60,
        "rating": 4.8,
        "brand": "Gucci",
        "category": "Handbags",
        "additionalInformation": "The Gucci GG Marmont handbag is a timeless piece that exudes sophistication and elegance. The quilted chevron leather with the GG logo creates a striking aesthetic. Designed with an adjustable chain strap, the handbag can be worn as a shoulder bag or a crossbody. The interior features a microfiber lining with a suede-like finish, providing a luxurious touch. The secure flap closure ensures safety for your essentials. Perfect for day-to-night styling, this handbag is an ideal investment for fashion-forward individuals."
    },
    {
        "id": 4,
        "title": "Chanel No. 5 Perfume",
        "descriptionSmall": "Classic fragrance for women.",
        "descriptionLong": "Chanel No. 5 is a timeless and elegant fragrance with floral and musky notes, perfect for any occasion.",
        "price": 149.99,
        "retailPrice": 180.00,
        "images": [
            "https://images.pexels.com/photos/1666404/pexels-photo-1666404.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1830450/pexels-photo-1830450.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#FFD700"
        ],
        "availability": true,
        "reviewsText": [
            "A classic fragrance that never goes out of style.",
            "Love the scent, lasts all day."
        ],
        "noOfReviews": 200,
        "rating": 4.9,
        "brand": "Chanel",
        "category": "Beauty",
        "additionalInformation": "Chanel No. 5 is one of the most iconic perfumes ever created. Launched in 1921, it features a complex blend of floral and aldehydic notes, creating a sophisticated and long-lasting scent. The fragrance opens with fresh citrus, followed by jasmine and rose, with a warm, musky base. The elegant glass bottle design enhances its timeless appeal."
    },
    {
        "id": 5,
        "title": "Levi’s 501 Original Fit Jeans",
        "descriptionSmall": "Iconic denim jeans with a classic fit.",
        "descriptionLong": "Levi’s 501 jeans feature a straight leg, button fly, and durable denim fabric for a timeless and comfortable fit.",
        "price": 69.99,
        "retailPrice": 89.99,
        "images": [
            "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/981619/pexels-photo-981619.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#0000FF",
            "#000000"
        ],
        "availability": true,
        "reviewsText": [
            "Perfect fit and durable material.",
            "Classic jeans that never go out of style."
        ],
        "noOfReviews": 150,
        "rating": 4.6,
        "brand": "Levi’s",
        "category": "Men’s Clothing",
        "additionalInformation": "The Levi’s 501 Original Fit Jeans are a staple in men's fashion. Introduced in 1873, these jeans offer a regular fit with a straight leg and a button fly. Crafted from high-quality denim, they provide durability and comfort. The versatile design makes them ideal for casual or semi-formal outfits."
    },
    {
        "id": 6,
        "title": "Zara Floral Summer Dress",
        "descriptionSmall": "Elegant floral dress for summer.",
        "descriptionLong": "This Zara summer dress features a flowy fit, floral patterns, and lightweight fabric for a chic and comfortable look.",
        "price": 49.99,
        "retailPrice": 65.00,
        "images": [
            "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#FFC0CB",
            "#FFFFFF",
            "#FFFF00"
        ],
        "availability": true,
        "reviewsText": [
            "Love the design and the fit is perfect!",
            "Great for summer, very comfortable."
        ],
        "noOfReviews": 90,
        "rating": 4.5,
        "brand": "Zara",
        "category": "Women’s Clothing",
        "additionalInformation": "The Zara Floral Summer Dress is designed for comfort and elegance. Made from breathable fabric, this dress features a flattering A-line silhouette with floral prints. The lightweight material makes it ideal for warm weather, while the vibrant colors add a stylish touch."
    },
    {
        "id": 7,
        "title": "Adidas Ultraboost 22",
        "descriptionSmall": "High-performance running shoes.",
        "descriptionLong": "The Adidas Ultraboost 22 offers superior cushioning, energy return, and a sleek design for optimal performance.",
        "price": 180.00,
        "retailPrice": 200.00,
        "images": [
            "https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.unsplash.com/photo-1551116198-01d550c9809c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWRkaWRhJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkZGlkYSUyMHNob2VzfGVufDB8fDB8fHww"
        ],
        "colors": [
            "#000000",
            "#FFFFFF",
            "#0000FF"
        ],
        "availability": true,
        "reviewsText": [
            "Super comfortable and great for running!",
            "Stylish and very lightweight."
        ],
        "noOfReviews": 130,
        "rating": 4.7,
        "brand": "Adidas",
        "category": "Footwear",
        "additionalInformation": "The Adidas Ultraboost 22 is designed for runners who seek comfort and performance. Featuring Boost cushioning technology, these shoes provide energy return with every step. The Primeknit upper adapts to foot movement, ensuring a snug fit. The Continental rubber outsole delivers exceptional grip on various surfaces."
    },
    {
        "id": 8,
        "title": "Cartier Love Bracelet",
        "descriptionSmall": "Elegant gold bracelet with screw motif.",
        "descriptionLong": "The Cartier Love Bracelet is a symbol of timeless love, crafted in 18K gold with a unique screw design.",
        "price": 6900.00,
        "retailPrice": 7500.00,
        "images": [
            "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#FFD700",
            "#B76E79"
        ],
        "availability": true,
        "reviewsText": [
            "A beautiful piece, perfect for any occasion.",
            "Expensive but totally worth it!"
        ],
        "noOfReviews": 75,
        "rating": 4.8,
        "brand": "Cartier",
        "category": "Jewellery",
        "additionalInformation": "The Cartier Love Bracelet was introduced in 1969 and remains one of the most iconic jewelry pieces. Featuring a distinctive screw motif, it's designed to symbolize everlasting love. Crafted in 18K gold, it includes a special screwdriver to lock and unlock the bracelet."
    },
    {
        "id": 9,
        "title": "Ray-Ban Aviator Sunglasses",
        "descriptionSmall": "Classic metal frame sunglasses.",
        "descriptionLong": "Ray-Ban Aviator sunglasses offer a timeless design with UV protection lenses and a sleek metal frame.",
        "price": 159.99,
        "retailPrice": 180.00,
        "images": [
            "https://images.pexels.com/photos/4223655/pexels-photo-4223655.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5333043/pexels-photo-5333043.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2703963/pexels-photo-2703963.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#C0C0C0",
            "#000000",
            "#DAA520"
        ],
        "availability": true,
        "reviewsText": [
            "Super stylish and great for sunny days!",
            "Excellent build quality and clarity."
        ],
        "noOfReviews": 112,
        "rating": 4.7,
        "brand": "Ray-Ban",
        "category": "Accessories",
        "additionalInformation": "Originally developed for U.S. aviators in 1937, Ray-Ban Aviators are known for their lightweight metal frame and glare-reducing lenses. These sunglasses provide 100% UV protection and are perfect for outdoor activities."
    },
    {
        "id": 10,
        "title": "Michael Kors Jet Set Tote",
        "descriptionSmall": "Elegant designer handbag.",
        "descriptionLong": "The Michael Kors Jet Set tote is a spacious and stylish bag, perfect for everyday essentials.",
        "price": 199.99,
        "retailPrice": 250.00,
        "images": [
            "https://images.pexels.com/photos/21263499/pexels-photo-21263499/free-photo-of-woman-holding-a-silver-purse.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/13347119/pexels-photo-13347119.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/13347119/pexels-photo-13347119.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#8B0000",
            "#F5DEB3",
            "#000000"
        ],
        "availability": true,
        "reviewsText": [
            "Very spacious and stylish!",
            "Great quality leather and finishing."
        ],
        "noOfReviews": 140,
        "rating": 4.6,
        "brand": "Michael Kors",
        "category": "Handbags",
        "additionalInformation": "The Michael Kors Jet Set Tote is crafted from saffiano leather for durability and elegance. Featuring multiple compartments and a structured design, it’s ideal for both work and casual outings."
    },
    {
        "id": 11,
        "title": "Armani Exchange Chronograph Watch",
        "descriptionSmall": "Sleek and stylish men's watch.",
        "descriptionLong": "This Armani Exchange watch features a stainless steel design, chronograph functionality, and a modern dial.",
        "price": 179.99,
        "retailPrice": 220.00,
        "images": [
            "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": [
            "#1C1C1C",
            "#B0C4DE"
        ],
        "availability": true,
        "reviewsText": [
            "Looks very elegant and premium.",
            "Great for both casual and formal wear."
        ],
        "noOfReviews": 98,
        "rating": 4.7,
        "brand": "Armani Exchange",
        "category": "Watches",
        "additionalInformation": "The Armani Exchange Chronograph Watch is designed for the modern man. It features precise quartz movement, a water-resistant design, and a stylish stainless steel case, making it suitable for any occasion."
    },
    {
        "id": 12,
        "title": "Nike Air Force 1",
        "descriptionSmall": "Iconic low-top sneakers.",
        "descriptionLong": "The Nike Air Force 1 offers premium leather, a timeless design, and all-day comfort.",
        "price": 120.00,
        "retailPrice": 150.00,
        "images": [
            "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#FFFFFF", "#000000", "#FFD700"],
        "availability": true,
        "reviewsText": [
            "Classic sneakers that go with everything.",
            "Super comfortable and durable."
        ],
        "noOfReviews": 250,
        "rating": 4.8,
        "brand": "Nike",
        "category": "Footwear",
        "additionalInformation": "The Nike Air Max 270 is inspired by two iconic Air Max models: the Air Max 180 and Air Max 93. The shoe boasts the largest Air heel unit ever seen in a Nike sneaker, ensuring unparalleled comfort. The upper is crafted from lightweight mesh, making it breathable and perfect for all-day wear. Whether you're running, walking, or just making a style statement, the Air Max 270 delivers exceptional performance and aesthetics. The rubber outsole provides great traction, making it suitable for various surfaces."
    },
    {
        "id": 13,
        "title": "Fossil Leather Wallet",
        "descriptionSmall": "Genuine leather wallet for men.",
        "descriptionLong": "The Fossil leather wallet is crafted with premium materials, offering multiple card slots and RFID protection.",
        "price": 49.99,
        "retailPrice": 60.00,
        "images": [
            "https://images.pexels.com/photos/1132269/pexels-photo-1132269.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4452373/pexels-photo-4452373.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4452643/pexels-photo-4452643.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#8B4513", "#000000"],
        "availability": true,
        "reviewsText": [
            "High-quality leather, very durable.",
            "Compact and stylish."
        ],
        "noOfReviews": 85,
        "rating": 4.6,
        "brand": "Fossil",
        "category": "Accessories",
        "additionalInformation": "The Fossil leather wallet is a perfect blend of style, functionality, and durability. Crafted from 100% genuine leather, it boasts a sleek and timeless design that complements any outfit. Designed with multiple card slots, an ID window, and a spacious cash compartment, it ensures you have ample storage for all your essentials. The wallet is also equipped with RFID-blocking technology, protecting your cards from unauthorized scanning and keeping your personal information secure. High-quality stitching enhances its durability, making it a long-lasting accessory."
    },
    {
        "id": 14,
        "title": "Tissot PRX Automatic Watch",
        "descriptionSmall": "Elegant Swiss automatic watch.",
        "descriptionLong": "The Tissot PRX features a stainless steel bracelet, sapphire crystal, and automatic movement.",
        "price": 649.99,
        "retailPrice": 750.00,
        "images": [
            "https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#C0C0C0", "#4682B4"],
        "availability": true,
        "reviewsText": [
            "A stunning watch with a premium feel.",
            "Great value for a Swiss automatic watch."
        ],
        "noOfReviews": 50,
        "rating": 4.9,
        "brand": "Tissot",
        "category": "Watches",
        "additionalInformation": "The Tissot PRX Automatic Watch is a masterpiece of Swiss craftsmanship, combining vintage aesthetics with modern technology. Featuring a sleek stainless steel bracelet and case, it offers a refined yet sporty look suitable for both casual and formal occasions. The scratch-resistant sapphire crystal ensures durability and clarity, while the automatic movement provides precise timekeeping without the need for a battery. With a power reserve of up to 80 hours, this watch delivers exceptional performance."
    },
    {
        "id": 15,
        "title": "Tom Ford Oud Wood Perfume",
        "descriptionSmall": "Luxury fragrance for men.",
        "descriptionLong": "Tom Ford's Oud Wood is a rich, exotic fragrance with notes of oud, sandalwood, and vanilla.",
        "price": 250.00,
        "retailPrice": 300.00,
        "images": [
            "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1666405/pexels-photo-1666405.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#8B4513", "#696969"],
        "availability": true,
        "reviewsText": [
            "Smells luxurious and lasts all day!",
            "Perfect for special occasions."
        ],
        "noOfReviews": 77,
        "rating": 4.8,
        "brand": "Tom Ford",
        "category": "Beauty",
        "additionalInformation": "Tom Ford Oud Wood is a luxurious and sophisticated fragrance that exudes elegance and mystery. Crafted with rare and exotic ingredients, this scent is centered around the deep, smoky richness of oud, one of the most coveted perfume elements in the world. Complemented by creamy sandalwood and warm vanilla, it creates a perfectly balanced blend of woody and spicy accords. Hints of cardamom, amber, and tonka bean add depth, making it an alluring and long-lasting fragrance ideal for evening wear and special occasions."
    },
    {
        "id": 16,
        "title": "Pandora Rose Gold Charm Bracelet",
        "descriptionSmall": "Elegant rose gold bracelet.",
        "descriptionLong": "The Pandora charm bracelet is crafted in rose gold-plated metal, allowing you to personalize it with charms.",
        "price": 79.99,
        "retailPrice": 100.00,
        "images": [
            "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#FFDAB9", "#D2691E"],
        "availability": true,
        "reviewsText": [
            "Love the quality and the charm options!",
            "Perfect gift for someone special."
        ],
        "noOfReviews": 100,
        "rating": 4.7,
        "brand": "Pandora",
        "category": "Jwellery",
        "additionalInformation": "The Pandora Rose Gold Charm Bracelet is a stunning piece of jewelry that combines elegance with personalization. Crafted from high-quality rose gold-plated metal, it offers a warm, romantic glow that complements any style. Designed to be both timeless and versatile, this bracelet serves as the perfect foundation for your charm collection, allowing you to express your personality and cherished memories through Pandora’s wide range of charms."
    },
    {
        "id": 17,
        "title": "Tommy Hilfiger Men's Polo Shirt",
        "descriptionSmall": "Classic polo shirt with a timeless design.",
        "descriptionLong": "This Tommy Hilfiger polo shirt is made from breathable cotton fabric and features the brand's iconic logo embroidery.",
        "price": 49.99,
        "retailPrice": 65.00,
        "images": [
            "https://images.pexels.com/photos/30953662/pexels-photo-30953662/free-photo-of-stylish-man-in-double-breasted-suit-portrait.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#0000FF", "#FFFFFF", "#FF0000"],
        "availability": true,
        "reviewsText": [
            "Great quality and fits perfectly!",
            "Comfortable and stylish for any occasion."
        ],
        "noOfReviews": 80,
        "rating": 4.6,
        "brand": "Tommy Hilfiger",
        "category": "All Men’s clothing",
        "additionalInformation": "The Tommy Hilfiger Men's Polo Shirt is a wardrobe essential that blends classic style with everyday comfort. Crafted from soft, breathable cotton fabric, it ensures a lightweight and comfortable fit, making it perfect for casual outings, work, or weekend wear. The polo features a ribbed collar and cuffs, a two-button placket for an adjustable fit, and the brand’s iconic logo embroidery on the chest, adding a touch of signature style."
    },
    {
        "id": 18,
        "title": "Michael Kors Leather Handbag",
        "descriptionSmall": "Elegant and spacious handbag.",
        "descriptionLong": "The Michael Kors leather handbag offers a sleek design, spacious interior, and premium craftsmanship.",
        "price": 299.99,
        "retailPrice": 350.00,
        "images": [
            "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2334906/pexels-photo-2334906.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#8B4513", "#000000"],
        "availability": true,
        "reviewsText": [
            "Looks amazing and holds all my essentials.",
            "High-quality leather and craftsmanship."
        ],
        "noOfReviews": 70,
        "rating": 4.8,
        "brand": "Michael Kors",
        "category": "Hand bags",
        "additionalInformation": "The Michael Kors Leather Handbag is a perfect blend of sophistication, functionality, and luxury. Crafted from high-quality genuine leather, it boasts a sleek and timeless design that complements any outfit, from casual to formal. The spacious interior provides ample room for all your essentials, featuring multiple compartments and pockets for effortless organization."
    },
    {
        "id": 19,
        "title": "Armani Exchange Chronograph Watch",
        "descriptionSmall": "Stylish watch with a modern design.",
        "descriptionLong": "This Armani Exchange chronograph watch features a sleek stainless steel case, a durable strap, and multiple dials for precise timekeeping.",
        "price": 199.99,
        "retailPrice": 250.00,
        "images": [
            "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1120275/pexels-photo-1120275.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#808080", "#000000"],
        "availability": true,
        "reviewsText": [
            "Looks premium and keeps perfect time!",
            "A great watch at an affordable price."
        ],
        "noOfReviews": 90,
        "rating": 4.7,
        "brand": "Armani Exchange",
        "category": "Watches",
        "additionalInformation": "The Armani Exchange Chronograph Watch is a perfect blend of modern style and precision engineering. Designed for the contemporary man, it features a sleek stainless steel case that exudes sophistication and durability. The watch is equipped with multiple sub-dials, offering precise chronograph functionality for measuring elapsed time, making it both stylish and practical."
    },
    {
        "id": 20,
        "title": "MAC Matte Lipstick",
        "descriptionSmall": "Long-lasting matte lipstick.",
        "descriptionLong": "MAC's Matte Lipstick offers bold color, a smooth application, and a non-drying finish that lasts all day.",
        "price": 19.99,
        "retailPrice": 25.00,
        "images": [
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/90297/pexels-photo-90297.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/850801/pexels-photo-850801.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#FF1493", "#800000"],
        "availability": true,
        "reviewsText": [
            "Love the color and texture!",
            "Stays on all day without smudging."
        ],
        "noOfReviews": 120,
        "rating": 4.9,
        "brand": "MAC",
        "category": "Beauty",
        "additionalInformation": "The MAC Matte Lipstick is a must-have beauty essential, offering intense, highly pigmented color with a smooth, velvety finish. Designed for all-day wear, its long-lasting formula glides effortlessly onto the lips, providing full coverage with just one swipe. Unlike many matte lipsticks, this formula is non-drying, ensuring a comfortable feel while maintaining a flawless, shine-free look."
    },
    {
        "id": 21,
        "title": "Adidas Superstar Sneakers",
        "descriptionSmall": "Iconic sneakers with a classic shell toe.",
        "descriptionLong": "The Adidas Superstar features a leather upper, comfortable cushioning, and the signature shell toe for a timeless look.",
        "price": 89.99,
        "retailPrice": 110.00,
        "images": [
            "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#FFFFFF", "#000000"],
        "availability": true,
        "reviewsText": [
            "Perfect casual shoes with great comfort.",
            "Classic and stylish, love them!"
        ],
        "noOfReviews": 150,
        "rating": 4.7,
        "brand": "Adidas",
        "category": "Footwear",
        "additionalInformation": "The Adidas Superstar Sneakers are a true icon in streetwear and sneaker culture, blending timeless style with everyday comfort. Featuring a premium leather upper, they provide durability and a sleek, polished look that pairs effortlessly with any outfit. The signature rubber shell toe adds both protection and a distinctive design element that has made these sneakers legendary for decades."
    },
    {
        "id": 22,
        "title": "H&M Kids' Winter Jacket",
        "descriptionSmall": "Warm and cozy jacket for kids.",
        "descriptionLong": "This H&M winter jacket for kids provides warmth, comfort, and a stylish design, perfect for chilly days.",
        "price": 39.99,
        "retailPrice": 50.00,
        "images": [
            "https://images.pexels.com/photos/30924461/pexels-photo-30924461/free-photo-of-child-walking-on-a-serene-beach-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3933907/pexels-photo-3933907.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#FFD700", "#800000"],
        "availability": true,
        "reviewsText": [
            "Keeps my child warm and looks great!",
            "Good quality at an affordable price."
        ],
        "noOfReviews": 85,
        "rating": 4.6,
        "brand": "H&M",
        "category": "Kid’s clothing",
        "additionalInformation": "The H&M Kids' Winter Jacket is designed to keep your little one warm, cozy, and stylish during the colder months. Made with high-quality, insulated materials, it provides excellent warmth without feeling bulky. The soft, fleece-lined interior ensures maximum comfort, while the water-resistant outer layer helps protect against light rain and snow. "
    },
    {
        "id": 23,
        "title": "Gucci Gold Bracelet",
        "descriptionSmall": "Luxury bracelet with an elegant design.",
        "descriptionLong": "The Gucci gold bracelet is crafted from fine gold, featuring an intricate pattern that exudes luxury and style.",
        "price": 1299.99,
        "retailPrice": 1500.00,
        "images": [
            "https://images.pexels.com/photos/633661/pexels-photo-633661.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2371895/pexels-photo-2371895.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#FFD700"],
        "availability": true,
        "reviewsText": [
            "A beautiful piece of jewelry.",
            "Absolutely stunning craftsmanship!"
        ],
        "noOfReviews": 60,
        "rating": 4.9,
        "brand": "Gucci",
        "category": "Jwellery",
        "additionalInformation": "The Gucci Gold Bracelet is a timeless statement piece that embodies elegance, luxury, and exquisite craftsmanship. Made from fine gold, this bracelet showcases an intricate design that reflects Gucci’s signature attention to detail and sophistication. Whether worn alone for a minimalist touch or layered with other jewelry for a bold statement, it adds a refined charm to any outfit"
    },
    {
        "id": 24,
        "title": "Levi’s Women's Skinny Jeans",
        "descriptionSmall": "Trendy and comfortable skinny jeans.",
        "descriptionLong": "These Levi’s skinny jeans are made with stretchable denim for a perfect fit and stylish appeal.",
        "price": 59.99,
        "retailPrice": 75.00,
        "images": [
            "https://images.pexels.com/photos/30958266/pexels-photo-30958266/free-photo-of-stylish-woman-with-colorful-purse-and-heels.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#00008B", "#2F4F4F"],
        "availability": true,
        "reviewsText": [
            "Perfect fit and super comfortable!",
            "Love the quality and stretch."
        ],
        "noOfReviews": 110,
        "rating": 4.7,
        "brand": "Levi’s",
        "category": "Women’s clothing",
        "additionalInformation": "The Levi’s Women’s Skinny Jeans offer the perfect blend of style, comfort, and versatility. Made from high-quality, stretchable denim, they provide a flattering fit that hugs your curves while allowing for effortless movement. Designed for all-day wear, these jeans feature a mid-rise or high-rise waist for a sleek silhouette and a classic five-pocket design for a timeless appeal."
    },
    {
        "id": 25,
        "title": "Versace Eros Perfume",
        "descriptionSmall": "Bold and captivating men's fragrance.",
        "descriptionLong": "Versace Eros is a fresh and woody fragrance with hints of mint, vanilla, and cedarwood for a long-lasting scent.",
        "price": 79.99,
        "retailPrice": 100.00,
        "images": [
            "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1961789/pexels-photo-1961789.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "colors": ["#00CED1"],
        "availability": true,
        "reviewsText": [
            "Smells amazing and lasts all day.",
            "A must-have for any fragrance lover!"
        ],
        "noOfReviews": 95,
        "rating": 4.8,
        "brand": "Versace",
        "category": "Beauty",
        "additionalInformation": "Versace Eros is a bold and captivating fragrance that embodies confidence, passion, and masculinity. This fresh and woody scent opens with invigorating notes of mint, green apple, and lemon, creating an energizing first impression. The heart of the fragrance features warm hints of tonka bean, ambroxan, and geranium, adding depth and sensuality."
    }

];

[
    {
        id: 1,
        title: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 79.99,
        retailPrice: 99.99,
        images: [
            "https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/28206207/pexels-photo-28206207/free-photo-of-two-black-and-white-earphones-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/29684687/pexels-photo-29684687/free-photo-of-stylish-black-earbuds-on-outdoor-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        colors: ["#000000", "#FFFFFF", "#1E90FF"], // Black, White, Dodger Blue
        availability: true,
        review: 4.5
    },
    {
        id: 2,
        title: "Smartwatch Series 5",
        description: "Feature-packed smartwatch with health tracking and notifications.",
        price: 199.99,
        retailPrice: 249.99,
        images: [
            "https://images.pexels.com/photos/9584702/pexels-photo-9584702.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/9584703/pexels-photo-9584703.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/30909359/pexels-photo-30909359/free-photo-of-minimalist-tech-arrangement-with-smartphone-and-wearables.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        colors: ["#000000", "#C0C0C0", "#FFC0CB"], // Black, Silver, Pink
        availability: true,
        review: 4.7
    },
    {
        id: 3,
        title: "Gaming Laptop",
        description: "Powerful gaming laptop with RTX graphics and high refresh rate display.",
        price: 1299.99,
        retailPrice: 1499.99,
        images: [
            "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        ],
        colors: ["#1C1C1C", "#A9A9A9"], // Dark Gray, Gray
        availability: false,
        review: 4.8
    },
    {
        id: 4,
        title: "Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard with tactile switches.",
        price: 89.99,
        retailPrice: 119.99,
        images: [
            "https://images.pexels.com/photos/7915492/pexels-photo-7915492.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/9072292/pexels-photo-9072292.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        colors: ["#000000", "#FFFFFF"], // Black, White
        availability: true,
        review: 4.6
    },
    {
        id: 5,
        title: "4K Ultra HD Smart TV",
        description: "65-inch 4K UHD Smart TV with HDR and streaming apps.",
        price: 799.99,
        retailPrice: 999.99,
        images: [
            "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/9072292/pexels-photo-9072292.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/28884413/pexels-photo-28884413/free-photo-of-modern-home-office-tech-setup-with-gadgets.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        colors: ["#000000"], // Black
        availability: true,
        review: 4.7
    },
    {
        id: 6,
        title: "Wireless Earbuds",
        description: "True wireless earbuds with high-fidelity sound and noise isolation.",
        price: 59.99,
        retailPrice: 79.99,
        images: [
            "https://images.pexels.com/photos/28206207/pexels-photo-28206207/free-photo-of-two-black-and-white-earphones-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/29684687/pexels-photo-29684687/free-photo-of-stylish-black-earbuds-on-outdoor-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        colors: ["#000000", "#FFFFFF", "#FF0000"], // Black, White, Red
        availability: true,
        review: 4.4
    },
    {
        id: 7,
        title: "Gaming Mouse",
        description: "Ergonomic gaming mouse with programmable buttons and RGB lighting.",
        price: 49.99,
        retailPrice: 69.99,
        images: [
            "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/414548/pexels-photo-414548.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        colors: ["#FF4500", "#000000"], // Orange Red, Black
        availability: true,
        review: 4.6
    },
    {
        id: 8,
        title: "Smartphone",
        description: "Latest model smartphone with OLED display and triple-camera system.",
        price: 999.99,
        retailPrice: 1099.99,
        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
            "https://source.unsplash.com/400x300/?cellphone"
        ],
        colors: ["#000000", "#C0C0C0", "#FFFFFF"], // Black, Silver, White
        availability: true,
        review: 4.9
    },
    {
        id: 9,
        title: "Tablet",
        description: "10-inch tablet with retina display and powerful processor.",
        price: 399.99,
        retailPrice: 449.99,
        images: [
            "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGV0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1590065672897-8cd8dc54a530?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1590065672897-8cd8dc54a530?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
        ],
        colors: ["#FFFFFF", "#808080"], // White, Gray
        availability: true,
        review: 4.5
    },
    {
        id: 10,
        title: "Wireless Charger",
        description: "Fast wireless charger for smartphones and smartwatches.",
        price: 29.99,
        retailPrice: 39.99,
        images: [
            "https://images.pexels.com/photos/5083411/pexels-photo-5083411.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/7742585/pexels-photo-7742585.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5083411/pexels-photo-5083411.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        colors: ["#000000", "#FFFFFF"], // Black, White
        availability: true,
        review: 4.2
    },
    // {
    //     id: 11,
    //     title: "Portable Bluetooth Speaker",
    //     description: "Waterproof portable speaker with deep bass and long battery life.",
    //     price: 49.99,
    //     retailPrice: 69.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?bluetooth-speaker",
    //         "https://source.unsplash.com/400x300/?portable-speaker",
    //         "https://source.unsplash.com/400x300/?music-speaker"
    //     ],
    //     colors: ["#000000", "#FF0000", "#008080"], // Black, Red, Teal
    //     availability: true,
    //     review: 4.7
    // },
    // {
    //     id: 12,
    //     title: "DSLR Camera",
    //     description: "Professional DSLR camera with 24MP sensor and 4K recording.",
    //     price: 899.99,
    //     retailPrice: 999.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?dslr-camera",
    //         "https://source.unsplash.com/400x300/?camera",
    //         "https://source.unsplash.com/400x300/?photography"
    //     ],
    //     colors: ["#000000"], // Black
    //     availability: true,
    //     review: 4.8
    // },
    // {
    //     id: 13,
    //     title: "External Hard Drive",
    //     description: "1TB portable external hard drive with fast transfer speeds.",
    //     price: 79.99,
    //     retailPrice: 99.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?external-hard-drive",
    //         "https://source.unsplash.com/400x300/?hard-drive",
    //         "https://source.unsplash.com/400x300/?storage"
    //     ],
    //     colors: ["#A9A9A9", "#000000"], // Gray, Black
    //     availability: true,
    //     review: 4.6
    // },
    // {
    //     id: 14,
    //     title: "Gaming Monitor",
    //     description: "27-inch 144Hz gaming monitor with ultra-low response time.",
    //     price: 299.99,
    //     retailPrice: 349.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?gaming-monitor",
    //         "https://source.unsplash.com/400x300/?monitor",
    //         "https://source.unsplash.com/400x300/?computer-screen"
    //     ],
    //     colors: ["#000000"], // Black
    //     availability: true,
    //     review: 4.7
    // },
    // {
    //     id: 15,
    //     title: "Smart Home Security Camera",
    //     description: "1080p HD security camera with motion detection and night vision.",
    //     price: 59.99,
    //     retailPrice: 79.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?security-camera",
    //         "https://source.unsplash.com/400x300/?smart-camera",
    //         "https://source.unsplash.com/400x300/?home-security"
    //     ],
    //     colors: ["#FFFFFF", "#000000"], // White, Black
    //     availability: true,
    //     review: 4.5
    // },
    // {
    //     id: 16,
    //     title: "VR Headset",
    //     description: "Virtual reality headset with immersive 3D experience.",
    //     price: 349.99,
    //     retailPrice: 399.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?vr-headset",
    //         "https://source.unsplash.com/400x300/?virtual-reality",
    //         "https://source.unsplash.com/400x300/?gaming-vr"
    //     ],
    //     colors: ["#000000", "#FFFFFF"], // Black, White
    //     availability: true,
    //     review: 4.6
    // },
    // {
    //     id: 17,
    //     title: "Smart Light Bulb",
    //     description: "Wi-Fi-enabled smart light bulb with customizable colors.",
    //     price: 19.99,
    //     retailPrice: 29.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?smart-light",
    //         "https://source.unsplash.com/400x300/?led-light",
    //         "https://source.unsplash.com/400x300/?color-light"
    //     ],
    //     colors: ["#FFD700", "#00FF00", "#0000FF"], // Gold, Green, Blue
    //     availability: true,
    //     review: 4.3
    // },
    // {
    //     id: 18,
    //     title: "Electric Scooter",
    //     description: "Foldable electric scooter with long battery life and fast speed.",
    //     price: 499.99,
    //     retailPrice: 599.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?electric-scooter",
    //         "https://source.unsplash.com/400x300/?scooter",
    //         "https://source.unsplash.com/400x300/?urban-mobility"
    //     ],
    //     colors: ["#000000", "#FF4500"], // Black, Orange Red
    //     availability: true,
    //     review: 4.4
    // },
    // {
    //     id: 19,
    //     title: "Smart Thermostat",
    //     description: "Energy-efficient smart thermostat with remote control via app.",
    //     price: 149.99,
    //     retailPrice: 179.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?smart-thermostat",
    //         "https://source.unsplash.com/400x300/?thermostat",
    //         "https://source.unsplash.com/400x300/?home-tech"
    //     ],
    //     colors: ["#C0C0C0", "#000000"], // Silver, Black
    //     availability: true,
    //     review: 4.5
    // },
    // {
    //     id: 20,
    //     title: "Robot Vacuum Cleaner",
    //     description: "Smart robotic vacuum cleaner with auto-charging and app control.",
    //     price: 249.99,
    //     retailPrice: 299.99,
    //     images: [
    //         "https://source.unsplash.com/400x300/?robot-vacuum",
    //         "https://source.unsplash.com/400x300/?vacuum-cleaner",
    //         "https://source.unsplash.com/400x300/?smart-cleaning"
    //     ],
    //     colors: ["#000000", "#A9A9A9"], // Black, Gray
    //     availability: true,
    //     review: 4.6
    // }
];

export const featuredData: FeaturedData[] = [
    {
        id: "1",
        img: featured1,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        id: "2",
        img: featured2,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        id: "3",
        img: featured3,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        id: "4",
        img: featured4,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        id: "5",
        img: featured5,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        id: "6",
        img: featured6,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        id: "7",
        img: featured7,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        id: "8",
        img: featured8,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
];

export const featuredPostData: FeaturedPostData[] = [
    {
        img: featuredPost1,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10"
    },
    {
        img: featuredPost2,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10"
    },
    {
        img: featuredPost3,
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10"
    }
]

export const heroFirstData: HeroFirst[] = [
    {
        img: heroFirst1,
        content: {
            subtitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale."
        },
    },
    {
        img: heroFirst2,
        content: {
            subtitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale."
        },
    }
]

interface FooterData {
    city: string,
    street: string,
    no: string,
    mobileNo: string,
    fax: string

}
export const footerData: FooterData[] = [
    {
        city: "Paris",
        street: "1901 Thorn ridge Cir. ",
        no: "75000 Paris",
        mobileNo: "+451 215 215 ",
        fax: "+451 215 215"
    },
    {
        city: "New York",
        street: "2715 Ash Dr. San Jose, ",
        no: "75000 Paris",
        mobileNo: "+451 215 215 ",
        fax: "+451 215 215"
    },
    {
        city: "Berlin",
        street: "4140 Parker Rd. ",
        no: "75000 Paris",
        mobileNo: "+451 215 215 ",
        fax: "+451 215 215"
    },
    {
        city: "London",
        street: "3517 W. Gray St. Utica, ",
        no: "75000 Paris",
        mobileNo: "+451 215 215 ",
        fax: "+451 215 215"
    }
]

interface BestSellerProductsData {
    img: string,
    title: string,
    description: string,
    price: string,
    retailPrice: string,
}

export const bestSellerProductsData: BestSellerProductsData[] = [
    {
        img: bestSeller1,
        title: "Pink Plate",
        description: "Durable, good Quality Plate",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        img: bestSeller2,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        img: bestSeller3,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        img: bestSeller4,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        img: bestSeller5,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        img: bestSeller6,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        img: bestSeller1,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
    {
        img: bestSeller2,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48"
    },
];

interface TeamDetail {
    img: string,
    username: string,
    profession: string,
}

export const teamDetail: TeamDetail[] = [
    {
        img: teamMember1,
        username: "Namita Thapar",
        profession: "Frontend Developer"
    },
    {
        img: teamMember2,
        username: "Vineeta Singh",
        profession: "Backend Developer"
    },
    {
        img: teamMember3,
        username: "Piyush Bansal",
        profession: "FullStack Developer"
    },
];

interface ShopCardItems {
    id: number,
    image: string,
    heading: string,
    items: number
}

export const shopCardItems: ShopCardItems[] = [
    {
        id: 1,
        image: slider1,
        heading: "MEN'S CLOTHING",
        items: 5,
    },
    {
        id: 2,
        image: slider2,
        heading: "KIDS' CLOTHING",
        items: 7,
    },
    {
        id: 3,
        image: slider3,
        heading: "MEN'S CASUALS",
        items: 15,
    },
    {
        id: 4,
        image: slider4,
        heading: "FESTIVAL SPECIALS",
        items: 12,
    },
    {
        id: 5,
        image: slider5,
        heading: "JACKETS",
        items: 18,
    },
    {
        id: 6,
        image: slider6,
        heading: "ELECTRONICS",
        items: 45,
    },
    {
        id: 7,
        image: slider7,
        heading: "WINTER SPECIALS",
        items: 25,
    },
    {
        id: 8,
        image: slider8,
        heading: "COUPLE'S SPECIALS",
        items: 20,
    },
];