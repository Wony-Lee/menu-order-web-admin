import styled from '@emotion/styled'

const InputStyled = styled.input`
    
    padding:10px;
    border:1px solid #ddd;
    border-radius:8px;
    background:white;
`;

const Input = ({ value }) => {
    console.log('value =>', value)
    return (
        <InputStyled value={value} />
    )
}

export default Input;
