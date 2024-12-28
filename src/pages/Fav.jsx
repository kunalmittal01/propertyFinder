import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Property from '../components/Property';
import payload from '../assets/payload';
import { toast } from 'react-toastify';

const Fav = () => {
  const [fav, setFav] = useState([]);
  const [disp, setDisp] = useState([]);
  const [added, setAdded] = useState(JSON.parse(localStorage.getItem('added')) || {});
  const getFav = () => {
    const data = JSON.parse(localStorage.getItem('fav')) || []; 
    setFav(data);
  }
  const handleDelete = (id) => {
    const exist = fav.findIndex(item => item.name==id);
    const addCpy = {...added, [id]: false}
    setAdded(addCpy);
    localStorage.setItem('added', JSON.stringify(addCpy));
    const copy = [...fav];
    copy.splice(exist,1);
    localStorage.setItem('fav', JSON.stringify(copy));
    setFav(copy);
    toast.success("Removed from favorities");
  }
  const propertyDisplay = () => {
    const data = fav.map(payload => {
        return <Property added={added} fav={handleDelete} key={payload.name} {...payload} />
    })
    setDisp(data);
}
  useEffect(() => {
    getFav();
  }, [])
  useEffect(()=>{
    propertyDisplay();
  },[fav])
  return (
    <>
        <Navbar />
        {disp.length==0 ? <div className='flex justify-center text-2xl items-center h-96'>Nothing Saved Yet!</div> : 
        <div className="fav-cont flex flex-wrap gap-5 mt-8 mx-auto">
          {disp}
        </div>
        }
    </>
  )
}

export default Fav