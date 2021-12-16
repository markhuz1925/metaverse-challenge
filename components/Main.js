import Image from "next/image";

function Main({ onClick, address }) {
  return (
    <div className="bg-black relative">
      <div className="flex flex-row absolute z-50 w-full px-10 py-5 items-center justify-between">
        <div>
          <span className="text-white lg:text-[24px] sm:text-[12px]">
            WELCOME,{" "}
          </span>{" "}
          <span className="text-white lg:text-[26px] font-bold sm:text-[14px]">
            {address}
          </span>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-purple-700 animate-pulse rounded-lg blur-md" />
          <button
            onClick={onClick}
            className="relative px-7 py-4 bg-fuchsia-500 hover:bg-fuchsia-400 rounded-lg font-bold uppercase leading-none flex items-center divide-x divide-gray-600"
          >
            <p className="text-white">logout</p>
          </button>
        </div>
      </div>

      <div className="w-screen h-screen bg-no-repeat bg-cover bg-[url('https://miro.medium.com/max/2000/1*ejqaTHFBT5k7aWIATEAKgw.jpeg')]" />

      <div className="h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-40">
        <div className="flex items-center divide-x divide-pink-600">
          <span className="pr-6 text-[72px] text-indigo-600 uppercase">
            Metaverse
          </span>
          <span className="pl-6 text-[72px] text-fuchsia-600 text-center">
            Web 3.0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
