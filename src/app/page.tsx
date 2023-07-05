"use client";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../../utils/Lock.json";
export default function Home() {
  const contractAddress = "0x6e2f913d3ba20f0cba4f3b111a2c2d60ecfc79d6";
  const contractABI = abi.abi;
  const handleBuy = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("signer", signer);
      const buyMeACoffee = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      console.log("currentAccount" + currentAccount);
      const value = ethers.utils.parseEther("0.01");
      const coffeeTxn = await buyMeACoffee.buyTokens(currentAccount, {
        value: value,
      });
      await coffeeTxn.wait();
      console.log("hash", coffeeTxn);
    }
  };

  const divRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    console.log("Clicked");
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentAccount, setCurrentAccount] = useState("");
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        console.log("please install MetaMask");
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // const isWalletConnected = async () => {
  //   try {
  //     const { ethereum } = window;
  //     const accounts = await ethereum.request({ method: 'eth_accounts' })
  //     console.log("accounts: ", accounts);
  //     if (accounts.length > 0) {
  //       const account = accounts[0];
  //       console.log("wallet is connected! " + account);
  //     } else {
  //       console.log("make sure MetaMask is connected");
  //     }
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // }

  // useEffect(() => {
  //   isWalletConnected();
  // })
  return (
    <div class="font-[heebo] text-yellow-400 mx-16 ">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="flex justify-between h-10 mb-40">
        <div class="">
          <img class="h-10 object-cover" src="/cr7logo.jpg"></img>
        </div>
        <div>
          <button class="mr-5" onClick={handleClick}>
            CR7DAO Airdrop & Sales
          </button>
          <button class="text-black bg-yellow-400 px-5">Smart Contact</button>
          {!currentAccount && (
            <button class="px-5" onClick={connectWallet}>
              Connect
            </button>
          )}
          {currentAccount && (
            <button class="px-5" onClick={connectWallet}>
              {"0x..." + currentAccount.slice(-4)}
            </button>
          )}
        </div>
      </div>

      <div class="flex flex-row-reverse justify-between">
        <div class="text-center">
          <p class="">CR7-Binance</p>
          <h3 class="">THE CR7 NFT COLLECTION</h3>
          <p class="">
            Your story begins here, on Binance.Take the first step and score an
            exclusive CR7 NFT Pack with other rewards.
          </p>
        </div>
        <div class="">
          <iframe src="https://www.youtube.com/embed/rAozsyoe9DI?controls=0&amp;start=2s&amp;end=50s&amp;loop=1&amp;playlist=rAozsyoe9DI&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"></iframe>
        </div>
      </div>

      <h1 class="text-center mb-20 mt-20">CR7DAO Token Sale.</h1>
      <div class="grid grid-cols-2 text-center">
        <div>
          <div class="pricing-item-features mb-5">
            <h2>Join Pre Sale </h2>
            <p></p>
            <h2 id="demo" class="timer"></h2>
            <p></p>
            <p>Listing Price 1 $CR7 = 1 USD</p>
            <p>(MAX 10 BNB)</p>
            <ul class="rq st c us">
              <li class="ix">0.01 $BNB = 1,000 $CR7</li>
              <li class="ix">0.1 $BNB = 10,000 $CR7</li>
              <li class="ix">1 $BNB = 100,000 $CR7</li>
              <li class="ix">10 $BNB = 1,000,000 $CR7</li>
            </ul>
          </div>

          <div ref={divRef} class="pricing-item-cta oh">
            <input
              class="w-full text-black my-[10px] p-[5px] text-center"
              id="buyinput"
              placeholder="0.01"
              value="0.01"
            ></input>
            <button
              class="w-full text-black text-center bg-yellow-400 my-[10px] p-[5px]"
              onClick={handleBuy}
            >
              BUY
            </button>
          </div>
        </div>

        <div class="rj">
          <div class="ib aa ue">
            <div class="pricing-item-features">
              <h2>Claim Airdrop</h2>
              <p>Don't Miss Out!</p>

              <ul class="rq st c us">
                <li class="ix">Referral count is unlimited</li>
                <li class="ix">Get 100% $CR7 &amp; 30% $BNB per referral</li>
              </ul>
            </div>
          </div>
          <div>
            <div id="airdroprow">
              <div id="airdropcell"></div>
              <h2 class="">Create Your Referral Link</h2>
            </div>
            <div class="pricing-item-cta oh">
              <a class="tbuttonn fbuttonl pbuttond" href="#">
                Start
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
