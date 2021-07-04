import styled from "styled-components";

export const Filter = styled.span`
    position: relative;
    box-sizing: border-box; 
    height: 28px;
    width: 80px;
    border-radius:25px;
    z-index: 3;
   
    
    @media screen and (max-width: 500px) {
        left: calc(100% - 100px);
      }
    
`;

export const FilterBtn = styled.button`
    height: 100%;
    width:100%;
    border:none;
    background: none;
    display:inline-block;
    box-sizing: border-box; 
    display:flex;
    cursor:pointer;


`;
export const FilterAmpunt = styled.span`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    border-left: ${props => props.visible? "1px solid lightgrey" :null} ;
    border-radius: ${props => props.visible? "10px 0 0 0" :"25px 0 0 25px"};
    background:white;

    
`;

export const FilterSVG = styled.span`
    height: 100%;
    width:25px;
    border-radius:${props => props.visible? "0 10px 0 0" :"0 25px 25px 0"} ;
    background-color: #01BF71;
    border:none;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    display:inline-block;
    box-sizing: border-box;
    cursor:pointer; 
`;

export const FilterList = styled.ul`
    position: absolute;
    visibility:${props => props.visible? "visible" :"hidden"};
    left:0;
    right:0;
    top: 25px;
    overflow:hidden;
    background-color: white;
    list-style-type:none;
    color: black;

    @keyframes slidein {
        from {
            max-height:0;
            visibility: hidden;
            
        }
        to {
           max-height:500%;
           visibility: visible;
        }
      }
      @keyframes slideout {
        from {
            max-height:500%;
            visibility: visible;
        }
        to {
           max-height:0;
           visibility: hidden;
        }
      }
      ${props => props.visible? "animation: slidein .5s ease-in-out;" :"animation: slideout .5s ease-in;"}   
`;

export const Size = styled.li`
    cursor:pointer;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
`;