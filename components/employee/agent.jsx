// Diem giao dich

import Image from "next/image";
import React from "react";
import Link from "next/link";

// CSS
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/bootstrap.min.css'
import './asset/css/app.css'

import imageAsset from './asset/imgs/profile.jpg';
import { FaBars, FaRegUserCircle, FaChevronCircleDown } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection} from "@nextui-org/react";

export default function Agent() {
    return (
        <div class="page-wrapper default-version">
            <nav class="navbar-wrapper bg--dark">
                <div class="navbar__left">
                    <button type="button" class="res-sidebar-open-btn me-3"><FaBars /></button>
                </div>
                <div class="navbar__right">
                    <Dropdown class="navbar__action-list">
                        <DropdownTrigger class="dropdown">
                            <button type="button" class="" data-toggle="dropdown" data-display="static"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="navbar-user">
                                    <span class="navbar-user__thumb">
                                        <Image
                                            src={imageAsset}
                                            alt="image" 
                                        />
                                    </span>
                                    <span class="navbar-user__info">
                                        <span class="navbar-user__name">Nhân viên</span>
                                    </span>
                                    <span class="icon"><FaChevronCircleDown /></span>
                                </span>
                            </button>
                        </DropdownTrigger>    
                        <DropdownMenu class="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                            <DropdownSection>
                                <DropdownItem href="/employee/profile"
                                    class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <FaRegUserCircle />
                                    <span class="dropdown-menu__caption">Thông tin</span>
                                </DropdownItem>
                                
                                <DropdownItem href="/employee/password"
                                    class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoKeyOutline />
                                    <span class="dropdown-menu__caption">Mật khẩu</span>
                                </DropdownItem>
            
                                <DropdownItem href="/employee/logout"
                                    class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoIosLogOut />
                                    <span class="dropdown-menu__caption">Đăng xuất</span>
                                </DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </nav>

            <div class="body-wrapper">
                <div class="bodywrapper__inner">
                    <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                        <h6 class="page-title">Danh sách đơn hàng Chuyển đến từ điểm giao dịch</h6>
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
                                                <label>Trạng thái</label>
                                                <select name="status" class="form-control">
                                                    <option value="">Tất cả</option>
                                                    <option value="0">Đã gửi</option>
                                                    <option value="1">Đã giao</option>
                                                    <option value="1">Đã nhận</option>
                                                </select>
                                            </div>
                                            <div class="flex-grow-1">
                                                <label>Trạng thái thanh toán</label>
                                                <select name="payment_status" class="form-control">
                                                    <option value="" selected>Tất cả</option>
                                                    <option value="1">Đã thanh toán</option>
                                                    <option value="0">Chưa thanh toán</option>
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
                                                        <span class="badge badge--danger">Đang giao</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge--danger">Đẫ thanh toán</span>
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
                                                    <span class="badge badge--danger">Đang giao</span>
                                                </td>
                                                <td>
                                                    <span class="badge badge--danger">Đẫ thanh toán</span>
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
                                                    <span class="badge badge--danger">Đang giao</span>
                                                </td>
                                                <td>
                                                    <span class="badge badge--danger">Đẫ thanh toán</span>
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
                                            <a class="page-link" href="/employee/courier/dispatch?page=2">2</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/employee/courier/dispatch?page=3">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/employee/courier/dispatch?page=4">4</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/employee/courier/dispatch?page=5">5</a>
                                        </li>
                                        <li class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>
                                        <li class="page-item">
                                            <a class="page-link" href="/employee/courier/dispatch?page=13">14</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="/employee/courier/dispatch?page=14">15</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="/employee/courier/dispatch?page=2" rel="next" aria-label="Next &raquo;">
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