import React from "react";
import Image from "next/image";

// CSS
import './asset/css/bootstrap.min.css'
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/app.css'

import imageAsset from './asset/imgs/profile.jpg';
import { FaBars, FaChevronCircleDown } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { PiUserCircle  } from "react-icons/pi";

export default function OrderList() {
    return (
        <div className="page-wrapper default-version">
            <nav className="navbar-wrapper bg--dark">
                <div className="navbar__left">
                    <FaBars className="res-sidebar-open-btn me-3" />
                </div>
                <div className="navbar__right">
                    <ul className="navbar__action-list">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button>
                                    <span className="navbar-user">
                                        <span className="navbar-user__thumb">
                                            <Image
                                                src={imageAsset}
                                                alt="image" 
                                            />
                                        </span>
                                        <span className="navbar-user__info">
                                            <span className="navbar-user__name">Trưởng điểm</span>
                                        </span>
                                        <span className="icon"><FaChevronCircleDown /></span>
                                    </span>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu className="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                                <DropdownItem href="/location/info"
                                    className="dropdown-menu__item px-3 py-2">
                                        <div className="d-flex align-items-center">
                                            <PiUserCircle className="text-xl text-default-500 pointer-events-none flex-shrink-0 mr-5" />
                                            <span className="dropdown-menu__caption text-default-300 ">Thông tin</span>
                                        </div>
                                </DropdownItem>
            
                                <DropdownItem href="/location/password"
                                    className="dropdown-menu__item px-3 py-2">
                                    <div className="d-flex align-items-center">
                                        <IoKeyOutline className="text-xl text-default-500 pointer-events-none flex-shrink-0 mr-5" />
                                        <span className="dropdown-menu__caption text-default-300">Mật khẩu</span>
                                    </div>
                                </DropdownItem>
            
                                <DropdownItem href="/home"
                                    className="dropdown-menu__item d-flex px-3 py-2">
                                    <div className="d-flex align-items-center">
                                        <IoIosLogOut className="text-xl text-default-500 pointer-events-none flex-shrink-0 mr-5" />
                                        <span className="dropdown-menu__caption text-default-300">Đăng xuất</span>
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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
                                    <form action="">
                                        <div className="d-flex flex-wrap gap-4">
                                            <div className="flex-grow-1">
                                                <label>Tìm kiếm</label>
                                                <input type="text" name="search" className="form-control"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Trạng thái đơn hàng</label>
                                                <select name="status" className="form-control" defaultValue={'0'}>
                                                    <option value="0">Tất cả</option>
                                                    <option value="1">Đã giao</option>
                                                    <option value="2">Chưa giao</option>
                                                    <option value="3">Đã gửi</option>
                                                </select>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Trạng thái thanh toán</label>
                                                <select name="payment_status" className="form-control" defaultValue={'0'}>
                                                    <option value="0">Tất cả</option>
                                                    <option value="1">Đã thanh toán</option>
                                                    <option value="2">Chưa thanh toán</option>
                                                </select>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Ngày tạo</label>
                                                <input name="date" type="text" className="date form-control" placeholder="DD/MM/YY" autoComplete="off" />
                                            </div>
                                            <div className="flex-grow-1 align-self-end">
                                                <button className="btn btn--primary w-100 h-45">Tìm</button>
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
                                            <a className="page-link" href="/location/agent/order-list?page=2">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/order-list?page=3">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/order-list?page=4">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/order-list?page=5">5</a>
                                        </li>
                                        <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/order-list?page=13">14</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="/location/agent/order-list?page=14">15</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/order-list?page=2" rel="next" aria-label="Next &raquo;">
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