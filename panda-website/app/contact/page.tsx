import { ContactView } from "@/app/contact/view";
import type { ContactInfo } from "@/app/contact/api/route";
import { SSE_URL } from "@/utils";
export default async function ContactPage() {
	async function getContactData() {
		const res = await fetch(`${SSE_URL}/contact/api`, {
			method: "post",
		});
		return await res.json();
	}
	const contactDataRes: { data: ContactInfo } = await getContactData();
	return <ContactView data={contactDataRes.data} />;
}
