// import 'server-only'
import 'server-only'
interface Dictionaries {
    en: () => Promise<typeof import('@/app/dictionary/en.json')>;
    hi: () => Promise<typeof import('@/app/dictionary/hi.json')>;
}
const dictionaries: Dictionaries = {
    en: () => import('@/app/dictionary/en.json').then((module) => module.default),
    hi: () => import('@/app/dictionary/hi.json').then((module) => module.default),
}

export const getDictionary = async (locale: Dictionaries) => dictionaries[locale]()