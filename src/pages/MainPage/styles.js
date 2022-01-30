import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #9b9b9b;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
  border-bottom: 3px solid blue;
  background-color: #9595ff;
  color: black;

  .logo {
    font-size: 2rem;
  }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 480px;
    margin: 2rem auto;
    padding: 1rem 2rem;

    font-weight: bold;
    background-color: #DDD;
`

export const Repositories = styled.div`
  background-color: #FFF;
  max-width: 480px;
  margin: 1rem auto;

  .title {
      margin: .5rem 0;
  }

  ul {
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;

      border-bottom: 2px solid #D5D5D5;
      list-style: none;
    }

    li:last-child {
      border-bottom: none;
    }
  }
`

export const NewRepositores = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 480px;
  margin: 2rem auto;
  padding: 1rem 2rem;

  font-weight: bold;
  background-color: #DDD;
`

export const Label = styled.label`
    display: block;
`

export const Input = styled.input`
    display: block;
`

export const Button = styled.button`
  display: block;
  font-weight: bold;
`;

export const Info = styled.div`
  .owner {
    font-size: .8rem;
    font-weight: bold;
  }

  .name {
    font-size: 1.2rem;
  }
`