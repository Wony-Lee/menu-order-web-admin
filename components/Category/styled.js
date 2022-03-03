import styled from '@emotion/styled'

export const CategoryListLayout = styled.div`
    width:100%;
`;

export const CategoryUl = styled.ul`
    display:flex;
    width:100%;
`;

export const CategoryLi = styled.li`
    display:flex;
    justify-content: center;
    align-items: center;
    width:${props => props.width ? 100 / props.width : 100}%;
    height:50px;
    background-color:#ddd;
    border-right:1px solid black;
    cursor: pointer;
    &:last-of-type {
        border-right:0;
    }
    &:hover {
        color:white;
    }
`;