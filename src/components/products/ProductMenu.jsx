
const ProductMenu = ({menuList}) => {
    return (
      <>
        {menuList.map((link, index) => {
          return (
            <li
              className="border-2 border-primary p-2 rounded-full hover:bg-primary hover:text-white cursor-pointer"
              key={index}
            >
              {link}
            </li>
          );
        })}
      </>
    );
};

export default ProductMenu;