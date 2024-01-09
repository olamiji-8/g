import React from "react";

import { Button, Img, Text } from "components";

const SermonsVariant2OnePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1117px] items-end justify-start mx-auto p-[46px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_sermonsvariant_1.png')" }}
      >
        <div className="flex flex-col items-start justify-start mb-[166px] mt-[30px] w-[96%] md:w-full">
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
          <div className="flex flex-col gap-8 items-start justify-start mt-[297px] w-auto md:w-full">
            <Text
              className="leading-[113.52%] max-w-[1041px] md:max-w-full md:text-5xl text-8xl text-white-A700 tracking-[-2.88px]"
              size="txtInterSemiBold96"
            >
              <>Contribute and Support Our Church&#39;s Mission</>
            </Text>
            <Text
              className="leading-[113.52%] max-w-[1041px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-1.08px]"
              size="txtLoraMedium36"
            >
              Lorem ipsum dolor sit amet consectetur. Vehicula commodo sed vitae
              eu ultricies interdum mattis tellus a. Pretium ultricies vel
              hendrerit amet aliquet lacinia enim.
            </Text>
          </div>
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[280px] mt-[31px] text-4xl sm:text-[32px] md:text-[34px] text-center"
            size="md"
            variant="outline"
          >
            Be a Blessing
          </Button>
        </div>
      </div>
    </>
  );
};

export default SermonsVariant2OnePage;
