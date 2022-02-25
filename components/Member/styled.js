import styled from '@emotion/styled'

export const TableLayout = styled.div`
    width:100%;
    
`;

export const TableRow = styled.div`
    width:100%;
    display:flex;
`;

export const TableItemLayout = styled.div`
    width:${props => props.width}%;
    padding:15px;
    text-align:center;
    border-right:1px solid #ddd;
    border-bottom:1px solid #ddd;
    &:last-of-type {
        border-right:0;
    }
`;