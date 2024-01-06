import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../components/Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout children={<Home />} />,
    }, {
        path: "/about",
        element: <CommonLayout children={<About />} />
    }
])


export default router;