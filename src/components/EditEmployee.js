import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'


const EditEmployee = () => {

    const navigate = useNavigate()

    const { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState('')
    const [age, setAge] = useState('')


    useEffect(() => {
        axios.get('https://employee-node-mqjr.vercel.app/getemployee/' + id).then((response) => {
            setName(response.data[0].name)
            setEmail(response.data[0].email)
            setPhone(response.data[0].phone)
            setAddress(response.data[0].address)
            setSalary(response.data[0].salary)
            setAge(response.data[0].age)
        })
    }, [])

    const handleEdit = (e) => {
        e.preventDefault()
        axios.put('https://employee-node-mqjr.vercel.app/update/' + id, {
            name: name,
            email: email,
            phone: phone,
            address: address,
            salary: salary,
            age: age,
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                alert(response.data.message)
                navigate('/employee')
            } else {
                alert('Employee Updated')
                console.log(response.data.message)
                navigate('/employee')
                
            }
        }).catch((error) => {
            console.error("There was an error updating the employee!", error);
        });

        

    }


    return (
        <form className='p-5' onSubmit={handleEdit} >
            <h1 className='text-center mb-4'>Edit Employee</h1>

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

export default EditEmployee