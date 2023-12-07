import Image from "next/image";
import React from "react";
import Link from "next/link";

// CSS
import './asset/css/bootstrap.min.css'
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/app.css'
import './asset/css/iziToast.min.css'
import './asset/css/select2.min.css'

import imageAsset from './asset/imgs/profile.jpg';
import { FaBars, FaSearch, FaRegUserCircle, FaChevronCircleDown, FaTimes } from "react-icons/fa";
import { IoKeyOutline, IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { LiaFaxSolid  } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

export default function EmployeeListB() {
    return (
        <div class="page-wrapper default-version">
            <div class="sidebar bg--dark">
                <button class="res-sidebar-close-btn"><FaTimes /></button>
                <div class="sidebar__inner">
                    <div class="sidebar__logo">
                        <a href="/location/port" class="sidebar__main-logo">
                        </a>
                    </div>
                    <div class="sidebar__menu-wrapper" id="sidebar__menuWrapper">
                        <ul class="sidebar__menu">
                            <li class="sidebar-menu-item ">
                                <a href="/location/port/dashboard" class="nav-link ">
                                    <IoHomeOutline size={22} class="mr-2" />
                                    <span class="menu-title">Dashboard</span>
                                </a>
                            </li>
                            <li class="sidebar-menu-item ">
                                <a href="/location/port/employee-list" class="nav-link ">
                                    <LuUsers size={22} class="mr-2" />
                                    <span class="menu-title">Quản lý nhân viên</span>
                                </a>
                            </li>
                            <li class="sidebar-menu-item ">
                                <a href="/location/port/order-list" class="nav-link ">
                                    <LiaFaxSolid size={22} class="mr-2" />
                                    <span class="menu-title">Thống kê hàng</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav class="navbar-wrapper bg--dark">
                <div class="navbar__left">
                    <button type="button" class="res-sidebar-open-btn me-3"><FaBars /></button>
                </div>
                <div class="navbar__right">
                    <ul class="navbar__action-list">
                        <li class="dropdown">
                            <button type="button" class="" data-bs-toggle="dropdown" data-display="static"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="navbar-user">
                                    <span class="navbar-user__thumb">
                                        <Image
                                            src={imageAsset}
                                            alt="image" 
                                        />
                                    </span>
                                    <span class="navbar-user__info">
                                        <span class="navbar-user__name">Trưởng điểm tập kết</span>
                                    </span>
                                    <span class="icon"><FaChevronCircleDown /></span>
                                </span>
                            </button>
                            <div class="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                                <a href="/location/port/profile"
                                    class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <FaRegUserCircle />
                                    <span class="dropdown-menu__caption">Thông tin</span>
                                </a>
            
                                <a href="/location/port/password"
                                    class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoKeyOutline />
                                    <span class="dropdown-menu__caption">Mật khẩu</span>
                                </a>
            
                                <a href="/location/port/logout"
                                    class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoIosLogOut />
                                    <span class="dropdown-menu__caption">Đăng xuất</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="body-wrapper">
                <div class="bodywrapper__inner">
                    <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                        <h6 class="page-title">Danh sách nhân viên</h6>
                        <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="show-filter mb-3 text-end">
                                <button type="button" class="btn btn-outline--primary showFilterBtn btn-sm"> 
                                    Filter
                                </button>
                            </div>
                            <div class="card responsive-filter-card b-radius--10 mb-3">
                                <div class="card-body">
                                    <form action="">
                                        <div class="d-flex flex-wrap gap-4">
                                            <div class="flex-grow-1">
                                                <label>Tìm kiếm</label>
                                                <input type="text" name="search" value="" class="form-control"/>
                                            </div>
                                            <div class="flex-grow-1">
                                                <label>Chi nhánh</label>
                                                <select name="status" class="form-control">
                                                    <option value="">Tất cả</option>
                                                    <option value="0">Hà Đông</option>
                                                    <option value="1">Cầu Giấy</option>
                                                    <option value="1">Hoàng Mai</option>
                                                </select>
                                            </div>
                                            <div class="flex-grow-1">
                                                <label>Trạng thái tài khoản</label>
                                                <select name="payment_status" class="form-control">
                                                    <option value="" selected>Tất cả</option>
                                                    <option value="1">Đã kích hoạt</option>
                                                    <option value="0">Chưa kích hoạt</option>
                                                </select>
                                            </div>
                                            <div class="flex-grow-1">
                                                <label>Ngày tạo</label>
                                                <input name="date" type="text" class="date form-control" placeholder="DD/MM/YY" autocomplete="off" value=""/>
                                            </div>
                                            <div class="flex-grow-1 align-self-end">
                                                <button class="btn btn--primary w-100 h-45"><i class="fas fa-filter"></i> Tìm</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="card b-radius--10 ">
                                <div class="card-body p-0">
                                    <div class="table-responsive--sm table-responsive">
                                        <table class="table table--light style--two">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tài khoản</th>
                                                    <th>Mật khẩu</th>
                                                    <th>Chi nhánh</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Trạng thái tài khoản</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>2423553252</span>
                                                    </td>
                                                    <td>
                                                        <span>employee1@gmail.com</span>
                                                    </td>
                                                    <td>
                                                        <span>###########</span> <br/>
                                                    </td>
                                                    <td>
                                                        <span>Cầu Giấy</span>
                                                    </td>
                                                    <td>
                                                        <span>20/11/2023</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge--success">Đã kích hoạt</span>
                                                    </td>
                                                    <td>
                                                        <a href="" title="" class="btn btn-sm btn-outline--info mr-2">
                                                            Sửa
                                                        </a>
                                                        <a href="" title="" class="btn btn-sm btn-outline--primary">
                                                            Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span>2423553252</span>
                                                    </td>
                                                    <td>
                                                        <span>employee1@gmail.com</span>
                                                    </td>
                                                    <td>
                                                        <span>###########</span> <br/>
                                                    </td>
                                                    <td>
                                                        <span>Cầu Giấy</span>
                                                    </td>
                                                    <td>
                                                        <span>20/11/2023</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge--warning">Chưa kích hoạt</span>
                                                    </td>
                                                    <td>
                                                        <a href="" title="" class="btn btn-sm btn-outline--info mr-2">
                                                            Sửa
                                                        </a>
                                                        <a href="" title="" class="btn btn-sm btn-outline--primary">
                                                            Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="card-footer py-4">
                                <nav>
                                    <ul class="pagination">
                                        <li class="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
                                            <span class="page-link" aria-hidden="true">&lsaquo;</span>
                                        </li>
                                        <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                        <li class="page-item">
                                            <a class="page-link" href="/location/port/employee-list?page=page=2">2</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/location/port/employee-list?page=3">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/location/port/employee-list?page=4">4</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/location/port/employee-list?page=5">5</a>
                                        </li>
                                        <li class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>
                                        <li class="page-item">
                                            <a class="page-link" href="/location/port/employee-list?page=13">14</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="/location/port/employee-list?page=14">15</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="/location/port/employee-list?page=2" rel="next" aria-label="Next &raquo;">
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
        </div>
    )
}