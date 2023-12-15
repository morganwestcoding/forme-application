import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './market.css';
import MarketFeed from '../../components/marketFeed/MarketFeed';
import Tabs from '../../components/tabs/Tabs';


export default function Market() {
  return (
    <>
    <Topbar/>
    <Tabs/>
    <MarketFeed/>
    </>
  )
}
