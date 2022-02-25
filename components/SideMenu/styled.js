import styled from '@emotion/styled'

export const MenuLayout = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:200px;
    height:100%;
    padding-top:50px;
    background: #01579b;
`

export const MenuUl = styled.ul`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    color:white;
    & li {
        width:50%;
        padding:10px;
        text-align:center;
        border:1px solid white;
        margin: 15px;
        cursor:pointer;
        &:hover{
            border:1px solid black;
            color:black;
        }
    }
`;