import React, {useEffect, useState} from 'react';

import DataImage from '../Data/image';


function Portifolio() {
  // Get data
 const [data, setData] = useState([]);
 // Get category filtering
 const [collection, setCollection ] = useState([]);
 // make limt show 
 const [noOfElement, setNoofElement] = useState(4)
 useEffect(() => {
   setData(DataImage);
   setCollection([...new Set(DataImage.map((item) => item.category))])
 }, []);
 // filter gallary
const gallary_filter = (itemData) =>{
  const filterData = DataImage.filter((item)=> item.category === itemData);
  setData(filterData);
 
} ;
// make function load more button
const loadMore = ()=>{
  setNoofElement(noOfElement + noOfElement)
}

const slice = data.slice(0, noOfElement);
 
  return (
    <section className='portifolio'>

            <div className="container">
            <h1 className="black_Title">our portifolio</h1>
      <div className="line"></div>
      <p className="black_paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In exercitationem aliquam voluptatum deleniti. Excepturi</p>

              <div className="menu_filter">
                <ul>
                  <li><button  onClick={()=> setData(DataImage)} >ALL</button></li>
                  {
                    collection.map((item) => <li key={item}><button onClick={() => {gallary_filter(item)}}>{item}</button></li>)
                  }
                </ul>
              </div>
              <div className="cards">
              {
                slice.map((item) =>{
                  return(
                <div className='card' key={item.id}>
                  <div className="image-card_filter">
                  <img src={item.images} alt={item.title} />
                  </div>
                  <h3 className='black_card_h3'>{item.title}</h3>
                </div>
                )
              })
              }
            
              </div>
              <button className='more_btn'
              onClick={()=>loadMore()}>load more project</button>

            
            </div>
      
    </section>
  )
}

export default Portifolio