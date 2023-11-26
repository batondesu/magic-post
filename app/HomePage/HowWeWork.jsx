import Image from "next/image";

export default function HowWeWork() {
    return (
        <section class="py-20 bg-blueGray-50" id="how-we-work">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                    <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
                        <h2 class="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                            <span>We are </span>
                            <span class="text-blue-500">awesome team</span>
                            <br />
                            <span>for your business dream</span>
                        </h2>
                    </div>
                    <div class="w-full lg:w-1/2 lg:pl-16">
                        <p class="text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 -mb-6 text-center">
                    <div class="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <div class="p-12 bg-white shadow rounded">
                            <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                            <Image class="h-48 mx-auto my-4" src="/app/HomePage/assets/imgs/illustrations/eating.svg" width={200} height={50} alt="" />
                            <h3 class="mb-2 font-bold font-heading">Project Initialization</h3>
                            <p class="text-sm text-blueGray-400 leading-relaxed">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
                        </div>
                    </div>
                    <div class="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <div class="p-12 bg-white shadow rounded">
                            <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                            <Image class="h-48 mx-auto my-4" src="/app/HomePage/assets/imgs/illustrations/space.svg" width={200} height={50} alt="" />
                            <h3 class="mb-2 font-bold font-heading">Looking for Creative</h3>
                            <p class="text-sm text-blueGray-400 leading-relaxed">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
                        </div>
                    </div>
                    <div class="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                        <div class="p-12 bg-white shadow rounded wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                            <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                            <Image class="h-48 mx-auto my-4" src="/app/HomePage/assets/imgs/illustrations/tasks.svg" width={200} height={50} alt="" />
                            <h3 class="mb-2 font-bold font-heading">Market Development</h3>
                            <p class="text-sm text-blueGray-400 leading-relaxed">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    )
}