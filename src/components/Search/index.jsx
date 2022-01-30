import React from "react";
import { useState } from "react";

import { Label, Input, SearchWrapper, Button } from "./styles";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  function handleClear() {
    setQuery("");
    onSearch();
  }

  return (
    <SearchWrapper>
      <Label htmlFor="query">Procurar:</Label>
      <Input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button onClick={handleClear}> Limpar</Button>
      <Button onClick={() => onSearch(query)}>Procurar</Button>
    </SearchWrapper>
  );
};

export default Search;
