import Image from "next/image";

export default function Complex() {
    return (
        <section class="py-12 md:py-20">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap -mx-3">
                    <div class="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                        <div class="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                            <h2 class="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Simple Solution for <span class="text-blue-500">Complex</span> Connections</h2>
                            <p class="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp" data-wow-delay=".9s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                        </div>
                        <div class="lg:absolute lg:bottom-0 lg:left-0 flex justify-center">
                            <div id="carausel-2-columns-1-arrows" class="flex"></div>
                        </div>
                    </div>
                    <div class="w-full lg:w-2/3 flex flex-wrap">
                        <div class="relative w-full">
                            <div class="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                <div class="px-3 pb-5">
                                    <div class="card-slider group">
                                        <Image class="rounded-xl" src="/app/HomePage/assets/imgs/placeholders/img-2.jpg" width={200} height={50} alt="" />
                                        <div class="flex justify-between items-end">
                                            <div>
                                                <h1 class="mt-5 text-xl font-semibold group-hover:text-blue-500">User growth</h1>
                                                <p class="mt-2 text-xs text-gray-500">Harvard university</p>
                                            </div>
                                            <div>
                                                <a class="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 pb-5">
                                    <div class="card-slider group">
                                        <Image class="rounded-xl" src="/app/HomePage/assets/imgs/placeholders/img-3.jpg" width={200} height={50} alt="" />
                                        <div class="flex justify-between items-end">
                                            <div>
                                                <h1 class="mt-5 text-xl font-semibold group-hover:text-blue-500">Product Launch</h1>
                                                <p class="mt-2 text-xs text-gray-500">Cocacola., Co</p>
                                            </div>
                                            <div>
                                                <a class="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 pb-5">
                                    <div class="card-slider group">
                                        <Image class="rounded-xl" src="/app/HomePage/assets/imgs/placeholders/img-4.jpg" width={200} height={50} alt="" />
                                        <div class="flex justify-between items-end">
                                            <div>
                                                <h1 class="mt-5 text-xl font-semibold group-hover:text-blue-500">New Event</h1>
                                                <p class="mt-2 text-xs text-gray-500">Oxford university</p>
                                            </div>
                                            <div>
                                                <a class="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 pb-5">
                                    <div class="card-slider group">
                                        <Image class="rounded-xl" src="/app/HomePage/assets/imgs/placeholders/img-5.jpg" width={200} height={50} alt="" />
                                        <div class="flex justify-between items-end">
                                            <div>
                                                <h1 class="mt-5 text-xl font-semibold group-hover:text-blue-500">Shopping Mall</h1>
                                                <p class="mt-2 text-xs text-gray-500">Alibaba Co</p>
                                            </div>
                                            <div>
                                                <a class="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}