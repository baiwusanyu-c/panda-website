import ProductView from "@/app/product/view";
import type {BasicInfo} from "@/app/api/route";

// TODO: 接口返回
export default async function AboutPage() {
  async function getProductData(){
    const res = await fetch('http://localhost:3000/api', { method: 'post' });
    return await res.json()
  }
  const aboutRes: { data: BasicInfo } = await getProductData()
  return (
    <ProductView list={aboutRes.data.products} />
  );
}
