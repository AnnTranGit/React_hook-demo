import React from 'react'
import { useEffect } from 'react'

const UseEffect_Unmout = () => {

    useEffect(()=>{
        const timeout = setInterval (() => {
            console.log('call api');
        },1000);

        return () => {
            //return trong bat ki useEffect nao cũng sẽ kích hoạt khi component mất khỏ giao diện
            clearInterval(timeout)
        }
    },[])



  return (
    <div>UseEffect_Unmount</div>
  )
}

export default UseEffect_Unmout