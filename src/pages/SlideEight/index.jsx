import React from "react";

import { Button, Img, List, Text } from "components";

const SlideEightPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="h-[574px] md:px-5 relative w-full">
          <Img
            className="h-[574px] m-auto object-cover w-full"
            src="images/img_rectangle17.png"
            alt="rectangleSeventeen"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[163px] items-center justify-start right-[3%] top-[13%] w-[91%]">
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
            <Text
              className="md:text-5xl text-8xl text-white-A700 tracking-[-4.80px]"
              size="txtInterMedium96"
            >
              Online Giving
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-lora items-center justify-start mt-[46px] md:px-5 w-auto md:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-800 w-auto"
            size="txtLoraMedium40"
          >
            What would you like to give towards?
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row font-lora gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1506px] mt-[29px] mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="bg-blue-100 flex sm:flex-1 flex-col gap-3 items-start justify-start pb-6 pt-12 sm:px-5 px-6 rounded-lg w-auto sm:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[-1.08px] w-auto"
              size="txtLoraMedium36Gray800"
            >
              Offering & Tithe
            </Text>
            <Text
              className="leading-[125.02%] max-w-[422px] md:max-w-full text-gray-800 text-xl"
              size="txtLoraRegular20"
            >
              Lorem ipsum dolor sit amet consectetur. Vehicula commodo sed vitae
              eu ul Lorem ipsum dolor sit amet consectetur.
            </Text>
          </div>
          <div className="bg-light_blue-800 flex sm:flex-1 flex-col gap-3 items-start justify-start pb-6 pt-12 sm:px-5 px-6 rounded-lg w-auto sm:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-1.08px] w-auto"
              size="txtLoraMedium36"
            >
              Church Growth
            </Text>
            <Text
              className="leading-[125.02%] max-w-[422px] md:max-w-full text-white-A700 text-xl"
              size="txtLoraRegular20WhiteA700"
            >
              Lorem ipsum dolor sit amet consectetur. Vehicula commodo sed vitae
              eu ul Lorem ipsum dolor sit amet consectetur.
            </Text>
          </div>
          <div className="bg-yellow-100 flex sm:flex-1 flex-col gap-3 items-start justify-start pb-6 pl-6 md:pr-10 pr-12 pt-12 sm:px-5 rounded-lg w-auto sm:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[-1.08px] w-auto"
              size="txtLoraMedium36Gray800"
            >
              RW’23 Support
            </Text>
            <Text
              className="leading-[125.02%] max-w-[422px] md:max-w-full text-gray-800 text-xl"
              size="txtLoraRegular20"
            >
              Lorem ipsum dolor sit amet consectetur. Vehicula commodo sed vitae
              eu ul Lorem ipsum dolor sit amet consectetur.
            </Text>
          </div>
        </List>
        <div className="flex flex-col font-lora gap-[30px] items-center justify-start mt-[140px] md:px-5 w-auto md:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-800 w-auto"
            size="txtLoraSemiBold40"
          >
            Bank Details
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[187px] items-center justify-between w-auto md:w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-700 tracking-[-0.96px] w-auto"
                size="txtLoraMedium32Gray700"
              >
                First Bank
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-800 tracking-[4.00px] w-auto"
                size="txtLoraMedium40"
              >
                3041 232 323
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl tracking-[-0.72px] w-auto"
                size="txtLoraMedium24"
              >
                The Redeemed Christian Fellowship, FUTA
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="border-[3px] border-cyan-900 border-solid cursor-pointer font-semibold min-w-[106px] text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                color="cyan_900"
                size="xs"
              >
                Copy
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-lora items-start mt-3.5 md:px-10 sm:px-5 px-[503px] w-full">
          <Text
            className="text-red-A700 text-xl tracking-[-0.60px]"
            size="txtLoraRegular20RedA700"
          >
            Kindly Indicate purpose of transaction in the narrations
          </Text>
        </div>
        <div className="bg-cyan-900 flex flex-col font-lora items-center justify-start mt-[145px] md:px-10 sm:px-5 px-[677px] py-[90px] w-auto md:w-full">
          <div className="flex flex-col gap-[21px] items-center justify-start w-auto sm:w-full">
            <Img
              className="h-20 md:h-auto object-cover w-[236px] sm:w-full"
              src="images/img_rcfinverted1.png"
              alt="rcfinvertedOne_One"
            />
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtLoraRegular20WhiteA700"
            >
              A Place Where Good things never cease!{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideEightPage;
