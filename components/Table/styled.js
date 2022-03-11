import styled from '@emotion/styled'

export const TableItemLayout = styled.form`
    width: calc(${props => props.width ? 100 / props.width : 100}% - 15px);
    margin:5px;
    border:1px solid #ddd;
`;

export const Input = styled.input`
    padding:5px;
    width:50%;
    height:30px;
    margin:4px;

    border-radius: 8px;
    border:0;
    box-sizing:border-box;  
`;

export const InputBox = styled.div`
    display:flex;
    align-items: center;
    width:80%;
    height:40px;
    margin-left:10px;
    p {
        width:30%;
        text-align:left;
    }
`;

export const ImageBox = styled.div`
    width:100%;
    min-height:200px;
    border:1px solid black;    
    img {
        width:100%;
    }
`;