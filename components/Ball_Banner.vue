<template>
    <div class="bg-[#F3F6FB] pt-12 px-[8rem]">
        <div class="flex justify-center items-start gap-[7rem] bg-[#FFFFFF]">
            <div>
                <img src="~/assets/images/ball.svg" class="w-[400px] my-[7rem]" />
                <div class="flex justify-between items-center mb-12">
                    <div v-for="(image, index) in images" :key="index">
                        <img :src="image.src" :class="{
                            'w-[6rem] border p-4 rounded-md cursor-pointer': true,
                            'border-black': selectedImage === index,
                            'border-transparent': selectedImage !== index
                        }" @click="selectImage(index)" />
                    </div>
                </div>
            </div>
            <div class="mt-[5rem]">
                <h1 class="text-[#3E3E3E] font-bold text-3xl">$109.99</h1>
                <p class="text-[#3E3E3E] text-[20px] font-bold pt-2">Joey Wiemer Autographed White Rawlings Baseball</p>
                <p class="text-[#28385A] text-sm text-base pt-2">HUMBL Authentics</p>
                <div class="border border-t-[#E4E8EE] mt-2 w-[700px]"></div>

                <form class="w-[12rem] mt-6">
                    <label for="countries"
                        class="block mb-2 text-sm text-base font-bold text-[#000000]">Quantity</label>
                    <select id="countries"
                        class="focus-none bg-white border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option selected>1</option>
                        <option value="US">2</option>
                        <option value="CA">3</option>
                        <option value="FR">4</option>
                        <option value="DE">5</option>
                    </select>
                </form>
                <button class="bg-[#21ACE3] rounded-md w-[340px] py-[6px] mt-8">
                    <p class="text-[#FFFFFF] font-semibold">Buy Now</p>
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>

<script setup>
import { ref } from 'vue';
import Ball from "~/assets/images/ball.svg"
const images = ref([
    { src: Ball },
    { src: Ball },
    { src: Ball },
    { src: Ball },
    { src: Ball }
]);

const selectedImage = ref(null);

// Function to update the selected image
const selectImage = (index) => {
    selectedImage.value = index;
};
</script>