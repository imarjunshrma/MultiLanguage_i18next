import i18next from 'i18next';

// ----------fomratter-----------
i18next.init({
    lng: "en",
    resources: {
        en: {
            translation: {
                value: "{{val,number(minimumFractionDigits: 2)}}",
                val: "{{val,number}}",
                val3: "{{val,lowercase}}"
            }
        }
    }
})

//custom format functions
i18next.services.formatter.add('lowercase', (value, lng, options) => {
    return value.toLowerCase();
});
console.log(i18next.t("value", { val: 1000 }))
console.log(i18next.t('val', { val: 1000, minimumFractionDigits: 3 }))
console.log(i18next.t("val3", { val: "ARJUN" }))
