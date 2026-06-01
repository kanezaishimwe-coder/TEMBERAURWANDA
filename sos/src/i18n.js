import { reactive } from 'vue'

export const SUPPORTED_LOCALES = ['en', 'rw', 'fr']

const state = reactive({
  locale: localStorage.getItem('locale') || 'en'
})

export const messages = {
  en: {
    home: 'Home',
    about: 'About us',
    services: 'Services',
    galleryPhotos: 'Photos',
    galleryVideos: 'Videos',
    destinations: 'Destinations',
    contacts: 'Contacts',
    language: 'Language',
    english: 'English',
    kinyarwanda: 'Kinyarwanda',
    french: 'French',
    galleryTitle: 'Gallery',
    gallerySubtitle: 'Some of the beautiful places you’ll want to visit in Rwanda.',
    featuredPhotos: 'Featured Photos',
    wantItineraryTitle: 'Want your own itinerary?',
    wantItinerarySubtitle:
      'Tell us your interests and we’ll suggest the best places and experiences for your trip.',
    contactUs: 'Contact Us'
  },
  rw: {
    home: 'Ahabanza',
    about: 'Ibyacu',
    services: 'Serivisi',
    galleryPhotos: 'Amafoto',
    galleryVideos: 'Amavidewo',
    destinations: 'Aho ujya',
    contacts: 'Twandikire',
    language: 'Ururimi',
    english: 'Icyongereza',
    kinyarwanda: 'Ikinyarwanda',
    french: 'Igifaransa',
    galleryTitle: 'Amashusho',
    gallerySubtitle: 'Ahantu heza ushobora gusura mu Rwanda.',
    featuredPhotos: 'Amafoto akunzwe',
    wantItineraryTitle: 'Ushaka gahunda yawe?',
    wantItinerarySubtitle:
      'Tubwire ibyo ukunda; tuzakuguha amahitamo n’ahantu heza kubasura mu rugendo rwawe.',
    contactUs: 'Twandikire'
  },
  fr: {
    home: 'Accueil',
    about: 'À propos de nous',
    services: 'Services',
    galleryPhotos: 'Photos',
    galleryVideos: 'Vidéos',
    destinations: 'Destinations',
    contacts: 'Contacts',
    language: 'Langue',
    english: 'Anglais',
    kinyarwanda: 'Kinyarwanda',
    french: 'Français',
    galleryTitle: 'Galerie',
    gallerySubtitle: 'Quelques-uns des plus beaux endroits que vous voudrez visiter au Rwanda.',
    featuredPhotos: 'Photos en vedette',
    wantItineraryTitle: 'Vous voulez votre propre itinéraire ?',
    wantItinerarySubtitle:
      'Dites-nous vos centres d’intérêt et nous vous suggérerons les meilleurs endroits et expériences pour votre voyage.',
    contactUs: 'Nous contacter'
  }
}

export function useI18n() {
  const t = (key) => messages[state.locale]?.[key] ?? messages.en?.[key] ?? key

  const setLocale = (next) => {
    if (!SUPPORTED_LOCALES.includes(next)) return
    state.locale = next
    localStorage.setItem('locale', next)

    if (typeof document !== 'undefined') {
      document.documentElement.lang = next
    }
  }

  return { state, t, setLocale }
}

