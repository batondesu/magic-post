import imageAsset11 from './assets/imgs/elements/blob.svg'

export default function Search() {
    return (
        <section className="py-20 bg-top bg-no-repeat" id="search" style={{ backgroundImage: `url(${imageAsset11.src})` }}>
            <div className="container px-4 mx-auto">
                <div className="relative py-20 px-4 lg:p-20">
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeInUp">
                            <span>Tra cứu</span>
                            <span className="text-blue-500"> BƯU GỬI </span>
                        </h2>
                        <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            Mã bưu gửi (tra nhiều bill thêm dấu phẩy giữa các bill VD: EB125966888VN, EI125556888VN)
                        </p>
                        <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                            <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                <svg className="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <input className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="text" placeholder="Nhập mã bưu gửi" />
                            </div>
                            <button className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Đến</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    )
}