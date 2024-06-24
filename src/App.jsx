import'./App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from "./context/UserContextProvider"
import UserContext from './context/UserContext'



 function App() {
//   <UserContextProvider></UserContextProvider>

  return (
    <UserContextProvider>
      <h1>wlcm to bhumiahr city</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
