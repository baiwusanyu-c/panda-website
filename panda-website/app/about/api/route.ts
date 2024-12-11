import { NextResponse } from 'next/server';

export interface AboutInfo {
  honor: string[],
  intro: string
}
export async function POST() {
  const data = {
    honor: [
      '中国饮品创变力TOP50年度产品创新奖',
      '2022年度中国食品安全诚信单位',
      '2022年度企业社会责任奖',
      '2022中国餐饮品牌影响力TOP50',
      '最佳科技实践奖项',
    ],
    intro: ' 2008年，第一杯茶百道在“天府之国”成都诞生。秉持着“做人人都喜爱的日常饮品”的品牌使命，多年来，茶百道坚持独立自主的产品研发模式。以“好茶为底，制造新鲜”为品牌核心理念，专注产品构思，并不断探索天然食材与中国茶的搭配。谨记“立足于持续满足消费者对于品质、健康和体验升级的需求，创造更多元的饮品风味与文化体验”的愿景不断前进。'
  }
  return NextResponse.json({ data })
}
