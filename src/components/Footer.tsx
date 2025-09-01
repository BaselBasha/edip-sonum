import React from 'react';
import {
    FiInstagram,
    FiYoutube,
} from "react-icons/fi";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const socialLinks = [
    {
        id: 1,
        icon: <FiInstagram />,
        url: "https://www.instagram.com/dho_tat_juices?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
        id: 2,
        icon: <FaFacebook />,
        url: "https://www.facebook.com/profile.php?id=61552411115036",
    },
    {
        id: 3,
        icon: <FaTiktok />,
        url: "https://www.tiktok.com/discover/%D8%A3%D8%AD%D9%85%D8%AF_%D8%AF%D8%AD%D9%88?is_from_webapp=1&sender_device=mobile",
    },
    {
        id: 5,
        icon: <FiYoutube />,
        url: "https://www.youtube.com/@ahmaddahow",
    },
];

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto">
            <div className="pt-6 sm:pt-8 pb-4 mt-6 border-t-2 border-primary-light dark:border-secondary-dark">
                {/* Map location */}
                <div className="flex justify-center mb-6">
                    <iframe
                        width="100%"
                        height="200"
                        src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=36.75221111688118,34.53327095734867&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        className="w-full max-w-screen-sm h-48 rounded-lg shadow-md"
                    >
                        <a href="https://www.gps.ie/">gps trackers</a>
                    </iframe>
                </div>
                {/* Footer social links */}
                <div className="font-general-regular flex flex-col justify-center items-center mb-4 sm:mb-6">
                    <p className="text-lg sm:text-xl text-primary-dark dark:text-primary-light mb-2">
                        {t('FOLLOW US')}
                    </p>
                    <ul className="flex gap-2 sm:gap-4">
                        {socialLinks.map((link) => (
                            <a
                                href={link.url}
                                target="__blank"
                                rel="noopener noreferrer"
                                key={link.id}
                                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300"
                            >
                                <i className="text-base sm:text-lg">{link.icon}</i>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
