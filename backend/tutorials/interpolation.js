import i18next from 'i18next';
// ------------interpolation-------------

i18next.init({
    lng: "en",
    resources: {
        en: {
            translation: {
                key: "key1 {{what}} {{hello}}"
            }
        }
    }
})


console.log(i18next.t('key', { what: "what is this", hello: "hello world" }))