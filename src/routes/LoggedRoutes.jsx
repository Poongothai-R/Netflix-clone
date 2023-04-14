
import AdminLogin from "./AdminLogin";
import ClientLogin from "./ClientLogin";
import Navbar from "../navigationbar/Navbar";
import NavbarMobile from "../navigationbar/NavbarMobile";


export default function LoggedRoutes() {

  const checkAdmin = localStorage.checkAdmin;
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      {(checkAdmin === 'true') ? <AdminLogin /> : <ClientLogin />}
    </div>
  )
}


