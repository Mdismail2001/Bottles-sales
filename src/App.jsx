import { Suspense, useState } from 'react'
import Bottles from './components/Bottles'

const bottlesPromise = fetch('/bottol.json')
                      .then(res => res.json())

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Suspense fallback ={<h1>data loading.....</h1>}>
            <Bottles bottlesPromise={bottlesPromise}></Bottles>
        </Suspense>

    </>
  )
}

export default App
