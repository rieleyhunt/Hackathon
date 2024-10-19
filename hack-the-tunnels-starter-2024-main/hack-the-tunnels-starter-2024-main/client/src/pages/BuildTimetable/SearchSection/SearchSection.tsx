import "./SearchSection.style.scss";

interface SearchSectionProps {
  onSearch: () => {
    
  };
}
function SearchSection({ onSearch }: SearchSectionProps) {
  return (
    <div className="SearchSection">
      <form action="/scheduledEvents" method="POST">  
      <input type="search" name="course" placeholder="course search"></input>
      <input type="submit" value="Search" />
      {/*<button onClick={() => onSearch()}>Search</button>*/}
      </form>
    </div>
  );
}

export default SearchSection;
