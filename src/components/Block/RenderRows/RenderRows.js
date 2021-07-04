import {Row, Column, List, Span, IMG, RedSVG, GreenSVG, LableRow, Lable} from "../blockStyle"
import {ListScroll, RowScroll , CoinsLists, Scroll, NoResults} from "../blockStyle"

import Coin from "./coin.svg";
import G from "./percentGreen";
import R from "./percentRed"








const RenderRows= ({rows, coins, newSearch,})=>{
    const Red = (
        <RedSVG >
            <R />
        </RedSVG>
    )
    const Green = (
        <GreenSVG>
            <G />
        </GreenSVG>
    )



    const namesLable =(
        <LableRow NM>
            <Lable hash>
                #   
            </Lable>

            <Lable name_>
            Name 
            </Lable >  
        </LableRow>)
    
    const statsLable=(  
        <LableRow stats>
            <Lable price stats>
               Price
           </Lable>
   
           <Lable TF stats>
               24h %
           </Lable>
   
           <Lable seven stats>
               7d %
           </Lable> 
   
           <Lable mrk stats>
               Market Cap
           </Lable>
   
           <Lable vol stats>
              Volume(24H)
           </Lable>
   
           <Lable cir stats>
           Circulating Supply
           </Lable>
        </LableRow>)
    
    const noResults =(
        <NoResults>
            Sorry No Results
        </NoResults>
    )
    
    const RenderList =()=>{

        let MainRows = coins.map((res, i)=>{
                const setImg = `https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/${res.symbol.toLowerCase()}.svg`
                    return(
                        <Row key={i}>
                            <Column hash>
                                {res.cmc_rank}
                            </Column >
    
                            <Column name_>
                               <IMG src={setImg} onError={(e)=>{e.target.src= Coin}}/> 
                               {res.name}<Span>{res.symbol}</Span>
                            </Column >
                        </Row>
                    )
        })
        let ScrollRows = coins.map((res, i)=>{
            let dollar = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',});
                const percent =(percent, type)=>{
                    const str = percent.toString()
                    return `${str.charAt(1)+str.charAt(2)+str.charAt(3)+str.charAt(4)}%`
                }
                const color =(percent)=>{
                    const str = res.quote.USD.percent_change_24h.toString()
                    return str.charAt(0)
                }
                   return(
                        <RowScroll key={i}>
                            <Column stats>
                                {dollar.format(res.quote.USD.price)}
                            </Column>
    
                            <Column color={color()}>
                              {color()==="-"? Red: Green} { percent(res.quote.USD.percent_change_24h)}
                            </Column>
    
                            <Column color={color(res.quote.USD.percent_change_7d)}>
                            {color()==="-"? Red: Green} { percent(res.quote.USD.percent_change_7d)}
                            </Column>
    
                            <Column stats>
                              {dollar.format(res.quote.USD.market_cap)}
                            </Column>
    
                            <Column stats>
                                { dollar.format(res.quote.USD.volume_24h)}
                            </Column>
    
                            <Column stats>
                                { res.circulating_supply+ " " + res.symbol}
                            </Column>
                        </RowScroll>
                    )
        })

        const MainList = MainRows.slice(0, rows)
        const ScrollList = ScrollRows.slice(0, rows)

        return(
        <CoinsLists >
            <List>
            {namesLable}
            {MainList}
            </List>
            <Scroll>
                {statsLable}
                <ListScroll>
                {ScrollList}
                </ListScroll>
            </Scroll>
        </CoinsLists>
        )
    }

    const SearchList =()=>{

        let MainList = newSearch.results.map((res, i)=>{
                const setImg = `https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/${res.symbol.toLowerCase()}.svg`
                    return(
                        <Row key={i}>
                            <Column hash>
                                {res.cmc_rank}
                            </Column >
    
                            <Column name_>
                               <IMG src={setImg} onError={(e)=>{e.target.src= Coin}}/> 
                               {res.name}<Span>{res.symbol}</Span>
                            </Column >
                        </Row>
                    )
        })
        let ScrollList = newSearch.results.map((res, i)=>{
            let dollar = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',});
                const percent =(percent, type)=>{
                    const str = percent.toString()
                    return `${str.charAt(1)+str.charAt(2)+str.charAt(3)+str.charAt(4)}%`
                }
                const color =()=>{
                    const str = res.quote.USD.percent_change_24h.toString()
                    return str.charAt(0)
                }
                   return(
                        <RowScroll key={i}>
                            <Column stats>
                                {dollar.format(res.quote.USD.price)}
                            </Column>
    
                            <Column color={color()}>
                              {color()==="-"? Red: Green} { percent(res.quote.USD.percent_change_24h)}
                            </Column>
    
                            <Column color={color(res.quote.USD.percent_change_7d)}>
                            {color()==="-"? Red: Green} { percent(res.quote.USD.percent_change_7d)}
                            </Column>
    
                            <Column stats>
                              {dollar.format(res.quote.USD.market_cap)}
                            </Column>
    
                            <Column stats>
                                { dollar.format(res.quote.USD.volume_24h)}
                            </Column>
    
                            <Column stats>
                                { res.circulating_supply+ " " + res.symbol}
                            </Column>
                        </RowScroll>
                    )
        })

        return(
        <CoinsLists>
            <List>
            {namesLable}
            {MainList}
            </List>
            <Scroll>
                {statsLable}
                <ListScroll>
                {ScrollList}
                </ListScroll>
            </Scroll>
        </CoinsLists>
        )
    }  
    
    return ( 
        <div>
        {newSearch.active? <SearchList />: <RenderList />}
        {newSearch.results.length === 0 && newSearch.active?<div>{noResults}</div> :null}
        </div>);
}

export default RenderRows
