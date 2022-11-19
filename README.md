# Complaint-Registeration-dApp
 This is a project built to replicate FIR complaint filing system on the blockchain using NEXT.js, tailwind css and ThirdWeb.
 
 # Screenshot of the dApp:
 
![dApp_screenshot_without_admin_panel](https://user-images.githubusercontent.com/107293201/202850138-419b8598-2ea7-4c0f-9604-ff43ffde42ee.png)

# Project dependencies:
yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers react-hot-toast

# Steps to run this project:
1. Git clone this repo
2. Install the project dependencies
3. Create a .env.local file inside the main folder
4. Add a variable by the name: NEXT_PUBLIC_SMART_CONTRACT
5. Deploy this contract directly from the this Thirdweb Link: http://bit.ly/3VeNU6h
6. While deploying you will have to fill the constructor argument with an address for officer's address(suggestion: should be separate from deployer's address)
7. Copy the smart contract address and assign it to NEXT_PUBLIC_SMART_CONTRACT that you had created
8. Open terminal and run command: yarn dev

⭐Give this repo a star if you found some value in it. 
Thanks!
