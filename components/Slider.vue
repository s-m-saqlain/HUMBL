<template>
    <div class="bg-[#F3F6FB] mt-[5rem]">
        <div class="flex justify-between items-center gap-12 py-[6rem]">
            <div class="w-[800px] pl-12">
                <h1 class="font-bold text-[#2A3033] text-2xl uppercase">Recent verifications</h1>
                <p class="">Customers can use their mobile devices to scan the tamper-evident QR code on the item to see
                    all of
                    the vital information aboutthe life cycle, tracking and authenticity of product.</p>
            </div>
            <swiper :slidesPerView="2.4" :spaceBetween="20" :pagination="{ clickable: true }" :modules="modules"
                class="mySwiper w-full rounded-md">
                <swiper-slide v-for="(item, index) in slides" :key="index"
                    class="bg-slide bg-cover bg-no-repeat rounded-md">
                    <img :src="item.imageSrc" class="mx-auto mt-5" />
                    <p class="pl-10 font-bold text-2xl">{{ item.title }}</p>
                    <div class="flex justify-start gap-[8rem] px-6 mt-6">
                        <div class="pl-4">
                            <p>{{ item.category }}</p>
                            <p class="pt-10">{{ item.date }}</p>
                        </div>
                        <img src="~/assets/images/bg_humbl.svg" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style scoped></style>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "~/assets/css/style.css";
import { Pagination } from "swiper/modules";
import Helmet from "~/assets/images/slide_helmet.svg";
import Tyre from "~/assets/images/slide_tyre.svg";

const slides = [
    {
        imageSrc: Helmet,
        title: "Patrick Mahomes Signed Football Helmet",
        category: "Memorabilia",
        date: "Feb 27, 2024"
    },
    {
        imageSrc: Tyre,
        title: "Joey Gase Autographed Goodyear Tire Coaster",
        category: "Memorabilia",
        date: "Feb 27, 2024"
    },
    {
        imageSrc: Helmet,
        title: "Patrick Mahomes Signed Football Helmet",
        category: "Memorabilia",
        date: "Feb 27, 2024"
    },
    {
        imageSrc: Tyre,
        title: "Joey Gase Autographed Goodyear Tire Coaster",
        category: "Memorabilia",
        date: "Feb 27, 2024"
    }
]

</script>