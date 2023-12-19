import Image from "next/image";
import Link from "next/link";
import React from 'react';
import FormPage from "./formpage";


// CSS
import './asset/css/bootstrap.min.css'
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/app.css'

import imageAsset from './asset/imgs/profile.jpg';
import { FaBars, FaSearch, FaRegUserCircle, FaChevronCircleDown, FaTimes } from "react-icons/fa";
import { IoKeyOutline, IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { LiaFaxSolid  } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

export default function OrderListA() {
    return (
        <section className="main">
            <div className="sidebar bg--dark">
                <button type="button" className="res-sidebar-close-btn"><FaTimes /></button>
                <div className="sidebar__inner">
                    <div className="sidebar__logo">
                        <a href="/location" className="sidebar__main-logo">
                        </a>
                    </div>
                    <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
                        <ul className="sidebar__menu">
                            <li className="sidebar-menu-item ">
                                <a href="/location/dashboard" className="nav-link ">
                                    <IoHomeOutline size={22} className="mr-2" />
                                    <span className="menu-title">Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-menu-item ">
                                <a href="/courier/send" className="nav-link ">
                                    <LuUsers size={22} className="mr-2" />
                                    <span className="menu-title">Quản lý nhân viên</span>
                                </a>
                            </li>
                            <li className="sidebar-menu-item ">
                                <a href="/location/courier/sent/queue" className="nav-link ">
                                    <LiaFaxSolid size={22} className="mr-2" />
                                    <span className="menu-title">Thống kê hàng</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className="navbar-wrapper bg--dark">
                <div className="navbar__left">
                    <button type="button" className="res-sidebar-open-btn me-3"><FaBars /></button>
                </div>
                <div className="navbar__right">
                    <ul className="navbar__action-list">
                        <li className="dropdown">
                            <button type="button" className="" data-bs-toggle="dropdown" data-display="static"
                                aria-haspopup="true" aria-expanded="false">
                                <span className="navbar-user">
                                    <span className="navbar-user__thumb">
                                        <Image
                                            src={imageAsset}
                                            alt="image" 
                                        />
                                    </span>
                                    <span className="navbar-user__info">
                                        <span className="navbar-user__name">Trưởng điểm giao dịch</span>
                                    </span>
                                    <span className="icon"><FaChevronCircleDown /></span>
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                                <a href="/location/profile"
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <FaRegUserCircle />
                                    <span className="dropdown-menu__caption">Thông tin</span>
                                </a>
            
                                <a href="/location/password"
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoKeyOutline />
                                    <span className="dropdown-menu__caption">Mật khẩu</span>
                                </a>
            
                                <a href="/location/logout"
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoIosLogOut />
                                    <span className="dropdown-menu__caption">Đăng xuất</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="body-wrapper">
                <div className="bodywrapper__inner">
                    <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                        <h6 className="page-title">Danh sách hàng gửi, hàng nhận</h6>
                        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="show-filter mb-3 text-end">
                                <button type="button" className="btn btn-outline--primary showFilterBtn btn-sm"> 
                                    Filter
                                </button>
                            </div>
                            <div className="card responsive-filter-card b-radius--10 mb-3">
                                <div className="card-body">
                                    {/* <form action="" onSubmit={handleSubmit}>
                                        <div className="d-flex flex-wrap gap-4">
                                            <div className="flex-grow-1">
                                                <label>Tìm kiếm</label>
                                                <input type="text" name="search" value="" className="form-control"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label> Trạng thái đơn hàng
                                                    <select name="status" className="form-control" onChange={handleOption1Change} value={selectedOption1}>
                                                        <option value="3">Tất cả</option>
                                                        <option value="0">Đã giao</option>
                                                        <option value="1">Chưa giao</option>
                                                        <option value="2">Đã gửi</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label> Trạng thái thanh toán
                                                    <select value={selectedOption2} name="payment_status" className="form-control" onChange={handleOption2Change}>
                                                        <option value="2">Tất cả</option>
                                                        <option value="1">Đã thanh toán</option>
                                                        <option value="0">Chưa thanh toán</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Ngày tạo</label>
                                                <input name="date" type="text" className="date form-control" placeholder="DD/MM/YY" autoComplete="off" value=""/>
                                            </div>
                                            <div className="flex-grow-1 align-self-end">
                                                <button type="submit" className="btn btn--primary w-100 h-45">
                                                    <i className="fas fa-filter"></i> Tìm
                                                </button>
                                            </div>
                                        </div>
                                    </form> */}
                                    <FormPage/>
                                </div>
                            </div>
                            <div className="card b-radius--10 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive--sm table-responsive">
                                        <table className="table table--light style--two">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Giao dịch viên phụ trách</th>
                                                    <th>Phân loại</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Trạng thái đơn hàng</th>
                                                    <th>Trạng thái thanh toán</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>2423553252</span>
                                                    </td>
                                                    <td>
                                                        <span>Employee 1</span>
                                                    </td>
                                                    <td>
                                                        <span>Hàng gửi</span> <br/>
                                                    </td>
                                                    <td>
                                                        <span>20/11/2023</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge--success">Đã giao</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge--success">Đã thanh toán</span>
                                                    </td>
                                                    <td>
                                                        <a href="" title="" className="btn btn-sm btn-outline--primary mr-2">
                                                            Chi tiết
                                                        </a>
                                                        <a href="" title="" className="btn btn-sm btn-outline--primary">
                                                            Xóa
                                                        </a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <span>2423553252</span>
                                                    </td>
                                                    <td>
                                                        <span>Employee 2</span>
                                                    </td>
                                                    <td>
                                                        <span>Hàng nhận</span> <br/>
                                                    </td>
                                                    <td>
                                                        <span>20/11/2023</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge--warning">Chưa nhận</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge--warning">Chưa thanh toán</span>
                                                    </td>
                                                    <td>
                                                        <a href="" title="" className="btn btn-sm btn-outline--primary mr-2">
                                                            Chi tiết
                                                        </a>
                                                        <a href="" title="" className="btn btn-sm btn-outline--primary">
                                                            Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                                
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer py-4">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
                                            <span className="page-link" aria-hidden="true">&lsaquo;</span>
                                        </li>
                                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/courier/dispatch?page=2">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/courier/dispatch?page=3">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/courier/dispatch?page=4">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/courier/dispatch?page=5">5</a>
                                        </li>
                                        <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/courier/dispatch?page=13">14</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="/location/courier/dispatch?page=14">15</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/courier/dispatch?page=2" rel="next" aria-label="Next &raquo;">
                                                &rsaquo;
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            </div>
                        </div>
                    </div>            
                </div>            
            </div>            
        </section>
    )
}