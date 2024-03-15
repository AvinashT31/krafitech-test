import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Property = () => {

  const [property, setproperty] = useState({ name: "", address: "", number: "" });
  console.log(property, "property");

  const route = useNavigate()


  const handleclick = async (e) => {
    e.preventDefault();

    if (property.name && property.address && property.number) {
      const response = await axios.post("http://localhost:8000/propertyregister", {
        name: property.name,
        address: property.address,
        number: property.number,
      })
      if (response.data.status === 200) {
        alert(response.data.message);
        setproperty({ name: "", address: "", number: "" })
        route("/")
      } else if (response.data.status === 201) {
        alert(response.data.message);
        setproperty({ name: "", address: "", number: "" })
      }
    }

  }

  const handleform = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setproperty({ ...property, [name]: value })
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleclick(e)}>
          <label>name</label>
          <input type="text" onChange={(e) => handleform(e)} name='name' value={property.name} placeholder='enter your name' />
          <label>address</label>
          <input type="text" onChange={(e) => handleform(e)} name='address' value={property.address} placeholder='enter your email' />
          <label>number</label>
          <input type="text" onChange={(e) => handleform(e)} name='number' value={property.number} placeholder='enter your password' />
          <input type="submit" value="create user" />
        </form>
      </div>
    </div>
  )
}

export default Property
