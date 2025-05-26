export function genHeaders(
	header?: Record<string, string>,
	lang?: "en" | "zh",
) {
	const headers = new Headers();
	const headerRecord: Record<string, string> = {
		"x-custom-lang": lang || "en",
	  "Content-Type":"application/json",
		"Connection": "keep-alive",
		...header,
	}
	Object.keys(headerRecord).forEach((key) => {
		headers.append(key, headerRecord[key]);
	});
	return headers;
}
