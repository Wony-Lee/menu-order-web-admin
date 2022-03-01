import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Router from 'next/router'
import TableItem from './TableItem'
import { TableWrap, TableLayout } from './styled';

import { menuItem } from '../../__mocks__/menudb.json'
import Button from '../Element/Button';
import Input from '../Element/Input'
import TableTd from './TableTd'


const Table = () => {
    const { menuText } = useSelector(state => state.menu)
    const [items, setItems] = useState(menuItem)
    const [edit, setEdit] = useState(false)

    const router = Router;
    const handleAddData = useCallback(async () => {
        const addItem = {}
        setItems(prev => prev.concat(addItem))
    }, [])

    const handleEdit = useCallback(async () => {
        setEdit(true)
        console.log(items)
        // router.push('/menu/edit')
    }, [edit])

    const handleSuccess = useCallback(async () => {
        setEdit(false)
    }, [edit])

    const handleLoadData = useCallback(async () => {
        // try {
        //     const response = await axios.get(`http://localhost:4444/menu/list`)
        //     console.log('response Data => ', response)
        // } catch (e) {
        //     console.error(e)
        // }
    }, [])
    // const handleUpdate = useCallback(() => {

    // }, [])
    useEffect(() => {
        handleLoadData()
    }, [])

    return (
        <TableLayout>
            <TableWrap width={100 / items.length}>
                <div className="col">
                    <div className="row-head">
                        <div>
                            <Button
                                width={120}
                                bg={"primary"}
                                onClick={edit ? handleSuccess : handleEdit}>
                                {
                                    edit ? '수정완료' : '수정하기'
                                }
                            </Button>
                        </div>
                        <div>
                            <Button
                                width={120}
                                bg={"error"}
                            >
                                저장하기
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="td">이미지</div>
                        <div className="td">메뉴명</div>
                        <div className="td">가격</div>
                        <div className="td">설명</div>
                        <div>{menuText}</div>
                    </div>
                    {
                        items.map(item =>
                            <div key={item.id} className="row">
                                <TableTd  >
                                    {
                                        edit ? <Input value={item.imagePath} /> : item.imagePath
                                    }
                                </TableTd>
                                <TableTd>
                                    {
                                        edit ? <Input value={item.name} /> : item.name
                                    }
                                </TableTd>
                                <TableTd>
                                    {
                                        edit ? <Input value={item.price} /> : item.price
                                    }
                                </TableTd>
                                <TableTd>
                                    {
                                        edit ? <Input value={item.desc} /> : item.desc
                                    }
                                </TableTd>
                            </div>
                        )
                    }
                </div>
            </TableWrap>
        </TableLayout >
    )
}

export default React.memo(Table)
