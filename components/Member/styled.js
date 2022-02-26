import styled from '@emotion/styled'

export const TableLayout = styled.div`
    width:100%;
   
`;

export const TableWrap = styled.div`
    display:flex;
    width:100%;
    .row-head {
        display:flex;
        height:50px;
        width:100%;
        & div {
            display:flex;
            justify-content: center;
            align-items:center;
            width:50%;
            height:100%;
            &:first-of-type {
                border-right:1px solid #ddd;
            }
            border-bottom:1px solid #ddd;
        }
    }
    .row {
        display:flex;
        width:100%;
    }
    .col {
        display:flex;
        flex-direction: column;
        width:100%;
        
    }
    .td {
        display:flex;
        align-items: center;
        justify-content: center;
        width:${props => props.width ? props.width : 100}%;
        height:50px;
        border-right:1px solid #ddd;
        border-bottom:1px solid #ddd;
        &:last-of-type {
            
        }
    }
`;


export const TableTd = styled.div`
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