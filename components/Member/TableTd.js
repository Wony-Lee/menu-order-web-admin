import React from 'react'
import Input from '../Element/Input'

const TableTd = ({ param, edit }) => {
    return (
        <div className="td">
            {
                edit ? <Input value={param} /> : param
            }
        </div>
    )
}

export default TableTd
