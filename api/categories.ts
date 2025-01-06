import activity_1 from "@/public/categories/Activities-5.png";
import { paths } from "@/utils/paths";
import { StaticImageData } from "next/image";
import banner1 from "@/public/banner-1.jpg";


interface Icategories {
  img: StaticImageData;
  name: string;
  path: string;
}[]

export const categories: Icategories[] = [
  {
    img: activity_1,
    name: "Man",
    path: paths.categories.man,
  },
  {
    img: activity_1,
    name: "Woman",
    path: paths.categories.woman,
  },
  {
    img: activity_1,
    name: "Baby boy",
    path: paths.categories.boy,
  },
  {
    img: activity_1,
    name: "Baby girl",
    path: paths.categories.girl,
  },
  {
    img: activity_1,
    name: "T-shirt",
    path: paths.categories.shirt,
  },
  {
    img: activity_1,
    name: "Pants",
    path: paths.categories.pant,
  },
  {
    img: activity_1,
    name: "Shoes",
    path: paths.categories.shoes,
  },
  {
    img: activity_1,
    name: "Homies",
    path: paths.categories.homies,
  },
  {
    img: activity_1,
    name: "Kitchen",
    path: paths.categories.homies,
  },
  {
    img: activity_1,
    name: "Cooking",
    path: paths.categories.homies,
  },
  {
    img: activity_1,
    name: "Animals",
    path: paths.categories.homies,
  },
  {
    img: activity_1,
    name: "Drugs",
    path: paths.categories.homies,
  },
];


interface popularcategories {
  image: string;
  items: number;
  name: string;
  bgcolor: "yellow" | "red" |  "green" |  "purple";
}[]

export const popularcategories: popularcategories[] = [
  {
    image: "https://drive.google.com/thumbnail?id=1KaiJj1ff4OWu7NaJdS7av_Vrmk9x6nE9",
    items: 610,
    name: "Cake and Milk",
    bgcolor: "yellow"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1PDNOjkXliPBjtv40VHtK53feSsQ-d1Ut",
    items: 81,
    name: "Cake and Milk",
    bgcolor: "red"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1510z49u8Zy0c-2-QWyxX0gASTzDZ0QIu",
    items: 50,
    name: "Cake and Milk",
    bgcolor: "green"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1Umj1elHliWyNnlFyGlmEBcAR3EcI18Cl",
    items: 400,
    name: "Cake and Milk",
    bgcolor: "purple"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1KaiJj1ff4OWu7NaJdS7av_Vrmk9x6nE9",
    items: 610,
    name: "Cake and Milk",
    bgcolor: "yellow"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1O3wU344qztNlOogkIyNTM7zSQxVftSMV",
    items: 81,
    name: "Cake and Milk",
    bgcolor: "red"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1OSlOU4fLIu8gn6WBq7FKwhoPoRO2d2jC",
    items: 50,
    name: "Cake and Milk",
    bgcolor: "green"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1KaiJj1ff4OWu7NaJdS7av_Vrmk9x6nE9",
    items: 400,
    name: "Cake and Milk",
    bgcolor: "purple"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1KaiJj1ff4OWu7NaJdS7av_Vrmk9x6nE9",
    items: 610,
    name: "Cake and Milk",
    bgcolor: "yellow"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1PDNOjkXliPBjtv40VHtK53feSsQ-d1Ut",
    items: 81,
    name: "Cake and Milk",
    bgcolor: "red"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1510z49u8Zy0c-2-QWyxX0gASTzDZ0QIu",
    items: 50,
    name: "Cake and Milk",
    bgcolor: "green"
  },
  {
    image: "https://drive.google.com/thumbnail?id=1Umj1elHliWyNnlFyGlmEBcAR3EcI18Cl",
    items: 400,
    name: "Cake and Milk",
    bgcolor: "purple"
  },
]


interface Ibannerdatas {
  image: string;
  text: string;
}[]

export const bannerdatas: Ibannerdatas[] = [
  {
    image: "https://drive.google.com/thumbnail?id=1bmkuyal4yu9De8r3NJw2UQEvDo0moz5J",
    text: "Everyday fresh & clean with our product."
  }, 
  {
    image: "https://drive.google.com/thumbnail?id=1alYSP2C7GIalTG4mgTXSfiUs5reGFieI",
    text: "Everyday fresh & clean with our product."
  }, 
  {
    image: "https://drive.google.com/thumbnail?id=1VEtXNmwegqemo3bZHxJnwE_PIwbW3KM8",
    text: "Everyday fresh & clean with our product."
  }, 
]