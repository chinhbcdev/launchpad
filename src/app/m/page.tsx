import RoadmapComponet from "../components/RoadmapComponet";
import TestComponent from "../components/TestComponent";

export default function Morty() {
  return (
    <div class="max-w-[1440px] mx-auto font-sans font-bold text-white bg-black">
      <header class="">
        <div class="layout-container ">
          <div class="flex items-center justify-between py-[29px] ">
            <img class="max-w-[180px]" src="logo.png"></img>
            <ul class="flex items-center gap-7">
              <li>Home</li>
              <li>Launchpad</li>
              <li>Roadmap</li>
              <li>Contact</li>
            </ul>
            <button class="uppercase bg-[#798da3] py-[16px] px-[30px] rounded-bl-lg text-sm">
              Connect
            </button>
          </div>
          <div class="grid grid-cols-2 mb-40">
            <div>
              <h1 class="text-7xl mb-6">
                Enter the Ethereum portal through Morty's journey
              </h1>
              <p class="sub-title mb-10" data-label-id="0" data-metatip="true">
                The portal takes us to the unexpected on the ERC20 network.
                Morty Pad will be where it all begins!
              </p>
              <p data-label-id="0" data-metatip="true" class="mb-10">
                Smart contract: 0xEDD63398eF416e612AD7547C1B3773198834687D
              </p>
              <a
                href="#"
                class="bg-[#86ff00] py-[16px] px-[30px] rounded-bl-lg text-sm "
                data-label-id="0"
              >
                EXPLORE IDOs
              </a>
            </div>
            <img src="Furore.png"></img>
          </div>
          <h2
            class="title text-5xl text-center leading-[55px] my-4"
            data-label-id="0"
          >
            Upcoming Project
          </h2>
          <div class="grid grid-cols-2 mb-20">
            <img class="" src="img_slider_v1.png "></img>
            <div class="text-white">
              <h4>The first project on MortyPad</h4>
              <ul class="flex gap-2">
                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      class="w-6 h-6 text-gray-400 text-blue-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      class="w-6 h-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </li>
              </ul>
              <ul
                class="flex gap-2 bg-[#86ff00] text-[#1a222c] rounded-md                  "
                data-label-id="0"
                contenteditable="true"
                spellcheck="false"
              >
                <li>
                  <span>
                    Deposited: <span id="deposited">0</span>&nbsp;ETH
                  </span>
                </li>
                <li>
                  <span>
                    Total Raised:
                    <span id="totalRaised">0</span>&nbsp;ETH
                  </span>
                </li>
              </ul>
              <input
                class="block w-full bg-[#1e2835]"
                id="depositInput"
                type="number"
                placeholder="Amount"
                min="0.1"
                max="1"
              ></input>
              <p
                class="note-1"
                contenteditable="true"
                spellcheck="true"
                data-label-id="0"
              >
                <span>Min: 0.1 ETH</span> <span>Max: 0.5 ETH</span>
              </p>
              <button
                id="depositBtn"
                data-label-id="0"
                contenteditable="true"
                spellcheck="true"
              >
                Deposit
              </button>
            </div>
          </div>
          <h2
            class="text-center text-5xl mb-5"
            data-label-id="0"
            contenteditable="true"
            spellcheck="false"
          >
            Easy to join IDOs <br />
            with 3 steps
          </h2>
          <div class="grid grid-cols-3">
            <TestComponent
              icon="project_5"
              title="Connect Wallet"
              content="Connect your wallet by selecting it from the available options and authorizing it. This allows you to access and manage your digital assets on the Morty Pad platform."
              num="01"
            />
            <TestComponent
              icon="project_6"
              title="Sign Your Wallet"
              content='
              Sign your wallet to authenticate transactions and actions.
              Review the details, click "Sign" and confirm the signing
              request using your wallet&apos;s authentication method.
           '
              num="02"
            />
            <TestComponent
              icon="project_7"
              title="Deposit Your Funds"
              content="Contribute your desired amount to fundraising projects on Morty Pad by depositing your funds to the specified wallet address provided on the platform."
              num="03"
            />
          </div>
          <div class="grid grid-rows-2 justify-items-stretch">
            <RoadmapComponet />
            <RoadmapComponet class="justify-self-end" />
          </div>
        </div>
      </header>
    </div>
  );
}
//8px
// <body class="w-full max-w-[1263px] text-white text-[16px] font-sans font-bold leading-6 bg-[#09121d]">
//   {/* <div class="w-full max-w[1140px] py-[29px] h-[110px] flex flex-col">
//     <div class="ml-[77px] ">
//       <Image class="max-w max-h py-[35px]" width={500} height={500} src="/logo.png" />
//     </div>
//   </div>
//    */}

//   <div class="flex flex-row mx-[62px] max-h-[110px] ">
//     <div class="flex flex-row mx-[35px]">
//       <Image class="my-[12px] object-contain" width={200} height={200} src="/logo.png" />
//     </div>
//     <div class="">
//       <button class="text-[#86ff00] p-4">Home</button>
//       <button class="p-4">Launchpads</button>
//       <button class="p-4">Roadmap</button>
//       <button class="p-4">Contact</button>
//     </div>
//     <div class="ml-[257px]">
//       <button class="uppercase  bg-[#798da3] rounded-2 px-4 py-5 font-medium">Connect</button>
//     </div>
//   </div>

//   <h1 class="text-7xl leading-[72px]">
//     Enter the Ethereum portal through Morty's journey
//   </h1>

// </body >
