import styled from '@emotion/styled'
// import useInput from '../../hooks/useInput'
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux'
import { UPDATE_MENU_ITEM } from '../../reducer/menu';

const InputStyled = styled.input`
    padding:10px;
    border:1px solid #ddd;
    border-radius:8px;
    background:white;
`;

const Input = ({ value, id }) => {
    // const [inputText, handleUpdate, setInputText] = useInput(value)
    const [inputValue, setInputValue] = useState(value)
    const dispatch = useDispatch()

    const handleUpdate = useCallback((e) => {
        setInputValue(e.target.value)
        dispatch({
            type: UPDATE_MENU_ITEM,
            payload: inputValue
        })
        console.log(inputValue)

    }, [inputValue])
    return (
        <InputStyled value={inputValue} id={id} onChange={handleUpdate} />
    )
}

export default Input;
