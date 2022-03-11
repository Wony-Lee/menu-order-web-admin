import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux';


const BackGround = styled.div`
    display:${props => props.modalState ? 'block' : 'none'};
    width:1920px;
    height:1920px;
    position:absolute;

    background:rgba(0,0,0, 0.5);
    & div {
        border:1px solid red;
        background-color:white;
    }
`;

const DefaultModal = () => {
    const { modalState } = useSelector(state => state.modal)
    return (
        <BackGround modalState={modalState}>
            <div>

            </div>
        </BackGround>
    )
}

export default DefaultModal
