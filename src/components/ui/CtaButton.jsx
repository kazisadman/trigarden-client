import React from "react";

const CtaButton = ({ text, icon: Icon, screen }) => {
  return (
    <button
      className={`lg:flex items-center gap-2 bg-complementary p-3 rounded-lg hover:bg-white hover:text-black whitespace-nowrap ${
        screen === "lg" && "show-lg"
      } text-white`}
    >
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  );
};

export default CtaButton;
