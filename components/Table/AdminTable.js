import React from 'react'
import { useSelector } from 'react-redux';
import TableItem from './TableItem';

const AdminTable = ({ data, items }) => {
    const { categoryTab } = useSelector(state => state.category)

    return (
        <div >
            {
                categoryTab === items.id &&
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        items.items.map(item => <TableItem key={item.id} item={item} />)
                    }
                </div>
            }
        </div>
    )
}

export default AdminTable
