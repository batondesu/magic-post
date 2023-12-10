import React from "react";
import Image from "next/image";

// CSS
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/bootstrap.min.css'
import './asset/css/app.css'

import imageAsset from './asset/imgs/profile.jpg';
import { FaBars, FaChevronCircleDown, FaDollyFlatbed, FaMoneyBillWave, FaUserCheck, FaUniversity, FaHourglassStart, FaDolly, FaAccessibleIcon   } from "react-icons/fa";
import {FaListCheck} from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { PiUserCircle  } from "react-icons/pi";

export default function DashBoard() {
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

            <div class="body-wrapper">
                <div class="bodywrapper__inner">
                    <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                        <h6 class="page-title">Dashboard</h6>
                        <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        </div>
                    </div>

                    <div class="row gy-4">
                    <div class="col-xxl-3 col-sm-6">
                        <div class="card bg--purple has-link overflow-hidden box--shadow2">
                            <a href="" class="item-link"></a>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <FaHourglassStart size={56} />
                                    </div>
                                    <div class="col-8 text-end">
                                        <span class="text-white text--small">Sent In Queue</span>
                                        <h2 class="text-white">0</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-6">
                        <div class="card bg--green has-link box--shadow2">
                            <a href="" class="item-link"></a>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <FaDolly size={56} />
                                    </div>
                                    <div class="col-8 text-end">
                                        <span class="text-white text--small">Shipped Courier</span>
                                        <h2 class="text-white">284</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-6">
                        <div class="card bg--deep-purple has-link box--shadow2">
                            <a href="" class="item-link"></a>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <FaAccessibleIcon size={56}/>
                                    </div>
                                    <div class="col-8 text-end">
                                        <span class="text-white text--small">Waiting for Delivery</span>
                                        <h2 class="text-white">14</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-6">
                        <div class="card bg--info has-link box--shadow2">
                            <a href="" class="item-link"></a>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <FaListCheck size={56} />
                                    </div>
                                    <div class="col-8 text-end">
                                        <span class="text-white text--small">Delivered</span>
                                        <h2 class="text-white">66</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-6">
                        <div class="card bg--primary has-link overflow-hidden box--shadow2">
                            <a href="" class="item-link"></a>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <FaUniversity size={56} />
                                    </div>
                                    <div class="col-8 text-end">
                                        <span class="text-white text--small">Total Branch</span>
                                        <h2 class="text-white">4</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-6">
                        <div class="card bg--cyan has-link box--shadow2">
                            <a href="" class="item-link"></a>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <FaUserCheck size={56} />
                                    </div>
                                    <div class="col-8 text-end">
                                        <span class="text-white text--small">Total manager</span>
                                        <h2 class="text-white">2</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-6">
                        <div class="card bg--orange has-link box--shadow2">
                            <a href="" class="item-link"></a>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <FaMoneyBillWave size={56} />
                                    </div>
                                    <div class="col-8 text-end">
                                        <span class="text-white text--small">Total Income</span>
                                        <h2 class="text-white">6,000,000</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-6">
                        <div class="card bg--pink has-link box--shadow2">
                            <a href="" class="item-link"></a>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <FaDollyFlatbed size={56} />
                                    </div>
                                    <div class="col-8 text-end">
                                        <span class="text-white text--small">Total Courier</span>
                                        <h2 class="text-white">364</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-none-30">
                    <div class="col-lg-12 col-md-12 mt-30 mb-30">
                        <div class="card b-radius--10 ">
                            <div class="card-body p-0">
                                <div class="table-responsive--sm table-responsive">
                                    <table class="table table--light style--two">
                                        <thead>
                                            <tr>
                                                <th>Chi nhánh</th>
                                                <th>Email - SĐT</th>
                                                <th>Trạng thái</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span class="fw-bold">Mai Dịch</span> <br />
                                                    <span>Cầu Giấy</span>
                                                </td>
                                                <td>
                                                    <span>
                                                        <a href="" class="__cf_email__">
                                                            location1@email.com
                                                        </a>
                                                    </span> <br />
                                                    <span>6444564545</span>
                                                </td>
                                                <td> <span class="badge badge--success">Enabled</span> </td>
                                                <td>
                                                    <button class="btn btn-sm btn-outline--primary" id="actionButton"
                                                        data-bs-toggle="dropdown">
                                                        Quản lý
                                                    </button>
                                                    <div class="dropdown-menu p-0">
                                                        <a href=""
                                                            class="dropdown-item">
                                                            Nhân viên                                                
                                                        </a>
                                                        <a href=""
                                                            class=" dropdown-item">
                                                            Đơn hàng                                                
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>                    
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>             
    )
}