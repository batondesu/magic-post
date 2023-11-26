import Image from "next/image";
import imageAsset1 from './assets/imgs/logos/monst-logo.svg'

export default function Header() {
    return (
        <>
            <header class="bg-transparent sticky-bar mt-4">
                <div class="container bg-transparent">
                    <nav class="bg-transparent flex justify-between items-center py-3">
                        <a class="text-3xl font-semibold leading-none" href="index.html">
                            <Image class="h-10" src={imageAsset1} alt="" />
                        </a>
                        <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li class="pt-4 pb-4">
                                <a href="home" class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Trang chủ</a>
                            </li>
                            <li class="pt-4 pb-4">
                                <a href="#how-we-work" class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Giới thiệu</a>
                            </li>
                            <li class="pt-4 pb-4">
                                <a href="#search" class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Tra cứu</a>
                            </li>
                            <li class="group relative pt-4 pb-4 has-child">
                                <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="news">Tin tức</a>
                                <ul class="drop-down-menu min-w-200">
                                    <li>
                                        <a href="#news" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Tin nội bộ</a>
                                    </li>
                                    <li>
                                        <a href="#news" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Tin dịch vụ mới</a>
                                    </li>
                                    <li>
                                        <a href="#news" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Tin ngành</a>
                                    </li>
                                    <li>
                                        <a href="#news" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Tin quốc tế</a>
                                    </li>
                                    <li>
                                        <a href="#news" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Thông tin hữu ích</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pt-4 pb-4"><a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="#contact">Liên hệ</a></li>
                        </ul>
                        <div class="hidden lg:block">
                            <a class="btn-accent hover-up-2" href="login">Đăng nhập</a>
                            <a class="btn-primary hover-up-2" href="signup">Đăng ký</a>
                        </div>
                        <div class="lg:hidden">
                            <button class="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                                <svg class="fill-current h-4 w-4" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            <div class="hidden navbar-menu relative z-50 transition duration-300">
                <div class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
                <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
                    <div class="flex items-center mb-8">
                        <a class="mr-auto text-3xl font-semibold leading-none" href="#">
                            <Image class="h-10" src={imageAsset1} alt="" />
                        </a>
                        <button class="navbar-close">
                            <svg class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul class="mobile-menu">
                            <li class="mb-1 menu-item-has-children rounded-xl">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl" href="home">Trang chủ</a>
                            </li>
                            <li class="mb-1 menu-item-has-children rounded-xl">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="aboutus">Giới thiệu</a>
                                <ul class="dropdown pl-5">
                                    <li>
                                        <a href="about-1" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Lịch sử hình thành</a>
                                    </li>
                                    <li>
                                        <a href="about-2" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Cơ cấu tổ chức</a>
                                    </li>
                                    <li>
                                        <a href="about-3" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Ban lãnh đạo</a>
                                    </li>
                                    <li>
                                        <a href="about-4" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Văn hóa doanh nghiệp</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="services">Dịch vụ</a>
                            </li>
                            <li class="mb-1 menu-item-has-children rounded-xl">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="counter-partner">Đối tác</a>
                                <ul class="dropdown pl-5">
                                    <li>
                                        <a href="ems" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">EMS</a>
                                    </li>
                                    <li>
                                        <a href="jtexpress" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">J&T Express</a>
                                    </li>
                                    <li>
                                        <a href="vnpost" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Vietnam Post</a>
                                    </li>
                                    <li>
                                        <a href="lalamove" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Lalamove</a>
                                    </li>
                                    <li>
                                        <a href="hkpost" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Hongkong Post</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="mb-1 menu-item-has-children rounded-xl">
                                <a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="news">Tin tức</a>
                                <ul class="dropdown pl-5">
                                    <li>
                                        <a href="news-1" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Tin nội bộ</a>
                                    </li>
                                    <li>
                                        <a href="news-2" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Tin dịch vụ mới</a>
                                    </li>
                                    <li>
                                        <a href="news-3" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Tin ngành</a>
                                    </li>
                                    <li>
                                        <a href="news-4" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Tin quốc tế</a>
                                    </li>
                                    <li>
                                        <a href="news-5" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Thông tin hữu ích</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="mt-4 pt-6 border-t border-blueGray-100">
                            <a class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded" href="signup">Đăng ký</a>
                            <a class="block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="login">Đăng nhập</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}