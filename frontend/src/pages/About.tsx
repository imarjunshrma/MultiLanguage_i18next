import { useTranslation } from "react-i18next";


const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <h2>{t('firstHeading', { ns: "about" })} </h2>
                <h3>{t('about:secondHeading')} </h3>
            </div>


        </>
    )
};

export default About;
