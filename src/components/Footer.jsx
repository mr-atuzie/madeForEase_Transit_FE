import React from "react";

const Footer = () => {
  const footer = [
    {
      title: "Company",
      list: [
        "About us",
        "News",
        "Terms of use",
        "Privacy policy",
        "Disclaimer",
        "Cookie policy",
        "Community",
      ],
    },
    {
      title: "Products",
      list: [
        "Exchange",
        "Buy Crypto",
        "Gift Card",
        "NFT",
        "Auto-Invest",
        "Crypto API",
        "Crypto Indices",
        "Research",
        "Charity",
      ],
    },

    {
      title: "Services",
      list: [
        "Buy & Sell Crypto",
        "Buy Bitcoin",
        "Buy Ethereum",
        "BTC to USD",
        "Buy Crypto With Paypal",
      ],
    },
    {
      title: "Support",
      list: [
        "24/7 Chat Support",
        "FAQ",
        "Product Feedback & Suggestions",
        "Support Center",
        "Trading Rules",
      ],
    },
    {
      title: "Socials",
      list: [
        "X(Twitter)",
        "Facebook",
        "Discord",
        "Reddit",
        "Telegram",
        "Instagram",
      ],
    },
  ];
  return (
    <footer className=" bg-black text-white   py-10 flex justify-center items-center font2">
      <div className=" w-[90%] mx-auto ">
        <div className="lg:flex justify-between">
          <h3 className=" text-3xl lg:w-[15%] mb-8 lg:mb-0 ">Logo</h3>
          <div className="lg: w-[80%] flex gap-6 flex-col lg:flex-row justify-between">
            {footer.map((item) => {
              return (
                <div key={item.title}>
                  <h2 className="  font-semibold mb-4">{item.title}</h2>

                  {item.list.map((l, index) => (
                    <p
                      key={index}
                      className=" text-sm text-gray-700 font-medium mb-2.5 hover:text-black hover:font-semibold"
                    >
                      {l}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" border-t mt-5 lg:mt-10">
          <p className=" text-center my-4 text-sm lg:text-base">
            Binance&copy; 2024.{" "}
            <span className=" font-medium">All rights reserved</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
