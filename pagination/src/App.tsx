import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trip: number;
  airline: Airline;
  __v: number;
}

interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passenger>;
}

function App() {
  const [page,setPage] = useState(0)
  const [totalPage,setTotalPage] = useState(0)
  const [items,setItems] = useState<Array<Passenger>>([])

  const handlePageChange = (currentPage : number):void => {
    setPage(currentPage)
  }
  useEffect(() => {
    const fetch = async () => {
      const params = {page, size:10};
      const {data : {totalPage,data}} = await axios.get('https://api.instantwebtools.net/v1/passenger',{params})
      setTotalPage(totalPage)
      setItems(data)
    }
    const a = async () => {
      console.log(await axios.get('http://13.124.8.234:8080/apis/v1/company/cs'))
    }

    fetch()
    a()
  }, [])

  return (
    <div className="App">
      <ul>
        {
          items.map(item=>(
            <li key={item._id}>
              {item.name}
            </li>
          ))
        }
      </ul>
      <Pagination count={totalPage} page={page} onPageChange={handlePageChange}></Pagination>
    </div>
  );
}

export default App;
