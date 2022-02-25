import React from 'react'
import { TableItemLayout } from './styled'

const TableItem = ({ name }) => {
    return (
        <TableItemLayout width={100}>
            {name}
        </TableItemLayout>
    )
}

export default TableItem
