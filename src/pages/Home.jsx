import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import payload from '../assets/payload'
import Property from '../components/Property'
import { toast } from 'react-toastify'
import { Pagination } from '@mui/material'
import BasicPagination from '../components/Pagination'

const Home = () => {
    const [query, setQuery] = useState({
        location: '',
        type: '',
        price: '0-0'
    });
    const [properties, setProperties] = useState([]);
    const [inp,setInp] = useState({
        location: '',
        type: '',
        price: '0-0'
    });
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [added, setAdded] = useState(JSON.parse(localStorage.getItem('added')) || {});
    const handleQuery = (e) => {
        setQuery({...query, [e.target.name]: e.target.value })
    }
    const handleSearch = () => {
        setInp(query);
    }
    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };
    const handleFav = (id) => {
        const index = payload.findIndex(data => data.name==id);
        const fav = JSON.parse(localStorage.getItem('fav')) || [];
        const exist = fav.findIndex(item => item.name==id);
        if(exist == -1){
            // payload[index].added = true;
            const addCpy = {...added, [id]: true}
            setAdded(addCpy);
            fav.push(payload[index]);
            localStorage.setItem('fav', JSON.stringify(fav));
            localStorage.setItem('added', JSON.stringify(addCpy));
            toast.success("Added to favorites")
        }
        else {
            // payload[index].added = false;
            const addCpy = {...added, [id]: false}
            setAdded(addCpy);
            fav.splice(exist,1);
            localStorage.setItem('fav', JSON.stringify(fav));
            localStorage.setItem('added', JSON.stringify(addCpy));
            toast.success("Removed from favorites")
        }
    }
    useEffect(()=>{
        propertyDisplay();
        console.log(added)
    },[added])
    const propertyDisplay = () => {
        const data = payload.filter(property=>{
            const minPrice = Number(inp.price.split('-')[0]);
            const maxPrice = Number(inp.price.split('-')[1]);

            return property.city?.toLowerCase().includes(inp.location?.toLowerCase()) &&
            property.type.split(' ')[1]?.toLowerCase().includes(inp.type?.toLowerCase()) &&
            property.price >= minPrice && (maxPrice == 0 || property.price <= maxPrice) 
        })
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedData = data.slice(startIndex, endIndex);
        setProperties(paginatedData.map(payload => {
            return <Property added={added} fav={handleFav} key={payload.name} {...payload} />
        }));
    }
    useEffect(()=>{
        propertyDisplay();
    },[inp, currentPage])
  return (
    <>
        <Navbar />
        <div className="home-wrap mx-auto mt-8">
            <p className='text-2xl mb-4'>Search properties to rent</p>
            <div className="search overflow-auto bg-white p-2 flex justify-around items-center gap-5">
                <div className="loaction">
                    <p className='text-gray-500 font-medium'>Location</p>
                    <input value={query.location} name='location' onChange={handleQuery} type="text" placeholder="Enter your location" />
                </div>
                <div className="divider h-8 w-1 bg-slate-200"></div>
                <div className="Date">
                    <p className='text-gray-500 font-medium'>When</p>
                    <input name='date' type="date" placeholder="Select a date" />
                </div>
                <div className="divider h-8 w-1 bg-slate-200"></div>
                <div className="price-range">
                    <p className='text-gray-500 font-medium'>Price</p>
                    <select value={query.price} onChange={handleQuery} name="price" id="">
                        <option value="0-0">Any</option>
                        <option value="100-500">$100 - $500</option>
                        <option value="500-1000">$500 - $1000</option>
                        <option value="1000-2000">$1000 - $2000</option>
                        <option value="2000-3000">$2000 - $3000</option>
                        <option value="3000-4000">$3000 - $4000</option>
                    </select>
                </div>
                <div className="divider divider h-8 w-1 bg-slate-200"></div>
                <div className="property-type">
                    <p className='text-gray-500 font-medium'>Property Type</p>
                    <select value={query.type} onChange={handleQuery} name="type" id="">
                    <option value="">All</option> 
                    <option value="house">house</option>
                    <option value="farm-house">farm-house</option>
                    <option value="hotel">hotel</option>
                    <option value="pg">pg</option>
                    <option value="villa">villa</option>
                    <option value="oyo">oyo</option>
                    </select>
                </div>
                <button onClick={handleSearch} className="search-btn px-4 py-2 hover:bg-purple-900 rounded-md text-white bg-violet-700">Search</button>
            </div>
            <div className="property-cont flex mt-6 flex-wrap gap-10">
                {properties.length == 0 ? <div className='flex justify-center w-full items-center h-64 text-2xl'>No Results Found!</div> : properties}
            </div>
        </div>
        <div className="pagination-wrap flex justify-center mt-6">
          <Pagination
            count={Math.ceil(payload.filter((property) => {
              const minPrice = Number(inp.price.split('-')[0]);
              const maxPrice = Number(inp.price.split('-')[1]);

              return (
                property.city?.toLowerCase().includes(inp.location?.toLowerCase()) &&
                property.type.split(' ')[1]?.toLowerCase().includes(inp.type?.toLowerCase()) &&
                property.price >= minPrice &&
                (maxPrice == 0 || property.price <= maxPrice)
              );
            }).length / itemsPerPage)} // Calculate total pages
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
    </>
  )
}

export default Home