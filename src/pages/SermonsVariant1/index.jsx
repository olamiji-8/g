import React from "react";

import { Button, Img, Line, List, Text } from "components";
import SermonsVariant1Columnarrowleft from "components/SermonsVariant1Columnarrowleft";

const SermonsVariant1Page = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1117px] items-center justify-start mx-auto p-[54px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_sermonsvariant.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[308px] items-center justify-start max-w-[1554px] mb-[58px] mt-[22px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
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
              <Button className="!text-blue-100 cursor-pointer font-semibold h-[52px] leading-[normal] min-w-[173px] text-center text-xl">
                Meet Our Excos
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
            <div className="flex flex-col gap-[25px] items-start justify-start md:mt-0 mt-[9px] w-auto sm:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-white-A700 text-xl tracking-[-1.00px] w-auto"
                  size="txtInterLight20"
                >
                  June 28, 2023
                </Text>
                <Text
                  className="md:text-5xl text-9xl text-white-A700 tracking-[-6.40px] w-auto"
                  size="txtInterSemiBold128"
                >
                  Epignosis
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-100 tracking-[-1.40px] w-auto"
                  size="txtInterSemiBold28"
                >
                  Pst Sam Neye
                </Text>
              </div>
              <div className="flex flex-row gap-[31px] items-start justify-start w-auto">
                <Img
                  className="h-11 w-11"
                  src="images/img_television.svg"
                  alt="television"
                />
                <div className="flex flex-col h-11 items-center justify-start w-11">
                  <Img
                    className="h-11 w-11"
                    src="images/img_download.svg"
                    alt="download"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[19px] items-center justify-start w-[27%] md:w-full">
              <div className="flex flex-row items-center justify-between w-[402px] sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-1.20px] w-auto"
                  size="txtInterBold24"
                >
                  More Sermons
                </Text>
                <SermonsVariant1Columnarrowleft
                  className="flex flex-col gap-1 items-center justify-start pt-2 px-1 w-auto"
                  titletext="View All"
                />
              </div>
              <List
                className="flex flex-col gap-6 items-start w-auto"
                orientation="vertical"
              >
                {new Array(5).fill({}).map((props, index) => (
                  <React.Fragment
                    key={`SermonsVariant1Columnarrowleft${index}`}
                  >
                    <SermonsVariant1Columnarrowleft
                      className="flex flex-col gap-4 items-end justify-start my-0 pt-2 w-auto sm:w-full"
                      datetext="July 28, 2023"
                      arrowimage="images/img_arrowleft.svg"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SermonsVariant1Page;
