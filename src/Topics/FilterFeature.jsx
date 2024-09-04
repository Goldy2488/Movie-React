import React from 'react'

const FilterFeature = () => {
    const products = [
        {id:1,title:'iphone - 16',category:'mobiles',price:9000},
        {id:2,title:'Hp probook',category:'laptop',price:8000},
        {id:3,title:'Mi tab',category:'tabletes',price:6000},
        {id:4,title:'Redme',category:'moblies',price:8000},
        {id:5,title:'realme10',category:'mobiles',price:2000},
    ]
    const filterProducts = products.filter((data)=>data.category== "mobiles")
    console.log(filterProducts)
  return (
    <div>
        {filterProducts.map((pro)=>< div key="pro.id">
            <h1>{pro.category},{pro.title},{pro.price}</h1> </div>
        )}
    </div>
  )
}

export default FilterFeature
