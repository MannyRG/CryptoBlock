import React, {useState} from 'react'
import FilterArrow from "./filterSvg.js"
import * as F from "./filterStyle.js"

const Filter =({rows, setRows})=> {
    const [visible ,setVisible] = useState (false)
    let rowSize =[10, 20, 50 , 100, 200]

    const handleFilter =(size)=>{
        setRows(size)
        setVisible(!visible)
    }

    return(
    <F.Filter>
        <F.FilterBtn  onClick={()=>{setVisible(!visible)}}>
            <F.FilterAmpunt visible={visible} >
                {rows}
            </F.FilterAmpunt>
            <F.FilterSVG visible={visible}>
                <FilterArrow/>
            </F.FilterSVG>
        </F.FilterBtn>
        <F.FilterList visible ={visible}>
            {rowSize.map((size, key)=>{
                return(
                    <F.Size key={key} onClick={()=>handleFilter(size)}>
                        {size}
                    </F.Size>
                )
            })}
        </F.FilterList>
    </F.Filter>
    )
}

export default Filter
