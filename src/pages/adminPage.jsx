import AdminComponent from "../components/adminComponent";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function AdminPage (){
    return(
        <>
        <Navbar />
        <AdminComponent/>
        <Footer />
      </>
    )
}