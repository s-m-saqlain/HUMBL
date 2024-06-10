<template>
    <div class="bg-[#F3F6FB]">
        <h1 class="font-bold text-2xl px-[8rem] pt-12 text-[#2A3033]">You May Also Like</h1>
        <div class="flex justify-between items-start gap-10 px-12">
            <div class="mt-8">
                <img @click="previous" src="~/assets/images/left_arrow.svg" class="cursor-pointer pt-[12rem]" />
            </div>
            <swiper :slidesPerView="4" :spaceBetween="45" :pagination="{ clickable: true }"
                class="mySwiper rounded-md mt-12" id="swiper-container">
                <swiper-slide v-for="(item, index) in slides" :key="index" class="rounded-md">
                    <div class="rounded-[18px] bg-[#FFFFFF]">
                        <img :src="item.imageSrc" class="mx-auto w-100 py-12" />
                    </div>
                    <p class="font-bold text-[25px] text-[#28385A] pt-2">{{ item.title }}</p>
                    <p class="text-[#28385A] pt-2">{{ item.category }}</p>
                    <div class="flex justify-between items-center pt-4">
                        <p class="font-bold text-[#28385A]">{{ item.price }}</p>
                        <img :src="item.chair" />
                    </div>
                </swiper-slide>
            </swiper>
            <div class="mt-8">
                <img @click="next" src="~/assets/images/right_arrow.png" class="cursor-pointer w-11 pt-[12rem]" />
            </div>
        </div>
    </div>
</template>

<style></style>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "~/assets/css/style.css";
import Ball from '~/assets/images/ball.svg'
import Player from '~/assets/images/player.svg'
import Helmet from '~/assets/images/cricket_helmet.svg'
import Chair from '~/assets/images/chair_slide.svg'

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

</script>