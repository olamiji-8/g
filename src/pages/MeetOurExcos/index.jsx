import React from "react";

import { Button, Img, Text } from "components";

const MeetOurExcosPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1117px] items-end justify-end mx-auto p-[46px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_meetourexcos.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[90px] items-center justify-start mb-[7px] mt-[30px] w-[96%] md:w-full">
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-center justify-start w-auto md:w-full">
            <Img
              className="h-[374px] sm:h-auto object-cover rounded-[12px] w-[296px] md:w-full"
              src="images/img_rectangle21.png"
              alt="rectangleTwentyOne"
            />
            <div className="flex flex-col items-start justify-start p-2.5 w-auto md:w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-auto">
                <Img
                  className="h-[688px] sm:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-[699px] md:w-full"
                  src="images/img_rectangle18.png"
                  alt="rectangleEighteen"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                    size="txtInterExtraBold32"
                  >
                    Bro. Tolu Stephen
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                      size="txtInterMedium28"
                    >
                      President
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterRegular24WhiteA700"
                    >
                      2020/2021
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[374px] sm:h-auto object-cover rounded-[18px] w-[296px] md:w-full"
              src="images/img_rectangle18_374x296.png"
              alt="rectangleEighteen_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurExcosPage;
