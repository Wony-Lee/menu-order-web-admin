import React, { useCallback, useEffect, useState } from 'react'
import TableItem from './TableItem'
import { TableCol, TableLayout, TableRow } from './styled';
import { menuItem } from '../../__mocks__/menudb.json'
import Button from '../Element/Button';


const Table = () => {
    const [items, setItems] = useState(menuItem)
    const [status, setStatus] = useState('NONE')
    const [menuId, setMenuId] = useState('')
    const handleTextChange = useCallback((e) => { }, [])
    const handleEdit = useCallback((e) => {
        console.log('1')
        setMenuId(e.target.id)
        setStatus('UPDATE')
    }, [status, menuId])
    const handleDelete = useCallback((e) => {
        console.log(menuId)
        console.log(e.target.id)
        setMenuId(e.target.id)
        if (e.target.id === menuId) setStatus('DELETE')
    }, [status, menuId])
    const handleSuccess = useCallback((e) => {
        console.log('2')
        setStatus('NONE')
    }, [status, menuId])
    useEffect(() => {

    }, [])

    return (
        <TableLayout>
            <TableRow>
                <TableItem>
                    이미지
                </TableItem>
                <TableItem>
                    메뉴명
                </TableItem>
                <TableItem >
                    가격
                </TableItem>
                <TableItem >
                    설명
                </TableItem>
                <TableItem >
                    설정
                </TableItem>
            </TableRow>
            <TableCol>
                {
                    items.map(item =>
                        <TableRow key={item.id}>
                            <TableItem width={100 / 5}>
                                {
                                    menuId === item.id + 'menu' && status === 'UPDATE' ? <input value={item.imagePath} onChange={handleTextChange} /> : item.imagePath
                                }
                            </TableItem>
                            <TableItem width={100 / 5}>
                                {
                                    menuId === item.id + 'menu' && status === 'UPDATE' ? <input value={item.name} onChange={handleTextChange} /> : item.name
                                }

                            </TableItem>
                            <TableItem width={100 / 5}>
                                {
                                    menuId === item.id + 'menu' && status === 'UPDATE' ? <input value={item.price} onChange={handleTextChange} /> : item.price
                                }
                            </TableItem>
                            <TableItem width={100 / 5}>
                                {
                                    menuId === item.id + 'menu' && status === 'UPDATE' ? <input value={item.desc} onChange={handleTextChange} /> : item.desc
                                }
                            </TableItem>
                            <TableItem width={100 / 5}>
                                < Button
                                    bg={"primary"}
                                    margin={5}
                                    onClick={menuId === item.id + 'menu' && status === 'UPDATE' ? handleSuccess : handleEdit}
                                    id={item.id + 'menu'}
                                >
                                    {
                                        menuId === item.id + 'menu' && status === 'UPDATE' ?
                                            '수정완료'
                                            :
                                            '수정하기'
                                    }
                                </Button>
                                {/* <Button
                                        bg={"error"}
                                        margin={5}
                                        onClick={handleDelete}
                                        id={item.id + 'menu'}
                                    >
                                        삭제하기
                                    </Button> */}
                            </TableItem>
                        </TableRow>
                    )
                }
            </TableCol>
        </TableLayout >
    )
}

export default React.memo(Table)
