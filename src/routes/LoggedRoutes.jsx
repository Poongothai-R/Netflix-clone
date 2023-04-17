import AdminLogin from "./AdminLogin";
import ClientLogin from "./ClientLogin";
import Navbar from "../components/navigationbar/Navbar";
import NavbarMobile from "../components/navigationbar/NavbarMobile";

// good
export default function LoggedRoutes() {
  const checkAdmin = localStorage.checkAdmin;
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      {checkAdmin === "true" ? <AdminLogin /> : <ClientLogin />}
    </div>
  );
}
