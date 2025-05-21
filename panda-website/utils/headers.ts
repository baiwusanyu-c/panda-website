export function genHeaders(
	header?: Record<string, string>,
	lang?: "en" | "zh",
) {
	const headers = new Headers();
	if (header) {
		Object.keys(header).forEach((key) => {
			headers.append(key, header[key]);
		});
	}
	headers.append("x-custom-lang", lang || "en");
	headers.append("Content-Type", "application/json");
	headers.append("Connection", "keep-alive");
	return headers;
}
