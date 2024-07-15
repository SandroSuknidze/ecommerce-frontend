import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const withTranslations = (namespaces = ['common']) => async (context: { locale: string; props: any; }) => {
    const locale = context.locale || 'en';
    return {
        props: {
            ...(await serverSideTranslations(locale, namespaces)),
            ...(context.props || {}),
        },
    };
};
