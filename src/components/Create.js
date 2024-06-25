import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState('')
    const [age, setAge] = useState('')
    const [registerStatus, setRegisterStatus] = useState('') // Added state for status message

    const handleAdd = (e) => {
        e.preventDefault()
        axios.post('https://employee-node-mqjr.vercel.app/create', {
            name: name,
            email: email,
            phone: phone,
            address: address,
            salary: salary,
            age: age,
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                setRegisterStatus(response.data.message)
            } else {
                setRegisterStatus("Employee Added")
            }

            if (response.data === 'Values Inserted') {
                alert('Employee Added')
                setName('')
                setEmail('')
                setPhone('')
                setAddress('')
                setSalary('')
                setAge('')

            }
        }).catch((error) => {
            console.error("There was an error adding the employee!", error);
        });



    }

    return (
        <form className='p-5' onSubmit={handleAdd}> {/* Changed to onSubmit */}
            <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form6Example3" className="form-control" placeholder='Full Name'
                    value={name} onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form6Example3" className="form-control" placeholder='Email'
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form6Example4" className="form-control" placeholder='Phone Number'
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <input type="number" id="form6Example5" className="form-control" placeholder='Salary'
                    value={salary} onChange={(e) => setSalary(e.target.value)}
                />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <input type="number" id="form6Example6" className="form-control" placeholder='Age'
                    value={age} onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <textarea className="form-control" id="form6Example7" placeholder='Address' rows="4"
                    value={address} onChange={(e) => setAddress(e.target.value)}
                ></textarea>
            </div>

            <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">Add Employee</button>



        </form>
    )
}

export default Create
