import React from 'react'
import { CategoryLi } from './styled'

const CategoryItem = ({ children }) => {
    return (
        <CategoryLi>
            {children}
        </CategoryLi>
    )
}

export default CategoryItem
