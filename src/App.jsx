

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
        <div className='bg-slate-200'>
      
            <h1 className='text-2xl text-center'>Vite + React</h1>

             <Navbar></Navbar>

             <PriceOptions></PriceOptions>


       </div>
    </>
  )
}

export default App
