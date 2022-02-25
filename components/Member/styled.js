import styled from '@emotion/styled'

export const TableLayout = styled.div`
    width:100%;  
`;

export const TableRow = styled.div`
    width:100%;
    display:flex;
`;

export const TableCol = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
`;

export const TableItemLayout = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width:${props => props.width ? props.width : 100}%;
    height:60px;
    text-align:center;
    border-right:1px solid #ddd;
    border-bottom:1px solid #ddd;
    &:last-of-type {
        border-right:0;
    }
`;