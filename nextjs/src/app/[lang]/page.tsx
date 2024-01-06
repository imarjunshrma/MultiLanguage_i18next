import Image from 'next/image'
import { getDictionary } from './dictionary'
// import SelectComponent from '@/components/SelectComponent'


export default async function Home({ params: { lang } }) {
  // console.log(lang)
  // const dict = await getDictionary(lang)
  const dict = await getDictionary(lang)
  console.log(dict)
  return (
    <main className="flex flex-row gap-2 p-10">
      {/* <SelectComponent /> */}

      <button className="px-6 py-2 border border-1 border-black rounded-sm text-white bg-black">{dict.save}</button>
      <button className="px-6 py-2 border border-1 border-black rounded-sm text-white bg-black">{dict.cancel}</button>
    </main>
  )
}
//middlwares in next.js
//routing in next.js
//complete next.js
