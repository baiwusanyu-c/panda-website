'use server';

import {cookies} from 'next/headers';
export declare type Locale = 'en' | 'zh';
const defaultLocale: Locale = 'zh';
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
    return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    (await cookies()).set(COOKIE_NAME, locale);
}
