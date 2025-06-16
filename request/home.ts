import {AddressItem, ContactInfo, getOperationCenterPage} from "@/request/contact";
import {getNewsPage, ResNewsDto, ResNewsListDto} from "@/request/news";

export interface HomeInfo {
  headquarter: AddressItem;
  operationCenters: AddressItem[];
  news: Array<ResNewsDto[]>;
}

export async function getHomePage(){
  const contactDataRes: { data: ContactInfo } = await getOperationCenterPage();
  const newsRes: { data: ResNewsListDto } = await getNewsPage();
  const news: Array<ResNewsDto[]> = [];
  for (let i = 0; i < newsRes.data.records.length; i = i + 3) {
    news.push([
      newsRes.data.records[i],
      newsRes.data.records[i + 1],
      newsRes.data.records[i + 2],
    ]);
  }
  const data = {
    headquarter: contactDataRes.data.headquarter,
    operationCenters: contactDataRes.data.operationCenters,
    news,
  };
  return {
    data
  }
}
