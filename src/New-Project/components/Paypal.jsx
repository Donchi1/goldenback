import React from 'react'
import {PayPalButtons} from '@paypal/react-paypal-js'

export default function PayPal({ clearCart, replace, total }) {


  const onCancel = (data) => {
    
    console.log('The payment was cancelled!', data)
   
  }

  const onError = (err) => {
   
    console.log('Error!', err)
   
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units : [
        {
          amount:{value :total()}
        }
      ]
    })
  }

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture()
    console.log("order", order)
    handleApprove(data)


  }

  const handleApprove = (data) => {
     console.log(data)
     // backend call
     // if success
      clearCart()
    replace('/product/order')
  }



  return (
    <div className="mt-8">

      <PayPalButtons
       
      onCancel={onCancel}
      onApprove={onApprove}
      onError={onError}
      createOrder={createOrder}
      
        
      />
    </div>
  )
}
