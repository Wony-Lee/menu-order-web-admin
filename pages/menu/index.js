import React from 'react'
import AdminTable from '../../components/\bTable/AdminTable'
import AppLayout from '../../components/AppLayout'
import CategoryList from '../../components/Category/CategoryList';
import useCategories from '../../hooks/useCategories';
import { useSelector } from 'react-redux';

const Menu = () => {
    const { isLoading, data } = useCategories("Category");
    if (isLoading) {
        return `...loading`
    }
    console.log('data ==>', data)
    return (
        <AppLayout>
            <CategoryList categories={data} />
            {
                data.map(items => <AdminTable key={items.id} items={items} />)
            }

        </AppLayout>
    )
}

export default Menu
