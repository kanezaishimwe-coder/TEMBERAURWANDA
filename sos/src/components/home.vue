<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('./src/assets/1.png');">
      <div class="bg-black/40 absolute inset-0"></div>
      <div class="relative text-center px-4 z-10">
        <h1 class="text-6xl font-bold mb-4">Welcome to Rwanda</h1>
        <p class="text-2xl mb-8 text-green-300">The Land of a Thousand Hills</p>
        <p class="text-lg mb-8 max-w-2xl mx-auto">Discover the beauty, culture, and rich heritage of Rwanda - a destination like no other in Africa.</p>
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Explore Now
        </button>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-green-700 mb-12">About Rwanda</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-green-600 mb-4">Natural Beauty</h3>
            <p class="text-gray-700">Rwanda is known for its stunning landscapes, including the famous Volcanoes National Park, lush forests, and beautiful lakes.</p>
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-bold text-green-600 mb-4">Rich Culture</h3>
            <p class="text-gray-700">Experience the vibrant Rwandan culture through traditional music, dance, art, and the warm hospitality of its people.</p>
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-bold text-green-600 mb-4">Wildlife</h3>
            <p class="text-gray-700">Home to mountain gorillas, endangered species, and diverse wildlife in protected national parks and reserves.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="py-16 bg-green-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-green-700 mb-12">Why Visit Rwanda?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h4 class="text-xl font-bold text-green-600 mb-3">Mountain Gorillas</h4>
            <p class="text-gray-700">Trek through misty forests to encounter the majestic mountain gorillas in their natural habitat - a truly unforgettable experience.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h4 class="text-xl font-bold text-green-600 mb-3">Stunning Landscapes</h4>
            <p class="text-gray-700">From rolling hills and volcanic mountains to pristine lakes and dense forests, Rwanda's landscapes are breathtakingly beautiful.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h4 class="text-xl font-bold text-green-600 mb-3">Warm Welcome</h4>
            <p class="text-gray-700">Experience the genuine warmth and hospitality of Rwandan people, known for their welcoming nature and friendliness.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h4 class="text-xl font-bold text-green-600 mb-3">Adventure Activities</h4>
            <p class="text-gray-700">Enjoy hiking, bird watching, lake visits, cultural tours, and many other exciting activities throughout the country.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-green-600 text-white text-center">
      <h2 class="text-4xl font-bold mb-6">Ready for Your Rwandan Adventure?</h2>
      <p class="text-lg mb-8 max-w-2xl mx-auto">Start planning your unforgettable journey today and discover why Rwanda is Africa's most inspiring destination.</p>
      <button class="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-100 transition duration-300">
        Plan Your Trip
      </button>
    </section>
  </div>
</template>
