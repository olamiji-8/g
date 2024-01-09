import React from "react";

const sizeClasses = {
  txtLoraMedium24: "font-lora font-medium",
  txtInterSemiBold128: "font-inter font-semibold",
  txtLoraMedium36: "font-lora font-medium",
  txtLoraRegular20WhiteA700: "font-lora font-normal",
  txtLoraRegular36: "font-lora font-normal",
  txtLoraMedium32: "font-lora font-medium",
  txtLoraRegular20: "font-lora font-normal",
  txtInterMedium28: "font-inter font-medium",
  txtLoraSemiBold40: "font-lora font-semibold",
  txtLoraMedium40: "font-lora font-medium",
  txtInterSemiBold28: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
  txtInterLight16: "font-inter font-light",
  txtLoraMedium36Gray800: "font-lora font-medium",
  txtInterRegular24WhiteA700: "font-inter font-normal",
  txtLoraRegular20RedA700: "font-lora font-normal",
  txtInterMedium96: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterSemiBold96: "font-inter font-semibold",
  txtInterLight20: "font-inter font-light",
  txtInterExtraBold32: "font-extrabold font-inter",
  txtInterRegular24: "font-inter font-normal italic",
  txtLoraMedium32Gray700: "font-lora font-medium",
  txtInterMedium128: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
