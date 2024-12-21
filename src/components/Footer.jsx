import React from "react";

const Footer = () => {
  const footer = [
    {
      title: "Company",
      list: [
        "Services",
        "Reatures",
        "Terms of use",
        "Privacy policy",
        "Disclaimer",
        "Community",
      ],
    },
    {
      title: "Products",
      list: [
        "Luxury Cars",
        "Car Escort",
        "Private Jets",
        "Travel mini Bus",
        "Online Shopping / Delivery",
      ],
    },

    {
      title: "Services",
      list: [
        "Rent cars",
        "Travels",
        "Sending parcels",
        "Recieve parcels",
        "Online shopping",
        "Deliveries",
      ],
    },
    {
      title: "Support",
      list: [
        "24/7 Chat Support",
        "FAQ",
        "Product Feedback & Suggestions",
        "Support Center",
      ],
    },
    {
      title: "Socials",
      list: ["X(Twitter)", "Facebook", "Telegram", "Instagram"],
    },
  ];
  return (
    <footer className=" bg-black text-white   py-10 flex justify-center items-center font2">
      <div className=" w-[90%] mx-auto ">
        <div className="lg:flex justify-between">
          <h3 className=" text-sm font-semibold lg:w-[15%] mb-8 lg:mb-0 text-yellow-600 uppercase ">
            made for ease transit
          </h3>
          <div className="lg: w-[80%] flex gap-6 flex-col lg:flex-row justify-between">
            {footer.map((item) => {
              return (
                <div key={item.title}>
                  <h2 className=" text-sm lg:text-base text-yellow-600  font-semibold mb-4">
                    {item.title}
                  </h2>

                  {item.list.map((l, index) => (
                    <p
                      key={index}
                      className=" text-sm text-gray-200 font-medium mb-2.5 hover:text-yellow-500 hover:font-semibold"
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
          <p className=" text-center my-4 text-xs text-yellow-500 lg:text-base">
            Made for ease transit &copy; 2024.{" "}
            <span className=" font-medium">All rights reserved</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
