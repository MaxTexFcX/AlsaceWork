import { Outlet } from "react-router-dom";

//Pages
import PublicNavBar from "../components/PublicNavBar";
import PublicFooter from "../components/PublicFooter";

const Public = () => {
    const content = (
        <div>
            <div>
                <PublicNavBar />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <PublicFooter />
            </div>
        </div>


    )
    return content
};

export default Public