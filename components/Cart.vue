<template>
    <div class="bg-[#F3F6FB] pt-12">
        <div class="bg-[#FFFFFF] w-[800px] mx-auto rounded-md">
            <h1 class="font-bold text-[#28385A] text-2xl text-center pt-[80px]">Cart</h1>
            <div v-for="(item, index) in items" :key="index" :item="item"
                class="flex justify-between items-start px-[100px] pt-12">
                <div class="flex justify-between items-center gap-4">
                    <img :src="item.image" alt="item image" />
                    <div>
                        <p class="font-bold text-[#28385A] w-64 leading-[16px]">{{ item.name }}</p>
                        <p class="text-[#8D97AB] pt-2">{{ item.brand }}</p>
                    </div>
                </div>
                <div>
                    <h1 class="font-bold text-[#28385A] text-end">{{ item.price }}</h1>
                    <div class="bg-[#F3F6FB] rounded-md py-1 px-3 mt-3">
                        <div class="flex justify-between items-start gap-2">
                            <p class="text-[#28385A] font-normal text-sm text-base cursor-pointer">Edit</p>
                            <div class="border border-r-gray-300 h-5 mt-[1px]"></div>
                            <p class="text-[#28385A] font-normal text-sm text-base cursor-pointer">Remove</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-10 border border-b-[#E4E8EE] w-100 mx-[5rem]"></div>
            <div class="flex justify-between items-center px-[100px]">
                <p class="text-[#8D97AB]">Subtotal</p>
                <p class="text-[#8D97AB]">$200.00</p>
            </div>
            <div class="flex justify-between items-center px-[100px] my-10">
                <p class="text-[#28385A] text-[20px] font-bold">Total</p>
                <p class="text-[#28385A] text-[20px] font-bold">$213.44</p>
            </div>
            <div class="w-full flex justify-center">
                <button class="mt-10 mb-[100px] bg-[#21ACE3] w-[610px] text-center rounded-md py-4">
                    <p class="text-white font-semibold text-2xl">Checkout</p>
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>

<script setup>

import { ref } from 'vue'

import Ball from '~/assets/images/small_ball.svg'

const items = ref([
    {
        image: Ball,
        name: 'Joey Wiemer Autographed White Rawlings Baseball',
        brand: 'HUMBL Authentics',
        price: '$109.99'
    },
    {
        image: Ball,
        name: 'Joey Wiemer Autographed White Rawlings Baseball',
        brand: 'HUMBL Authentics',
        price: '$109.99'
    }
])

</script>