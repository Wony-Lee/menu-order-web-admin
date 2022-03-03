import React from 'react'
import { useSelector } from 'react-redux';
import TableItem from './TableItem';

const AdminTable = ({ data, items }) => {
    const { categoryTab } = useSelector(state => state.category)

    return (
        <div>
            {
                categoryTab === items.id &&
                <div>
                    {
                        items.items.map(item => <TableItem key={item.id} item={item}>{item.itemName}</TableItem>)
                    }
                </div>
            }

            {/* {data.map(menuList =>
            (<div key={menuList.id}>
                {menuList.items.map(menuItem => (<p key={menuItem.id}>{menuItem.itemName}</p>))}
            </div>)
            )} */}
        </div>
    )
}

export default AdminTable
