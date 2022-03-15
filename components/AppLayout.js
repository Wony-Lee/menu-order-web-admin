import React from 'react'
import MenuList from './SideMenu/MenuList';
import Navigation from './Nav/Navigation';
import { BodyLayout, ContentLayout } from './styled';
import DefaultModal from './Modal/DefaultModal';

const AppLayout = ({ children }) => {
    return (
        <div style={{ position: 'relative' }}>
            <Navigation />
            <BodyLayout>
                <MenuList />
                <ContentLayout>
                    {children}
                </ContentLayout>
            </BodyLayout>
            <DefaultModal />
        </div>
    )
}

export default AppLayout
