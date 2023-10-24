import { useEffect, useState } from "react";
import { TaskList, TaskForm, Wrapper } from "../../components";
import { useTranslation } from "react-i18next";
import { defaultFunction } from "./constants";
import i18n from "../../utils/i18next";

import './TaskPage.css'

export const TaskPage = () => {
    const [lang, setLang] = useState("en");
    const { t } = useTranslation();

    useEffect(() => {
        // тк языка только 2 использована обычная кнопака вместо селекта
        const currentLang = i18n.resolvedLanguage
        if (currentLang === 'ru') {
            setLang('en')
        } else {
            setLang('ru')
        }
    }, [])

    function setLanguage(lng: string) {
        i18n.changeLanguage(lng);
        if (lng === "en") { 
            setLang("ru");
        } else {
            setLang("en");
    }
}

    return (
        <div className="task_page">
            <button
                className="lang_button"
                onClick={()=> {setLanguage(lang)}}>
                    {lang}
                </button>
            <h1>{t("TaskPages.header")}</h1>
            <Wrapper>
                <TaskForm onSave={defaultFunction}/>
            </Wrapper>
            <Wrapper>
                <TaskList />
            </Wrapper>
        </div>
    )
}