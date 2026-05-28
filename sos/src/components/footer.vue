<template>
<footer class="bg-green-800 text-white px-8 py-10 mt-10">
<div class="flex flex-wrap justify-between gap-8">
    <!--this is about of footer-->
    <div>
  <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA URWANDA</h3>
  <p class="text-sm text-green-200">Discover the beauty of the land of thousand hills</p>
  </div>

  <!--quicklinks-->
  <div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3 ">Quick Links</h3>
    <ul class=" space-y-2 text-sm">
        <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
        <li><RouterLink to="/contacts" class="hover:text-yellow-300">Contact</RouterLink></li>
        <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
    </ul>
  </div>
  <!--Destinations-->
  <div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
    <ul>
      <li><RouterLink to="/" class="hover:text-yellow-300">NORTHERN PROVINCE</RouterLink></li>
      <li><RouterLink to="/" class="hover:text-yellow-300">SOUTHERN PROVINCE</RouterLink></li>
      <li><RouterLink to="/" class="hover:text-yellow-300">EASTERN PROVINCE</RouterLink></li>
      <li><RouterLink to="/" class="hover:text-yellow-300">WESTERN PROVINCE</RouterLink></li>
      <li><RouterLink to="/" class="hover:text-yellow-300">KIGALI</RouterLink></li>
    </ul>
  </div>
  <!--Contact info-->
  <div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact </h3>
  <ul class="space-y-2 text-green-300 text-sm">
    <li><RouterLink to="/" class="hover:text-yellow-300">ahantubnyaburanga@gmail.com</RouterLink></li>
    <li><RouterLink to="/" class="hover:text-yellow-300">+250 788 123 456</RouterLink></li>
    <li><RouterLink to="/" class="hover:text-yellow-300">Kigali city</RouterLink></li>
  </ul>
  </div> 
  </div> 

  <!--Copyright info-->
    <div class="border-t border-green-600 mt-8 pt-4 text-sm ">
      <p class="text-center">@2025 visit Rwanda.All rights reserved</p>
    </div>
</footer>
</template>
