import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ImageBox, Input, InputBox, TableItemLayout } from './styled'
import { useSelector, useDispatch } from 'react-redux';
import { MENU_UPDATE_OFF, MENU_UPDATE_ON } from '../../reducer/adminPost';
import { SET_ITEM_TAB } from '../../reducer/category';
import axios from 'axios';
import { BACK_URL } from '../../config/config';


const TableItem = ({ item }) => {
    const [inputValue, setInputValue] = useState({
        id: item.id,
        itemName: item.itemName,
        images: item.images,
        detail: item.detail,
        price: item.price,
        quantity: item.quantity
    })
    const { id, itemName, images, detail, price, quantity } = inputValue;
    const { updateState } = useSelector(state => state.adminPost)
    const { itemTab } = useSelector(state => state.category)
    const dispatch = useDispatch()
    const handleUpdate = useCallback(() => {
        console.log(`what don't start?`)
        dispatch({
            type: SET_ITEM_TAB,
            payload: item.id
        })
        dispatch({
            type: MENU_UPDATE_ON,
        })
    }, [updateState, itemTab])
    const handleTextChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }, [inputValue])
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("id", id)
            formData.append("itemName", itemName)
            formData.append("detail", detail)
            formData.append("price", price)
            formData.append("quantity", quantity)
            console.log('formData =>', formData)
            formData.forEach(item => console.log('item =>   ', item))
            dispatch({
                type: MENU_UPDATE_OFF,
            })
            const menuList = {
                category: "김밥",
                id: id,
                itemName: itemName,
                detail: detail,
                images: images,
                price: price,
                quantity: quantity,
            };
            const url = '/v1/item-update'
            const response = await axios.post(`${BACK_URL}${url}`, menuList)
            console.log(response);
        }
        catch (e) {
            console.error(e, "API CALL FAILURE")
        }

    }, [])
    const sample = useCallback(async (e) => {

        // const url = '/v1/item-update'
        // const response = await axios.post(`http://221.139.81.38:5000${url}`, inputValue)
        // console.log(response);
        e.preventDefault()



    }, [updateState])
    useEffect(() => {

    }, [])

    return (
        <TableItemLayout
            width={3}
            onSubmit={sample}
            encType="multipart/form-data">
            {
                item.images.map(img =>
                    <ImageBox key={img.id}>
                        <img
                            src={img.bytes}
                            alt={img.name}
                            name="itemImage"
                        />
                    </ImageBox>
                )
            }
            {updateState && itemTab === inputValue.id ?
                <>
                    <InputBox>
                        <p>메뉴명</p> :
                        <Input
                            value={itemName}
                            type="text"
                            name="itemName"
                            onChange={handleTextChange}
                        />
                    </InputBox>
                    <InputBox>
                        <p>설명</p> :
                        <Input
                            value={detail}
                            type="text"
                            name="detail"
                            onChange={handleTextChange}
                        />
                    </InputBox>
                    <InputBox>
                        <p>가격</p> :
                        <Input
                            value={price}
                            type="number"
                            name="price"
                            onChange={handleTextChange}
                        />
                    </InputBox>
                    <InputBox>
                        <p>재고량</p> :
                        <Input
                            value={quantity}
                            type="number"
                            name="quantity"
                            onChange={handleTextChange}
                        />
                    </InputBox>
                </>
                :
                <>
                    <InputBox>
                        <p>메뉴명</p> : {itemName}
                    </InputBox>
                    <InputBox>
                        <p>설명</p> : {detail}
                    </InputBox>
                    <InputBox>
                        <p>가격</p> : {price}
                    </InputBox>
                    <InputBox>
                        <p>재고량</p> : {quantity}
                    </InputBox>
                </>
            }

            <div>
                {
                    updateState && itemTab === inputValue.id ?
                        <button onClick={handleSubmit} type="submit">확인</button>
                        :
                        <button onClick={handleUpdate}>수정</button>

                }
            </div>
        </TableItemLayout>
    )
}

export default TableItem
