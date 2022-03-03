import React from 'react'
import { TableItemLayout } from './styled'

const TableItem = ({ item }) => {
    console.log('item', item)
    return (
        <TableItemLayout width={3}>
            {
                item.images.map(img => <img
                    key={img.id}
                    src={img.bytes}
                    alt={img.name}
                />)
            }
            <p>메뉴명 : {item.itemName}</p>
            <p>설명 :  {item.detail}</p>
            <p>가격 : {item.price}</p>
            <p>재고량 : {item.quantity}</p>
            <div>
                <button>수정</button>
            </div>
        </TableItemLayout>
    )
}

export default TableItem
