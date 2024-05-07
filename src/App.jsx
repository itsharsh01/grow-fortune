import { lazy, Suspense } from "react"
const Header = lazy(() => import('./components/header/header'))
import './App.css'
import CircularProgress from '@mui/material/CircularProgress';
import Allroutes from "./services/allRoutes/allRoutes";

function App() {


  return (
    <Suspense fallback={<div style={{
      display: "grid", justifyContent: "center", placeItems: "center", position: "absolute", left: "50%",
      top: "50%"
    }}><CircularProgress style={{ color: "#dc3545" }} /></div>}>
      <Header />
      <Allroutes />
    </Suspense>
  )
}

export default App
