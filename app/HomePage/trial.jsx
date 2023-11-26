import Image from "next/image";
import imageAsset18 from './assets/imgs/backgrounds/intersect.svg'
import imageAsset19 from './assets/imgs/icons/startup.svg'
import imageAsset20 from './assets/imgs/icons/agency.svg'
import imageAsset21 from './assets/imgs/icons/enterprise.svg'

export default function Trial() {
    return (
        <section class="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: `url( ${imageAsset18.src} )` }}>
            <div class="container px-4 mx-auto">
                <div class="text-center mb-16">
                    <h2 class="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <span>Thông tin </span>
                        <span class="text-blue-500">chi nhánh </span> <br/>
                        <span>trên toàn quốc</span>
                    </h2>
                </div>
                <div class="flex flex-wrap -mx-3">
                    <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                        <div class="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <Image class="h-20 mb-6 mx-auto" src={imageAsset19} alt="" />
                            <h3 class="mb-2 text-4xl font-bold font-heading">TP Hồ Chí Minh</h3>
                            <div class="flex flex-col items-center mb-8">
                                <ul class="text-blueGray-400">
                                    <li class="flex mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>36 Bis Ba Vì, Phường 4, Tân Bình</span>
                                    </li>
                                    <li class="flex mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>1900545433</span>
                                    </li>
                                    <li class="flex mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>cskh@ems.com.vn</span>
                                    </li>
                                    <li class="flex">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Chi nhánh miền Nam</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a class="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">Tóm tắt</a>
                                <a class="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">Chi tiết</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                        <div class="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                            <Image class="h-20 mb-6 mx-auto" src={imageAsset20} alt="" />
                            <h3 class="mb-2 text-4xl font-bold font-heading">Hà Nội</h3>
                            <div class="flex flex-col items-center mb-8">
                                <ul>
                                    <li class="flex items-center mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Số 1 Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm</span>
                                    </li>
                                    <li class="flex items-center mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>1900545433</span>
                                    </li>
                                    <li class="flex items-center mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>cskh@ems.com.vn</span>
                                    </li>
                                    <li class="flex">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Chi nhánh miền Bắc</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a class="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">Tóm tắt</a>
                                <a class="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border-blue-500 hover:border-blue-400 rounded" href="#">Chi tiết</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 px-3 mb-6">
                        <div class="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeInUp" data-wow-delay=".6s">
                            <Image class="h-20 mb-6 mx-auto" src={imageAsset21} alt="" />
                            <h3 class="mb-2 text-4xl font-bold font-heading">Đà Nẵng</h3>
                            <div class="flex flex-col items-center mb-8">
                                <ul class="text-blueGray-400">
                                    <li class="flex mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>868 Nguyễn Hữu Thọ, Cẩm Lệ</span>
                                    </li>
                                    <li class="flex mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>1900545433</span>
                                    </li>
                                    <li class="flex mb-3">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>cskh@ems.com.vn</span>
                                    </li>
                                    <li class="flex">
                                        <svg class="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Chi nhánh miền Trung</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a class="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">Tóm tắt</a>
                                <a class="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">Chi tiết</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}