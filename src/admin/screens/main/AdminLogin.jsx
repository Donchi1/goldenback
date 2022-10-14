import React, { useState } from 'react'


export default function () {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={handleSubmit} className="overflow-hidden">
      <div className=" h-screen  px-8 py-8  flex justify-center items-center ">
        <div className="flex px-8 pb-8 shadow-lg rounded-md bg-gray-50 flex-col items-center lg:w-2/4 w-full mx-auto space-y-4 border">
          <div className="text-3xl ml-4 mt-4 text-center uppercase font-extrabold  lg:ml-0 pt-4 text-gray-500">
            <span>Admin Golden Login</span>
          </div>
          <p className="text-center text-blue-600">Login your account</p>
          <div className="w-full ">
            <label htmlFor="email" className="py-2 text-lg text-gray-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="py-4 duration-500 px-4 outline-none focus:border-blue-400 focus:outline-none rounded bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full"
            />
          </div>
          <div className="w-full ">
            <label htmlFor="password" className="py-4 text-lg text-gray-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="py-4 px-4 outline-none focus:border-blue-400 focus:outline-none rounded duration-500 bg-gray-100 border-2 transition-all ease-linear border-gray-400 hover:border-blue-400 w-full "
            />
           
          </div>

          <button className=" mt-2 py-4 w-full text-lg uppercase bg-blue-500 text-white focus:outline-none outline-none rounded">
            Submit
          </button>
          
         
          
        </div>
      </div>
    </form>
  )
}
