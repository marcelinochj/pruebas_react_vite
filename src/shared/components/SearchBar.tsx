import { useEffect, useState } from "react";

interface Props {
  placeholer?: string;
  onQuery : (query: string) => void;
}
export const SearchBar = ({placeholer = 'Buscar ', onQuery} : Props) => {

  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);
    return clearTimeout(timeoutId);
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter')
      handleSearch();
  }

  return (
    <>
        <div className="search-container">
            <input type="text" placeholder={placeholer} 
            value={query}
            onChange={(event) => setQuery(event.target.value) }
            onKeyDown={handleKeyDown}

            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    </>
  )
}
