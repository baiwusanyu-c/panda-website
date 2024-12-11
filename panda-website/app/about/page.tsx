import AboutView from "@/app/about/view";
import {AboutInfo} from "@/app/about/api/route";

// TODO: 接口返回
export default async function AboutPage() {
  async function getAboutData(){
    const res = await fetch('http://localhost:3000/about/api', { method: 'post' });
    return await res.json()
  }
  const aboutRes: { data: AboutInfo } = await getAboutData()
  return (
   <AboutView info={aboutRes.data.honor} intro={aboutRes.data.intro} />
  );
}
