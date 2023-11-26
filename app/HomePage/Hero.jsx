import Image from "next/image";

export default function Hero() {
    return (
        <section class="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24" style={{ backgroundImage: 'url("/app/HomePage/assets/imgs/backgrounds/intersect.svg")' }}>
            <div class="container px-4 mx-auto">
                <div class="pt-12 text-center">
                    <div class="max-w-2xl mx-auto mb-8">
                        <h2 class="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                        Committed to People <br />Committed <span class="text-blue-500">to the Future</span></h2>
                        <p class="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">We are <strong class="text-blue-500">Monst</strong>, 
                        a Creative Design <span class="typewrite d-inline text-brand" data-period="3000" data-type='["Web Agency", "Social Marketing" ]'></span></p>
                    </div>
                    <div>
                        <a class="btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeInUp hover-up-2" href="#key-features">Key Features</a>
                        <a class="btn-white wow animate__animated animate__fadeInUp hover-up-2" data-wow-delay=".3s" href="#how-we-work">How We Work?</a>
                    </div>
                </div>
            </div>
            <div class="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
                <Image src="/app/HomePage/assets/imgs/elements/pattern.png" width={200} height={50} alt="" />
                <div class="absolute" style={{ top: '9%', left: '14%', width: '72%', height: '66%' }}>
                    <Image class="jump rounded wow animate__animated animate__fadeInUp" 
                        src="/app/HomePage/assets/imgs/placeholders/dashboard.png"
                        width={200} height={50} alt="" 
                    />
                </div>
            </div>
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap justify-between pt-8 pb-16">
                    <div class="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <div class="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <div class="sm:py-2 ml-2 sm:ml-6">
                            <span class="sm:text-2xl font-bold font-heading">+ </span>
                            <span class="sm:text-2xl font-bold font-heading count">150</span>
                            <p class="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                        </div>
                    </div>
                    <div class="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                        <div class="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                            </svg>
                        </div>
                        <div class="sm:py-2 ml-2 sm:ml-6">
                            <span class="sm:text-2xl font-bold font-heading">+ </span>
                            <span class="sm:text-2xl font-bold font-heading count">58</span>
                            <span class="sm:text-2xl font-bold font-heading"> k </span>
                            <p class="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                        </div>
                    </div>
                    <div class="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".6s">
                        <div class="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                        </div>
                        <div class="sm:py-2 ml-2 sm:ml-6">
                            <span class="sm:text-2xl font-bold font-heading">+ </span>
                            <span class="sm:text-2xl font-bold font-heading count">500</span>
                            <p class="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                        </div>
                    </div>
                    <div class="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".8s">
                        <div class="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <div class="sm:py-2 ml-2 sm:ml-6">
                            <span class="sm:text-2xl font-bold font-heading">+ </span>
                            <span class="sm:text-2xl font-bold font-heading count">320</span>
                            <p class="text-xs sm:text-base text-blueGray-400">Research Work</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}