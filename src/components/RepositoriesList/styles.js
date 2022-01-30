import styled from "styled-components";

export const Repositories = styled.div`
  background-color: #DDD;
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

export const Label = styled.label`
    display: block;
`

export const Input = styled.input`
    display: block;
`
