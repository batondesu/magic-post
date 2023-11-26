import Image from "next/image";

export default function Features() {
    return (
        <section class="py-12 md:py-16 lg:py-32 overflow-x-hidden" id="key-features">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap lg:flex-nowrap">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:py-6 lg:pr-32 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            <div class="mb-4">
                                <span class="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">Why choose us</span>
                                <h2 class="text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Key Features</h2>
                            </div>
                            <div class="flex items-start py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <div class="w-8 mr-5 text-blue-500">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold font-heading">Expand Your Reach</h3>
                                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                </div>
                            </div>
                            <div class="flex items-start py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                <div class="w-8 mr-5 text-blue-500">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold font-heading">Annualized Growth</h3>
                                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                </div>
                            </div>
                            <div class="flex items-start py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".9s">
                                <div class="w-8 mr-5 text-blue-500">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold font-heading">Book Your Providers</h3>
                                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative w-full lg:w-1/2 my-12 lg:my-0">
                        <div class="wow animate__animated animate__fadeInRight" data-wow-delay=".5s">
                            <Image class="jump relative mx-auto rounded-xl w-full z-10" src="/app/HomePage/assets/imgs/placeholders/img-1.png" width={200} height={50} alt="" />
                            <Image class="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="/app/HomePage/assets/imgs/elements/blob-tear.svg" width={200} height={50} alt="" />
                            <Image class="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="/app/HomePage/assets/imgs/elements/blob-tear.svg" width={200} height={50} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    )
}