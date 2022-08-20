import styled from 'styled-components';

export const ListButton = styled.button`
    position: relative;
    border: 3px solid transparent;
    color: #191919;
    background : aliceblue;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: sans-serif;
    margin : 5px;
    :hover {
        background-color: transparent !important;
        border: 3px solid aliceblue;
    }
`;

export const ListInput = styled.input`
    position: relative;
    border: none;
    color: #191919;
    background : aliceblue;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: sans-serif;
    margin : 5px;
`;

export const title = styled.div`
    padding: 15px 30px;
    font-size: 30px;
    font-family: sans-serif;
`;


export const list = styled.ul`
    list-style: circle;
    font-size: 20px;
    font-family: sans-serif;
`;

export const message = styled.p`
    padding: 0px 30px;
    font-size: 20px;
    font-family: sans-serif;
    color : #191919;
`;
