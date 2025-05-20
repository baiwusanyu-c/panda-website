export function genHeaders() {
	const headers = new Headers();
	headers.append("x-custom-lang", "");
	headers.append("Content-Type", "application/json");
	headers.append("Connection", "keep-alive");
	return headers;
}
