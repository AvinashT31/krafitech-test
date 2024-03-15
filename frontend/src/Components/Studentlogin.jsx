import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Studentlogin = () => {

    const [studentData, setstudentData] = useState({ email: "", password: "" })
    console.log(studentData, "studentData")

    const route = useNavigate()

    const handleclick = async (e) => {
        e.preventDefault();

        if (studentData.email && studentData.password) {
            const response = await axios.post("http://localhost:8000/studentlogin", {
                email: studentData.email,
                password: studentData.password
            })
            if (response.data.status === 200) {
                alert(response.data.message);
                setstudentData({ email: "", password: "" })
                route("/studentpageone");
            } else if (response.data.status === 201) {
                alert(response.data.message);
                setstudentData({ email: "", password: "" })
            }
        }

    }

    const handleform = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setstudentData({ ...studentData, [name]: value })
    }
    return (
        <div >
            <div style={{ display: "flex", border: "1px solid black" }}>
                <form onSubmit={(e) => handleclick(e)}>
                    <label>email</label>
                    <input onChange={(e) => handleform(e)} name='email' value={studentData.email} type="text" placeholder='enter your email' />
                    <label>password</label>
                    <input onChange={(e) => handleform(e)} name='password' value={studentData.password} type="text" placeholder='enter your password' />
                    <input type="submit" value="login" />
                    <input type="submit" value= "admin login" onClick={() => route("/adminlogin")}/>
                </form>
            </div>

        </div>
    )
}

export default Studentlogin
