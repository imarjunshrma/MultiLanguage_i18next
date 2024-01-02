import i18next from 'i18next';


// ---------pluralization----------
i18next.init({
    lng: "en",
    resources: {
        en: {
            translation: {
                key_zero: "zero",
                key_one: "key one",
                key_other: "key other"
            }
        }
    }
})


console.log(i18next.t("key", { count: 3 }))