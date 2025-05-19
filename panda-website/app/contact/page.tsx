
import { ContactView } from "@/app/contact/view";
import { ContactInfo } from "@/app/contact/api/route";

export default async function ContactPage() {
    async function getContactData(){
        const res = await fetch('http://localhost:3000/contact/api', { method: 'post' });
        return await res.json()
    }
    const contactDataRes: { data: ContactInfo } = await getContactData()
  return (
    <ContactView data={contactDataRes.data}/>
  );
}
