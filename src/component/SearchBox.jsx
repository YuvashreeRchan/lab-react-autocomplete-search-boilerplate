import { useState, useEffect } from 'react';
import countryData from 'C:/Users/yuva/Documents/ReactKalvium/lab-react-autocomplete-search-boilerplate/resources/countryData.json';

const SearchBox = () => {
const [query, setQuery] = useState('');
const [suggestions, setSuggestions] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(true);

useEffect(() => {
    if (query) {
    const filteredSuggestions = countryData.filter(country =>
        country.name.toLowerCase().startsWith(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    } else {
    setSuggestions([]);
    }
}, [query]);

const handleChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
};

const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
        setShowSuggestions(false);
    }
};

return (
    <div>
    <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for a country"
    />
    <button>Search</button>
    {showSuggestions && suggestions.length > 0 && (
        <ul>
            {suggestions.map((country, index) => (
                <li key={index}>{country.name}</li>
            ))}
        </ul>
    )}
    </div>
    );
};

export default SearchBox;