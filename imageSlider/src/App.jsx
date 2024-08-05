
import './App.css'
import Test from './componentes/imageSlider/Test'

function App() {
  

  return (
    <>
     <Test url={`https://picsum.photos/v2/list`} page={"1"} limit={"10"}  />
    </>
  )
}

export default App
