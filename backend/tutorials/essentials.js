import i18next from 'i18next';


i18next.init({
    lng: "hindi",
    // debug: true,
    resources: {
        en: {
            translation: {
                key: "value of key",
                look: {
                    deep: "value of look deep"
                }
            }
        },
        hindi: {
            translation: {
                key: "key..in hindi"
            }
        }
    }

})
i18next.t('key')
console.log(i18next.t('look.deep'))