import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import "./index.css";

const Layout = () => {
    const location = useLocation();
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname;
        switch (currentPath) {
            case '/':
                setIsFirstPage(true);
                setIsLastPage(false);
                break;
            case '/recap':
                setIsFirstPage(false);
                setIsLastPage(true);
                break;
            default:
                setIsFirstPage(false);
                setIsLastPage(false);
        }

    }, [location.pathname]);

    return <body>
        <div className="page-container">
            <header>
            <p id="left">Dine Digest</p>
            <div id="right">
                <Link to={"/"}>Home</Link>
            </div>
            </header>
            <Outlet />
        </div>
    </body>
}

export default Layout;