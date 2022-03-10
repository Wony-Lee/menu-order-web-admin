import React, { useCallback } from 'react'
import Image from 'next/image'
import { TableItemLayout } from './styled'
import { useSelector, useDispatch } from 'react-redux';
import { MENU_UPDATE_ON } from '../../reducer/adminPost';
import { SET_ITEM_TAB } from '../../reducer/category';


const TableItem = ({ item }) => {
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
    }, [])
    return (
        <TableItemLayout width={3}>
            {
                item.images.map(img =>
                    <img
                        key={img.id}
                        src={img.bytes}
                        alt={img.name}
                    />
                )
            }
            <p>
                메뉴명 :
                {updateState ? itemTab === item.id && <input value={item.itemName} onChange={handleTextChange} /> : item.itemName}
            </p>
            <p>
                설명 :  {updateState ? itemTab === item.id && <input value={item.detail} onChange={handleTextChange} /> : item.detail}
            </p>
            <p>
                가격 : {updateState ? itemTab === item.id && <input value={item.price} onChange={handleTextChange} /> : item.price}
            </p>
            <p>
                재고량 : {updateState ? itemTab === item.id && <input value={item.quantity} onChange={handleTextChange} /> : item.quantity}
            </p>
            <div>
                <button onClick={handleUpdate}>수정</button>
            </div>
        </TableItemLayout>
    )
}

export default TableItem
