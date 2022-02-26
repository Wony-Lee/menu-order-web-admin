import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import TableItem from './TableItem'
import { TableWrap, TableLayout } from './styled';
import { menuItem } from '../../__mocks__/menudb.json'
import Button from '../Element/Button';
import TableTd from './TableTd'


const Table = ({ read, edit }) => {
    const [items, setItems] = useState(menuItem)
    const router = Router;
    const handleAddData = useCallback(async () => {
        const addItem = {}
        setItems(prev => prev.concat(addItem))
    }, [])

    const handleEdit = useCallback(async () => {
        router.push('/menu/edit')
    }, [])

    const handleLoadData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:4444/menu`)
            console.log('response Data => ', response)
        } catch (e) {
            console.error(e)
        }
    }, [])
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
                                onClick={handleEdit}>
                                수정하기
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
                    </div>
                    {
                        items.map(item =>
                            <div key={item.id} className="row">
                                <TableTd param={item.imagePath} />
                                <TableTd param={item.name} />
                                <TableTd param={item.price} />
                                <TableTd param={item.desc} />
                            </div>
                        )
                    }
                </div>
            </TableWrap>
        </TableLayout >
    )
}

export default React.memo(Table)
