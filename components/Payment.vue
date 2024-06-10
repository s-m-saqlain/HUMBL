<template>
    <div class="bg-[#F3F6FB] pt-12">
        <div class="bg-[#FFFFFF] rounded-md mx-[130px] border border-gray-200">
            <div class="flex justify-between items-start mx-[4rem]">
                <div class="py-12">
                    <h1 class="text-[#28385A] font-bold text-[20px]">Quick Checkout</h1>
                    <img src="~/assets/images/button.svg" class="cursor-pointer pt-4" />
                    <h1 class="text-[#28385A] font-bold text-[20px] pt-8">Payment Details</h1>
                    <input type="text" id="first_name"
                        class="mt-4 py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Name on Card" required />
                    <div
                        class="mt-4 flex justify-between items-center mt-2 bg-[#F3F6FB] border border-gray-200 rounded-md">
                        <input type="text" id="first_name"
                            class="py-4 bg-[#F3F6FB] focus:outline-none text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Card Number" required />
                        <img src="~/assets/images/cart.svg" class="px-8 cursor-pointer" />
                    </div>
                    <div class="flex justify-between items-center mt-2 gap-4 mt-4">
                        <input type="text" id="first_name"
                            class="py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Expiration Date (MM//YY)" required />
                        <input type="text" id="first_name"
                            class="py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="CVC" required />
                    </div>
                    <h1 class="text-[#28385A] font-bold text-[20px] pt-8">Shipping Information</h1>
                    <div class="flex justify-between items-center gap-4 mt-4">
                        <input type="text" id="first_name"
                            class="py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="First Name" required />
                        <input type="First Name" id="first_name"
                            class="py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Last Name" required />
                    </div>
                    <input type="text" id="first_name"
                        class="mt-4 py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address" required />
                    <div class="flex justify-between items-center gap-4 mt-4">
                        <input type="text" id="first_name"
                            class="py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="City" required />
                        <input type="First Name" id="first_name"
                            class="py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="State / Province" required />
                        <input type="First Name" id="first_name"
                            class="py-4 bg-[#F3F6FB] focus:outline-none border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Postal Code" required />
                    </div>
                    <h1 class="text-[#28385A] font-bold text-[20px] pt-8">Billing Information</h1>
                    <div class="flex justify-start items-center gap-2 pt-6">
                        <input id="default-checkbox" type="checkbox" value=""
                            class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-50 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <p class="text-[#28385A] text-[15px] font-semibold">Same as shipping information</p>
                    </div>
                    <div class="border border-b-[#E4E8EE] my-10"></div>
                    <div class="w-full flex justify-center">
                        <button class="bg-[#21ACE3] w-[610px] text-center rounded-md py-4">
                            <p class="text-white font-semibold text-3xl">Pay $222</p>
                        </button>
                    </div>
                </div>
                <div class="border border-l-gray-100 h-[990px]"></div>

                <div class="pt-12">
                    <div class="flex justify-between items-start">
                        <div class="flex justify-between items-center gap-8">
                            <img src="~/assets/images/small_ball.svg" alt="item image" />
                            <div>
                                <p class="font-bold text-[#28385A] w-64 leading-[16px]">Joey Wiemer Autographed White
                                    Rawlings Baseball</p>
                                <p class="text-[#8D97AB] pt-2">HUMBL Authentics</p>
                            </div>
                        </div>

                        <div>
                            <h1 class="font-bold text-[#28385A] text-end">$100</h1>
                            <div class="bg-[#F3F6FB] rounded-md py-1 px-3 mt-3">
                                <div class="flex justify-between items-start gap-2">
                                    <p class="text-[#28385A] font-normal text-sm text-base cursor-pointer">Edit</p>
                                    <div class="border border-r-gray-300 h-5 mt-[1px]"></div>
                                    <p class="text-[#28385A] font-normal text-sm text-base cursor-pointer">Remove</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="my-5 border border-b-gray-50 w-100"></div>

                    <div class="flex justify-between items-start">
                        <div class="flex justify-between items-center gap-4">
                            <img src="~/assets/images/small_ball.svg" alt="item image" />
                            <div>
                                <p class="font-bold text-[#28385A] w-64 leading-[16px]">Joey Wiemer Autographed White
                                    Rawlings Baseball</p>
                                <p class="text-[#8D97AB] pt-2">HUMBL Authentics</p>
                            </div>
                        </div>

                        <div>
                            <h1 class="font-bold text-[#28385A] text-end">$100</h1>
                            <div class="bg-[#F3F6FB] rounded-md py-1 px-3 mt-3">
                                <div class="flex justify-between items-start gap-2">
                                    <p class="text-[#28385A] font-normal text-sm text-base cursor-pointer">Edit</p>
                                    <div class="border border-r-gray-300 h-5 mt-[1px]"></div>
                                    <p class="text-[#28385A] font-normal text-sm text-base cursor-pointer">Remove</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-[4rem] border border-b-gray-50 w-100"></div>
                    <div class="flex justify-between items-center mt-8">
                        <p class="text-[#8D97AB]">Subtotal</p>
                        <p class="text-[#000000] font-medium">$200.00</p>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <p class="text-[#8D97AB]">Shipping</p>
                        <p class="text-[#000000] font-medium">$5.00</p>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <p class="text-[#8D97AB]">Taxes</p>
                        <p class="text-[#000000] font-medium">$17.00</p>
                    </div>
                    <div class="mt-[4rem] border border-b-gray-50 w-100"></div>
                    <div class="flex justify-between items-center my-10">
                        <p class="text-[#28385A] text-4xl font-bold">Total</p>
                        <p class="text-[#28385A] text-4xl font-bold">$222</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>

<script setup>

</script>