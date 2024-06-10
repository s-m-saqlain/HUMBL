<template>
    <div>
        <div class="flex justify-between items-center mx-[8rem] py-6">
            <div class="flex justify-center items-center gap-12">
                <h1 class="text-[#21ACE3] text-4xl font-bold cursor-pointer">HUMBL</h1>
                <form class="max-w-md mx-auto">
                    <label for="default-search"
                        class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-400 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block w-[350px] py-[5px] ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..." required />
                    </div>
                </form>
            </div>
            <div class="flex justify-between items-center gap-4">
                <img src="~/assets/images/bag.svg" class="cursor-pointer pr-4" />
                <img src="~/assets/images/chair.svg" class="cursor-pointer" />
                <img src="~/assets/images/dot.svg" class="cursor-pointer" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>