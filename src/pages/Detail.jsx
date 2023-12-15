import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Detail = () => {


  const [prodDetail,setProdDetail] = useState ({})

  //lay gia tri tu thanh url thong qua param tren the route
  const params = useParams()

  const getProductById = async () =>{
    const res = await axios ({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
      method:'GET'
    })
    setProdDetail(res.data.content)
  }
  useEffect (() =>{
    //goi API
    getProductById()
  },[params.id])



  return (
    <div>
      <h3>Details</h3>
      <p>param: {params.id}</p>
      <div className='row'>
        <div className="col-4">
          <img src={prodDetail.image} alt="..." height={300} />
        </div>
        <div className="col-8">
          <h3>{prodDetail.name}</h3>
          <p>{prodDetail.description}</p>
          <button className='btn btn-dark'>Add to cart <i className='fa fa-cart-plus'></i></button>
        </div>
      </div>
      <h3 className='mt-2'>Related Product</h3>
      <div className="row">
      {prodDetail.relatedProducts?.map((prod) => {
          return <div class="col-md-4" key={prod.id}>
            <div className='card'>
              <img src={prod.image} alt="..." />
              <div className='card-body'>
                <h3>{prod.name}</h3>
                <p>{prod.price} $</p>
                <NavLink className={'btn btn-dark'} to={`/detail/${prod.id}`}>View detail</NavLink>
              </div>
            </div>
          </div>
        })}
        
      </div>
      <div>
        len : {prodDetail.categories?.length}
      </div>
    </div>
  )
}

export default Detail