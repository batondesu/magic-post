import Image from "next/image"
import imageAsset1 from './assets/imgs/logos/monst-logo.svg'
import imageAsset12 from './assets/imgs/icons/facebook-blue.svg'
import imageAsset13 from './assets/imgs/icons/instagram-blue.svg'
import imageAsset14 from './assets/imgs/icons/twitter-blue.svg'

export default function Footer() {
    return (
        <section class="py-20">
            <div class="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                <div class="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                    <div class="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                        <a class="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" href="index.html">
                            <Image src={imageAsset1} alt="" />
                        </a>
                    </div>
                    <div class="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                        <p class="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                            <strong> TỔNG CÔNG TY CHUYỂN PHÁT NHANH BƯU ĐIỆN – CTCP. </strong> 
                            <br/>
                            <p>
                                Giấy chứng nhận đăng ký doanh nghiệp, 
                                Phòng ĐKKD - Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                            </p>
                        </p>
                    </div>
                    <div class="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                        <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
                        <p class="lg:text-lg text-blueGray-400">
                            <strong>Trụ sở chính</strong> 
                            <br/>Lê Đức Thọ, Mỹ Đình 2, Nam Từ Liêm, Hà Nội <br/>
                        </p>
                    </div>
                    <div class="w-full lg:w-1/5 px-3">
                        <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacts</p>
                        <p class="lg:text-lg text-blueGray-400">Phone: 1900545433</p>
                        <p class="lg:text-lg text-blueGray-400"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="8eede1e0faefedfacee3e1e0fdfaa0ede1e3">Email: cskh@ems.com.vn</a></p>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row items-center lg:justify-between">
                    <p class="text-sm text-blueGray-400">&copy; 2023. All rights reserved</p>
                    <div class="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                        <a class="inline-block px-2" href="#">
                            <Image src={imageAsset12} alt="" />
                        </a>
                        <a class="inline-block px-2" href="#">
                            <Image src={imageAsset13} alt="" />
                        </a>
                        <a class="inline-block px-2" href="#">
                            <Image src={imageAsset14} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}