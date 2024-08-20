import { useState } from "react"
import { Link } from 'react-router-dom'
import Button from "./Button"

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
  }
  const clicked = () => {
    setIsVisible(false)
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-300 p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to='/' onClick={ clicked }className="font-semibold text-xl tracking-tight">Digit</Link>

        </div>
        <div className="block">
                <Button className="flex-items-center px-3 py-2 text-teal-200 
                border rounded border-blue-400 hover:text-white hover:border-white"
                >
                    <button
                    onClick={ dropDown } 
                    className="flex-items-center"></button>
                    <i className="fas fa-bars"></i>
                </Button>
        </div>
        { isVisible? (
        <div className="W-full block flex-grow items-center">
            <div className="text-sm lg:flex-grow">
                <Button className="p-3 m-5 bg-blue-400 justify-center">
                    <div>
                        <Link to="../pages/Home" className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-blue-200 hover:text-white mr-4">
                            Home
                        </Link>
                    </div>
                </Button>
                <Button className="p-3 m-5 bg-blue-400 justify-center">
                    <div>
                        <Link to="../components/ContactForm" className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-blue-200 hover:text-white mr-4">
                            Contact
                        </Link>
                    </div>
                </Button>
                <Button className="p-3 m-5 bg-blue-400 justify-center">
                    <div>
                        <Link to="../pages/About" className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-blue-200 hover:text-white mr-4">
                            About
                        </Link>
                    </div>
                </Button>
                <Button className="p-3 m-5 bg-blue-400 justify-center">
                    <div>
                        <Link to="../pages/Dashboard" className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-blue-200 hover:text-white mr-4">
                            Dashboard
                        </Link>
                    </div>
                </Button>
            </div>
        </div>
        ) : (
        <></>
        )}
    </nav>
  )
}

export default Navbar