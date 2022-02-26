import React, { useCallback, useEffect, useState } from 'react'
import { TableTh, TableTd } from './styled'

const TableItem = ({ children, width, className, items }) => {
    const [thisObject, setThisObject] = useState(false)
    const isObject = useCallback((params) => {
        console.log('params', params)
        params.forEach(param => {
            if (params.hasOwnProperty(param.id - 1)) {
                console.log('id =>', params.hasOwnProperty(param.id - 1))
            }
        })
        setThisObject(true)
    }, [items])
    useEffect(() => {
        if (items !== undefined) {
            isObject(items)
        }
    }, [items])
    return (

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <TableTh className={className}>
                {
                    thisObject &&
                    items.map(item => (
                        <>
                            <TableTd width={width}>
                                {item.imagePath}
                            </TableTd>
                            <TableTd width={width}>
                                {item.name}
                            </TableTd>
                            <TableTd width={width}>
                                {item.price}
                            </TableTd>
                            <TableTd width={width}>
                                {item.desc}
                            </TableTd>
                        </>
                    ))
                }
            </TableTh >

        </div>
    )
}

export default React.memo(TableItem)
