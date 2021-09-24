import { SearchBoxProps } from "../../types";
import "./styles.css";

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={(e) => handleChange(e.target.value)}
  />
);

export default SearchBox;
