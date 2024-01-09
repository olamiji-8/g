import React from "react";

import { Button, Img, Text } from "components";

const AboutUsOnePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1117px] items-end justify-end mx-auto p-[46px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_aboutusone.png')" }}
      >
        <div className="flex flex-col items-start justify-start mb-6 mt-[30px] w-[96%] md:w-full">
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[367px] w-[96%] md:w-full">
            <div className="flex flex-col gap-[34px] items-start justify-start md:mt-0 mt-[15px]">
              <Text
                className="md:text-5xl text-8xl text-white-A700 tracking-[-4.80px]"
                size="txtInterSemiBold96"
              >
                Who We Are
              </Text>
              <Text
                className="leading-[133.52%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-1.08px] w-full"
                size="txtLoraMedium36"
              >
                We are a peculiar generation purified and zealous unto God.  A
                fellowship of brothers and sisters, established in faith, and
                growing daily unto the stature of Christ. We are dispensers of
                His realities, strengthened by Christ to fulfill our purpose in
                God and on campus.
              </Text>
            </div>
            <div className="flex flex-col gap-[34px] items-start justify-start w-auto">
              <div className="bg-cyan-300 h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[627px] mt-[100px] w-[56%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtInterRegular24"
            >
              Scroll down for more
            </Text>
            <Img
              className="h-11 md:ml-[0] ml-[507px] w-11"
              src="images/img_facebook.svg"
              alt="facebook"
            />
            <Img
              className="h-11 md:ml-[0] ml-[31px] w-11"
              src="images/img_instagram.svg"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsOnePage;
