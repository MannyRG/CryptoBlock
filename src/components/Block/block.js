import React, {useState, useEffect} from 'react'
import * as B from "./blockStyle"
// SVG Imported
import vid from "./vid.mp4"
// import World from "./world.svg"

import RenderRows from './RenderRows/RenderRows'
// impoted Components
import Filter from "./Filter/filter.js"
import Search from "./Search/search.js"





const Base = () => {
    const [rows, setRows] = useState(10)
    const [data , setData] = useState([])
    const [search, setSearch] = useState({
        active: false,
        results: []
    })
    

     const HeroContent =()=>{
         return(
            <B.Content>
            <B.Title>
                DIGITAL CYPTO COIN 
            </B.Title>
            <B.Title>
                SEARCH FOR YOUR CRYPTOCURRENCYS
            </B.Title>
            <B.P1>
                A Place for every one to simply FIND and LEARN about Cryptocurrencys
            </B.P1>
        </B.Content>

         )
     }

     const fetchData= async()=>{
        try {
            const url="http://localhost:8000/"
            const getCrypto = await fetch(url, {
                method: 'Get',
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            let resp =  await getCrypto.json()
            let data_ = resp.data
                setData(data_)
          } catch(err) {
            console.log("Error submiting", err)
          }   
    }

    useEffect(() => {
        fetchData()
    },[])

    const HandleSearch=(value)=>{
        let NewResults = data.filter(data =>{
            let name = data["name"].toLowerCase();
            let symbol = data["symbol"].toLowerCase();
            let coinSearch = value.toLowerCase();
            let searchTermName=  name.indexOf(coinSearch)
            let searchTermSymbol=  symbol.indexOf(coinSearch)
            if (coinSearch !== ""){
                if (searchTermName === 0 || searchTermSymbol=== 0 ){
                    return data;
                }
            }
            return null;
        });
        console.log(NewResults)
        setSearch({active:true, results:NewResults})
    }
    return (
        <B.Conatiner>
            <B.Hero>
                <B.HeroBlock>


                    {/* Hero Content */}
                    <HeroContent /> 

                    {/* Imported Serach and Filter Componets*/}
                    <B.SearchFilterBlock>
                        <Search HandleSearch={(val)=>{HandleSearch(val)}}/>
                        <Filter rows={rows} setRows={setRows} />
                    </B.SearchFilterBlock>

 
                    {search.active? <B.Reset onClick={()=>setSearch({active: false,results:[]})}>Reset</B.Reset>: null}
                    <B.P1 scroll> Scroll {"->"} </B.P1>
                </B.HeroBlock>
                

                   
                   
                    {/*  Video Background*/}
                   <B.VideoBlock>
                        <B.Video autoPlay loop muted src={vid} type="video/mp4"/>
                    </B.VideoBlock>
                    {/* <B.HeroImgBlock>
                        <B.HeroImg src={World}/>
                    </B.HeroImgBlock> */}
            </B.Hero>

            {/* Chart Block width Data */}
            <B.ChartBlock>
                
                <RenderRows rows={rows} coins={data} newSearch={search}/>
            </B.ChartBlock>
            
        </B.Conatiner>

    )
}

export default Base
