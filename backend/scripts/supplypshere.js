const {ethers} = require("hardhat");
//1. SupplyShereContractAddress 0x1D7478635b1e6C0001432a5a7e20Fd273273Aa32

async function main(){
    //get the contract
    const TenderSupplyShereContract = await ethers.getContractFactory("Bider");
    //deploy the contract
    const TenderSupplyShereContractDeploy = await TenderSupplyShereContract.deploy();
    //await deployment
    await TenderSupplyShereContractDeploy.deployed();
    //console the address
    console.log("SupplyShereContractAddress", TenderSupplyShereContractDeploy.address);
}
//call main
main().then(()=>
process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})