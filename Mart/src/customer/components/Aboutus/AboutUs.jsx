import React from 'react'
import Layout from '../Layout'

function AboutUs() {
    return (
        <Layout>
            <section class="py-12 bg-gray-100">
                <div class=" mx-auto flex flex-col lg:flex-row items-center">
                    <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 transition-transform transform hover:scale-105">
                        <img class="rounded-lg shadow-lg" src="https://img.freepik.com/free-psd/arabian-explaining-speaker-presentation-conference-partnership_53876-57321.jpg?w=826&t=st=1715683066~exp=1715683666~hmac=e75ab7917dfe18e224b9e33e905d61fd6e41c7783255247ecd5392e5d36f9989" alt="About Us" />
                    </div>
                    <div class="w-full lg:w-1/2 px-4">
                        <h2 class="text-4xl font-bold mb-4">Who Are We?</h2>
                        <p class="text-lg text-gray-700 mb-4">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                        <p class="text-lg text-gray-700 mb-6">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                        <div class="flex flex-wrap -mx-4">
                            <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-transform transform hover:scale-105">
                                <div class="flex items-start">
                                    <div class="text-blue-600 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold mb-2">Versatile Brand</h3>
                                        <p class="text-gray-600">We are crafting a digital method that subsists life across all mediums.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 px-4 transition-transform transform hover:scale-105">
                                <div class="flex items-start">
                                    <div class="text-blue-600 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold mb-2">Digital Agency</h3>
                                        <p class="text-gray-600">We believe in innovation by merging primary with elaborate ideas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">View More</button>
                    </div>
                </div>
            </section>

            <section class="py-12 bg-gray-50">
                <div class=" mx-auto flex flex-col lg:flex-row-reverse items-center">
                    <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 transition-transform transform hover:scale-105">
                        <img class="rounded-lg shadow-lg" src="https://img.freepik.com/free-photo/business-people-meeting-communication-discussion-working-office_53876-137331.jpg?w=826&t=st=1715683066~exp=1715683666~hmac=cf3fe14a5a449bd1875801a7e30a1d2f6b4418505fdbbf4e58baf0f9d6074975" alt="Our Mission" />
                    </div>
                    <div class="w-full lg:w-1/2 px-4">
                        <h2 class="text-4xl font-bold mb-4">Our Mission</h2>
                        <p class="text-lg text-gray-700 mb-4">We aim to deliver exceptional products and services that exceed customer expectations. Our mission is to innovate continuously and deliver outstanding value.</p>
                        <p class="text-lg text-gray-700 mb-6">Our team is dedicated to providing top-notch solutions and services, ensuring that our clients achieve their goals. We prioritize customer satisfaction and strive for excellence in all our endeavors.</p>
                        <div class="flex flex-wrap -mx-4">
                            <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-transform transform hover:scale-105">
                                <div class="flex items-start">
                                    <div class="text-blue-600 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                                            <path d="M2 6.5a6.5 6.5 0 1 1 11.456 4.142 5.522 5.522 0 0 0-.74 1.81 1.5 1.5 0 0 0-.01.08 1.5 1.5 0 0 1-1.439 1.25H4.733a1.5 1.5 0 0 1-1.439-1.25 1.5 1.5 0 0 0-.01-.08 5.522 5.522 0 0 0-.74-1.81A6.5 6.5 0 0 1 2 6.5zm8.407 7h-4.814a5.498 5.498 0 0 0 .603 1h3.608a5.498 5.498 0 0 0 .603-1zM7 13h2v1H7v-1z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold mb-2">Innovative Solutions</h3>
                                        <p class="text-gray-600">We are committed to delivering cutting-edge solutions that drive success.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 px-4 transition-transform transform hover:scale-105">
                                <div class="flex items-start">
                                    <div class="text-blue-600 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.396.197-.812-.146-.746-.592l.83-4.73-3.522-3.356c-.329-.315-.158-.888.283-.95l4.898-.696L8 .792l2.19 4.419 4.898.696c.441.063.612.635.283.95l-3.522 3.356.83 4.73c.066.446-.35.789-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold mb-2">Outstanding Value</h3>
                                        <p class="text-gray-600">We strive to offer the best value through quality and service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">View More</button>
                    </div>
                </div>
            </section>

            <section class="py-12 bg-gray-100">
                <div class=" mx-auto flex flex-col lg:flex-row items-center">
                    <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 transition-transform transform hover:scale-105">
                        <img class="rounded-lg shadow-lg" src="https://img.freepik.com/free-psd/arabian-explaining-speaker-presentation-conference-partnership_53876-57321.jpg?w=826&t=st=1715683066~exp=1715683666~hmac=e75ab7917dfe18e224b9e33e905d61fd6e41c7783255247ecd5392e5d36f9989" alt="About Us" />
                    </div>
                    <div class="w-full lg:w-1/2 px-4">
                        <h2 class="text-4xl font-bold mb-4">Who Are We?</h2>
                        <p class="text-lg text-gray-700 mb-4">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                        <p class="text-lg text-gray-700 mb-6">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                        <div class="flex flex-wrap -mx-4">
                            <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-transform transform hover:scale-105">
                                <div class="flex items-start">
                                    <div class="text-blue-600 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold mb-2">Versatile Brand</h3>
                                        <p class="text-gray-600">We are crafting a digital method that subsists life across all mediums.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 px-4 transition-transform transform hover:scale-105">
                                <div class="flex items-start">
                                    <div class="text-blue-600 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold mb-2">Digital Agency</h3>
                                        <p class="text-gray-600">We believe in innovation by merging primary with elaborate ideas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">View More</button>
                    </div>
                </div>
            </section>






        </Layout>

    )
}

export default AboutUs