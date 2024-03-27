import RoutesApp from './routes'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
   
      <div>
        
        <h1 className="App">
          <ToastContainer autoClose={3000}/>
          <RoutesApp/>
        </h1>
      </div>
    
  
  )
}

export default App