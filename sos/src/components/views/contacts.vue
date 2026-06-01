<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl max-w-2xl mx-auto">Let’s plan your next Rwanda adventure together. Send us a message below.</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 class="text-3xl font-bold text-green-700 mb-4">Message us</h2>
            <p class="text-gray-700 mb-6">Share what you want to do in Rwanda and we’ll respond with travel options and next steps.</p>

            <form class="space-y-4" @submit.prevent>
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Phone (optional)</label>
                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="+250..." />
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea rows="5" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Tell us about your trip..." ></textarea>
              </div>

              <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <div class="bg-green-50 p-8 rounded-xl shadow-sm">
            <h2 class="text-3xl font-bold text-green-700 mb-4">Other ways to reach us</h2>
            <ul class="space-y-4 text-gray-700">
              <li class="flex items-start gap-3">
                <span class="text-green-700 font-bold">Email:</span>
                <span>info@temberarwanda.example</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-700 font-bold">Phone:</span>
                <span>+250 794 649</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-700 font-bold">Location:</span>
                <span>Kigali, Rwanda</span>
              </li>
            </ul>

            <div class="mt-8">
              <h3 class="text-2xl font-bold text-green-600 mb-3">What happens next?</h3>
              <p class="text-gray-700">We usually respond within 24 hours with a suggested itinerary and options based on your interests.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

