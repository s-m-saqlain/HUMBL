<template>
    <div>
        <div class="flex justify-center items-center mt-[6rem] gap-[10rem]">
            <div v-for="(item, index) in items" :key="index">
                <div class="bg-[#F3F6FB] rounded-[20px] px-12">
                    <img :src="item.image" class="relative bottom-8 bg-[#21ACE3] p-3 rounded-full mx-auto" />
                    <h1 class="text-center font-bold text-[#2A3033] text-[21px] uppercase">{{ item.title }}</h1>
                    <p class="text-center text-[#2A3033] w-64 pb-4">{{ item.description }}</p>
                    <img :src="item.mobile_image" class="mx-auto pb-12" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script>
import Scan from '~/assets/images/scan.svg';
import Mobile1 from '~/assets/images/mobile1.svg';
import Browser from '~/assets/images/browser.svg';
import Mobile2 from '~/assets/images/mobile2.svg';
import Video from '~/assets/images/video.svg';
import Mobile3 from '~/assets/images/mobile3.svg';
</script>

<script setup>
const items = [
    {
        image: Scan,
        title: 'QR CODE SCAN',
        description: 'Showcasing the most recent noteworthy updates.',
        mobile_image: Mobile1
    },
    {
        image: Browser,
        title: 'Verified Registry',
        description: 'Showcasing the most recent noteworthy updates.',
        mobile_image: Mobile2
    },
    {
        image: Video,
        title: 'Multimedia',
        description: 'Showcasing the most recent noteworthy updates.',
        mobile_image: Mobile3
    }
]
</script>