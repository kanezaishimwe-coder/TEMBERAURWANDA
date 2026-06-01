<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (name) => {
  router.push({ name })
}
</script>

<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">
    <img src="../assets/images/logo.png" alt="Logo" class="w-14 h-14 object-cover rounded-full">
    <span class="text-sm font-bold"> TEMBERA U RWANDA </span>
    <ul class="flex gap-8 text-sm font-medium w-full justify-end">
      <li>
        <a @click="navigateTo('Home')" class="hover:text-yellow-300 cursor-pointer">HOME</a>
      </li>
      <li>
        <a @click="navigateTo('about')" class="hover:text-yellow-300 cursor-pointer">About us</a>
      </li>
      <li>
        <a @click="navigateTo('services')" class="hover:text-yellow-300 cursor-pointer">Services</a>
      </li>
      <li class="relative group">
        <a href="#" @click.prevent="navigateTo('gallery')" class="hover:text-yellow-300">Gallery<span>▾</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><a href="#" @click.prevent="navigateTo('gallery')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</a></li>
          <li><a href="#" @click.prevent="navigateTo('gallery')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</a></li>
        </ul>
      </li>
      <!-- Added Destinations Dropdown -->
      <li class="relative group">
        <a href="#" @click.prevent="navigateTo('gallery')" class="hover:text-yellow-300">Destinations<span>▾</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><a href="#" @click.prevent="navigateTo('destination-kigali')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali City</a></li>
          <li><a href="#" @click.prevent="navigateTo('destination-northern')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern province</a></li>
          <li><a href="#" @click.prevent="navigateTo('destination-southern')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern province</a></li>
          <li><a href="#" @click.prevent="navigateTo('destination-western')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western province</a></li>
          <li><a href="#" @click.prevent="navigateTo('destination-eastern')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern province</a></li>
        </ul>
      </li>
      <li>
        <a @click="navigateTo('contacts')" class="hover:text-yellow-300 cursor-pointer">Contacts</a>
      </li>
    </ul>
  </nav>
</template>
