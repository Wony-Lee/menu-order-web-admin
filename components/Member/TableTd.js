import React, { useCallback, useState } from 'react'
import Input from '../Element/Input'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Element/Button';

const TableTd = ({ item, className }) => {

    const { imagePath, name, price, desc } = item
    const { editState } = useSelector(state => state.menu)
    const dispatch = useDispatch()

    return (
        <div className={className}>
            <div className="td">
                {
                    editState ? <Input value={imagePath} /> : imagePath
                }
            </div>
            <div className="td">
                {
                    editState ? <Input value={name} /> : name
                }
            </div >
            <div className="td">
                {
                    editState ? <Input value={price} /> : price
                }
            </div >
            <div className="td">
                {
                    editState ? <Input value={desc} /> : desc
                }
            </div>
        </div >
    )
}

export default React.memo(TableTd)
