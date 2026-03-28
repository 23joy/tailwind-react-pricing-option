import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyUI/DaisyNav'
import NavBar from './Components/DaisyUI/NavBar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultChart from './Components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'



const PricingPromise=fetch('PricingData.json')
  .then(res=>res.json());
  const MarksPromise=axios.get('MarksData.json')

function App() {
  return (
    <>
    <header>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
        <PricingOption PricingPromise={PricingPromise}></PricingOption>
      </Suspense>
      <ResultChart></ResultChart>
      <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>} >
        <MarksChart MarksPromise={MarksPromise}></MarksChart>
      </Suspense>
    </main>
    </>
  )
}

export default App
