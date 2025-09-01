import React, { useState, useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useTranslation } from "react-i18next";
import Languages from "../SelectBoxes/Languages.tsx";
import { FaUser, FaLock } from "react-icons/fa";
import LoadingImage from '../../../public/loadingscreen/loading.jpg';


import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Stack,
} from '@chakra-ui/react';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const SignIn: React.FC = () => {
    const { t } = useTranslation();
    const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        // Simulate success alert
        setAlert({ type: 'success', message: 'Form submitted successfully!' });
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // Simulate error alert
        setAlert({ type: 'error', message: 'Form submission failed. Please try again.' });
    };

    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(null);
            }, 3000);

            // Clear the timeout if the component unmounts or alert changes
            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-yellow-500 px-4 md:px-8">
            {/* Alert Container */}
            {alert && (
                <div className="absolute top-4 right-4 z-50">
                    <Stack spacing={3}>
                        <Alert status={alert.type} variant={alert.type === 'success' ? 'subtle' : 'solid'}>
                            <AlertIcon />
                            <AlertTitle>{alert.type === 'success' ? 'Success!' : 'Error!'}</AlertTitle>
                            <AlertDescription>{alert.message}</AlertDescription>
                        </Alert>
                    </Stack>
                </div>
            )}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-4xl font-semibold">{t("Sign In")}</h2>
                    <img
                        className="w-24 h-24 rounded-full"
                        src={LoadingImage}
                        alt={t("Logo")}
                    />
                </div>
                <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label={t("Username")}
                        name="username"
                        rules={[{ required: true, message: t('Please input your username!') }]}
                    >
                        <Input
                            prefix={<FaUser className="text-purple-950 mr-2" />}
                            className="text-lg h-12"
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label={t("Password")}
                        name="password"
                        rules={[{ required: true, message: t('Please input your password!') }]}
                    >
                        <Input.Password
                            prefix={<FaLock className="text-purple-950 mr-2" />}
                            className="text-lg h-12"
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full h-12 text-lg bg-purple-950 hover:bg-purple-950"
                            style={{ backgroundColor: '#4b0082', color: 'white' }}
                        >
                            {t("Submit")}
                        </Button>
                    </Form.Item>
                    <div className="flex justify-center mt-4">
                        <Languages />
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;
