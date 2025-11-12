import { Link } from "react-router-dom";

const AddToCartBtn = ({ text, category, product }) => {
  const linkPath = category && `/product/${category}/${product}`;

  return (
    <>
      <Link to={linkPath} className="w-full">
        <div className="bg-primary text-white p-2 rounded-lg text-center z-20 cursor-pointer w-full">
          {text}
        </div>
      </Link>
    </>
  );
};

export default AddToCartBtn;
