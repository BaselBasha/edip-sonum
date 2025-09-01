import React from 'react';
import {Select, Space} from "antd";
import 'flag-icons/css/flag-icons.min.css';
import i18n from 'i18next';
import { useTranslation } from "react-i18next";

const SelectLanguages: React.FC = () => {
    const { t } = useTranslation();

    const languages = [
        { value: 'tr', label: t('Turkish'), flag: 'fi-tr' },
        { value: 'ar', label: t('Arabic'), flag: 'fi-ps' },
        { value: 'en', label: t('English'), flag: 'fi-us' },
        { value: 'ru', label: t('Russian'), flag: 'fi-ru' },
        { value: 'de', label: t('Germany'), flag: 'fi-de' },
    ];

    const handleChange = (value: string) => {
        i18n.changeLanguage(value);
    };

    return (
        <Space wrap>
            <Select
                defaultValue={i18n.language}
                className="w-42 text-xl h-10"
                onChange={handleChange}
                options={languages.map(language => ({
                    value: language.value,
                    label: (
                        <div className="flex items-center">
                            <span className={`fi ${language.flag} ml-2 `}></span>
                            <span className="ml-2 font-bold">{language.label}</span>
                        </div>
                    ),
                }))}
            />
        </Space>
    );
};

export default SelectLanguages;