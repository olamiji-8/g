import React from "react";

import { Img, Line, Text } from "components";

const SermonsVariant1Columnarrowleft = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[78px] items-center justify-start w-auto sm:w-full">
          <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
            {!!props?.datetext ? (
              <Text
                className="text-base text-white-A700 tracking-[-0.80px] w-auto"
                size="txtInterLight16"
              >
                {props?.datetext}
              </Text>
            ) : null}
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-1.40px] w-auto"
              size="txtInterMedium28"
            >
              {props?.titletext}
            </Text>
          </div>
          {!!props?.arrowimage ? (
            <Img
              className="h-[50px] w-[50px]"
              alt="arrowleft"
              src={props?.arrowimage}
            />
          ) : null}
        </div>
        <Line className="bg-cyan-300 h-0.5 w-full" />
      </div>
    </>
  );
};

SermonsVariant1Columnarrowleft.defaultProps = {
  titletext: "Thoroughly Furnished",
};

export default SermonsVariant1Columnarrowleft;
