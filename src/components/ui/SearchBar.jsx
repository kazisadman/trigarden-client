import { FaSearch } from "react-icons/fa";

const SearchBar = ({ text, show,borderColor }) => {
  return (
    <div
      className={`bg-transparent border-2 border-${borderColor} p-3 rounded-lg ${
        show && `show-${show}`
      }`}
    >
      <div className="flex justify-between items-center gap-2">
        <input
          className="bg-transparent focus:outline-none p-1"
          placeholder={text}
          type="text"
        />
        <FaSearch className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
