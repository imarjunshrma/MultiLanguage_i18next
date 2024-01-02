import i18next from 'i18next';

// ----------context-------
i18next.init({
    lng: "en",
    resources: {
        en: {
            translation: {
                // friend: "A friend",
                // friend_male: "A boyfriend",
                // friend_female: "A girlfriend"
                group: "group1",
                group_tech: "group tech1",
                group_design: "group design1"
            }
        }
    }
})
// console.log(i18next.t('friend'))
// console.log(i18next.t('friend', { context: 'male' }))
// console.log(i18next.t('friend', { context: "female" }))
console.log(i18next.t('group'))
console.log(i18next.t('group', { context: 'tech' }))
console.log(i18next.t('group', { context: "design" }))