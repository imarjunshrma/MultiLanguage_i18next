import i18next from 'i18next';
import Backend from 'i18next-http-backend';

// Serve static files from the locales directory
// app.use('/locales', express.static("locales")); -> required

// ----------namespaces in same file----------
i18next.init({
    // lng: "en",
    fallbackLng: "hi",
    resources: {
        en: {
            translations: {
                key: "key"
            },
            common: {
                save: "Save",
                cancel: "Cancel"
            }
        },
        hi: {
            translations: {
                key: "चाबी"
            },
            common: {
                save: "बचाना",
                cancel: "रद्द करना"
            }
        }
    }
})
// console.log(i18next.t("key"))
// console.log(i18next.t('key2', "default value in case"))

//different namespace
console.log("key")
console.log(i18next.t("common:save"))
console.log(i18next.t('save', { ns: "common" }))

// ----------namespaces in different  files----------

i18next
    .use(Backend)
    .init({
        // load: 'languageOnly',
        // debug: true,
        fallbackLng: 'en',
        ns: ['common'],
        defaultNS: 'common',
        backend: {
            loadPath: 'http://localhost:3002/locales/{{lng}}/{{ns}}.json'
        }
        // backend: options
    }, (err, t) => {
        if (err) return console.error(err)
        console.log(t('save'))
        console.log(t('save', { lng: 'hi' }))
    })

