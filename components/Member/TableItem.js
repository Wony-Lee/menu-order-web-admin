import React from 'react'
import { TableItemLayout } from './styled'

const TableItem = ({ children, width }) => {

    return (
        <TableItemLayout width={width}>
            {children}
        </TableItemLayout>
    )
}

export default React.memo(TableItem)
