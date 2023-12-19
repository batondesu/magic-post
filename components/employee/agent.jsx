// Diem giao dich
'use client'
import Image from "next/image";
import React , {useState} from "react";
import Link from "next/link";

// CSS
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/bootstrap.min.css'
import './asset/css/app.css'

import imageAsset from './asset/imgs/profile.jpg';
import { FaBars, FaRegUserCircle, FaChevronCircleDown } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

export default function Agent() {

    const [selectedOption1, setSelectedOption1] = useState('0');
    const [selectedOption2, setSelectedOption2] = useState('0');

    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
    };
    
    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleSubmit = (event) => {
        // Xử lý logic khi biểu mẫu được gửi đi
        event.preventDefault();
        console.log('Selected Option 2:', selectedOption2);
    };

    return (
<<<<<<< HEAD:components/employee/agent.jsx
        <div class="page-wrapper default-version">
            <nav class="navbar-wrapper bg--dark">
                <div class="navbar__left">
                    <button type="button" class="res-sidebar-open-btn me-3"><FaBars /></button>
=======
        <section classNameName="page-wrapper default-version">
            <div className="sidebar bg--dark">
                <div className="sidebar__inner">
                    <div className="sidebar__logo">
                        <a href="/employee" className="sidebar__main-logo">
                        </a>
                    </div>
                    <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
                        <ul className="sidebar__menu">
                            <li className="sidebar-menu-item ">
                                <a href="/employee/dashboard" className="nav-link ">
                                    <IoHomeOutline size={22} className="mr-2" />
                                    <span className="menu-title">Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-menu-item ">
                                <a href="/courier/send" className="nav-link ">
                                    <LiaShippingFastSolid size={22} className="mr-2" />
                                    <span className="menu-title">Từ điểm giao dịch</span>
                                </a>
                            </li>
                            <li className="sidebar-menu-item ">
                                <a href="/employee/courier/sent/queue" className="nav-link ">
                                    <LuCombine size={22} className="mr-2" />
                                    <span className="menu-title">Từ điểm tập kết</span>
                                </a>
                            </li>
                            <li className="sidebar-menu-item ">
                                <a href="/employee/courier/sent/queue" className="nav-link ">
                                    <FaWpforms size={22} className="mr-2" />
                                    <span className="menu-title">Tạo đơn hàng</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className="navbar-wrapper bg--dark">
                <div className="navbar__left">
                    <button type="button" className="res-sidebar-open-btn me-3"><FaBars /></button>
>>>>>>> origin/trantoan:app/employee/porter/agent.jsx
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
                                        <span className="navbar-user__name">Nhân viên</span>
                                    </span>
                                    <span className="icon"><FaChevronCircleDown /></span>
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                                <a href="/employee/profile"
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <FaRegUserCircle />
                                    <span className="dropdown-menu__caption">Thông tin</span>
                                </a>
            
                                <a href="/employee/password"
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoKeyOutline />
                                    <span className="dropdown-menu__caption">Mật khẩu</span>
                                </a>
            
                                <a href="/employee/logout"
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoIosLogOut />
                                    <span className="dropdown-menu__caption">Đăng xuất</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

<<<<<<< HEAD:components/employee/agent.jsx
            <div class="body-wrapper">
                <div class="bodywrapper__inner">
                    <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                        <h6 class="page-title">Danh sách đơn hàng Chuyển đến từ điểm giao dịch</h6>
=======
            <div className="body-wrapper">
                <div className="bodywrapper__inner">
                    <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                        <h6 className="page-title">Danh sách đơn hàng chuyển đến từ điểm giao dịch</h6>
>>>>>>> origin/trantoan:app/employee/porter/agent.jsx
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
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className="d-flex flex-wrap gap-4">
                                            <div className="flex-grow-1">
                                                <label>Tìm kiếm</label>
                                                <input type="text" name="search" value="" className="form-control"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Trạng thái
                                                    <select name="status" className="form-control" value={selectedOption1} onChange={handleOption1Change}>
                                                        <option value="0">Tất cả</option>
                                                        <option value="1">Đã gửi</option>
                                                        <option value="2">Đã giao</option>
                                                        <option value="3">Đã nhận</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Trạng thái thanh toán
                                                    <select value={selectedOption2} name="payment_status" className="form-control" onChange={handleOption2Change}>
                                                        <option value="0">Tất cả</option>
                                                        <option value="1">Đã thanh toán</option>
                                                        <option value="2">Chưa thanh toán</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Ngày tạo</label>
                                                <input name="date" type="text" className="date form-control" placeholder="DD/MM/YY" autoComplete="off" value=""/>
                                            </div>
                                            <div className="flex-grow-1 align-self-end">
                                                <button type="submit" className="btn btn--primary w-100 h-45"><i className="fas fa-filter"></i> Tìm</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card b-radius--10 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive--sm table-responsive">
                                        <table className="table table--light style--two">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Chi nhánh gửi</th>
                                                    <th>Chi nhánh nhận</th>
                                                    <th>Thành tiền</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Trạng thái đơn hàng</th>
                                                    <th>Trạng thái thanh toán</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>123456789</span>
                                                    </td>
                                                    <td>
                                                        <span>Văn Quán, Hà Đông</span>
                                                    </td>
                                                    <td>
                                                        <span>Mai Dịch, Cầu Giấy</span> <br/>
                                                    </td>
                                                    <td>
                                                        <span>2,000,000 VNĐ</span>
                                                    </td>
                                                    <td>
                                                        <span>28/11/2023</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge--danger">Đang giao</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge--danger">Đẫ thanh toán</span>
                                                    </td>
                                                    <td>
                                                        <a href="" title="" className="btn btn-sm btn-outline--info mr-2">
                                                            Sửa
                                                        </a>
                                                        <a href="" title="" className="btn btn-sm btn-outline--primary">
                                                            Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                    <span>123456789</span>
                                                </td>
                                                <td>
                                                    <span>Văn Quán, Hà Đông</span>
                                                </td>
                                                <td>
                                                    <span>Mai Dịch, Cầu Giấy</span> <br/>
                                                </td>
                                                <td>
                                                    <span>2,000,000 VNĐ</span>
                                                </td>
                                                <td>
                                                    <span>28/11/2023</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge--danger">Đang giao</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge--danger">Đẫ thanh toán</span>
                                                </td>
                                                <td>
                                                    <a href="" title="" className="btn btn-sm btn-outline--info mr-2">
                                                        Sửa
                                                    </a>
                                                    <a href="" title="" className="btn btn-sm btn-outline--primary">
                                                        Xóa
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>123456789</span>
                                                </td>
                                                <td>
                                                    <span>Văn Quán, Hà Đông</span>
                                                </td>
                                                <td>
                                                    <span>Mai Dịch, Cầu Giấy</span> <br/>
                                                </td>
                                                <td>
                                                    <span>2,000,000 VNĐ</span>
                                                </td>
                                                <td>
                                                    <span>28/11/2023</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge--danger">Đang giao</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge--danger">Đẫ thanh toán</span>
                                                </td>
                                                <td>
                                                    <a href="" title="" className="btn btn-sm btn-outline--info mr-2">
                                                        Sửa
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
                                            <a className="page-link" href="/employee/courier/dispatch?page=2">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/courier/dispatch?page=3">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/courier/dispatch?page=4">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/courier/dispatch?page=5">5</a>
                                        </li>
                                        <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/courier/dispatch?page=13">14</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="/employee/courier/dispatch?page=14">15</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/courier/dispatch?page=2" rel="next" aria-label="Next &raquo;">
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
<<<<<<< HEAD:components/employee/agent.jsx
        </div>      
=======
        </section>
>>>>>>> origin/trantoan:app/employee/porter/agent.jsx
    )
}