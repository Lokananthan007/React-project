import Homesec from "../pages/Homesec";
// import About from "./About";
import Serivce from "../pages/Service";
// import Dealar from "../pages/Dealar";
import Clean from "../pages/Clean";
// import Cart from "../pages/Cart";

function Home(){
    return(
        <div>
            <Homesec/>
            {/* <About/>*/}
            <Serivce/> 
            {/* <Dealar/> */}
            <Clean/>
            {/* <Cart/> */}
        </div>
       
    );
}
export default Home;