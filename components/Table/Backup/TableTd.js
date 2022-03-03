import React, { useCallback, useState } from 'react'
import Input from '../Element/Input'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Element/Button';

const TableTd = ({ item, className }) => {

    const { id, imagePath, name, price, desc } = item
    const { editState } = useSelector(state => state.menu)
    const dispatch = useDispatch()

    return (
        <div className={className}>
            <div className="td">
                {
                    editState ? <Input value={imagePath} id={id + name} /> : imagePath
                }
            </div>
            <div className="td">
                {
                    editState ? <Input value={name} id={name + id} /> : name
                }
            </div >
            <div className="td">
                {
                    editState ? <Input value={price} id={name + price} /> : price
                }
            </div >
            <div className="td">
                {
                    editState ? <Input value={desc} id={name + '/' + id} /> : desc
                }
            </div>
        </div >
    )
}

export default React.memo(TableTd)
