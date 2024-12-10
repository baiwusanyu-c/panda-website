import { NextResponse } from 'next/server';

export interface AboutInfo {
  honor: string[]
}
export async function POST() {
  const data = {
    honor: [
      '中国饮品创变力TOP50年度产品创新奖',
      '2022年度中国食品安全诚信单位',
      '2022年度企业社会责任奖',
      '2022中国餐饮品牌影响力TOP50',
      '最佳科技实践奖项',
    ]
  }
  return NextResponse.json({ data })
}
