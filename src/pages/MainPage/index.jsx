import React, { useState } from "react";

import RepositoriesList from "../../components/RepositoriesList/index";
import Search from "../../components/Search/index";
import { Wrapper, NavBar, Button } from "./styles";

const repositories = [
  {
    name: "Facebook",
    repo: "React",
  },
  {
    name: "Google",
    repo: "Angular",
  },
];

const MainPage = () => {

  const [ newRepo, setNewRepo ] = useState('');
  
  const handleLogout = () => {
    console.log("logout");
  };
  
  const handleSearch = (query) => {
    console.log("query", query);
  }

  const handleClear = () => {
    console.log("clear");
  }

  const handleDeleteRepo = (repository) => {
    console.log('repo has been deleted', repository);
  }

  const handleNewRepo = (url) => {
    console.log('new Repo', url);
  }

  return (
    <Wrapper>
      <NavBar>
        <h1 className="logo">SisRepo</h1>
        <Button onClick={handleLogout}>Sair</Button>
      </NavBar>

      <Search onSearch={handleSearch} onClear={handleClear}/>

      <RepositoriesList 
        repositories={repositories} 
        onDeleteRepo={handleDeleteRepo}
        onNewRepo={handleNewRepo}
      />
    </Wrapper>
  );
};

export default MainPage;
