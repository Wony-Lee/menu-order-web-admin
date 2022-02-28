import React from 'react'

const TableTd = ({ param, edit }) => {
    return (
        <div className="td">
            {
                edit ? <input value={param} /> : param
            }
        </div>
    )
}

export default TableTd
