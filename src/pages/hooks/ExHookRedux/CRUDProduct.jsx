import React from 'react'
import FormProduct from './FormProduct'

const CRUDProduct = () => {
  return (
    <div>
      <h3>Product Management</h3>
      <FormProduct/>
      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default CRUDProduct