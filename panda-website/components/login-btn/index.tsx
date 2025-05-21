"use client";
import { UserOutlined, CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import Image from "next/image";
import { BASE_URL, genHeaders } from "@/utils";
import { useMount } from "ahooks";
import { useLocale } from "next-intl";

const cache = globalThis.localStorage;
export function LoginBtn() {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const lang = useLocale() as "en" | "zh";
	const onShowLoginModal = () => {
		const v = !showLoginModal;
		if (!v) {
			setStatus(true);
		}
		setShowLoginModal(v);
		// addToast({
		// 	title: "通知",
		// 	description: 'data.data.message',
		// 	color: 'success',
		// 	timeout: 999999,
		// 	classNames: {
		// 		base: 'top-[60px] bg-cbd-red-1',
		// 	}
		// })
	};
	const [isLogin, setIsLogin] = useState<boolean>(false);
	useMount(() => {
		setIsLogin(!!(cache.getItem("token") && cache.getItem("token") !== "null"));
	});

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));
		const res = await fetch(`${BASE_URL}/user/login`, {
			method: "post",
			body: JSON.stringify(data),
			headers: genHeaders(undefined, lang),
		});
		// TODO 提示消息
		if (res.status === 200) {
			const data = await res.json();
			if (`${data.code}` === "200") {
				setIsLogin(true);
				cache.setItem("token", data.data.token);
				cache.setItem("user_id", data.data.id);
				onShowLoginModal();
				// addToast({
				// 	title: "通知",
				// 	description: data.data.message,
				// 	color: 'success',
				// })
			} else {
			}
		}
	};

	const [status, setStatus] = useState<boolean>(true);
	function doRegister() {
		setStatus(!status);
	}
	async function onRegister(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));
		const res = await fetch(`${BASE_URL}/user/create`, {
			method: "post",
			body: JSON.stringify(data),
			headers: genHeaders(undefined, lang),
		});
		// TODO 提示消息
		if (res.status === 200) {
			const data = await res.json();
			if (`${data.code}` === "200") {
				onShowLoginModal();
				setStatus(true);
				// addToast({
				// 	title: "通知",
				// 	description: data.data.message,
				// 	color: 'success',
				// })
			} else {
			}
		}
	}
	async function doLogout() {
		const res = await fetch(`${BASE_URL}/user/logout`, {
			method: "post",
			body: JSON.stringify({
				id: cache.getItem("user_id"),
			}),
			headers: genHeaders(
				{
					token: cache.getItem("token") || "",
				},
				lang,
			),
		});
		// TODO 提示消息
		if (res.status === 200) {
			const data = await res.json();
			if (`${data.code}` === "200") {
				onShowLoginModal();
				setStatus(true);
				setIsLogin(false);
				cache.removeItem("token");
				cache.removeItem("user_id");
				// addToast({
				// 	title: "通知",
				// 	description: data.data.message,
				// 	color: 'success',
				// })
			} else {
			}
		}
	}
	return (
		<>
			<div
				onClick={onShowLoginModal}
				role="button"
				className="shadow-xl pf right-[20px] z-10 bottom-[20px] w-[36px] h-[36px] rounded-full fcc bg-cbd-gray-2 cursor-pointer hover:text-cbd-brand-5"
				title="login"
			>
				{isLogin ? (
					<LogoutOutlined className="text-[18px] " />
				) : (
					<UserOutlined className="text-[18px] " />
				)}
			</div>
			<AnimatePresence>
				{showLoginModal ? (
					<motion.div
						className="pf z-10 w-full h-full bg-cbd-black/50 fcc"
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						key={showLoginModal ? "fade-in-login" : "fade-out-login"}
						transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
					>
						<div className="w-[400px] bg-cbd-white rounded-4xl box-border">
							<div className="fbc mt-[24px] px-[12px]">
								<Image
									src="/logo.png"
									alt="panda tea logo"
									width={300}
									height={44}
									priority
								/>
								<CloseOutlined
									role="button"
									onClick={onShowLoginModal}
									className="text-[18px] cursor-pointer hover:bg-cbd-gray-2 rounded-full p-[10px]"
								/>
							</div>
							<p className="pf-regular-22 text-center my-[12px]">
								欢迎来到 茬白稻
							</p>
							{!isLogin ? (
								<div>
									{status ? (
										<Form
											autoComplete="off"
											className="w-full px-[24px] fcc"
											onSubmit={onSubmit}
										>
											<div className="h-[200px] w-full">
												<Input
													autoComplete="off"
													label="用户名"
													classNames={{
														label:
															"mb-[6px] text-[14px] group-data-[invalid=true]:!text-cbd-red-3",
														input: [
															"bg-transparent h-[40px] pl-[6px] bg-cbd-gray-2 rounded-[8px] text-[14px]",
															"group-data-[invalid=true]:!bg-cbd-red-1",
															"group-data-[invalid=true]:outline-cbd-red-3",
														],
														errorMessage: "text-cbd-red-3 mb-[12px]",
														innerWrapper: "bg-transparent mb-[12px]",
													}}
													errorMessage="请输入用户名"
													isRequired
													labelPlacement="outside"
													name="account"
													placeholder="请输入用户名"
												/>
												<Input
													autoComplete="off"
													type="password"
													classNames={{
														label:
															"mb-[6px] text-[14px] group-data-[invalid=true]:!text-cbd-red-3",
														input: [
															"bg-transparent h-[40px] pl-[6px] bg-cbd-gray-2 rounded-[8px] text-[16px]",
															"group-data-[invalid=true]:!bg-cbd-red-1",
															"group-data-[invalid=true]:outline-cbd-red-3",
														],
														errorMessage: "text-cbd-red-3 mb-[12px]",
														innerWrapper: "bg-transparent mb-[12px]",
													}}
													errorMessage="请输入密码"
													isRequired
													label="密码"
													labelPlacement="outside"
													name="password"
													placeholder="请输入密码"
												/>
											</div>
											<button
												type="submit"
												className="
                            mt-[40px] cursor-pointer focus:bg-cbd-brand-3 hover:bg-cbd-brand-4
                             w-full h-[40px] rounded-[8px] bg-cbd-brand-5 text-cbd-white text-[14px] leading-[14px]"
											>
												登陆
											</button>
										</Form>
									) : (
										<Form
											autoComplete="off"
											className="w-full px-[24px] fcc"
											onSubmit={onRegister}
										>
											<div className="h-[300px] w-full">
												<Input
													autoComplete="off"
													label="用户名"
													classNames={{
														label:
															"mb-[6px] text-[14px] group-data-[invalid=true]:!text-cbd-red-3",
														input: [
															"bg-transparent h-[40px] pl-[6px] bg-cbd-gray-2 rounded-[8px] text-[14px]",
															"group-data-[invalid=true]:!bg-cbd-red-1",
															"group-data-[invalid=true]:outline-cbd-red-3",
														],
														errorMessage: "text-cbd-red-3 mb-[12px]",
														innerWrapper: "bg-transparent mb-[12px]",
													}}
													errorMessage="请输入用户名"
													isRequired
													labelPlacement="outside"
													name="username"
													placeholder="请输入用户名"
												/>
												<Input
													autoComplete="off"
													label="邮箱"
													classNames={{
														label:
															"mb-[6px] text-[14px] group-data-[invalid=true]:!text-cbd-red-3",
														input: [
															"bg-transparent h-[40px] pl-[6px] bg-cbd-gray-2 rounded-[8px] text-[14px]",
															"group-data-[invalid=true]:!bg-cbd-red-1",
															"group-data-[invalid=true]:outline-cbd-red-3",
														],
														errorMessage: "text-cbd-red-3 mb-[12px]",
														innerWrapper: "bg-transparent mb-[12px]",
													}}
													errorMessage="请输入邮箱地址"
													isRequired
													labelPlacement="outside"
													name="email"
													placeholder="请输入邮箱地址"
												/>
												<Input
													autoComplete="off"
													type="password"
													classNames={{
														label:
															"mb-[6px] text-[14px] group-data-[invalid=true]:!text-cbd-red-3",
														input: [
															"bg-transparent h-[40px] pl-[6px] bg-cbd-gray-2 rounded-[8px] text-[16px]",
															"group-data-[invalid=true]:!bg-cbd-red-1",
															"group-data-[invalid=true]:outline-cbd-red-3",
														],
														errorMessage: "text-cbd-red-3 mb-[12px]",
														innerWrapper: "bg-transparent mb-[12px]",
													}}
													errorMessage="请输入密码"
													isRequired
													label="密码"
													labelPlacement="outside"
													name="password"
													placeholder="请输入密码"
												/>
											</div>
											<button
												type="submit"
												className="
                            mt-[40px] cursor-pointer focus:bg-cbd-brand-3 hover:bg-cbd-brand-4
                             w-full h-[40px] rounded-[8px] bg-cbd-brand-5 text-cbd-white text-[14px] leading-[14px]"
											>
												注册
											</button>
										</Form>
									)}
									<p className="text-center w-full text-cbd-gray-6 pf-regular-14 my-[20px]">
										{status ? "没有账户？" : ""}
										<span
											role="button"
											className="cursor-pointer text-cbd-brand-5 hover:text-cbd-brand-4"
											onClick={doRegister}
										>
											{status ? "去注册" : "去登陆"}
										</span>
									</p>
								</div>
							) : (
								<div className="w-full px-[24px] fcc flex-col">
									<div className="text-[26px] mt-[30px] text-cbd-gray-6">
										是否退出当前账号？
									</div>
									<button
										onClick={doLogout}
										className="
                            my-[40px] cursor-pointer focus:bg-cbd-brand-3 hover:bg-cbd-brand-4
                             w-full h-[40px] rounded-[8px] bg-cbd-brand-5 text-cbd-white text-[14px] leading-[14px]"
									>
										登出
									</button>
								</div>
							)}
						</div>
					</motion.div>
				) : (
					<></>
				)}
			</AnimatePresence>
		</>
	);
}
