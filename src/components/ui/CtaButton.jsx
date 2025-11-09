import React from "react";

const CtaButton = ({ text, icon: Icon, screen, color, rounded, id }) => {
  return (
    <button
      className={`bg-${color} p-5 rounded-${rounded} hover:bg-white hover:text-black border-[1px] hover:border-black whitespace-nowrap ${
        screen === "lg" && "show-lg"
      } text-white`}
      onClick={() => document.getElementById(`${id}`).showModal()}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="text-2xl" />}
        <span>{text}</span>
      </div>
    </button>
  );
};

export default CtaButton;
