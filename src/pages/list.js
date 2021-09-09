import React, { useState } from "react";
import InfiniteLoading from "react-simple-infinite-loading";
import SiteCell from "../components/site-cell";


export default function List({ sites, setSites }) {
  const [items, setItems] = useState([...Array(20)].map((_, index) => index));

  const loadMoreItems = () => {
    const newItems = [...Array(20)].map((_, index) => items.length + index);

    return new Promise(resolve => {
      setTimeout(() => {
        setItems([...items, ...newItems]);
        resolve();
      }, 300);
    });
  };

  return (
    <>
    <div className='listHeader row'>

    <div className='listHeaderTitle col-12'>
        <p>Sites</p>
    </div>

</div>     

  <div className='underListHeader row'>
      <div>
      <input className='listInput' placeholder='All Sites'></input>
      <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/24/000000/external-magnifying-glass-interface-kiranshastry-solid-kiranshastry.png"/>

        </div>
  </div>

      <div className='siteObj'>
        
        <InfiniteLoading
          hasMoreItems={items.length < sites.length}
          itemHeight={100}
          loadMoreItems={loadMoreItems}
        >
          {(sites.length > 0) ? items.map((item, index) => <SiteCell site={sites[item]} key={index}/>) : []}
        </InfiniteLoading>
    </div>
    </>
  );
}
