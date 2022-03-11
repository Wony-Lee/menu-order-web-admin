import React, { useCallback } from 'react'
import useCategories from '../../hooks/useCategories'
import CategoryItem from './CategoryItem';
import { CategoryLi, CategoryListLayout, CategoryUl } from './styled';
import { useDispatch } from 'react-redux';
import { SET_CATEGORY_TAB } from '../../reducer/category';
import { DEFAULT_MODAL_ON } from '../../reducer/modal';

const CategoryList = ({ categories }) => {
    const dispatch = useDispatch()
    const handleTestSample = useCallback((e) => {
        console.log('gategories', e.target.id)
        dispatch({
            type: SET_CATEGORY_TAB,
            payload: Number(e.target.id)
        })
    }, [])

    const handleModalOpen = useCallback(() => {
        dispatch({
            type: DEFAULT_MODAL_ON
        })
    }, [])

    return (
        <CategoryListLayout>
            <CategoryUl>
                {categories.map(item => <CategoryLi key={item.id} id={item.id} onClick={handleTestSample} width={categories.length}>{item.name}</CategoryLi>)}
            </CategoryUl>
            <div>
                <button onClick={handleModalOpen}>등록하기</button>
            </div>
        </CategoryListLayout>
    )
}

export default CategoryList
