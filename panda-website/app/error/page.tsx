"use client";
import { useSearchParams } from 'next/navigation'
import {ErrorBg} from "@/app/error/ErrorBg";
export default function ErrorPage() {
	const params = useSearchParams()
	const errorMessage = params.get('message')
	return (
		<div className="pf w-full h-full fcc left-0 top-0 flex-col">
			<ErrorBg cls='w-[400px] h-[300px]'/>
			<h2 className='text-[28px] mt-[20px]'>Error: {errorMessage}</h2>
		</div>
	);
}
