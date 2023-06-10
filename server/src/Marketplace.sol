// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "openzeppelin-contracts/token/ERC721/IERC721.sol";
import "openzeppelin-contracts/security/ReentrancyGuard.sol";

/////@dev errors
error NotApprovedForMarketplace();
error NotApprovedForAuction();
error AuctionNotEnded();

contract MarketPlace is ReentrancyGuard {
    //@dev state variables
    address payable public immutable owner; //owner of the contract
    uint256 public itemCount; // item count


    ////////@dev constructor
    constructor() {
        owner = payable(msg.sender);
    }

    ////@dev struct of items

    struct Item {
        uint256 id;
        address nft;
        uint256 tokenId;
        address payable seller;
        bool sold;
        uint256 price;
        string name;
        string description;
        string image;
    }

    //@dev mappings
    mapping(uint256 => Item) public items; // item id to item
    mapping(uint256 => uint256) _security; // security front running

    //@modifiers

    //@dev security front running modifier
    modifier securityFrontRunning(uint256 _itemId) {
        Item storage item = items[_itemId];
        require(
            _security[_itemId] == 0 || _security[_itemId] > block.number,
            "error security"
        );

        _security[_itemId] = block.number;
        _;
    }

    //@dev onlyOwner modifier
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    ///////@dev events
    event Listed(
        uint256 id,
        address nft,
        uint256 tokenId,
        uint256 price,
        address seller
    );

    event Sold(
        uint256 id,
        address nft,
        uint256 tokenId,
        uint256 price,
        address seller,
        address buyer
    );

    //@dev functions

    function listNFT(
        address _nft,
        uint256 _tokenId,
        uint256 _price,
        string memory _name,
        string memory _description,
        string memory _image
    ) public nonReentrant {
        require(_price > 0, "price must be greater than 0");
        IERC721 nft = IERC721(_nft); // cast address to IERC721
        if (nft.ownerOf(_tokenId) == msg.sender) {
            // check if the msg.sender is the owner of the NFT

            if (nft.getApproved(_tokenId) != address(this)) {
                revert NotApprovedForMarketplace();
            }
            itemCount++; // increment the item count
            items[itemCount] = Item( // add the item to the items mapping
                itemCount,
                _nft,
                _tokenId,
                payable(msg.sender),
                false,
                _price,
                _name,
                _description,
                _image
            );
            emit Listed(itemCount, address(_nft), _tokenId, _price, msg.sender); // emit the listed event
        } else {
            revert("you are not the owner of this NFT");
        }
    }

    ///@dev buy function

    function buyNFT(uint256 _itemId)
        public
        payable
        nonReentrant
        securityFrontRunning(_itemId)
    {
        Item storage item = items[_itemId]; // get the item from the items mapping
        require(item.sold == false, "item already sold"); // check if the item is already sold
        require(msg.value == item.price, "insufficient funds"); // check if the msg.value is greater than or equal to the item price
        IERC721(item.nft).safeTransferFrom(
            item.seller,
            msg.sender,
            item.tokenId
        ); // trasnfer the nft to the buyer        Item.sold = true; // set the item sold state to true
        uint256 sellerAmount = item.price; // calculate the seller amount
        payable(item.seller).transfer(sellerAmount); // transfer the seller amount to the seller
        emit Sold(
            item.id,
            item.nft,
            item.tokenId,
            item.price,
            item.seller,
            msg.sender
        ); // emit the sold event
        delete items[_itemId]; // delete the item from the items mapping
    }

    ///@dev cancel function

    function cancelSale(uint256 _itemId)
        public
        nonReentrant
        securityFrontRunning(_itemId)
    {
        Item storage item = items[_itemId]; // get the item from the items mapping
        require(item.sold == false, "item already sold"); // check if the item is already sold
        require(item.seller == msg.sender, "you are not the seller"); // check if the msg.sender is the seller
        delete items[_itemId]; // delete the item from the items mapping
    }

    ///@dev withdraw founds function

    function withdrawFunds() public nonReentrant onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    ///@dev get items for front end function

    function getItems(uint256 _itemId) public view returns (Item memory) {
        Item storage itemsList = items[_itemId]; // get specific item from the items mapping
        return itemsList; // return the item
    }

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////@dev AUCTION CODE
    ////////////////////////////////////////////////////////////////////////////////////

    uint256 public auctionCount; // auction count

    ///@dev struct of auctions

    struct Auction {
        uint256 id;
        address nft;
        uint256 tokenId;
        address payable seller;
        bool sold;
        uint256 startPrice;
        uint256 price;
        uint256 endTime;
        address payable highestBidder;
        string name;
        string description;
        string image;
    }

    /////////////////@dev mappings
    mapping(uint256 => Auction) public auctions; // auction id to auction
    mapping(uint256 => uint256) _securityAuction; // security front running

    ////@dev modifiers

    modifier securityFrontRunningAuction(uint256 _itemId) {
        Auction storage item = auctions[_itemId];
        require(
            _security[_itemId] == 0 || _security[_itemId] > block.number,
            "error security"
        );
        _security[_itemId] = block.number;
        _;
    }
    /////////////////////////////////@dev events
    event ListedAuction(
        uint256 id,
        address nft,
        uint256 tokenId,
        uint256 price,
        address seller
    );
    event Bid(
        uint256 id,
        address nft,
        uint256 tokenId,
        uint256 price,
        address seller
    );
    event SoldAuction(
        uint256 id,
        address nft,
        uint256 tokenId,
        uint256 price,
        address seller,
        address buyer
    );

    //////////////////////@dev functions auction
    ///@dev function to create auction

    function listNFTAuction(
        address _nft,
        uint256 _tokenId,
        uint256 _price,
        uint256 _endTime,
        string memory _name,
        string memory _description,
        string memory _image
    ) public nonReentrant {
        require(_price > 0, "price must be greater than 0");
        IERC721 nft = IERC721(_nft); // cast address to IERC721
        if (nft.ownerOf(_tokenId) == msg.sender) {
            // check if the msg.sender is the owner of the NFT

            if (nft.getApproved(_tokenId) != address(this)) {
                revert NotApprovedForMarketplace();
            }
            auctionCount++; // increment the auction count
            auctions[auctionCount] = Auction( // add the auction to the auctions mapping
                auctionCount,
                _nft,
                _tokenId,
                payable(msg.sender),
                false,
                _price,
                _price,
                _endTime,
                payable(address(0)),
                _name,
                _description,
                _image
            );
            emit ListedAuction(
                auctionCount,
                address(_nft),
                _tokenId,
                _price,
                msg.sender
            ); // emit the listed event
        } else {
            revert("you are not the owner of this NFT");
        }
    }

    ///@dev bid function

    function bidAuction(uint256 _auctionId)
        public
        payable
        nonReentrant
        securityFrontRunningAuction(_auctionId)
    {
        Auction storage auction = auctions[_auctionId]; // get the auction from the auctions mapping
        require(auction.sold == false, "auction already sold"); // check if the auction is already sold
        require(msg.value > auction.price, "insufficient funds"); // check if the msg.value is greater than or equal to the auction price
        require(block.timestamp < auction.endTime, "auction has ended"); // check if the auction has ended

        if (auction.highestBidder != msg.sender) {
            payable(auction.highestBidder).transfer(auction.price); // transfer the seller amount to the seller
        }
        auction.highestBidder = payable(msg.sender); // new best bidder
        auction.price = msg.value; // new auction price
        emit Bid(
            auction.id,
            auction.nft,
            auction.tokenId,
            auction.price,
            auction.seller
        ); // emit the bid event
    }

    function closeOffering(uint256 _itemId)
        external
        securityFrontRunningAuction(_itemId)
    {
        Auction storage itemAuction = auctions[_itemId];
        require(
            msg.sender == itemAuction.seller,
            "you dont are the owner of the nft"
        );
        require(
            itemAuction.endTime < block.timestamp,
            "error time is not over"
        );
        require(itemAuction.sold == false, "error nft sold");
        IERC721 nft = IERC721(itemAuction.nft);
        if (nft.getApproved(itemAuction.tokenId) != address(this)) {
            // if the nft is not approved for the marketplace
            if (itemAuction.highestBidder != address(0)) {
                // if there is a highest bidder
               payable(itemAuction.highestBidder).transfer(itemAuction.price); // transfer the seller amount to the seller
            }

            delete (auctions[_itemId]);
            revert NotApprovedForMarketplace();
        }
        itemAuction.sold = true;

        payable(itemAuction.seller).transfer(itemAuction.price); // transfer the seller amount to the seller
        IERC721(itemAuction.nft).transferFrom(
            itemAuction.seller,
            itemAuction.highestBidder,
            itemAuction.tokenId
        );
        emit SoldAuction(
            itemAuction.id,
            itemAuction.nft,
            itemAuction.tokenId,
            itemAuction.price,
            itemAuction.seller,
            itemAuction.highestBidder
        );
        delete (auctions[_itemId]);
    }

    ///@dev cancel function

    function cancelAuction(uint256 _itemId)
        public
        nonReentrant
        securityFrontRunningAuction(_itemId)
    {
        Auction storage item = auctions[_itemId]; // get the auction from the auctions mapping
        require(item.sold == false, "auction already sold"); // check if the auction is already sold
        require(item.seller == msg.sender, "you are not the seller"); // check if the msg.sender is the seller
        if (item.startPrice != item.price) {
            payable(item.highestBidder).transfer(item.price); // transfer the seller amount to the seller
        }
        delete auctions[_itemId]; // delete the auction from the auctions mapping
    }
}