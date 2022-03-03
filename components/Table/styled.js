import styled from '@emotion/styled'

export const TableItemLayout = styled.div`
    width: calc(${props => props.width ? 100 / props.width : 100}% - 15px);
    margin:5px;
    border:1px solid #ddd;
`;