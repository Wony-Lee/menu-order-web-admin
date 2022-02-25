import React from 'react'
import TableItem from './TableItem'
import { TableLayout, TableRow } from './styled';

const Table = () => {
    return (
        <TableLayout>
            <TableRow>
                <TableItem name="이미지" />
                <TableItem name="메뉴명" />
                <TableItem name="가격" />
                <TableItem name="설명" />
            </TableRow>

        </TableLayout>
    )
}

export default Table
