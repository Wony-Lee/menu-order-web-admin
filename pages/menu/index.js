import React from 'react'
import AppLayout from '../../components/AppLayout'
import Table from '../../components/Member/Table'

const Menu = () => {
    return (
        <AppLayout>
            <Table read={"read"} />
        </AppLayout>
    )
}

export default Menu
