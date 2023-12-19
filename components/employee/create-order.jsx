import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

// CSS
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/bootstrap.min.css'
import './asset/css/app.css'

import { FaBalanceScale, FaCalendar, FaMoneyBill, FaBars, FaChevronCircleDown } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { PiUserCircle  } from "react-icons/pi";

import imageAsset from './asset/imgs/profile.jpg';

export default function CreateOrder() {
    const [date, setDate] = useState(new Date());
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
            <nav className="navbar-wrapper bg--dark">
                <div className="navbar__left">
                    <button type="button" className="res-sidebar-open-btn me-3"><FaBars /></button>
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
                                            <span className="navbar-user__name">Nhân viên</span>
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