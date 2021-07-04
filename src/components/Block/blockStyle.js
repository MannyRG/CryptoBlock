import styled,{css} from "styled-components";

export const Conatiner = styled.section`
    min-height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;

export const ChartBlock = styled.div`
    background: white;
    color:black;
    width: 100%;
`;


export const Lable= styled.span`
    display:inline-block;
   
    ${props =>props.hash && css`
        display: flex;
        align-items: center;
        justify-content: center;
      
    `}
    ${props =>props.name_ && css`
        display: flex;
        align-items: center;
        padding-left: 1rem;

    `}
    ${props =>props.stats && css`
        display: flex;
        align-items: center;
        justify-content: center;
        
    `}
    ${props =>props.chart && css`
        display: flex;
        align-items: center;
        justify-content: center; 
    `}
`;


// border-top: 1px solid lightgrey;
// border-bottom: 1px solid lightgrey;
export const LableRow= styled.div`
    height: 35px;
    display: grid;
    grid-gap: 2px;
    box-sizing:border-box;
    ${props =>props.NM && css`
    grid-template-columns: 80px 180px;
    width: 100%;
    padding-left: 1rem;

`}
    ${props =>props.stats && css`
    margin-right: .5rem;
    padding-right: 1rem;
    grid-gap: 2px;
    grid-template-columns: repeat(6,1fr);
    width: 150%;
    @media screen and (max-width: 755px) {
        min-width: 320%;
        }
`}
`;

// for Chart 150px was set
export const Row= styled.li`
    height: 40px;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    list-style-type:none;
    margin: .5rem 0;
    margin-left: 1rem;
    border-radius: 10px 0 0 10px;
    display: grid;
    grid-template-columns: 80px 180px;
    grid-gap: 2px;
    overflow: hidden;
  
`;

export const RowScroll= styled.li`
    height: 40px;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    list-style-type:none;
    margin: .5rem 0;
    margin-right: 1rem;
    border-radius: 0  10px  10px 0;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-gap: 2px;
   
`;

export const CoinsLists = styled.div`
    display:flex;
    box-sizing:border-box;

`;
export const NoResults = styled.div`
    margin-top: 2rem;
    color: #01BF71;
    width: 100%;
    font-size: 1.3rem;
    font-style: italic;
`;

export const List= styled.ul`

`;

export const ListScroll= styled.ul`
    min-width: 150%;
    @media screen and (max-width: 755px) {
    min-width: 320%;
    }
`;
export const Scroll= styled.ul`
    width: 100%;
    max-height: inherit;
    overflow-x: scroll;

  
`;

export const Column= styled.span`
    display:inline-block;
    overflow-x: scroll;
    ${props =>props.hash && css`
        display: flex;
        align-items: center;
        justify-content: center;
      
    `}
    ${props =>props.name_ && css`

        display: flex;
        align-items: center;
        

    `}
    ${props =>props.stats && css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;  
    `}
    
    ${props =>props.color && css`
    display: flex;
    align-items: center;
    justify-content: center;
    color:${prop=>props.color === "-"? "red": "green"}
    
    `}
    ${props =>props.chart && css`
        display: flex;
        align-items: center;
        justify-content: center;
    
`}
`;

export const Span = styled.span`
    color: #01BF71;
    padding-left: 8px;
    font-size: .8em;
`;

export const IMG = styled.img`
    height: 20px;
    width: 30px 
`;
export const RedSVG = styled.div`
    height: 20px;
    width: 20px 
`;
export const GreenSVG = styled.div`
    height: 20px;
    width: 20px;
    transform: rotate(0.5turn);
`;



export const Reset = styled.button`
    position: absolute;
    bottom: 5px;
    padding: .5rem 2rem;
    border-radius: 25px;
    background-color: gold;
    border: grey;
    margin: auto;
    z-index: 3;
    &:active{
        transform: translateY(5px);
    }
    @media screen and (max-width: 500px) {
        left: 5px;
      }
`;









export const Hero = styled.div`
    height: 500px;
    padding: 1rem 5rem;
    box-sizing: border-box;
    position: relative;
    max-width: 1200px;
    color:#01BF71;
    
    background-color:black;
    width: 100%;

    @media screen and (max-width: 600px) {
        padding: 1rem;
      }
    
`;
export const HeroImg = styled.img`
    height:100%;
    width: 100%;

    @media screen and (max-width: 600px) {
        display:none
      }
    
`;
export const HeroImgBlock = styled.div`
    position:absolute;
    top:0;
    left:0;
    bottom: 0;
    object-fit:cover;
    width: 50%;
    @media screen and (max-width: 755px) {
        display:none
      }
    
`;

export const HeroBlock = styled.div`
    height:100%;
    width:100%;
    z-index: 3;
    margin: auto;
    position:relative;
`;



export const Video = styled.video`
    height:100%;
    width: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    background:#232a34;
`;

export const VideoBlock = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    right: 0;
    max-width: 600px;
    width: calc(50% + 3rem);
    z-index:1;

    @media screen and (max-width: 755px) {
        width: 100%;
        left: 0;

      }


`;



export const Content = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    box-sizing: border-box;
    z-index: 3;


    
`;
export const Title = styled.h1`
text-align:left;
z-index: 3;
font-family:sans-serif;
 
`;

export const P1 = styled.p` 
margin-top: 1em;
text-align:left; 
width: 40%;
z-index: 3;
font-family: system-ui;
${props =>props.scroll && css`
    position: absolute;
    bottom:0;
    width: 100%;
    text-align:right; 

`}
    

@media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchFilterBlock = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 3;
    @media screen and (max-width: 500px) {
        height:30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    
`;















