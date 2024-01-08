'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending} className='btn btn-outline btn-primary my-2'>
      SUBMIT ORDER
    </button>
  )
}

export default function OrderForm() {

    const [price, setPrice] = useState(0);

    return(
        <form className="form-control w-full mt-5 max-w-md h-fit px-5">
            <p className='text-3xl font-bold mb-2'>ORDER</p>
            <div className='grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2'>
            <select className="select select-bordered w-full my-2" onChange={(e)=>{
                    if(e.target.value == "Shirt"){
                        setPrice(17)
                    }else if(e.target.value == "Sweater"){
                        setPrice(30)
                    }else if(e.target.value == "Sport Shirt"){
                        setPrice(20)
                    }}} 
                    defaultValue="Item"
                    required>
                <option disabled>Item</option>
                <option>Shirt</option>
                <option>Sweater</option>
                <option>Sport Shirt</option>
            </select>
            <select className="select select-bordered w-full my-2" defaultValue="Size" required>
                <option disabled>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
            </select>
            <select className="select select-bordered w-full my-2" defaultValue="Color" required>
                <option disabled>Color</option>
                <option>Black</option>
                <option>Blue</option>
            </select>
            </div>
            <input id="name" name="name" type="text" placeholder="Name" className="input input-bordered w-full my-2" required/>
            <input id="email" name="email" type="text" placeholder="Email" className="input input-bordered w-full my-2" required/>
            <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox mr-2" required/>
                <span className="label-text">I agree to paying the full amount listed below before XX-XX-XXXX. I understand that otherwise my order will not be fullfilled.</span> 
            </label>
            <p className='font-bold text-xl'>Total Price €{price}.00</p>
            <SubmitButton />
        </form>
        
    );
}