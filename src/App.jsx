import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default function App(){

  return(
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar/>
      <main id="main-content">
        <AppRoutes/>
      </main>
      <Footer />
      
    </> 
  )
}
