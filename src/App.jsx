import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CheckoutStepper from './components/CheckoutStepper'
const CHECKOUT_STEPS =[
  {
    name:"Customer Info",
    Component:()=> <div>Provide your contact details</div>
  },
  {
    name:"Shipping Info",
    Component:()=> <div>Enter your shipping addres</div>
  },
  {
    name:"Payment",
    Component:()=> <div>Complete payment for your order</div>
  },
  {
    name:"Deliverd",
    Component:()=> <div>Your order has been delivered</div>
  },


]

function App() {

  const [count, setCount] = useState(0)


  return (
    <>
   <CheckoutStepper stepConfig={CHECKOUT_STEPS} />
    </>
  )
}

export default App
