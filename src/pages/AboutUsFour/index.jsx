import React from "react";

import { Button, Img, Text } from "components";

const AboutUsFourPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1117px] items-end justify-center mx-auto p-[46px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_aboutusfour.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[101px] items-center justify-start my-[29px] w-[96%] md:w-full">
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
                MISSION STATEMENT
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.96px]"
                size="txtLoraMedium32"
              >
                <>
                  {" "}
                  We would give ourselves daily to the ministry of the word in
                  study and meditation for our complete furnishing, to know
                  God’s patterns for our living as Christians and we will live a
                  life of complete obedience to whatsoever God commands us to
                  do. Joshua 1:8, James 1:25, Acts 6:4, Genesis 26:3-5,
                  Deuteronomy 28:1-14, 2 Timothy 2:15; 3:16-17, 1 Timothy
                  4:13-16, Romans 6:16-20, John 15:14-15, 1 Peter 2:2. <br />
                  <br />
                  We would as laborers in God’s vineyard be committed to
                  evangelism; in preaching the gospel and doing God’s works.
                  John 15:14-16, 2 Corinthians 5:17-19, Matthew 5:14-16;
                  28:19-20, Mark 16:15-20, Acts 10:38, 1 Peter 1:12, 2 Timothy
                  4:2.
                  <br />
                  <br />
                  Holiness will be our lifestyle in thoughts, word and actions.
                  2 Timothy 2:19-21, 1 Peter 1;14-16, Ephesians 1:4, Philippians
                  4:8, 2 Peter 3:13-14, 1 Timothy 4;12, 1 Thessalonians 4:7,
                  Romans 6:16-20
                  <br />
                  <br />
                  We would live a consistent prayer and fasting life to be
                  spiritually-disciplined, so we would become that man that God
                  wants us to be on the earth. Genesis 1:26-28, 1 Thessalonians
                  5:17, Acts 2:42; 6:4, James 5:16-18, Colossians 4:2&12, 1
                  Corinthians 9:24-27, Romans 12:12, Luke 18:1.
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-[34px] items-start justify-start md:mt-0 mt-[265px] w-auto">
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
              <div className="bg-cyan-300 h-5 rounded-[50%] w-5"></div>
              <div className="bg-gray-400_cc h-5 rounded-[50%] w-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsFourPage;
