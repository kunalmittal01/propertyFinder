import React from 'react'

const Property = (props) => {
  // console.log(props)
  return (
    <div className="property">
        <img src={props.image} alt="" />
        <div className="prop-details mt-2 flex justify-between px-4">
           <div className="prop-price">
             <p><span className='text-xl text-purple-800 font-medium'>$ {props.price}</span><span className='text-gray-400 font-medium'>/month</span></p>
             <p className='text-xl font-semibold text-slate-800'>{props.name}</p>
           </div> 
           <div className="prop-fav">
             <button onClick={()=>props.fav(props.name)} className={`px-2 py-1 ${props.added[props.name] ? 'text-red-600' : 'text-gray-600'} rounded-full border border-gray-200`}><i className="fa-regular fa-heart"></i></button>
           </div>
        </div>   
           <p className='border-b text-gray-400 text-sm px-4 pb-2 border-gray-200'>{props.address}</p>
            <div className="prop-info mt-2 flex justify-between px-4">
                <div className="bed flex gap-2">
                    <i className="fa-solid text-gray-400 fa-bed"></i>
                    <p className='text-sm text-gray-400'>{props.info.bed} beds</p>
                </div>
                <div className="bathroom flex gap-2">
                    <i className="fa-solid fa-bath text-gray-400"></i>
                    <p className='text-sm text-gray-400'>{props.info.bathrooms} bathroom</p>
                </div>
                <div className="area flex gap-2">
                    <i className="fa-solid fa-square text-gray-400"></i>
                    <p  className='text-sm text-gray-400'>{props.info.area} sq ft</p>
                </div>
            </div>
    </div>
  )
}

export default Property