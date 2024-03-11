import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ isPrimary, size, font, label, ...props }) => {
  const mode = isPrimary ? "primary" : "secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `${size}`, `${font}`, mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * primary = true,  secondary = false
   */
  isPrimary: PropTypes.bool,
  /**
   * 색상 종류
   */
  // backgroundColor: PropTypes.string,
  /**
   * 사이즈 종류
   */
  size: PropTypes.oneOf(["smallCircle", "mediumCircle", "largeCircle"]),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   *폰트?
   */
  font: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  // backgroundColor: null,
  isPrimary: true,
  size: "mediumCircle",
  font: "medium",
  label: "click",
  onClick: undefined,
};
