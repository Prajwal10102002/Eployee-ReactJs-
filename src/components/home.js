import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {

    const [admin,setadmin] = useState('')
    const [employee,setemployee] = useState('')
    const [salary,setsalary] = useState('')

   

    useEffect(() => {
        axios.get('https://employee-node-mqjr.vercel.app/count').then((response) => {
            setemployee(response.data[0]['COUNT(*)']);
        })
    
        axios.get('https://employee-node-mqjr.vercel.app/admincount').then((response) => {
            setadmin(response.data[0]['COUNT(*)']);
        })
    
        axios.get('https://employee-node-mqjr.vercel.app/sum').then((response) => {
            setsalary(response.data[0]['SUM(salary)']);
        })
    }, [])


  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 p-5">
  <div class="col">
    <div class="card h-100">
      {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visualpharm.com%2Ffree-icons%2Fadmin-595b40b65ba036ed117d3b23&psig=AOvVaw2ZGhZ5hejqMiNa0ZqXIJn2&ust=1719401606351000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICKx6LU9oYDFQAAAAAdAAAAABAE" class="card-img-top"
        alt="Skyscrapers" /> */}
      <div class="card-body">
        <h5 class="card-title">Total Admin</h5>
        <p class="card-text">
         {admin}
        </p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top"
        alt="Los Angeles Skyscrapers" /> */}
      <div class="card-body">
        <h5 class="card-title">Total Employees</h5>
        <p class="card-text">
            {employee}
        </p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
        alt="Palm Springs Road" /> */}
      <div class="card-body">
        <h5 class="card-title">Total Salary</h5>
        <p class="card-text">
    {salary}
        </p>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Home
