import { Outlet } from "react-router-dom";

const PLCPublic = () => {
    const content = (
        <div>
        <Outlet />
        </div>
    )
    return content
}
export default PLCPublic