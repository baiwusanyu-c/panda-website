
import {getLocale} from "next-intl/server";
import {BASE_URL, genHeaders} from "@/utils";

export interface MenuItem {
  name: string;
  nameEn: string;
  icon?: string;
  path: string;
  show: boolean;
  parentId?: string;
  children?: MenuItem[];
  id: string;
}
export interface BasicInfo {
  links: MenuItem[];
}

export async function getTreeMenus(){
  const locale = (await getLocale()) as "en" | "zh";
  return await fetch(`${BASE_URL}/menu/getTreeMenus`, {
    method: "post",
    headers: genHeaders(undefined, locale),
  })
}

export async function getMenusData(){
  const data = {
    links: [],
  };

  const res = await getTreeMenus();
  data.links = (await res.json()).data;
  return {
    data
  }
}
