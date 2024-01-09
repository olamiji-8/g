import React from "react";

import { Button, Img, Text } from "components";

const SlideTwoPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[403px] h-[1117px] justify-end mx-auto p-[39px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_slidetwo.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 gap-[819px] items-center justify-between max-w-[1562px] mt-[37px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[6%] md:w-full">
            <Img
              className="h-7 md:h-auto object-cover w-full"
              src="images/img_rcfinverted1.png"
              alt="rcfinvertedOne"
            />
          </div>
          <div className="flex md:flex-1 md:flex-col flex-row gap-[39px] items-center justify-start w-auto md:w-full">
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
        <div className="h-[537px] sm:h-[547px] md:h-[695px] mb-2.5 md:ml-[0] ml-[132px] md:px-5 relative w-[92%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-start m-auto w-full">
            <div className="h-[412px] md:h-[473px] sm:h-[518px] mb-[106px] md:mt-0 mt-[19px] relative w-[63%] md:w-full">
              <div className="absolute flex flex-col font-inter h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[90%]">
                <div className="flex flex-col md:gap-10 gap-[85px] justify-start w-full">
                  <Text
                    className="leading-[113.52%] md:text-5xl text-8xl text-white-A700 tracking-[-4.80px]"
                    size="txtInterSemiBold96"
                  >
                    <>
                      A place where good things never
                      <br />
                      cease!
                    </>
                  </Text>
                  <div className="bg-cyan-300 h-[55px] md:ml-[0] ml-[633px] mr-[167px] rounded-[27px] w-[55px]"></div>
                </div>
              </div>
              <Text
                className="absolute bottom-[2%] right-[0] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-1.08px] w-[67%] sm:w-full"
                size="txtLoraRegular36"
              >
                The steadfast love of the LORD never ceases; his mercies never
                come to an end; they are new every morning; great is your
                faithfulness.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-[31px] items-center justify-center md:ml-[0] ml-[368px] md:mt-0 mt-[493px] w-[8%] md:w-full">
              <Img
                className="h-11 w-11"
                src="images/img_facebook.svg"
                alt="facebook"
              />
              <Img
                className="h-11 w-11"
                src="images/img_instagram.svg"
                alt="instagram"
              />
            </div>
            <div className="flex flex-col gap-[34px] items-start justify-start md:ml-[0] ml-[61px] w-auto">
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-cyan-300 h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
            </div>
          </div>
          <Img
            className="absolute bottom-[20%] h-[50px] left-[42%] w-[50px]"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
        </div>
      </div>
    </>
  );
};

export default SlideTwoPage;
