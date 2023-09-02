# Palm Protocol

## How to Run
1. cd frontend
2. yarn install
3. yarn dev
4. open localhost

---

- [Hardhat](https://hardhat.org/)
- [Next.js](https://nextjs.org/)
- [RainbowKit](https://www.rainbowkit.com/)
- [wagmi](https://wagmi.sh/)
- [Chakra UI](https://chakra-ui.com/)

## Getting Started

yarn install

# Start up the Hardhat Network
yarn chain
```

Here we just install the npm project's dependencies, and by running `yarn chain` we spin up an instance of Hardhat Network that you can connect to using MetaMask. In a different terminal in the same directory, run:

```bash
yarn deploy
```

This will deploy the contract to Hardhat Network. After this completes run:

```bash
cd frontend
yarn install
```

This will create a file called `.env.local`. Open up that file and fill in the `NEXT_PUBLIC_ALCHEMY_API_KEY=` and `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=` environment variables.
....
```bash
yarn dev
```

This will start up the Next.js development server. Your site will be available at http://localhost:3000/

To interact with the local contract, be sure to switch your MetaMask Network to `Localhost 8545`
.