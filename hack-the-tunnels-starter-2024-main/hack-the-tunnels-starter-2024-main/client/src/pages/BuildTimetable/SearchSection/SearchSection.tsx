import "./SearchSection.style.scss";

interface SearchSectionProps {
  onSearch: () => void;
}
function SearchSection({ onSearch }: SearchSectionProps) {
  return (
    <div className="SearchSection">
      <input type="search" id="csearch" name="coursesearch"></input>
      <button onClick={() => onSearch()}>Search</button>
    </div>
  );
}

export default SearchSection;
