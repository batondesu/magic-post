'use client'
import React ,{ useState } from "react";

const FormPage = () => {
    const [selectedOption1, setSelectedOption1] = useState('0');
    const [selectedOption2, setSelectedOption2] = useState('0');

    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
    };
    
    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
    };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Thực hiện xử lý logic với formData
    console.log("Form Data:", formData);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="d-flex flex-wrap gap-4">
        <div className="flex-grow-1">
          <label>Tìm kiếm</label>
          <input type="text" name="search" value="" className="form-control" />
        </div>
        <div className="flex-grow-1">
          <label>
            {" "}
            Trạng thái đơn hàng
            <select
              name="status"
              className="form-control"
              onChange={handleOption1Change}
              value={selectedOption1}
            >
              <option value="0">Tất cả</option>
              <option value="1">Đã giao</option>
              <option value="2">Chưa giao</option>
              <option value="3">Đã gửi</option>
            </select>
          </label>
        </div>
        <div className="flex-grow-1">
          <label>
            {" "}
            Trạng thái thanh toán
            <select
              value={selectedOption2}
              name="payment_status"
              className="form-control"
              onChange={handleOption2Change}
            >
              <option value="0">Tất cả</option>
              <option value="1">Đã thanh toán</option>
              <option value="2">Chưa thanh toán</option>
            </select>
          </label>
        </div>
        <div className="flex-grow-1">
          <label>Ngày tạo</label>
          <input
            name="date"
            type="text"
            className="date form-control"
            placeholder="DD/MM/YY"
            autoComplete="off"
            value=""
          />
        </div>
        <div className="flex-grow-1 align-self-end">
          <button type="submit" className="btn btn--primary w-100 h-45">
            <i className="fas fa-filter"></i> Tìm
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormPage;
