import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux';
import { DEFAULT_MODAL_OFF } from '../../reducer/modal';
import useInputs from '../../hooks/useInputs';
import axios from 'axios';
import { BACK_URL } from '../../config/config';
import { stringify } from 'querystring';


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
        flex-direction: column;
        align-items: center;
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
    // const [inputValues, handleTextChange, setInputValues] = useInputs("")
    const { modalState } = useSelector(state => state.modal)
    const { categoryTab } = useSelector(state => state.category)
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
        itemName: "",
        detail: "",
        price: 0,
        quantity: 0
    })
    const { id, itemName, images, detail, price, quantity } = inputValue
    const imageInput = useRef();

    const handleImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current])

    const handleChangeImages = useCallback((e) => {
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append("images", new Blob([f], { type: "multipart/form-data" }))
        })
        for (let key of imageFormData.keys()) {
            console.log('images form Data Key', key);
        }
        for (let value of imageFormData.values()) {
            console.log('images form Data Values', value);
        }
    }, [])

    const handleModalClose = useCallback(() => {
        dispatch({
            type: DEFAULT_MODAL_OFF
        })
    }, [])

    const handleTextChange = useCallback((e) => {
        const { name, value } = e.target
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }, [inputValue])

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        console.log('category', categoryTab)
        try {
            const formData = new FormData();
            const data = {
                category: categoryTab,
                itemName: itemName,
                detail: detail,
                price: price,
                quantity: quantity
            }

            // formData.append("category", categoryTab)
            // formData.append("itemName", itemName)
            // formData.append("detail", detail)
            // formData.append("price", price)
            // formData.append("quantity", quantity)
            formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }))

            for (let key of formData.keys()) {
                console.log('form Data Key => ', key)
            }
            for (let values of formData.values()) {
                console.log('form Data Values =>', values)
            }
            const url = "/v1/item"
            const response = await axios.post(`${BACK_URL}${url}`, formData)
            console.log(response)
        } catch (e) {
            console.error(e, 'API CALL FAILURE')
        }
    }, [inputValue, categoryTab])

    const handleReset = useCallback((e) => {
        // setInputValue({
        //     itemName: "",
        //     images: [],
        //     detail: "",
        //     price: 0,
        //     quantity: 0
        // })
    }, [])

    useEffect(() => {
    }, [])
    return (
        <BackGround
            modalState={modalState}
        >
            <form
                className="modalForm"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div>
                    <button
                        onClick={handleModalClose}
                        type="button"
                    >
                        닫기
                    </button>
                </div>
                <div>
                    <>카테고리 : {categoryTab}</>
                </div>
                <div>
                    <div>imageBox</div>
                    <button
                        type="button"
                        onClick={handleImageUpload}
                    >
                        파일선택
                    </button>
                    <input
                        type="file"
                        multiple
                        hidden
                        name="images"
                        accept="image/jpeg, image/jpg, image/png"
                        id="menuImages"
                        ref={imageInput}
                        onChange={handleChangeImages}
                    />
                </div>
                <div>
                    <label htmlFor="itemName">상품명</label>
                    <input
                        placeholder="상품명"
                        name="itemName"
                        id="itemName"
                        type="text"
                        value={itemName}
                        onChange={handleTextChange}
                    />
                </div>
                <div>
                    <label htmlFor="detail">설명</label>
                    <input
                        placeholder="설명"
                        name="detail"
                        id="detail"
                        type="text"
                        value={detail}
                        onChange={handleTextChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input
                        placeholder="가격"
                        name="price"
                        id="price"
                        type="number"
                        value={price}
                        onChange={handleTextChange}
                    />
                </div>
                <div>
                    <label htmlFor="quantity">재고량</label>
                    <input
                        placeholder="재고량"
                        name="quantity"
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={handleTextChange}
                    />
                </div>
                <div>
                    <button type="submit">등록</button>
                    <button
                        type="button"
                        onClick={handleReset}
                    >
                        취소
                    </button>
                </div>
            </form>
        </BackGround>
    )
}

export default DefaultModal
