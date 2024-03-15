import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {
  const [adminData, setadminData] = useState({ email: "", password: "" })
    console.log(adminData, "adminData")

    const route = useNavigate()

    const handleclick = async (e) => {
        e.preventDefault();

        if (adminData.email && adminData.password) {
            const response = await axios.post("http://localhost:8000/adminlogin", {
                email: adminData.email,
                password: adminData.password
            })
            if (response.data.status === 200) {
                alert(response.data.message);
                setadminData({ email: "", password: "" })
                route("/homepage")
            } else if (response.data.status === 201) {
                alert(response.data.message);
                setadminData({ email: "", password: "" })
            }
        }

    }

    const handleform = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setadminData({ ...adminData, [name]: value })
    }
  return (
    <div>
      <div style={{ display: "flex", border: "1px solid black" }}>
                <form onSubmit={(e) => handleclick(e)}>
                    <label>email</label>
                    <input onChange={(e) => handleform(e)} name='email' value={adminData.email} type="text" placeholder='enter your email' />
                    <label>password</label>
                    <input onChange={(e) => handleform(e)} name='password' value={adminData.password} type="text" placeholder='enter your password' />
                    <input type="submit" value="login" />
                
                </form>
            </div>

    </div>
  )
}

export default Adminlogin
