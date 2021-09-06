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
      <div style={{ width: '100%', height: '100vh' }}>
        <InfiniteLoading
          hasMoreItems={items.length < sites.length}
          itemHeight={100}
          loadMoreItems={loadMoreItems}
        >
          {(sites.length > 0) ? items.map((item, index) => <SiteCell site={sites[item]} key={index}/>) : []}
        </InfiniteLoading>
    </div>
  );
}
