import React from 'react'
import styled from '@emotion/styled'

const Layout = styled.button`
    width:${props => props.width ? props.width : 100}px;
    height:${props => props.height ? props.height : 30}px;
    background:${props => props.bg === 'primary' ? '#4f83cc' : props.bg === 'error' ? '#d32f2f' : ''};
    margin:${props => props.margin}px;
    border-radius: 8px;
    color:white;
`;

const Button = ({ width, height, onClick, bg, margin, id, disabled, children }) => {
    return (
        <Layout
            width={width}
            height={height}
            onClick={onClick}
            bg={bg}
            margin={margin}
            id={id}
            disabled={disabled}
        >
            {children}
        </Layout>
    )
}

export default React.memo(Button);
