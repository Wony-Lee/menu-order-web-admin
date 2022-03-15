import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux';
import { DEFAULT_MODAL_OFF } from '../../reducer/modal';


const BackGround = styled.div`
    display:${props => props.modalState ? 'flex' : 'none'};
    justify-content: center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    background:rgba(0,0,0, 0.5);
    & .modalForm {
        display:flex;
        justify-content: center;
        width:500px;
        height:250px;
        border:1px solid red;
        background-color:white;

        position:absolute;
        top:50%;
        transform:translate(0%, -70%);
    }
`;

const DefaultModal = () => {
    const { modalState } = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const handleModalClose = useCallback(() => {
        dispatch({
            type: DEFAULT_MODAL_OFF
        })
    }, [])
    return (
        <BackGround
            modalState={modalState}
        >
            <button
                onClick={handleModalClose}
                type="button"
            >
                닫기
            </button>
            <form className="modalForm">
                <input placeholder="상품명" />
            </form>
        </BackGround>
    )
}

export default DefaultModal
