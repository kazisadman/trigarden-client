import { Link } from "react-router-dom";

const AddToCartBtn = ({ text }) => {
  return (
    <div className="bg-primary text-white p-2 rounded-lg text-center z-20 cursor-pointer w-full">
      <Link to={text === "View Details" ? "/product/plant" : ""}>{text}</Link>
    </div>
  );
};

export default AddToCartBtn;
