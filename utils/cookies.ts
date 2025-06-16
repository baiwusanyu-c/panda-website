"use server";
import { cookies } from "next/headers";

export async function getCookies(key: string): Promise<string | undefined> {
	return (await cookies()).get(key)?.value;
}

export async function setCookies(key: string, value: string) {
	(await cookies()).set(key, value);
}

export async function delCookies(key: string) {
	(await cookies()).delete(key);
}
