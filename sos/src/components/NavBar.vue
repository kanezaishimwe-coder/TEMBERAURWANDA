ve<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from '../i18n'

const router = useRouter()

const { state, setLocale, t } = useI18n()

const navigateTo = (name) => {
  router.push({ name })
}
</script>


<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">
    <img src="../assets/images/logo.png" alt="Logo" class="w-14 h-14 object-cover rounded-full">
    <span class="text-sm font-bold"> TEMBERA U RWANDA </span>

    <ul class="flex gap-8 text-sm font-medium w-full justify-end items-center">

      <li>
        <a @click="navigateTo('Home')" class="hover:text-yellow-300 cursor-pointer">{{ t('home') }}</a>
      </li>
      <li>
        <a @click="navigateTo('about')" class="hover:text-yellow-300 cursor-pointer">{{ t('about') }}</a>
      </li>
      <li>
        <a @click="navigateTo('services')" class="hover:text-yellow-300 cursor-pointer">{{ t('services') }}</a>
      </li>

      <li class="relative group">
        <a href="#" @click.prevent="navigateTo('gallery')" class="hover:text-yellow-300">{{ t('galleryPhotos') }}<span>▾</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><a href="#" @click.prevent="navigateTo('gallery')" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('galleryPhotos') }}</a></li>
          <li><a href="#" @click.prevent="navigateTo('gallery')" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('galleryVideos') }}</a></li>
        </ul>
      </li>

      <li class="relative group">
        <a href="#" @click.prevent="navigateTo('gallery')" class="hover:text-yellow-300">{{ t('destinations') }}<span>▾</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><a href="#" @click.prevent="navigateTo('destination-kigali')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali City</a></li>
          <li><a href="#" @click.prevent="navigateTo('destination-northern')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern province</a></li>
          <li><a href="#" @click.prevent="navigateTo('destination-southern')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern province</a></li>
          <li><a href="#" @click.prevent="navigateTo('destination-western')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western province</a></li>
          <li><a href="#" @click.prevent="navigateTo('destination-eastern')" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern province</a></li>
        </ul>
      </li>

      <li>
        <a @click="navigateTo('contacts')" class="hover:text-yellow-300 cursor-pointer">{{ t('contacts') }}</a>
      </li>

      <!-- Language switcher -->
      <li class="relative">
        <button class="bg-green-900 hover:bg-green-700 text-white px-3 py-2 rounded-lg flex items-center gap-2">
          {{ t('language') }}: {{ state.locale.toUpperCase() }}
        </button>
        <ul class="absolute right-0 mt-2 hidden group-hover:block bg-white text-green-900 rounded shadow w-44">
          <!-- (simple buttons; keep hidden dropdown if you want later) -->
        </ul>
      </li>

      <li class="flex gap-2">
        <button @click="setLocale('en')" class="bg-white/10 hover:bg-white/20 px-3 py-2 rounded">EN</button>
        <button @click="setLocale('rw')" class="bg-white/10 hover:bg-white/20 px-3 py-2 rounded">RW</button>
        <button @click="setLocale('fr')" class="bg-white/10 hover:bg-white/20 px-3 py-2 rounded">FR</button>
      </li>
    </ul>
  </nav>
</template>

