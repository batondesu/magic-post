// import 'bootstrap/dist/css/bootstrap.min.css'

import "./bootstrap.min.css";
import "./custom.210823.css";

export default function Record() {
    return (
        <div class="container body" style={{ width: 1400 }}>
            <div class="right_col" role="main" style={{ padding: 20 }}>
                <div class="page-title">
                    <div class="title_left text-success">
                        <h3>
                            <i class="fa fa-pencil fa-lg" /> Ghi nhận đơn hàng
                        </h3>
                        <span id="result"></span>
                    </div>
                </div>
                <div class="clearfix" />
                <form
                    method="POST"
                    action="https://bill.ems.com.vn/rc/orders/create"
                    acceptCharset="UTF-8"
                    id="frmCreate"
                    class="form-horizontal form-label-left input_mask"
                    noValidate=""
                    siq_id="autopick_7122"
                >
                    <input
                        name="_token"
                        type="hidden"
                        defaultValue="po4tHJptc7HOuW4PfNQ2JOkPOzdefUIFABcAudpN"
                    />
                    <div class="col-xs-12 col-md-12">
                        <div class="row">
                            <div class="col-xs-12 col-md-5">
                                <div class="x_panel full-h">
                                    <div class="x_title text-info">
                                        <h2>Người gửi</h2>
                                        <div class="clearfix" />
                                    </div>
                                    <div class="x_content">
                                        <div class="row">
                                            <div class="col-xs-6 col-md-6">
                                                <div class="form-group text-info">
                                                    <label class="control-label" htmlFor="from_name">
                                                        Họ tên <span class="required text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="from_name"
                                                        name="from_name"
                                                        defaultValue=""
                                                        autoComplete="off"
                                                        class="form-control"
                                                        required=""
                                                        placeholder="Họ tên"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-md-6">
                                                <div class="form-group text-info">
                                                    <label class="control-label" htmlFor="from_phone">
                                                        Điện thoại{" "}
                                                        <span class="required text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="from_phone"
                                                        name="from_phone"
                                                        defaultValue=""
                                                        autoComplete="off"
                                                        class="form-control"
                                                        required=""
                                                        placeholder="Điện thoại người gửi"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" id="new_inventory">
                                            <div class="col-xs-12 col-md-12">
                                                <div class="form-group text-info item">
                                                    <label class="control-label" htmlFor="from_location">
                                                        Quận/Huyện và Tỉnh/TP
                                                        <span class="required text-danger">*</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group text-info item">
                                            <label class="control-label" htmlFor="to_postal">
                                                Phường/Xã
                                            </label>
                                            <select
                                                name="to_postal"
                                                id="to_postal"
                                                class="form-control"
                                                autoComplete="off"
                                            ></select>
                                        </div>
                                        <div class="form-group text-info hidden" id="old_inventory">
                                            <label class="control-label">
                                                Khu vực <span class="required text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue=""
                                                autoComplete="off"
                                                class="form-control"
                                                disabled=""
                                            />
                                        </div>
                                        <div class="form-group text-info">
                                            <label class="control-label" htmlFor="from_address">
                                                Địa chỉ <span class="required text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="from_address"
                                                name="from_address"
                                                defaultValue=""
                                                autoComplete="off"
                                                class="form-control"
                                                required=""
                                                placeholder="Số nhà, tên đường/thôn, ấp..."
                                            />
                                        </div>
                                        <input
                                            type="hidden"
                                            name="inventory"
                                            defaultValue=""
                                            autoComplete="off"
                                        />
                                        <input
                                            type="hidden"
                                            name="from_province"
                                            defaultValue=""
                                            autoComplete="off"
                                        />
                                        <input
                                            type="hidden"
                                            name="from_district"
                                            defaultValue=""
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div class="clearfix">&nbsp;</div>
                                    <div class="x_title text-info">
                                        <h2>Người nhận</h2>
                                        <div class="clearfix" />
                                    </div>
                                    <div class="x_content">
                                        <div class="row">
                                            <div class="col-xs-6 col-md-6">
                                                <div class="form-group text-info item">
                                                    <label class="control-label" htmlFor="to_phone">
                                                        Số điện thoại{" "}
                                                        <span class="required text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="to_phone"
                                                        name="to_phone"
                                                        defaultValue=""
                                                        placeholder="Số điện thoại"
                                                        autoComplete="off"
                                                        class="form-control"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-md-6">
                                                <div class="form-group text-info item">
                                                    <label class="control-label" htmlFor="to_name">
                                                        Họ tên <span class="required text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="to_name"
                                                        name="to_name"
                                                        defaultValue=""
                                                        placeholder="Họ tên"
                                                        autoComplete="off"
                                                        class="form-control"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group text-info item">
                                            <label class="control-label" htmlFor="to_location">
                                                Quận/Huyện và Tỉnh/TP
                                                <span class="required text-danger">*</span>
                                            </label>
                                        </div>
                                        <div class="form-group text-info item">
                                            <label class="control-label" htmlFor="to_postal">
                                                Phường/Xã
                                            </label>
                                            <select
                                                name="to_postal"
                                                id="to_postal"
                                                class="form-control"
                                                autoComplete="off"
                                            ></select>
                                        </div>
                                        <div class="form-group text-info item">
                                            <label class="control-label" htmlFor="to_address">
                                                Địa chỉ <span class="required text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="to_address"
                                                name="to_address"
                                                defaultValue=""
                                                placeholder="Số nhà, tên đường/thôn, ấp..."
                                                autoComplete="off"
                                                class="form-control"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div class="clearfix">&nbsp;</div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <div class="x_panel full-h">
                                    <div class="x_title text-info">
                                        <h2>Thông tin đơn hàng</h2>
                                        <div class="clearfix" />
                                    </div>
                                    <div class="x_content">
                                        <div class="form-group text-info item" id="__product_0">
                                            <label class="control-label" htmlFor="product_name">
                                                Tên sản phẩm <span class="required text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="product_name"
                                                name="product_name"
                                                defaultValue="Tên sản phẩm"
                                                autoComplete="off"
                                                class="form-control"
                                                required=""
                                            />
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-4 col-md-5">
                                                <div class="form-group text-info">
                                                    <label class="control-label" htmlFor="total_amount">
                                                        Giá trị
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="total_amount"
                                                        name="total_amount"
                                                        class="form-control text-right calculator"
                                                        autoComplete="off"
                                                        data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                                        placeholder="vnd"
                                                        defaultValue={0}
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-xs-4 col-md-4">
                                                <div class="form-group text-info">
                                                    <label class="control-label" htmlFor="total_weight">
                                                        K.lượng <span class="required text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="total_weight"
                                                        name="total_weight"
                                                        defaultValue={1000}
                                                        autoComplete="off"
                                                        class="form-control text-right calculator"
                                                        data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                                        placeholder="gram"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-xs-4 col-md-3">
                                                <div class="form-group text-info item">
                                                    <label class="control-label" htmlFor="total_quantity">
                                                        S.lượng
                                                        <span class="required text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="total_quantity"
                                                        name="total_quantity"
                                                        defaultValue={1}
                                                        autoComplete="off"
                                                        class="form-control text-right"
                                                        required=""
                                                        data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                                    />
                                                </div>
                                            </div>
                                            <input
                                                type="hidden"
                                                name="sku"
                                                defaultValue=""
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div class="form-group text-info text-left">
                                            <label class="control-label pull-left" htmlFor="size">
                                                Kích thước (nếu có)
                                            </label>
                                            <div class="clearfix" />
                                            <div class="row">
                                                <div class="col-xs-4 col-md-4">
                                                    <input
                                                        type="text"
                                                        id="size_x"
                                                        name="size_x"
                                                        defaultValue=""
                                                        autoComplete="off"
                                                        class="form-control text-right boxsize calculator"
                                                        placeholder="Dài (cm)"
                                                    />
                                                </div>
                                                <div class="col-xs-4 col-md-4">
                                                    <input
                                                        type="text"
                                                        id="size_y"
                                                        name="size_y"
                                                        defaultValue=""
                                                        autoComplete="off"
                                                        class="form-control text-right boxsize calculator"
                                                        placeholder="Rộng (cm)"
                                                    />
                                                </div>
                                                <div class="col-xs-4 col-md-4">
                                                    <input
                                                        type="text"
                                                        id="size_z"
                                                        name="size_z"
                                                        defaultValue=""
                                                        autoComplete="off"
                                                        class="form-control text-right boxsize calculator"
                                                        placeholder="Cao (cm)"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group text-info">
                                            <label class="control-label" htmlFor="description">
                                                Ghi chú
                                            </label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                class="form-control"
                                                rows={3}
                                                autoComplete="off"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <input
                                            type="hidden"
                                            name="item_code"
                                            defaultValue=""
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-3">
                                <div class="x_panel full-h">
                                    <div class="x_title text-info">
                                        <h2>Đơn hàng</h2>
                                        <div class="clearfix" />
                                    </div>
                                    <div class="x_content col-xs-12">
                                        <div class="form-group text-info item">
                                            <label class="control-label" htmlFor="service">
                                                Dịch vụ vận chuyển{" "}
                                                <span class="required text-danger">*</span>
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                class="form-control select2_single"
                                                autoComplete="off"
                                                tabIndex={-1}
                                                style={{ display: "none" }}
                                            >
                                                <option value={2}>Tài liệu (Không thu hộ)</option>
                                                <option value={1}>Hàng Hoá</option>
                                            </select>
                                        </div>
                                        <div class="form-group text-info">
                                            <label class="control-label" htmlFor="vas">
                                                Dịch vụ cộng thêm
                                            </label>
                                            <span
                                                class="select2 select2-container select2-container--default"
                                                dir="ltr"
                                                style={{ width: 242 }}
                                            >
                                                <span class="selection">
                                                    <span
                                                        class="select2-selection select2-selection--multiple"
                                                        tabIndex={0}
                                                        role="combobox"
                                                        aria-autocomplete="list"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        aria-owns="select2-vas-results"
                                                    >
                                                        <ul class="select2-selection__rendered">
                                                            <li class="select2-search select2-search--inline">
                                                                <input
                                                                    class="select2-search__field"
                                                                    type="search"
                                                                    tabIndex={-1}
                                                                    role="textbox"
                                                                    placeholder="Dịch vụ cộng thêm"
                                                                    style={{ width: 240 }}
                                                                />
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </span>
                                                <span class="dropdown-wrapper" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div class="form-group text-success hidden">
                                            <label
                                                class="control-label"
                                                htmlFor="phu_value"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title=""
                                                data-original-title="Số tiền thu của người nhận nếu người nhận KHÔNG NHẬN hàng"
                                            >
                                                Cước thu phí huỷ đơn hàng{" "}
                                                <span class="required text-danger">*</span>
                                            </label>
                                            <small class="pull-right">vnd</small>
                                            <input
                                                type="text"
                                                id="phu_value"
                                                name="phu_value"
                                                defaultValue=""
                                                autoComplete="off"
                                                class="form-control"
                                                required=""
                                                data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                            />
                                        </div>
                                        <div class="form-group hidden" id="payment_config">
                                            <label class="control-label text-success">
                                                Người thanh toán phí{" "}
                                                <span class="required text-danger">*</span>
                                            </label>
                                            <div class="btn-group" data-toggle="buttons">
                                                <label
                                                    class="btn btn-xs btn-default active"
                                                    data-toggle="tooltip"
                                                    title=""
                                                    data-original-title="Thu người mua = Tiền thu hộ(CoD)"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="payment_config"
                                                        defaultValue={0}
                                                    />{" "}
                                                    Người bán
                                                </label>
                                                <label
                                                    class="btn btn-xs btn-default"
                                                    data-toggle="tooltip"
                                                    title=""
                                                    data-original-title="Thu người mua = Tiền thu hộ(CoD) + Phí"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="payment_config"
                                                        defaultValue={1}
                                                    />{" "}
                                                    Người mua
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group text-success hidden">
                                            <label class="control-label" htmlFor="money_collect">
                                                Tiền thu hộ(CoD){" "}
                                                <span class="required text-danger">*</span>
                                            </label>
                                            <small class="pull-right">vnd</small>
                                            <input
                                                type="text"
                                                id="money_collect"
                                                name="money_collect"
                                                defaultValue=""
                                                autoComplete="off"
                                                class="form-control calculator"
                                                required=""
                                                data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                            />
                                        </div>
                                        <div class="form-group text-info">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="checked"
                                                    defaultValue={1}
                                                    class="js-switch"
                                                    data-switchery="true"
                                                    style={{ display: "none" }}
                                                />
                                                <span
                                                    class="switchery switchery-small"
                                                    style={{
                                                        boxShadow:
                                                            "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                                                        borderColor: "rgb(223, 223, 223)",
                                                        backgroundColor: "rgb(255, 255, 255)",
                                                        transition:
                                                            "border 0.4s ease 0s, box-shadow 0.4s ease 0s",
                                                    }}
                                                >
                                                    <small
                                                        style={{
                                                            left: 0,
                                                            transition:
                                                                "background-color 0.4s ease 0s, left 0.2s ease 0s",
                                                        }}
                                                    />
                                                </span>
                                                Cho khách xem hàng
                                            </label>
                                        </div>
                                        <div class="form-group text-info">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="fragile"
                                                    defaultValue={1}
                                                    class="js-switch"
                                                    data-switchery="true"
                                                    style={{ display: "none" }}
                                                />
                                                <span
                                                    class="switchery switchery-small"
                                                    style={{
                                                        boxShadow:
                                                            "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                                                        borderColor: "rgb(223, 223, 223)",
                                                        backgroundColor: "rgb(255, 255, 255)",
                                                        transition:
                                                            "border 0.4s ease 0s, box-shadow 0.4s ease 0s",
                                                    }}
                                                >
                                                    <small
                                                        style={{
                                                            left: 0,
                                                            transition:
                                                                "background-color 0.4s ease 0s, left 0.2s ease 0s",
                                                        }}
                                                    />
                                                </span>
                                                Hàng chất lỏng,pin sạc
                                            </label>
                                        </div>
                                        <div
                                            class="form-group hidden text-warning"
                                            id="list_result"
                                        >
                                            <h4>
                                                <label class="label label-success">
                                                    Thông tin bưu gửi
                                                </label>
                                            </h4>
                                            <p>
                                                <span id="result_print" />
                                            </p>
                                            <p>
                                                <strong>Mã bưu gửi :</strong>{" "}
                                                <span class="pull-right" id="result_tracking_code" />
                                            </p>
                                            <p>
                                                <strong>Cước vận chuyển :</strong>{" "}
                                                <span
                                                    class="pull-right"
                                                    id="result_total_fee"
                                                    data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                                />
                                            </p>
                                            <p>
                                                <strong>Cước DV cộng thêm :</strong>{" "}
                                                <span class="pull-right" id="result_total_vas" />
                                            </p>
                                            <p>
                                                <strong>Tổng cước: </strong>{" "}
                                                <span class="pull-right" id="result_total" />
                                            </p>
                                            <p>
                                                <strong>Tổng tiền thu hộ :</strong>{" "}
                                                <span class="pull-right" id="result_money_collect" />
                                            </p>
                                        </div>
                                        <div class="form-group">
                                            <button
                                                type="submit"
                                                class="btn btn-success btn-group-justified no-border-radius"
                                            >
                                                GHI NHẬN ĐƠN HÀNG{" "}
                                                <i class="fa fa-arrow-circle-o-right" />
                                            </button>
                                            <a
                                                class="btn btn-primary btn-group-justified hidden no-border-radius"
                                                id="renew_create"
                                                href="https://bill.ems.com.vn/rc/orders/create"
                                            >
                                                TẠO ĐƠN MƠÍ <i class="fa fa-arrow-circle-o-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        // <div>
        //     Home lol
        // </div>
    );
}
