import { useEffect, useState } from "react"
import Hero from "./Components/Hero/Hero"
import Axios from "axios"

function App() {
  const [backend, setBackend] = useState()
  console.log(backend)

  useEffect(() => {
    const getData = async () => {
      const data = await Axios.get("http://localhost:5555/api")
      setBackend(data.data)
    }

    getData()
  }, [])

  return (
    <div className="text-blue-400 text-4xl font-bold">
      <Hero />
      {backend}
    </div>
  )
}

export default App
