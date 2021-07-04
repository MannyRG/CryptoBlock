import React from 'react'
import {SrchBlock, SrchBtn, Search as Srch} from "./searchStyle"
import Arrow from "./searchSvg"

const Search =({HandleSearch})=> {
    // no Need to se t state of the value
    let value =""

    const handleChange =(val)=>{
        value = val
    }
    return(
    <SrchBlock>
        <Srch placeholder="Search For Cryptocurrency" onChange={(e)=>handleChange(e.target.value)} />
        <SrchBtn onClick={()=>{HandleSearch(value)}}>
            <Arrow />
        </SrchBtn>
    </SrchBlock>
    )
}

export default Search
