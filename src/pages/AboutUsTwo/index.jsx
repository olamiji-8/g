import React from "react";

import { Button, Img, Text } from "components";

const AboutUsTwoPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1117px] items-end justify-start mx-auto p-[46px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_aboutustwo.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[282px] items-center justify-start mb-52 mt-[30px] w-[96%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[819px] items-center justify-between w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-[6%] md:w-full">
              <Img
                className="h-7 md:h-auto object-cover w-full"
                src="images/img_rcfinverted1.png"
                alt="rcfinvertedOne"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[39px] items-center justify-start w-auto md:w-full">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterMedium20"
              >
                About us
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterMedium20"
              >
                Blog
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterMedium20"
              >
                Sermon
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterMedium20"
              >
                Online Giving
              </Text>
              <Button className="cursor-pointer font-semibold h-[52px] leading-[normal] min-w-[173px] text-center text-xl">
                Meet Our Excos
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-9 items-start justify-start">
              <Text
                className="md:text-5xl text-8xl text-white-A700 tracking-[-4.80px] w-[61%] sm:w-full"
                size="txtInterSemiBold96"
              >
                History Of The Fellowship
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-1.08px] w-full"
                size="txtLoraMedium36"
              >
                The Redeemed Christian Fellowship, FUTA was founded in 1989 by .
                It started as a in The Redeemed Christian Fellowship, FUTA was
                founded in 1989 by . It started as a inThe Redeemed Christian
                Fellowship, FUTA was founded in 1989 by . It started as a in
              </Text>
            </div>
            <div className="flex flex-col gap-[34px] items-start justify-start md:mt-0 mt-[85px] w-auto">
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-cyan-300 h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsTwoPage;
