import {IPageParams} from "@/request/types";
import {getLocale} from "next-intl/server";
import {BASE_URL, genHeaders} from "@/utils";

export interface ResNewsDto {
  id: string;
  title: string;
  detail: string;
  titleEn: string;
  detailEn: string;
  link: string;
  date: string;
  createTime: string;
  updateTime: string;
}

export interface ResNewsListDto {
  total: number;
  records: ResNewsDto[];
}

export async function getNewsList(params: IPageParams){
  const locale = (await getLocale()) as "en" | "zh";
  return await fetch(`${BASE_URL}/news/list`, {
    method: "post",
    body: JSON.stringify(params),
    headers: genHeaders(undefined, locale),
  })
}

export async function getNewsPage(){
  let data: ResNewsListDto = {
    total: 0,
    records: [],
  };
  const res = await getNewsList({
    pageSize: "100",
    pageNum: "1",
  })
  data = (await res.json()).data;
  return {
    data
  }
}
