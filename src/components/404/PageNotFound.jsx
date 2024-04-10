import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <div className="container">
      <div className="flex justify-center">
        <img src={require("../../assets/Scarecrow.png")} alt="404-Scarecrow" className='h-56 w-full object-contain'/>
      </div>
      <div className="flex-col-2 ml-56 justify-center">
        <h2 className="">I have bad news for you</h2>
        <p className="">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button className="border border-black p-2 m-2 bg-slate-300"><Link to="/">Back to homepage</Link></button>
      </div>
    </div>
    </div>
  )
}

export default PageNotFound
