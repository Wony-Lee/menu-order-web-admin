import React, { useCallback } from 'react'
import Link from 'next/link'
import Router from 'next/router'

const MenuItem = ({ children }) => {
    const router = Router
    const HandleLocation = useCallback(() => {
        switch (children) {
            case '메뉴관리':
                router.push('/menu')
                break;
            case '지점관리':
                router.push('/store')
                break;
            case '회원관리':
                router.push('/member')
                break;
            case '매출관리':
                router.push('/sales')
                break;
            case '권한관리':
                router.push('/role')
                break;
            default: return;
        }
    }, [])

    return (
        <li onClick={HandleLocation}>
            {children}
        </li>

    )
}

export default React.memo(MenuItem)
