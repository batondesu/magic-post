import Image from "next/image";

export default function Header() {
    return (
        <header class="bg-transparent sticky-bar mt-4">
            <div class="container bg-transparent">
                <nav class="bg-transparent flex justify-between items-center py-3">
                    <a class="text-3xl font-semibold leading-none" href="index.html">
                        <Image class="h-10" src="/logos/monst-logo.svg" width={200} height={50} alt="" />
                    </a>
                    <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                        <li class="pt-4 pb-4">
                            <a href="index.html" class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Home</a>
                        </li>
                        <li class="pt-4 pb-4">
                            <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="about.html">About Us</a>
                        </li>
                        <li class="pt-4 pb-4">
                            <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="services.html">Services</a>
                        </li>
                        <li class="group relative pt-4 pb-4 has-child">
                            <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="#">Company</a>
                            <ul class="drop-down-menu min-w-200">
                                <li>
                                    <a href="portfolio.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Portfolio</a>
                                </li>
                                <li>
                                    <a href="team.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Team</a>
                                </li>
                                <li>
                                    <a href="testimonials.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Testimonials</a>
                                </li>
                                <li>
                                    <a href="pricing.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Pricing</a>
                                </li>
                                <li>
                                    <a href="faqs.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Faqs</a>
                                </li>
                                <li>
                                    <a href="404.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">404</a>
                                </li>
                            </ul>
                        </li>
                        <li class="group relative pt-4 pb-4 has-child">
                            <a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="#">Blog</a>
                            <ul class="drop-down-menu min-w-200">
                                <li>
                                    <a href="blog.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Category 1</a>
                                </li>
                                <li>
                                    <a href="blog-2.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Category 2</a>
                                </li>
                                <li>
                                    <a href="blog-single.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Single 1</a>
                                </li>
                                <li>
                                    <a href="blog-single-2.html" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Single 2</a>
                                </li>
                            </ul>
                        </li>
                        <li class="pt-4 pb-4"><a class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="contact.html">Contact</a></li>
                    </ul>
                    <div class="hidden lg:block">
                        <a class="btn-accent hover-up-2" href="login.html">Log In</a>
                        <a class="btn-primary hover-up-2" href="signup.html">Sign Up</a>
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
    )
}