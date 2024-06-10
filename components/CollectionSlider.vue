<template>

    <div class="flex gap-12 bg-[#F3F6FB] px-[8rem] pt-[12rem]">
        <div class="flex-col w-96">
            <div>
                <p class="uppercase font-bold text-[#002D62]">sort by</p>
                <div v-for="(option, index) in sortOptions" :key="'sort-' + index" class="flex items-center py-2">
                    <input :id="'sort-radio-' + index" type="radio" :value="option.value" name="sort-radio"
                        v-model="selectedSortOption"
                        class="w-4 h-4 text-green-500 border-white bg-[#F3F6FB] focus:ring-[#F3F6FB] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label :for="'sort-radio-' + index"
                        class="ms-2 text-sm font-medium text-[#000000] dark:text-gray-300">{{ option.label }}</label>
                </div>

                <div class="w-[13rem] border border-t-gray-300 my-12"></div>

                <p class="uppercase font-bold text-[#002D62]">Product category</p>
                <div v-for="(option, index) in categoryOptions" :key="'category-' + index"
                    class="flex items-center py-2">
                    <input :id="'category-radio-' + index" type="radio" :value="option.value" name="category-radio"
                        v-model="selectedCategoryOption"
                        class="w-4 h-4 text-green-500 border-white bg-[#F3F6FB] focus:ring-[#F3F6FB] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label :for="'category-radio-' + index"
                        class="ms-2 text-sm font-medium text-[#000000] dark:text-gray-300">{{ option.label }}</label>
                </div>

                <div class="w-[13rem] border border-t-gray-300 my-12"></div>

                <p class="uppercase font-bold text-[#002D62]">Price range</p>
                <div v-for="(option, index) in priceOptions" :key="'price-' + index" class="flex items-center py-2">
                    <input :id="'price-radio-' + index" type="radio" :value="option.value" name="price-radio"
                        v-model="selectedPriceOption"
                        class="w-4 h-4 text-green-500 border-white bg-[#F3F6FB] focus:ring-[#F3F6FB] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label :for="'price-radio-' + index"
                        class="ms-2 text-sm font-medium text-[#000000] dark:text-gray-300">{{ option.label }}</label>
                </div>
            </div>
        </div>
        <div class="w-[65rem]">
            <div class="flex justify-start items-center gap-4 px-[4rem]">
                <p class="uppercase font-bold text-2xl text-[#2A3033]">Exclusive Athlete 1</p>
                <img src="~/assets/images/arrow.svg" />
            </div>
            <div class="flex justify-between items-center gap-4">
                <div class="bg-[#FFFFFF]">
                    <img @click="previous" src="~/assets/images/left_arrow.svg" class="cursor-pointer" />
                </div>
                <swiper :slidesPerView="3" :spaceBetween="35" :pagination="{ clickable: true }"
                    class="mySwiper rounded-md mt-12" id="swiper-container">
                    <swiper-slide v-for="(item, index) in slides" :key="index" class="rounded-md">
                        <div class="rounded-[18px] bg-[#FFFFFF]">
                            <img :src="item.imageSrc" class="mx-auto py-12" />
                        </div>
                        <p class="font-bold text-[17px] text-[#28385A] pt-2">{{ item.title }}</p>
                        <p class="text-[#28385A] pt-2">{{ item.category }}</p>
                        <div class="flex justify-between items-center pt-4">
                            <p class="font-bold text-[#28385A]">{{ item.price }}</p>
                            <img :src="item.chair" />
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="bg-[#FFFFFF]">
                    <img @click="next" src="~/assets/images/right_arrow.png" class="cursor-pointer w-11" />
                </div>
            </div>
            <div class="flex justify-start items-center gap-4 px-[4rem]">
                <p class="uppercase font-bold text-2xl text-[#2A3033]">Exclusive Athlete 2</p>
                <img src="~/assets/images/arrow.svg" />
            </div>
            <div class="flex justify-between items-center gap-4">
                <div class="bg-[#FFFFFF]">
                    <img @click="previous2" src="~/assets/images/left_arrow.svg" class="cursor-pointer" />
                </div>
                <swiper :slidesPerView="3" :spaceBetween="35" :pagination="{ clickable: true }"
                    class="mySwiper rounded-md mt-12" id="swiper-container2">
                    <swiper-slide v-for="(item, index) in slides" :key="index" class="rounded-md">
                        <div class="rounded-[18px] bg-[#FFFFFF]">
                            <img :src="item.imageSrc" class="mx-auto py-12" />
                        </div>
                        <p class="font-bold text-[17px] text-[#28385A] pt-2">{{ item.title }}</p>
                        <p class="text-[#28385A] pt-2">{{ item.category }}</p>
                        <div class="flex justify-between items-center pt-4">
                            <p class="font-bold text-[#28385A]">{{ item.price }}</p>
                            <img :src="item.chair" />
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="bg-[#FFFFFF]">
                    <img @click="next2" src="~/assets/images/right_arrow.png" class="cursor-pointer w-11" />
                </div>
            </div>
            <div class="flex justify-start items-center gap-4 px-[4rem]">
                <p class="uppercase font-bold text-2xl text-[#2A3033]">Exclusive Athlete 3</p>
                <img src="~/assets/images/arrow.svg" />
            </div>
            <div class="flex justify-between items-center gap-4">
                <div class="bg-[#FFFFFF]">
                    <img @click="previous3" src="~/assets/images/left_arrow.svg" class="cursor-pointer" />
                </div>
                <swiper :slidesPerView="3" :spaceBetween="35" :pagination="{ clickable: true }"
                    class="mySwiper rounded-md mt-12" id="swiper-container3">
                    <swiper-slide v-for="(item, index) in slides" :key="index" class="rounded-md">
                        <div class="rounded-[18px] bg-[#FFFFFF]">
                            <img :src="item.imageSrc" class="mx-auto py-12" />
                        </div>
                        <p class="font-bold text-[17px] text-[#28385A] pt-2">{{ item.title }}</p>
                        <p class="text-[#28385A] pt-2">{{ item.category }}</p>
                        <div class="flex justify-between items-center pt-4">
                            <p class="font-bold text-[#28385A]">{{ item.price }}</p>
                            <img :src="item.chair" />
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="bg-[#FFFFFF]">
                    <img @click="next3" src="~/assets/images/right_arrow.png" class="cursor-pointer w-11" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "~/assets/css/style.css";
import Ball from '~/assets/images/ball.svg'
import Player from '~/assets/images/player.svg'
import Helmet from '~/assets/images/cricket_helmet.svg'
import Chair from '~/assets/images/chair_slide.svg'


const sortOptions = ref([
    { label: 'Recommended', value: 'recommended' },
    { label: 'Newest', value: 'newest' },
    { label: 'Lowest Price', value: 'lowest-price' },
    { label: 'Highest Price', value: 'highest-price' }
]);

const categoryOptions = ref([
    { label: 'T-Shirts', value: 't-shirts' },
    { label: 'Hoodies', value: 'hoodies' },
    { label: 'Collectibles', value: 'collectibles' },
    { label: 'Tickets', value: 'tickets' }
]);

const priceOptions = ref([
    { label: 'Less than $10', value: 'less-than-10' },
    { label: '$10 - $20', value: '10-20' },
    { label: '$20 - $40', value: '20-40' },
    { label: '$40 - $60', value: '40-60' },
    { label: 'Over $60', value: 'over-60' }
]);

const selectedSortOption = ref(null);
const selectedCategoryOption = ref(null);
const selectedPriceOption = ref(null);

const slides = ref([
    {
        imageSrc: Ball,
        title: "Joey Wiemer Autographed White Rawlings Baseball",
        category: "HUMBL Authentics",
        price: "$69.99",
        chair: Chair
    },
    {
        imageSrc: Player,
        title: "Bobby Hull and Dennis Hull Chicago Blackhawks Dua...",
        category: "HUMBL Authentics",
        price: "$69.99",
        chair: Chair
    },
    {
        imageSrc: Helmet,
        title: "Chad Johnson Ochocinco Autographed Product...",
        category: "HUMBL Authentics",
        price: "$69.99",
        chair: Chair
    },
    {
        imageSrc: Ball,
        title: "Joey Wiemer Autographed White Rawlings Baseball",
        category: "HUMBL Authentics",
        price: "$69.99",
        chair: Chair
    },
    {
        imageSrc: Player,
        title: "Bobby Hull and Dennis Hull Chicago Blackhawks Dua...",
        category: "HUMBL Authentics",
        price: "$69.99",
        chair: Chair
    },
    {
        imageSrc: Helmet,
        title: "Chad Johnson Ochocinco Autographed Product...",
        category: "HUMBL Authentics",
        price: "$69.99",
        chair: Chair
    },
])

function previous() {
    const swiperEl = document.getElementById('swiper-container');
    const swiper = swiperEl.swiper;
    swiper.slidePrev();
}

function next() {
    const swiperEl = document.getElementById('swiper-container');
    const swiper = swiperEl.swiper;
    swiper.slideNext();
}

function previous2() {
    const swiperEl = document.getElementById('swiper-container2');
    const swiper = swiperEl.swiper;
    swiper.slidePrev();
}

function next2() {
    const swiperEl = document.getElementById('swiper-container2');
    const swiper = swiperEl.swiper;
    swiper.slideNext();
}

function previous3() {
    const swiperEl = document.getElementById('swiper-container3');
    const swiper = swiperEl.swiper;
    swiper.slidePrev();
}

function next3() {
    const swiperEl = document.getElementById('swiper-container3');
    const swiper = swiperEl.swiper;
    swiper.slideNext();
}

</script>