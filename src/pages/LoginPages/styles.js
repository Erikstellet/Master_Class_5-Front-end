import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    min-height: 100vh;
    background-color: #9b9b9b;
    color: black;
`

export const FormCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem;
    border-radius: .4rem;

    background-color: #FFF;

    .title {
        margin: .5rem 0;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: .5rem;
`

export const Label = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
`

export const Input = styled.input`
    display: block;
`

export const Button = styled.button`
    display: block;
`