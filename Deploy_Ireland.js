/**
 * 部署目标：爱尔兰节点 (3+5+8+8 架构)
 * 协议：百年计划 176 协议
 */
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("正在使用地址部署合约:", deployer.address);

    // 数学程式变量
    const decimals = BigInt(10) ** BigInt(18);
    const baseAmount = BigInt(1760000000) * decimals;

    // 对应 176 协议的 7 个初始接收地址 (此处填入你的仓库地址)
    const nodes = [
        "0x...", // 30% 资金池
        "0x...", // 15% 欧盟
        "0x...", // 15% 维基
        "0x...", // 10% 谷歌
        "0x...", // 10% 微软
        "0x...", // 20% 运行
        "0x..."  // 0.3% 溢出
    ];

    const TBBContract = await ethers.getContractFactory("TBB_176_Protocol");
    const tbb = await TBBContract.deploy(nodes);

    await tbb.waitForDeployment();

    console.log("--- 部署成功 ---");
    console.log("合约地址:", await tbb.getAddress());
    console.log("数学验算总量:", ethers.formatUnits(baseAmount, 18), "TBB");
    console.log("贞下起元：2039 移交逻辑已就绪。");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
