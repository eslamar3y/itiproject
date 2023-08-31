import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SideBar() {
    let _navigate = useNavigate();


    return (
        <div
            className="sidebar bg-dark text-light p-4 text-center"
            style={{ flexBasis: "12%", minHeight: "100vh" }}
        >
            <ul className="list-unstyled">
                <h2 className="text-white">Sidebar</h2>
                <li className=" mt-5">
                    <Link
                        to="/admin/products"
                        className="text-light text-decoration-none btn btn-outline-info"
                        style={{ width: "120px" }}
                    >
                        Products List
                    </Link>
                </li>
                <li className=" mt-3">
                    <Link to="/admin/users" className="text-light text-decoration-none btn btn-outline-secondary" style={{ width: "120px" }}>
                        Users List
                    </Link>
                </li>
                <li className=" mt-3">
                    <Link
                        to="/"
                        className="text-light text-decoration-none btn btn-outline-warning"
                        style={{ width: "120px" }}
                    >
                        Home
                    </Link>
                </li>
                <li className=" mt-3">
                    <button
                        className="text-light text-decoration-none btn btn-outline-danger"
                        style={{ width: "120px" }}
                        onClick={() => {
                            _navigate("/");
                            localStorage.removeItem("user");
                        }}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SideBar