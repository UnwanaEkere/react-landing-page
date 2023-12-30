import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
      <div>
         OOps!!, wrong page, go to
<Link to ='/'>
    <button>
        Home page
    </button>
</Link>

        </div>
  )
}

export default Errorpage