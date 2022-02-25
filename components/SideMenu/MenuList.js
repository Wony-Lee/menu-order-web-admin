import React from 'react'
import MenuItem from './MenuItem'
import { MenuLayout, MenuUl } from './styled'
import { menuList } from '../../__mocks__/menudb.json'

const MenuBar = () => {
    const menus = menuList;
    console.log('Menu', menus)
    return (
        <MenuLayout>
            <MenuUl>
                {
                    menus.map(menu => <MenuItem key={menu.id}>{menu.name}</MenuItem>)
                }
            </MenuUl>
        </MenuLayout>
    )
}

export default MenuBar
