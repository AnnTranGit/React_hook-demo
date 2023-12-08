import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseEffect_DidMount = () => {

    const [number, setNumber] = useState(1)
    const [arrProduct, setArrProduct] = useState([])

    // console.log('123');

    useEffect(() => {
        // console.log('lần 1: chạy sau khi giao diện render xong lần 1')
        // console.log('lần 2: sau mỗi lần component render lại')
        getApiProduct();

    },[]) // su dung tham số dependency là array rỗng thì chi chạy 1 lần sau render ()

    const getApiProduct = () => {
        let promise = axios({
            url:'https://shop.cyberlearn.vn/api/Product',
            method: 'Get'
        })
        promise.then ((res) => {
            console.log(res.data.content);
            setArrProduct(res.data.content)
        })
    }

  return (
    <div className='container'>
        <button onClick={() =>{
            
        }}>
            Get Api
        </button>

        <h3>Product list</h3>

        <div className='row'>
           {arrProduct.map((prod) =>{
            return  <div className="col-md-3" key={prod.id}>
            <div className="card">
                <img src= {prod.image} alt="" />
                <div className="card-body">
                    <h3>{prod.name}</h3>
                    <p>{prod.price}</p>
                    <button>
                        <i className='fa fa-cart-plus'></i>
                        Add to cart
                    </button>
                </div>
            </div>
            </div>
           })}


        </div>


    </div>
  )
}

export default UseEffect_DidMount