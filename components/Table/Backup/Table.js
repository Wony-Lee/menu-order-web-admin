import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Router from 'next/router'
import TableItem from './TableItem'
import { TableWrap, TableLayout } from './styled';

import Button from '../../Element/Button';
import Input from '../../Element/Input'
import TableTd from './TableTd'
import { EDIT_STATE_OFF, EDIT_STATE_ON } from '../../../reducer/menu'
import { BACK_URL } from '../../../config/config'


const Table = () => {
    const { editState } = useSelector(state => state.menu)
    const [items, setItems] = useState([])
    const { menuItem } = useSelector(state => state.menu)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const router = Router;

    const handleAddData = useCallback(async () => {
        const addItem = {
            id: menuItem.length += 1,
            imagePath: "5" + menuItem.length,
            name: '',
            price: '',
            desc: '',
        }
        setItems(prev => prev.concat(addItem))
    }, [menuItem])
    const handleCheck = useCallback(() => {
        // setEdit(true)
    }, [menuItem])
    const handleEdit = useCallback(async () => {
        dispatch({
            type: EDIT_STATE_ON
        })
    }, [editState])
    const handleSuccess = useCallback(async () => {
        dispatch({
            type: EDIT_STATE_OFF,
        })
    }, [editState])


    const handleLoadData = useCallback(async () => {
        try {
            const pages = { page: 0, pageSize: 5 }
            const response = await axios.get(`${BACK_URL}/v1/item?page=${pages.page}&pageSize=${pages.pageSize}`)
            // console.log('response Data => ', response)
            // setData(response)
            console.log('response Data => ', data)
        } catch (e) {
            console.error(e)
        }
    }, [])
    // const handleUpdate = useCallback(() => {

    // }, [])
    useEffect(() => {
        handleLoadData()
        setItems(menuItem)
        console.log('items => ', items)
    }, [])

    return (
        <TableLayout>
            <TableWrap width={100 / 4}>
                <div className="col">
                    <form className="row-head">
                        <div>
                            <Button
                                width={120}
                                bg={"primary"}
                                onClick={handleEdit}
                                type={"button"}
                            >
                                수정하기
                            </Button>
                        </div>
                        <div>
                            <Button
                                width={120}
                                bg={"error"}
                                onClick={handleAddData}
                                type={"button"}
                            >
                                추가하기
                            </Button>
                        </div>
                        <div>
                            <Button
                                width={120}
                                bg={"primary"}
                                onClick={handleSuccess}
                                type={"submit"}
                            >
                                저장하기
                            </Button>
                        </div>
                    </form>
                    <div className="row">
                        <div className="td">이미지</div>
                        <div className="td">메뉴명</div>
                        <div className="td">가격</div>
                        <div className="td">설명</div>
                    </div>
                    {
                        items.map(item =>
                            <TableTd
                                key={item.id}
                                className={"row"}
                                item={item}
                            />
                        )
                    }
                </div>
            </TableWrap>
        </TableLayout >
    )
}

export default React.memo(Table)
