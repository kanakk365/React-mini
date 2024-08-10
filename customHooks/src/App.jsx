
import './App.css'
import UseFetch from './components/use-fetch'


function App() {
 

  return (
    <>
      <UseFetch url={`https://dummyjson.com/products?limit=10&select=title,price` } options={limti=100}/>
    </>
  )
}

export default App
