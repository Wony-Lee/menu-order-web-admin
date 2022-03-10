import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { TableItemLayout } from './styled'
import { useSelector, useDispatch } from 'react-redux';
import { MENU_UPDATE_ON } from '../../reducer/adminPost';
import { SET_ITEM_TAB } from '../../reducer/category';


const TableItem = ({ item }) => {
    const [inputValue, setInputValue] = useState({
        id: item.id,
        itemName: item.itemName,
        images: item.images,
        detail: item.detail,
        price: item.price,
        quantity: item.quantity
        // id: '',
        // itemName: '',
        // images: '',
        // detail: '',
        // price: '',
        // quantity: '',
    })
    const { id, itemName, images, detail, price, quantity } = inputValue;
    const { updateState } = useSelector(state => state.adminPost)
    const { itemTab } = useSelector(state => state.category)
    const dispatch = useDispatch()
    const handleUpdate = useCallback(() => {
        dispatch({
            type: SET_ITEM_TAB,
            payload: item.id
        })
        dispatch({
            type: MENU_UPDATE_ON,
        })
    }, [])
    const handleTextChange = useCallback((e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }, [inputValue])

    useEffect(() => {

    }, [])



    return (
        <TableItemLayout width={3}>
            {
                item.images.map(img =>
                    <img
                        key={img.id}
                        src={img.bytes}
                        alt={img.name}
                        name="itemImage"
                    />
                )
            }
            {updateState && itemTab === inputValue.id ?
                <>
                    <p>
                        메뉴명 : <input value={itemName} name="itemName" onChange={handleTextChange} />
                    </p>
                    <p>
                        설명 :  <input value={detail} name="detail" onChange={handleTextChange} />
                    </p>
                    <p>
                        가격 : <input value={price} name="price" onChange={handleTextChange} />
                    </p>
                    <p>
                        재고량 : <input value={quantity} name="quantity" onChange={handleTextChange} />
                    </p>
                </>
                :
                <>
                    <p>
                        메뉴명 : {item.itemName}
                    </p>
                    <p>
                        설명 : {item.detail}
                    </p>
                    <p>
                        가격 : {item.price}
                    </p>
                    <p>
                        재고량 :  {item.quantity}
                    </p>
                </>
            }

            <div>
                <button onClick={handleUpdate}>수정</button>
            </div>
        </TableItemLayout>
    )
}

export default TableItem
