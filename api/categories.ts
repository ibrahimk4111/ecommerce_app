import activity_1 from "@/public/categories/Activities-5.png";
import { paths } from "@/utils/paths";

export const categories = [
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
    image: "1",
    items: 250,
    name: "Cake and Milk",
    bgcolor: "yellow"
  },
  {
    image: "2",
    items: 250,
    name: "Cake and Milk",
    bgcolor: "red"
  },
  {
    image: "3",
    items: 250,
    name: "Cake and Milk",
    bgcolor: "green"
  },
  {
    image: "4",
    items: 250,
    name: "Cake and Milk",
    bgcolor: "purple"
  },
]