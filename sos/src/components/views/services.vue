<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center text-white h-screen flex items-center justify-center" style="background-image: url('./src/assets/1.png');">
      <div class="bg-black/40 absolute inset-0"></div>
      <div class="relative text-center px-4 z-10">
        <h1 class="text-6xl font-bold mb-4">Explore Rwanda with Us</h1>
        <p class="text-2xl text-green-200 mb-8">Tours, destinations, and travel support tailored for you.</p>
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Get Started
        </button>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-green-700 text-center mb-12">Our Services</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-green-50 p-8 rounded-lg shadow-sm text-center">
            <h3 class="text-2xl font-bold text-green-600 mb-3">Tour Planning</h3>
            <p class="text-gray-700">We design your itinerary based on your interests, budget, and schedule.</p>
          </div>

          <div class="bg-green-50 p-8 rounded-lg shadow-sm text-center">
            <h3 class="text-2xl font-bold text-green-600 mb-3">Destination Guidance</h3>
            <p class="text-gray-700">Recommendations for the best places to visit across Rwanda.</p>
          </div>

          <div class="bg-green-50 p-8 rounded-lg shadow-sm text-center">
            <h3 class="text-2xl font-bold text-green-600 mb-3">Travel Support</h3>
            <p class="text-gray-700">Help with bookings, local support, and smooth travel throughout your trip.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-green-600 text-white text-center">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-6">Ready to plan your trip?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">Tell us your preferences and we’ll build an experience you’ll love.</p>
        <button class="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-100 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  </div>
</template>

