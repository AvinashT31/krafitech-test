import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const [studentregisterdata, setstudentregisterdata] = useState({ name: "", email: "", password: "" });
    console.log(studentregisterdata, "studentregisterdata");

    const route = useNavigate()


    const handleclick = async (e) => {
        e.preventDefault();

        if (studentregisterdata.name && studentregisterdata.email && studentregisterdata.password) {
            const response = await axios.post("http://localhost:8000/studentregister", {
                name:studentregisterdata.name,
                email: studentregisterdata.email,
                password: studentregisterdata.password
            })
            if (response.data.status === 200) {
                alert(response.data.message);
                setstudentregisterdata({ email: "", password: "" })
                route("/")
            } else if (response.data.status === 201) {
                alert(response.data.message);
                setstudentregisterdata({ email: "", password: "" })
            }
        }

    }

    const handleform = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setstudentregisterdata({ ...studentregisterdata, [name]: value })
    }

    return (
        <div>
            <div>
                <form onSubmit={(e) => handleclick(e)}>
                    <label>name</label>
                    <input type="text" onChange={(e) => handleform(e)} name='name' value={studentregisterdata.name} placeholder='enter your name' />
                    <label>email</label>
                    <input type="text" onChange={(e) => handleform(e)} name='email' value={studentregisterdata.email} placeholder='enter your email' />
                    <label>password</label>
                    <input type="text" onChange={(e) => handleform(e)} name='password' value={studentregisterdata.password} placeholder='enter your password' />
                    <input type="submit" value="create user" />
                </form>
            </div>
        </div>
    )
}

export default Homepage
