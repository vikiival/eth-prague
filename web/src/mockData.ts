import { Publication } from "./interfaces";


const mockPublications: Publication[] = [
    {
        id: "1",
        name: "Tech Weekly",
        description: "Your weekly dose of technology news and insights.",
        image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        articles: ["a1", "a2", "a3"],
        price: 5.99,
    },
    {
        id: "2",
        name: "Fitness Journal",
        description: "Stay on top of your fitness goals with our expert tips.",
        image: "https://ethereum.org/static/28214bb6eb061f1b51ff17b2c6b1e856/31987/developers-eth-blocks.png",
        articles: ["b1", "b2", "b3"],
        price: 3.99,
    },
    {
        id: "3",
        name: "Chef's Corner",
        description: "Explore delicious recipes from around the world.",
        image: "https://www.bitdegree.org/crypto/storage/media/images/what-is-ethereum-1.width-900.png",
        articles: ["c1", "c2", "c3"],
        price: 4.99,
    },
    {
        id: "4",
        name: "World Traveler",
        description: "Discover new places and cultures every month.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
        articles: ["d1", "d2", "d3"],
        price: 6.99,
    },
    {
        id: "5",
        name: "Science Today",
        description: "Keeping you informed on the latest scientific discoveries.",
        image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
        articles: ["e1", "e2", "e3"],
        price: 4.49,
    },
];

export default mockPublications;
