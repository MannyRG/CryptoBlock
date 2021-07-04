import styled from "styled-components";




export const SrchBlock = styled.div`
    display: flex;
    width: 300px;
    height: 25px;
    max-width: 1200px
    box-sizing: border-box;
    border-radius: 25px;
    padding: 2px;
    background:white;
    z-index: 3;
    
`;

export const Search = styled.input`
   width: 100%;
   outline: none;
   border-radius: 25px;
   padding: .5rem;
   border:none;
`;

export const SrchBtn = styled.button`
    height; 25px;
    width: 70px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2px;
    border: none;
    background-color: #01BF71;
`;



