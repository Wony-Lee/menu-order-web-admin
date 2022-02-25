import React from 'react'
import MenuList from './SideMenu/MenuList';
import Navigation from './Nav/Navigation';
import { BodyLayout, ContentLayout } from './styled';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <BodyLayout>
                <MenuList />
                <ContentLayout>
                    {children}
                </ContentLayout>
            </BodyLayout>
        </div>
    )
}

export default AppLayout
