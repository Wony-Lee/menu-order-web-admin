import React from 'react'
import MenuItem from './MenuItem'
import { MenuLayout, MenuUl } from './styled'
import { item } from '../../__mocks__/menudb.json'

const MenuBar = () => {
    const Items = item;
    console.log('Menu', Items)
    return (
        <MenuLayout>
            <MenuUl>
                {
                    Items.map(item => <MenuItem key={item.id}>{item.name}</MenuItem>)
                }
            </MenuUl>
        </MenuLayout>
    )
}

export default MenuBar
