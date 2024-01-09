import React from "react";

import { Button, Img, Text } from "components";

const AboutUsThreePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1117px] items-end justify-start mx-auto p-[46px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_aboutusthree.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[291px] items-center justify-start mb-[79px] mt-[30px] w-[96%] md:w-full">
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
            <div className="flex md:flex-1 flex-col gap-14 items-start justify-start w-auto md:w-full">
              <Text
                className="md:text-5xl text-8xl text-white-A700 tracking-[-4.80px] w-auto"
                size="txtInterSemiBold96"
              >
                VISION STATEMENT
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.96px]"
                size="txtLoraMedium32"
              >
                <>
                  To raise men who would be complete examples of God’s mind and
                  be templates for others to follow. 1 Timothy 4:11-12, Titus
                  2:6-8, 2 Thessalonians 3:6-9.
                  <br />
                  <br />
                  That every member of the church be thoroughly equipped for the
                  master’s use amd fruitful in every good works in accordance
                  with the ministry of reconciliation. 2 Timothy 2:19-21;
                  3:16-17, 2 Corinthians 4:1-2; 6:3-10, Colossians 1:9-10
                  <br />
                  <br />
                  To raise mature disciples who will be able to teach others the
                  ways of God, who will not be deceived by fables and false
                  doctrines. Ephesians 4:13-14, Hebrews 5:11-14, Colossians
                  2:6-8, Matthew 28:19-20
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-[34px] items-start justify-start md:mt-0 mt-[75px] w-auto">
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-cyan-300 h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsThreePage;
