# Quire

## Checkout the deployed project
At Vercel: https://quire-phi.vercel.app/

## Project Overview

Have you ever considered how acquiring a company in the Web3 world could look? 😮🌐 Let's imagine a highly renowned Lens blogger who decides to sell their blog posts to a different company. 💼💻

Now, how can they go about this? Without revealing their private key 😬🔐, there are currently no other viable options. Fortunately, with token-based accounts, we can capitalize on the advantages of NFTs, such as uniqueness and transferability. Thanks to our skilled engineering team, we can transform the blogger's blog into an FT (fungible token) by leveraging technology like ERC-6551. 🚀🔁

Here's how it works: when someone expresses interest in buying the blog, the blogger can simply list their blog for sale. The beauty of composability in Solidity, the programming language used for Ethereum smart contracts, takes care of the rest. This means that the necessary processes and interactions for the acquisition can seamlessly occur, making the transaction smooth and efficient. 🤝💫

---

## Deployments

### Simple6551Account 

- [Old Version (Pre-submission)](https://goerli.etherscan.io/address/0xf999f659c5ab90e42e466b367bb56e8bd56ce524#readContract)
- [New Version (Final Submission)](https://goerli.etherscan.io/address/0x60c9d9798f43edf78650d6ff829f574243f1aa01)

### ERC6551Registry 

- [Contract Address](https://goerli.etherscan.io/address/0x02101dfB77FDE026414827Fdc604ddAF224F0921)

### Publication Houses (ERC-721)

- [Token Address (Pre-submission)](https://goerli.etherscan.io/token/0x9dfef6f53783c7185c69f45a51bede2c32e4ac3e)
- [Token Address (Final Submission)](https://goerli.etherscan.io/address/0x51d189835b0fdbbfd19df85b5aaa3488f258a3e9)

### Marketplace Contract 

- [GitHub Repository](https://github.com/PatrickAlphaC/hardhat-nft-marketplace-fcc)

---

## Key Features

- **Token-based Accounts**: Leveraging ERC-6551, we enable the transformation of blogs into fungible tokens, providing unique and transferable ownership rights.
- **Seamless Acquisition**: By listing the blog for sale, interested parties can easily initiate the acquisition process, facilitated by the composability of Solidity smart contracts.
- **Privacy and Security**: Our solution ensures the protection of the blogger's private key, eliminating the need for direct key exposure during the acquisition process.
- **Marketplace Integration**: The marketplace contract provided allows for efficient buying and selling of blogs, creating a thriving ecosystem for blog acquisitions within the Web3 world.

---

## Getting Started

To get started with our project, follow the instructions below:

1. Clone the repository: `git clone git@github.com:vikiival/quire.git`
2. Go to web folder `cd web`
3. Install the relevant dependencies with `yarn install`
4. Start the project on localhost with `yarn dev`
