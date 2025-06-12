import {BASE_URL, genHeaders} from "@/utils";
import {getLocale} from "next-intl/server";
import type { IPageParams } from "@/request/types";

export interface OperationCenterListReq extends IPageParams {
  type: "1" | "2"
}
export interface AddressItem {
  id: string;
  name: string;
  nameEn: string;
  address: string;
  addressEn: string;
  type: 1 | 2;
  website?: string;
  supervisionPhone: string;
  email: string;
  networkSecurity: string;
  franchiseHotline: string;
  customerServiceHotline: string;
  reportingMobile: string;
  weChat: string;
}
export interface ContactInfo {
  headquarter: AddressItem;
  operationCenters: AddressItem[];
}
export async function getOperationCenterList(params: OperationCenterListReq){
  const locale = (await getLocale()) as "en" | "zh";
  return await fetch(`${BASE_URL}/operation-center/list`, {
    method: "post",
    body: JSON.stringify(params),
    headers: genHeaders(undefined, locale),
  })
}

export async function getOperationCenterPage(){
  const headquarterRes = await getOperationCenterList({
    pageSize: "100",
    pageNum: "1",
    type: "1",
  })
  const headquarter = (await headquarterRes.json()).data.records[0] || {};
  const res = await getOperationCenterList({
    pageSize: "100",
    pageNum: "1",
    type: "2",
  })
  const operationCenters = (await res.json()).data.records;
  return {
    data: {
      headquarter,
      operationCenters,
    }
  }
}
