import {Outlet} from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

function Default() {
    return (
        <>
           <SiteHeader /> 
            <main>
            <Outlet />
            </main>
            <SiteFooter />
        </>
    );
}

export default Default;