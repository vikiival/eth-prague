// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.13;

// import "forge-std/Test.sol";
// import "../src/Marketplace.sol";
// import "./mocks/MockERC721.sol";

// contract MarketplaceTest is Test {
//     Marketplace public marketPlace;
//     MockERC721 public nft;

//     function setUp() public {
//         marketPlace = new Marketplace();
//         nft = new MockERC721();
//     }

//     function testSellAndBuy() public {
//         nft.approve(address(marketPlace), 1);
//         marketPlace.listNFT(
//             address(nft),
//             1,
//             1 ether,
//             "hola",
//             "this nft is for sale",
//             "https://ipfs.io/ipfs//QmdRpbUC8TjJ1b9tZWPRxBvbCsgJisWEuN4dcXFW4Mvrh8"
//         );
//         marketPlace.cancelSale(1);
//     }

//     function testAuction() public {
//         nft.approve(address(marketPlace), 1);
//         marketPlace.listNFT(
//             address(nft),
//             1,
//             1 ether,
//             "hola",
//             "this nft is for sale",
//             "https://ipfs.io/ipfs//QmdRpbUC8TjJ1b9tZWPRxBvbCsgJisWEuN4dcXFW4Mvrh8"
//         );
//         marketPlace.listNFTAuction(
//             address(nft),
//             1,
//             1 ether,
//             20,
//             "hola",
//             "this nft is for sale",
//             "https://ipfs.io/ipfs//QmdRpbUC8TjJ1b9tZWPRxBvbCsgJisWEuN4dcXFW4Mvrh8"
//         );
//         marketPlace.cancelAuction(1);
//     }

//     ////////@dev you need run local blockchain to test this functions

//     // function testBuy() public {
//     //     nft.approve(address(MarketPlace), 1);
//     //     marketPlace.listNFT(
//     //         address(nft),
//     //         1,
//     //         1 ether,
//     //         "hola",
//     //         "this nft is for sale",
//     //         "https://ipfs.io/ipfs//QmdRpbUC8TjJ1b9tZWPRxBvbCsgJisWEuN4dcXFW4Mvrh8"
//     //     );
//     //     marketPlace.buyNFT(1);
//     // }

//     // function testBid() public {
//     //     nft.approve(address(MarketPlace), 1);
//     //     marketPlace.listNFTAuction(
//     //         address(nft),
//     //         1,
//     //         1 ether,
//     //         20,
//     //         "hola",
//     //         "this nft is for sale",
//     //         "https://ipfs.io/ipfs//QmdRpbUC8TjJ1b9tZWPRxBvbCsgJisWEuN4dcXFW4Mvrh8"
//     //     );
//     //     marketPlace.bidAuction(1);
//     // }
// }