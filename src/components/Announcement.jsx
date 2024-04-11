import React from "react";
import Marquee from "react-fast-marquee";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Announcement = () => {
  return (
    <div className=" absolute font2 bottom-0 bg-black bg-transparent  font2 flex justify-between  text-white text-sm items-center py-3 px-2">
      <Marquee speed={70} gradient={false} pauseOnHover>
        <div className=" flex gap-6 mr-4">
          <p className=" text-xs font-medium">
            USA Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className=" text-xs font-medium">
            Russia Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p className="flex text-xs items-center font-medium">
            Cryptocurrency Market Cap:{" "}
            <span className=" text-blue-600"> $2.63T </span>
            <span className=" flex text-red-600 ml-2">
              <MdOutlineArrowDropDown />
              1.31%
            </span>
          </p>
          <p className="flex items-center text-xs font-medium">
            24h Vol: <span className=" text-blue-600"> $76.86b </span>
            <span className=" flex text-green-600 ml-2">
              <MdOutlineArrowDropUp />
              18.04%
            </span>
          </p>
        </div>
        <div className=" flex gap-8 mr-4">
          <p className=" text-xs font-medium">
            Dominace: <span className=" text-blue-600">BTC: 52.0% </span>{" "}
            <span className=" ml-1 text-blue-600">ETH:16.2%</span>
          </p>
          <p className=" text-xs font-medium">
            ETH Gas: <span className=" text-blue-600">19 Gwei </span>{" "}
          </p>
          <div className="flex items-center gap-1">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
              alt=""
              width={18}
            />
            <p className=" text-xs font-medium">BTC:$69,697.94</p>
          </div>

          <div className="flex items-center gap-1">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
              alt=""
              width={18}
            />
            <p className=" text-xs font-medium">ETH:$3,551.94</p>
          </div>

          <div className="flex items-center gap-1">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
              alt=""
              width={18}
            />
            <p className=" text-xs font-medium">USDT:$1.00</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Announcement;
