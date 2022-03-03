import React, { useCallback, useState } from 'react'
import axios from 'axios'
import AppLayout from '../components/AppLayout'
import { BACK_URL } from '../config/config'
const Role = () => {
    // const [customer, setCustomer] = useState([])
    // const handleLoadCustomer = useCallback(async () => {
    //     try {
    //         // 수정해야함
    //         const response = await axios.get(`${BACK_URL}/v1/customer`)
    //         setCustomer(response)
    //         console.log('customer response', response)
    //     } catch (e) {
    //         console.error('handleLoadCustomer FAILURE', e)
    //     }
    // }, [customer])
    const [data, setData] = useState([])
    const handleCategoryCall = useCallback(async () => {
        try {
            const response = await axios.get(``)
            setData(response)
            console.log('response', response)
        } catch (e) {
            console.error(e)
        }
    }, [])
    return (
        <AppLayout>
            Role
            <button onClick={handleCategoryCall}>Click</button>
        </AppLayout>
    )
}

export default Role
