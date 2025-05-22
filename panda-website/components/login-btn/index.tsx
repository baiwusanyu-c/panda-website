"use client";
import { UserOutlined, CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import Image from "next/image";
import { BASE_URL, genHeaders } from "@/utils";
import { useMount } from "ahooks";
import { useLocale, useTranslations } from "next-intl";
import { notification } from "antd";
import { setCookies, delCookies } from "@/utils/cookies";

const cache = globalThis.localStorage;
export function LoginBtn() {
	const [api, contextHolder] = notification.useNotification();
	const t = useTranslations("login");
	const [showLoginModal, setShowLoginModal] = useState(false);
	const lang = useLocale() as "en" | "zh";
	const onShowLoginModal = () => {
		const v = !showLoginModal;
		if (!v) {
			setStatus(true);
		}
		setShowLoginModal(v);
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

		if (res.status === 200) {
			const data = await res.json();
			if (`${data.code}` === "200") {
				setIsLogin(true);
				cache.setItem("token", data.data.token);
				cache.setItem("user_id", data.data.id);
				setCookies("token", data.data.token);
				setCookies("user_id", data.data.id);
				onShowLoginModal();
				api.success({
					message: t("info"),
					description: data.message,
				});
			} else {
				api.error({
					message: t("info"),
					description: data.message,
				});
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

		if (res.status === 200) {
			const data = await res.json();
			if (`${data.code}` === "200") {
				onShowLoginModal();
				setStatus(true);
				api.success({
					message: t("info"),
					description: data.message,
				});
			} else {
				api.error({
					message: t("info"),
					description: data.message,
				});
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

		if (res.status === 200) {
			const data = await res.json();
			if (`${data.code}` === "200") {
				onShowLoginModal();
				setStatus(true);
				setIsLogin(false);
				cache.removeItem("token");
				delCookies("token");
				cache.removeItem("user_id");
				delCookies("user_id");
				api.success({
					message: t("info"),
					description: data.message,
				});
			} else {
				api.error({
					message: t("info"),
					description: data.message,
				});
			}
		}
	}
	return (
		<>
			{contextHolder}
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
								{t("title")}
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
													label={t("username")}
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
													errorMessage={t("usernameP")}
													isRequired
													labelPlacement="outside"
													name="account"
													placeholder={t("usernameP")}
												/>
												<Input
													autoComplete="off"
													type="password"
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
													errorMessage={t("passwordP")}
													isRequired
													label={t("password")}
													labelPlacement="outside"
													name="password"
													placeholder={t("passwordP")}
												/>
											</div>
											<button
												type="submit"
												className="
                            mt-[40px] cursor-pointer focus:bg-cbd-brand-3 hover:bg-cbd-brand-4
                             w-full h-[40px] rounded-[8px] bg-cbd-brand-5 text-cbd-white text-[14px] leading-[14px]"
											>
												{t("login")}
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
													label={t("username")}
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
													errorMessage={t("usernameP")}
													isRequired
													labelPlacement="outside"
													name="username"
													placeholder={t("usernameP")}
												/>
												<Input
													autoComplete="off"
													label={t("email")}
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
													errorMessage={t("emailP")}
													isRequired
													labelPlacement="outside"
													name="email"
													placeholder={t("emailP")}
												/>
												<Input
													autoComplete="off"
													type="password"
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
													errorMessage={t("passwordP")}
													isRequired
													label={t("password")}
													labelPlacement="outside"
													name="password"
													placeholder={t("passwordP")}
												/>
											</div>
											<button
												type="submit"
												className="
                            mt-[40px] cursor-pointer focus:bg-cbd-brand-3 hover:bg-cbd-brand-4
                             w-full h-[40px] rounded-[8px] bg-cbd-brand-5 text-cbd-white text-[14px] leading-[14px]"
											>
												{t("register")}
											</button>
										</Form>
									)}
									<p className="text-center w-full text-cbd-gray-6 pf-regular-14 my-[20px]">
										{status ? t("registerText") : ""}
										<span
											role="button"
											className="cursor-pointer text-cbd-brand-5 hover:text-cbd-brand-4"
											onClick={doRegister}
										>
											{status ? t("goRegister") : t("goLogin")}
										</span>
									</p>
								</div>
							) : (
								<div className="w-full px-[24px] fcc flex-col">
									<div className="text-[26px] mt-[30px] text-cbd-gray-6">
										{t("logoutText")}
									</div>
									<button
										onClick={doLogout}
										className="
                            my-[40px] cursor-pointer focus:bg-cbd-brand-3 hover:bg-cbd-brand-4
                             w-full h-[40px] rounded-[8px] bg-cbd-brand-5 text-cbd-white text-[14px] leading-[14px]"
									>
										{t("logout")}
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
