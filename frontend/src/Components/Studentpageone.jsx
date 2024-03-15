import React from 'react'
import { useNavigate } from 'react-router-dom'

const Studentpageone = () => {
  const route = useNavigate()
  return (
    <div>
      <button onClick={() => route("/property")}>add property</button>
    </div>
  )
}

export default Studentpageone
