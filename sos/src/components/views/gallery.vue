
<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="bg-green-800 text-white py-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">Gallery</h1>
        <p class="text-xl max-w-2xl mx-auto">Some of the beautiful places you’ll want to visit in Rwanda.</p>
      </div>
    </section>

    <!-- Photos Grid -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-green-700 text-center mb-12">Featured Photos</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <figure class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src="https://www.rwandasafaritour.com/wp-content/uploads/2022/10/shu-Rwanda-Gisovu-Tea_1075926788-1400x823-1.jpg"
              alt="Rwanda"
              class="h-72 w-full object-cover"
              loading="lazy"
            />
            <figcaption class="p-4 text-gray-800 font-semibold">Volcanoes National Park</figcaption>
          </figure>

          <figure class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80"
              alt="Lake Kivu"
              class="h-72 w-full object-cover"
              loading="lazy"
            />
            <figcaption class="p-4 text-gray-800 font-semibold">Lake Kivu</figcaption>
          </figure>

          <figure class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1558981806-3d2c6a7b8b1b?auto=format&fit=crop&w=1200&q=80"
              alt="Kigali City"
              class="h-72 w-full object-cover"
              loading="lazy"
            />
            <figcaption class="p-4 text-gray-800 font-semibold">Kigali City</figcaption>
          </figure>

          <figure class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src="https://ukuri.travel/assets/nyungwe-canopy-walkway.webp"
              alt="Nyungwe Forest"
              class="h-72 w-full object-cover"
              loading="lazy"
            />
            <figcaption class="p-4 text-gray-800 font-semibold">Nyungwe Forest</figcaption>
          </figure>

          <figure class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1200&q=80"
              alt="Rwandan landscapes"
              class="h-72 w-full object-cover"
              loading="lazy"
            />
            <figcaption class="p-4 text-gray-800 font-semibold">Rwandan Landscapes</figcaption>
          </figure>

          <figure class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
              alt="Wildlife"
              class="h-72 w-full object-cover"
              loading="lazy"
            />
            <figcaption class="p-4 text-gray-800 font-semibold">Wildlife & Nature</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Note / CTA -->
    <section class="py-16 bg-green-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-green-700 mb-6">Want your own itinerary?</h2>
        <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
          Tell us your interests and we’ll suggest the best places and experiences for your trip.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="#" @click.prevent="$router.push({ name: 'contacts' })" class="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

