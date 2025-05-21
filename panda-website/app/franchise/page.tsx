import FranchiseView from "@/app/franchise/view";
import type { ResFranchiseDto } from "@/app/franchise/api/route";
import { SSE_URL } from "@/utils";
// TODO: 接口返回

// app 路由模式下，使用 fetch
// export async function getServerSideProps() {
//     const res = await fetch('${SSE_URL}/franchise/api', { method: 'post' });
//     const projects = await res.json()
//
//     return { props: { projects } }
// }

export default async function FranchisePage() {
	async function getFranchiseData() {
		const res = await fetch(`${SSE_URL}/franchise/api`, {
			method: "post",
		});
		return await res.json();
	}
	const franchiseRes: { data: ResFranchiseDto[] } = await getFranchiseData();
	return <FranchiseView info={franchiseRes.data} />;
}
