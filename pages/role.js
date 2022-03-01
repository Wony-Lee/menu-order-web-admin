import React, { useCallback, useState } from 'react'
import axios from 'axios'
import AppLayout from '../components/AppLayout'
import { BACK_URL } from '../config/config'
const Role = () => {
    const [customer, setCustomer] = useState([])
    const handleLoadCustomer = useCallback(async () => {
        try {
            // 수정해야함
            const response = await axios.get(`${BACK_URL}/v1/customer`)
            
            setCustomer(response)
            console.log('customer response', response)
        } catch (e) {
            console.error('handleLoadCustomer FAILURE', e)
        }
    }, [customer])
    return (
        <AppLayout>
            Role
            
            <button onClick={handleLoadCustomer}>Call</button>
        </AppLayout>
    )
}

export default Role
