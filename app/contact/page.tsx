import { ContactView } from "@/app/contact/view";
import { type ContactInfo, getOperationCenterPage } from "@/request";
export default async function ContactPage() {
	const contactDataRes: { data: ContactInfo } = await getOperationCenterPage();
	return <ContactView data={contactDataRes.data} />;
}
