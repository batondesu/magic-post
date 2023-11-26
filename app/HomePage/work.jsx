import Image from "next/image";
import imageAsset15 from './assets/imgs/illustrations/eating.svg'
import imageAsset16 from './assets/imgs/illustrations/space.svg'
import imageAsset17 from './assets/imgs/illustrations/tasks.svg'

export default function Work() {
    return (
        <section class="py-20 bg-blueGray-50" id="how-we-work">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                    <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
                        <h2 class="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                            <span>Nhanh chóng, </span>
                            <span class="text-blue-500">chính xác</span>
                            <br />
                            <span>an toàn và </span> 
                            <span class="text-blue-500">chuyên nghiệp</span>
                        </h2>
                    </div>
                    <div class="w-full lg:w-1/2 lg:pl-16">
                        <p class="text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp">
                        Dịch vụ chuyển phát nhanh MagicPost cho phép vận chuyển tất cả các loại hàng hóa trong thời gian nhanh chóng, chính xác và chuyên nghiệp. 
                        Thời điểm hiện tại, dịch vụ chuyển phát nhanh MagicPost ở Việt Nam đang được 100% các bưu điện và bưu cục cung cấp trên 63 tỉnh thành. 
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 -mb-6 text-center">
                    <div class="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <div class="p-12 bg-white shadow rounded">
                            <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                            <Image class="h-48 mx-auto my-4" src={imageAsset15} alt="" />
                            <h3 class="mb-2 font-bold font-heading">Khách hàng tin dùng</h3>
                        </div>
                    </div>
                    <div class="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <div class="p-12 bg-white shadow rounded">
                            <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                            <Image class="h-48 mx-auto my-4" src={imageAsset16} alt="" />
                            <h3 class="mb-2 font-bold font-heading">Bưu gửi đã chuyển</h3>
                        </div>
                    </div>
                    <div class="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                        <div class="p-12 bg-white shadow rounded wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                            <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                            <Image class="h-48 mx-auto my-4" src={imageAsset17} alt="" />
                            <h3 class="mb-2 font-bold font-heading">Số lượng bưu cục</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    )
}