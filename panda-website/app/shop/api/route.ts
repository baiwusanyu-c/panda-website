import { NextResponse } from 'next/server';

// TODO: 后端请求
export interface ShopsInfoIer {
    name: string;
    id: string;
}

export interface ShopsInfo {
    shops: Array<ShopsInfoIer>
    isAll: boolean
}

export interface ShopsInfoParams {
    type?: 1 | 2 | 3 | 4 | 5 | 6;
    pageSize: number;
    pageNo: number;
}

export async function POST(request: Request) {
    // 处理 request payload 类型参数
    const payload = await request.text()
    const params = JSON.parse(payload) as ShopsInfoParams
    const data = {
        shops: [] as Array<ShopsInfoIer>,
        isAll: params.pageNo === 5,
    }
    for (let i = (params.pageNo - 1) * params.pageSize; i < params.pageSize * params.pageNo; i++) {
        data.shops.push({
            name: `测试门店-${i}-${params.type || '全部'}`,
            id: `测试门店-${i}-${params.type || '全部'}`,
        })
    }

    return NextResponse.json({ data })
}
