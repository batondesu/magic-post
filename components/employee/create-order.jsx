<<<<<<< HEAD:components/employee/create-order.jsx
import React, { useState } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Image from "next/image";
import imageAsset from './asset/imgs/profile.jpg';

// CSS
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/bootstrap.min.css'
import './asset/css/app.css'

=======
'use client'
>>>>>>> origin/trantoan:app/employee/porter/create-order.jsx
import { FaBalanceScale, FaCalendar, FaMoneyBill, FaBars, FaChevronCircleDown, FaRegUserCircle } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
<<<<<<< HEAD:components/employee/create-order.jsx
=======
import imageAsset from './assets/imgs/profile.jpg';
import { LiaAccessibleIcon, LiaShippingFastSolid } from "react-icons/lia";
import { FaWpforms } from "react-icons/fa";
import { LuCombine } from "react-icons/lu";
import React , {useState} from "react";
>>>>>>> origin/trantoan:app/employee/porter/create-order.jsx


export default function CreateOrder() {
<<<<<<< HEAD:components/employee/create-order.jsx
    const [date, setDate] = useState(new Date());
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
=======

    const [selectedOption1, setSelectedOption1] = useState('0');
    const [selectedOption2, setSelectedOption2] = useState('0');
    const [selectedOption3, setSelectedOption3] = useState('0');
    const [selectedOption4, setSelectedOption4] = useState('0');
    const [selectedOption5, setSelectedOption5] = useState('0');

    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
    };
    
    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleOption3Change = (event) => {
        setSelectedOption3(event.target.value);
    };

    const handleOption4Change = (event) => {
        setSelectedOption4(event.target.value);
    };

    const handleOption5Change = (event) => {
        setSelectedOption5(event.target.value);
    };

    const handleSubmit = (event) => {
        // Xử lý logic khi biểu mẫu được gửi đi
        event.preventDefault();
        console.log('Selected Option 2:', selectedOption2);
    };

    return (
        <section className="page-wrapper default-version">
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
                                <span className="menu-title">Từ điểm tập kết</span>
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
>>>>>>> origin/trantoan:app/employee/porter/create-order.jsx
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
<<<<<<< HEAD:components/employee/create-order.jsx
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
                        <h6 class="page-title">Tạo đơn hàng</h6>
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
                                                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                                                    <span class="input-group-text"><FaCalendar /></span>
=======
                            <div className="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                                <a href="/employee/profile"
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <FaRegUserCircle />
                                    <span className="dropdown-menu__caption">Thông tin</span>
                                </a>
            
                                <a href="/employee/password"
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <IoKeyOutline />
                                    <span className="dropdown-menu__caption">Mật khẩu k</span>
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

            <div className="body-wrapper">
                <div className="bodywrapper__inner">
                    <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                        <h6 className="page-title">Đơn hàng mới</h6>
                        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        </div>
                    </div>
                    <div className="row mb-none-30">
                        <div className="col-lg-12 col-md-12 mb-30">
                            <div className="card">
                                <form action="/employee/courier/store" method="POST" onSubmit={handleSubmit}>
                                    <div className="card-body">
                                        <input type="hidden" name="_token" />                        
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <label htmlFor="">Ngày tạo đơn</label>
                                                <div className="input-group">
                                                    <input name="estimate_date" type="text"
                                                        autoComplete="off" className="form-control date" placeholder="DD/MM/YY"
                                                        required />
                                                    <span className="input-group-text"><FaCalendar /></span>
>>>>>>> origin/trantoan:app/employee/porter/create-order.jsx
                                                </div>
                                            </div>
                                            <div className="col-6 form-group">
                                                <label htmlFor="">Trạng thái thanh toán</label>
                                                <div className="input-group">
                                                    <select value={selectedOption3} className="form-control"  name="payment_status" onChange={handleOption3Change}>
                                                        <option value="0">Chưa thanh toán</option>
                                                        <option value="1">Đã thanh toán</option>
                                                    </select>
                                                    <span className="input-group-text"><FaMoneyBill /></span>
                                                </div>
                                            </div>
                                            <div className="col-6 form-group">
                                                <label htmlFor="">Trạng thái đơn hàng</label>
                                                <div className="input-group">
                                                    <select value={selectedOption1} className="form-control" name="payment_status" onChange={handleOption1Change}>
                                                        <option value="0">Đang giao</option>
                                                        <option value="1">Đã giao thành công</option>
                                                        <option value="2">Giao hàng không thành công</option>
                                                    </select>
                                                    <span className="input-group-text"><FaMoneyBill /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="card border--primary mt-3">
                                                <h5 className="card-header bg--primary  text-white">Thông tin chi nhánh gửi</h5>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="form-group col-lg-6">
                                                            <label>Tên nhân viên</label>
                                                            <input type="text" className="form-control" name="sender_customer_firstname"
                                                                 required/>
                                                        </div>
                                                        <div className="form-group col-lg-6">
                                                            <label>Chi nhánh</label>
                                                            <select className="form-control" name="branch"  value={selectedOption2} onChange={handleOption2Change}>
                                                                <option value="0">Chọn chi nhánh</option>
                                                                <option value="4" >Cầu Giấy</option>
                                                                <option value="2" >Hà Đông</option>
                                                                <option value="3" >Đống Đa</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-lg-6">
                                                            <label>Email</label>
                                                            <input type="email" className="form-control" name="sender_customer_email"
                                                                id="sender_email" required/>
                                                        </div>
                                                        <div className=" form-group col-lg-6">
                                                            <label>SĐT</label>
                                                            <input type="text" className="form-control" name="sender_customer_phone"
                                                                id="sender_phone" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card border--primary mt-3">
                                                <h5 className="card-header bg--primary  text-white">Thông tin chi nhánh nhận</h5>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="form-group col-lg-6">
                                                            <label>Tên nhân viên</label>
                                                            <input type="text" className="form-control"
                                                                name="receiver_customer_firstname"
                                                                 required/>
                                                        </div>
                                                        <div className="form-group col-lg-6">
                                                            <label>Chi nhánh</label>
                                                            <select className="form-control" name="branch"  value={selectedOption4} onChange={handleOption4Change}>
                                                                <option value="0">Chọn chi nhánh</option>
                                                                <option value="4" >Cầu Giấy</option>
                                                                <option value="2" >Hà Đông</option>
                                                                <option value="3" >Đống Đa</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-lg-6">
                                                            <label>Email</label>
                                                            <input type="email" className="form-control" name="receiver_customer_email"
                                                                 id="receiver_email"
                                                                required/>
                                                        </div>
                                                        <div className="form-group col-lg-6">
                                                            <label>SĐT</label>
                                                            <input type="text" className="form-control" name="receiver_customer_phone"
                                                                 id="receiver_phone"
                                                                required/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-30">
                                        <div className="col-lg-12">
                                            <div className="card border--primary mt-3">
                                                <h5 className="card-header bg--primary text-white">
                                                    Thông tin đơn hàng                                      
                                                </h5>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="row" id="addedField">
                                                            <div className="row single-item gy-2">
                                                                <div className="col-md-3">
                                                                    <input type="text" className="form-control" placeholder="Tên hàng hóa" name="items[0][name]"/>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <select className="form-control selected_type" name="items[0][type]" value={selectedOption5} onChange={handleOption5Change}>
                                                                        <option disabled="" value="0">Loại hàng hóa</option>
                                                                        <option value="1" data-unit="KG" data-price="10">Vật dụng</option>
                                                                        <option value="2" data-unit="KG" data-price="5">Văn kiện</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="input-group mb-3">
                                                                        <input type="number" className="form-control quantity" placeholder="Số lượng" disabled="" name="items[0][quantity]" required=""/>
                                                                        <span className="input-group-text unit"><FaBalanceScale /></span>
                                                                    </div>
                                                                </div>
<<<<<<< HEAD:components/employee/create-order.jsx
                                                                <div class="col-md-3">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control single-item-amount" placeholder="Nhập giá cả" name="items[0][amount]" required="" readonly=""/>
                                                                        <span class="input-group-text">VND</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>  
=======
                                                                <div className="col-md-3">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control single-item-amount" placeholder="Nhập giá cả" name="items[0][amount]" required="" readOnly=""/>
                                                                        <span className="input-group-text">USD</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-line-area">
                                                            <h6 className="border-line-title"></h6>
                                                        </div>
>>>>>>> origin/trantoan:app/employee/porter/create-order.jsx
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn--primary h-45 w-100 Submitbtn"> Tạo đơn</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}