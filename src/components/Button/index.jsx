import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded", square: "rounded-none" };
const variants = {
  outline: {
    cyan_300: "border-[3px] border-cyan-300 border-solid text-gray-100",
  },
  fill: {
    cyan_900: "bg-cyan-900 text-white-A700",
    cyan_300: "bg-cyan-300 text-gray-100",
  },
};
const sizes = { xs: "p-2.5", sm: "px-2.5 py-[13px]", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "sm",
  variant = "fill",
  color = "cyan_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["cyan_300", "cyan_900"]),
};

export { Button };
