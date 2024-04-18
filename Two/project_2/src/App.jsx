import { useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [companyname, setcompanyname] = useState("")
  const [categoryname, setcategoryname] = useState("")
  const [top, setTop] = useState(0)
  const [minPrice, setminPrice] = useState(0)
  const [maxPrice, setmaxPrice] = useState(0)
  const [data, setData] = useState([])

  useState(() => {
    const response = axios.get(https://20.244.56.144/test/companies/:${companyname}/categories/:${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice})
    setData(response.data))
  }, [companyname, categoryname])



  return (
    <>
      <div>
      <h1>
         <strong>E-commerce Products</strong>
      </h1>
      <div>
        <label>Companyname:</label>
        <input type="text" value={companyname} onChange={e => setcompanyname(e.target.value)} />
        <p>example: AMZ, FLP, SNP, MYN, AZO</p>
      </div>
      <div>
        <label>Categoryname:</label>
        <input type="text" value={categoryname} onChange={e => setcategoryname(e.target.value)} />
        <p>example: Phone, Computer, TV, Earphone</p>
      </div>
      <div>
        <label>Top:</label>
        <input type="number" value={top} onChange={e => setTop(e.target.value)} />
        <p>example: 1, 2, 3, 4</p>
      </div>
      <div>
        <label>Minnimum Price:</label>
        <input type="number" value={minPrice} onChange={e => setminPrice(e.target.value)} />
        <p>example: 1 - 3000</p>
      </div>
      <div>
        <label>Maximum Price:</label>
        <input type='number' value={maxPrice} onChange={e => setmaxPrice(e.target.value)} />
        <p>example: 1 - 3000</p>
      </div>

      <p>{data}</p>
      
    </div>
       
    </>
  )
}

export default App