<script setup>
import { useI18n } from '../../i18n'

const { t } = useI18n()

const galleryVideos = [
  {
    caption: 'Volcanoes National Park Tour',
    sources: [
      { src: '/gallery/videos/video1.mp4', type: 'video/mp4' },
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', type: 'video/mp4' }
    ]
  },
  {
    caption: 'Kigali City Highlights',
    sources: [
      { src: '/gallery/videos/video2.mp4', type: 'video/mp4' },
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', type: 'video/mp4' }
    ]
  },
  {
    caption: 'Rwanda Nature Experience',
    sources: [
      { src: '/gallery/videos/video3.mp4', type: 'video/mp4' },
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', type: 'video/mp4' }
    ]
  }
]
</script>

<template>
  <div class="w-full">

    <!-- Hero Section -->
    <section class="bg-green-800 text-white py-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">{{ t('galleryTitle') }}</h1>
        <p class="text-xl max-w-2xl mx-auto">{{ t('gallerySubtitle') }}</p>
      </div>
    </section>


    <!-- Photos Grid -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-green-700 text-center mb-12">{{ t('featuredPhotos') }}</h2>

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

    <!-- Videos Section -->
    <section class="py-16 bg-green-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-green-700 text-center mb-12">{{ t('galleryVideos') }}</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(video, index) in galleryVideos"
            :key="index"
            class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-3"
          >
            <video controls class="w-full rounded-lg" preload="metadata" poster="https://via.placeholder.com/640x360?text=Video+Preview">
              <template v-for="source in video.sources" :key="source.src">
                <source :src="source.src" :type="source.type" />
              </template>
              Sorry, your browser does not support HTML5 video.
            </video>
            <p class="mt-4 text-gray-700 font-semibold text-center">{{ video.caption }}</p>
          </div>
        </div>

        <p class="mt-6 text-sm text-gray-600 text-center">
          Add your local video files to <code class="bg-gray-100 rounded px-1 py-0.5">public/gallery/videos</code> as
          <code>video1.mp4</code>, <code>video2.mp4</code>, and <code>video3.mp4</code>. If the local file is missing,
          a sample fallback video will still play.
        </p>
      </div>
    </section>

    <!-- Note / CTA -->
    <section class="py-16 bg-green-50">

      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-green-700 mb-6">{{ t('wantItineraryTitle') }}</h2>
        <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
          {{ t('wantItinerarySubtitle') }}
        </p>

        <div class="flex gap-4 justify-center">
          <a href="#" @click.prevent="$router.push({ name: 'contacts' })" class="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300">
            {{ t('contactUs') }}
          </a>

        </div>
      </div>
    </section>
  </div>
</template>

