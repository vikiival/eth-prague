import { Publication } from "../interfaces";


const mockPublications: Publication[] = [
    {
        id: "1",
        name: "Tech Weekly",
        description: "Your weekly dose of technology news and insights.",
        image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
        articles: ["a1", "a2", "a3"],
        price: 5.99,
    },
    {
        id: "2",
        name: "Fitness Journal",
        description: "Stay on top of your fitness goals with our expert tips.",
        image: "https://images.pexels.com/photos/3755753/pexels-photo-3755753.jpeg",
        articles: ["b1", "b2", "b3"],
        price: 3.99,
    },
    {
        id: "3",
        name: "Chef's Corner",
        description: "Explore delicious recipes from around the world.",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        articles: ["c1", "c2", "c3"],
        price: 4.99,
    },
    {
        id: "4",
        name: "World Traveler",
        description: "Discover new places and cultures every month.",
        image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
        articles: ["d1", "d2", "d3"],
        price: 6.99,
    },
    {
        id: "5",
        name: "Science Today",
        description: "Keeping you informed on the latest scientific discoveries.",
        image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
        articles: ["e1", "e2", "e3"],
        price: 4.49,
    },
];


export default mockPublications;
