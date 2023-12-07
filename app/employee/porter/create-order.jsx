import { FaBalanceScale, FaCalendar, FaMoneyBill, FaBars, FaChevronCircleDown, FaRegUserCircle } from "react-icons/fa";
import { IoKeyOutline, IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import imageAsset from './assets/imgs/profile.jpg';
import { LiaAccessibleIcon, LiaShippingFastSolid } from "react-icons/lia";
import { FaWpforms } from "react-icons/fa";
import { LuCombine } from "react-icons/lu";

// CSS
import './assets/css/bootstrap-toggle.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/app.css'
import './assets/css/datepicker.min.css'
import Image from "next/image";

export default function CreateOrder() {
    return (
        <div class="page-wrapper default-version">
            <div class="sidebar bg--dark">
                <div class="sidebar__inner">
                    <div class="sidebar__logo">
                        <a href="/employee" class="sidebar__main-logo">
                        </a>
                    </div>
                    <div class="sidebar__menu-wrapper" id="sidebar__menuWrapper">
                    <ul class="sidebar__menu">
                        <li class="sidebar-menu-item ">
                            <a href="/employee/dashboard" class="nav-link ">
                                <IoHomeOutline size={22} class="mr-2" />
                                <span class="menu-title">Dashboard</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item ">
                            <a href="/courier/send" class="nav-link ">
                                <LiaShippingFastSolid size={22} class="mr-2" />
                                <span class="menu-title">Từ điểm giao dịch</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item ">
                            <a href="/employee/courier/sent/queue" class="nav-link ">
                                <LuCombine size={22} class="mr-2" />
                                <span class="menu-title">Từ điểm tập kết</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item ">
                            <a href="/employee/courier/sent/queue" class="nav-link ">
                                <FaWpforms size={22} class="mr-2" />
                                <span class="menu-title">Từ điểm tập kết</span>
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
                                        <span class="navbar-user__name">Nhân viên</span>
                                    </span>
                                    <span class="icon"><FaChevronCircleDown /></span>
                                </span>
                            </button>
                            <div class="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                                <a href="/employee/profile"
                                    class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <FaRegUserCircle />
                                    <span class="dropdown-menu__caption">Thông tin</span>
                                </a>
            
                                <a href="/employee/password"
                                    class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoKeyOutline />
                                    <span class="dropdown-menu__caption">Mật khẩu k</span>
                                </a>
            
                                <a href="/employee/logout"
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
                        <h6 class="page-title">Đơn hàng mới</h6>
                        <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        </div>
                    </div>
                    <div class="row mb-none-30">
                        <div class="col-lg-12 col-md-12 mb-30">
                            <div class="card">
                                <form action="/employee/courier/store" method="POST">
                                    <div class="card-body">
                                        <input type="hidden" name="_token" value="" />                        
                                        <div class="row">
                                            <div class="col-6 form-group">
                                                <label for="">Ngày tạo đơn</label>
                                                <div class="input-group">
                                                    <input name="estimate_date" value="" type="text"
                                                        autocomplete="off" class="form-control date" placeholder="DD/MM/YY"
                                                        required />
                                                    <span class="input-group-text"><FaCalendar /></span>
                                                </div>
                                            </div>
                                            <div class="col-6 form-group">
                                                <label for="">Trạng thái thanh toán</label>
                                                <div class="input-group">
                                                    <select class="form-control" required name="payment_status">
                                                        <option value="0" selected>Chưa thanh toán</option>
                                                        <option value="1">Đã thanh toán</option>
                                                    </select>
                                                    <span class="input-group-text"><FaMoneyBill /></span>
                                                </div>
                                            </div>
                                            <div class="col-6 form-group">
                                                <label for="">Trạng thái đơn hàng</label>
                                                <div class="input-group">
                                                    <select class="form-control" required name="payment_status">
                                                        <option value="0" selected>Đang giao</option>
                                                        <option value="1">Đã giao thành công</option>
                                                        <option value="1">Giao hàng không thành công</option>
                                                    </select>
                                                    <span class="input-group-text"><FaMoneyBill /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="card border--primary mt-3">
                                                <h5 class="card-header bg--primary  text-white">Thông tin chi nhánh gửi</h5>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="form-group col-lg-6">
                                                            <label>Tên nhân viên</label>
                                                            <input type="text" class="form-control" name="sender_customer_firstname"
                                                                value="" required/>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Chi nhánh</label>
                                                            <select class="form-control" name="branch" required>
                                                                <option value>Chọn chi nhánh</option>
                                                                <option value="4" >Cầu Giấy</option>
                                                                <option value="2" >Hà Đông</option>
                                                                <option value="3" >Đống Đa</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-lg-6">
                                                            <label>Email</label>
                                                            <input type="email" class="form-control" name="sender_customer_email"
                                                                value="" id="sender_email" required/>
                                                        </div>
                                                        <div class=" form-group col-lg-6">
                                                            <label>SĐT</label>
                                                            <input type="text" class="form-control" name="sender_customer_phone"
                                                                value="" id="sender_phone" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="card border--primary mt-3">
                                                <h5 class="card-header bg--primary  text-white">Thông tin chi nhánh nhận</h5>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="form-group col-lg-6">
                                                            <label>Tên nhân viên</label>
                                                            <input type="text" class="form-control"
                                                                name="receiver_customer_firstname"
                                                                value="" required/>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Chi nhánh</label>
                                                            <select class="form-control" name="branch" required>
                                                                <option value>Chọn chi nhánh</option>
                                                                <option value="4" >Cầu Giấy</option>
                                                                <option value="2" >Hà Đông</option>
                                                                <option value="3" >Đống Đa</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-lg-6">
                                                            <label>Email</label>
                                                            <input type="email" class="form-control" name="receiver_customer_email"
                                                                value="" id="receiver_email"
                                                                required/>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>SĐT</label>
                                                            <input type="text" class="form-control" name="receiver_customer_phone"
                                                                value="" id="receiver_phone"
                                                                required/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-30">
                                        <div class="col-lg-12">
                                            <div class="card border--primary mt-3">
                                                <h5 class="card-header bg--primary text-white">
                                                    Thông tin đơn hàng                                      
                                                </h5>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="row" id="addedField">
                                                            <div class="row single-item gy-2">
                                                                <div class="col-md-3">
                                                                    <input type="text" class="form-control" placeholder="Tên hàng hóa" name="items[0][name]"/>
                                                                </div>
                                                                <div class="col-md-2">
                                                                    <select class="form-control selected_type" name="items[0][type]" required="">
                                                                        <option disabled="" selected="" value="">Loại hàng hóa</option>
                                                                        <option value="1" data-unit="KG" data-price="10">Vật dụng</option>
                                                                        <option value="2" data-unit="KG" data-price="5">Văn kiện</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="number" class="form-control quantity" placeholder="Số lượng" disabled="" name="items[0][quantity]" required=""/>
                                                                        <span class="input-group-text unit"><FaBalanceScale /></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control single-item-amount" placeholder="Nhập giá cả" name="items[0][amount]" required="" readonly=""/>
                                                                        <span class="input-group-text">VND</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn--primary h-45 w-100 Submitbtn"> Tạo đơn</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}