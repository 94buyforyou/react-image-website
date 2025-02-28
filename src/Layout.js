import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            {" "}
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">首頁</Link>
                        </li>
                        <li>
                            <Link to="/about">關於這個網站</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
