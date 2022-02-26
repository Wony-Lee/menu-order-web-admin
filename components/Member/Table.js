import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import TableItem from './TableItem'
import { TableTh, TableLayout } from './styled';
import { menuItem } from '../../__mocks__/menudb.json'
import Button from '../Element/Button';


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
    // const defaultSet = [{
    //     name: '이미지'
    // }, {
    //     name: '메뉴명'
    // }, {
    //     name: '가격'
    // }, {
    //     name: '설명'
    // }
    // ]
    useEffect(() => {
        handleLoadData()
    }, [])

    return (
        <TableLayout>
            <TableItem>
                <Button bg={"primary"} onClick={handleEdit}>수정하기</Button>
            </TableItem>
            <TableItem>
                <Button bg={"error"}>저장하기</Button>
            </TableItem>
            {/* <TableItem items={defaultSet} className="row" /> */}

            <TableItem items={items} className="row" />

            {/* {
                items.map(item =>
                    <>
                        <TableItem width={100 / items.length}>
                            {
                                item.imagePath
                            }
                        </TableItem>
                        <TableItem width={100 / 4}>
                            {
                                item.name
                            }
                        </TableItem>
                        <TableItem width={100 / 4}>
                            {
                                item.price
                            }
                        </TableItem>
                        <TableItem width={100 / 4}>
                            {
                                item.desc
                            }
                        </TableItem>
                    </>
                )
            } */}
        </TableLayout >
    )
}

export default React.memo(Table)
