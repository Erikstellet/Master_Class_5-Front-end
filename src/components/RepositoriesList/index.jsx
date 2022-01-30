import React, { useState } from "react";

import {
  Button,
  Repositories,
  Info,
  Label,
  Input,
  NewRepositores,
} from "./styles";

const RepositoriesList = ({ repositories, onDeleteRepo, onNewRepo }) => {
  const [newRepo, setNewRepo] = useState('');

  return (
    <>
      <Repositories>
        <ul>
          {repositories.map((repo, i) => (
            <li key={repo.name}>
              <Info>
                <div className="owner">{repo.name}</div>
                <div className="name">{repo.repo}</div>
              </Info>
              <Button onClick={() => onDeleteRepo(null)}>Remover</Button>
            </li>
          ))}
        </ul>
      </Repositories>

      <NewRepositores>
        <Label htmlFor="query">Novo Repo:</Label>
        <Input
          type="url"
          name="new-repo"
          onChange={(e) => setNewRepo(e.target.value)}
          onClick={() => onNewRepo(newRepo)}
        />

        <Button onClick={() => onNewRepo(newRepo)}>Adicionar</Button>
      </NewRepositores>
    </>
  );
};

export default RepositoriesList;
