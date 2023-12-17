import './App.css'
import Homepage from './pages/Index'
import { GlobalContext } from './context'
import { RouterProvider } from 'react-router-dom'
import {router} from "./routers"
function App() {
  const user = {
    username: 'Dzaky'
  }
  const value = false
  return (
    <>
    {/* kondisional randering */}
      {/* {value ? "benar" : "salah"}  */}
      <GlobalContext.Provider value={user}>
        {/* <Homepage></Homepage> */}
        <RouterProvider router={router}></RouterProvider>
      </GlobalContext.Provider>
    </>
  )
}

export default App
