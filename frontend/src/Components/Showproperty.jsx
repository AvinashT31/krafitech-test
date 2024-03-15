import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Showproperty = () => {


    const [showproperty, setshowproperty] = useState();
    console.log(showproperty, "showproperty");

    useEffect(() => {

        async function showdata() {
            const response = await axios.get("http://localhost:8000/showproperty")
            // console.log(response.data, "response")
            setshowproperty(response.data)
        }
        showdata()

    }, [])
    return (
        <div>
            <div>
                {showproperty && showproperty.map((e) => (
                    <div>
                        <div>
                            <p>{e.name}</p>
                        </div>
                        <div>
                            <p>{e.address}</p>
                        </div>
                        <div>
                            <p>{e.number}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Showproperty
