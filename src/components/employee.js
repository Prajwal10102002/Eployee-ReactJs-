import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Employee = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://employee-node-mqjr.vercel.app/getemployee').then((response) => {
            console.log(response.data)
            if (response.data.length > 0) {
                setData(response.data)
            }
        })
    }, [setData])

    const handleDelete = (id) => {
        console.log(id)
        axios.delete('https://employee-node-mqjr.vercel.app/delete/' + id).then((respose) => {
            setData(data.filter(employee => employee.id !== id))
        })
    }

    return (
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>Employee List</h3>
            </div>
            <Link to="/create" className='btn btn-success'>Add Employee</Link>
            <div className='mt-3'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th style={{ width: "200px", whiteSpace: "nowrap",  overflow: "hidden", textOverflow: "ellipsis"}}>Address</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((employee, index) => {
                        return <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td >{employee.address}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.age}</td>
                            <td>
                                <Link to={`/employeeedit/` + employee.id} className='btn btn-primary btn-sm me-2'>Edit</Link>
                                <button onClick={e => handleDelete(employee.id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div >
  )
}

export default Employee