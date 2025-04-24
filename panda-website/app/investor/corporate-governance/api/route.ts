import { NextResponse } from 'next/server';

export interface CorporateGovernanceResInfo {
  fileList: Array<{
    link: string,
    title: string,
  }>,
  membersList: Array<{
    departmentName: string,
    members: string[],
  }>
}
export async function POST() {
  const data = {
    fileList: [
      {
        link: "https://docs.github.com/",
        title: '董事名单与其角色和职能',
      },
      {
        link: "https://docs.github.com/",
        title: '薪酬委员会－ 职责和议事规则',
      },
      {
        link: "https://docs.github.com/",
        title: '提名委员会－ 职责和议事规则',
      },
      {
        link: "https://docs.github.com/",
        title: '审计委员会－ 职责和议事规则',
      },
      {
        link: "https://docs.github.com/",
        title: '章程',
      },
      {
        link: "https://docs.github.com/",
        title: '股东通讯政策',
      },
      {
        link: "https://docs.github.com/",
        title: '股东提名人选参选董事的程序',
      }
    ],
    membersList: [
      {
        departmentName: '执行董事',
        members: [
          '王xx先生',
          '汪xx先生',
          '戴xx士',
          '陈xx先生',
        ]
      },
      {
        departmentName: '非执行董事',
        members: [
          '王xx先生',
          '汪xx先生',
          '戴xx士',
          '陈xx先生',
        ]
      },
      {
        departmentName: '独立非执行董事',
        members: [
          '王xx先生',
          '汪xx先生',
          '戴xx士',
          '陈xx先生',
        ]
      },
      {
        departmentName: '审核委员会',
        members: [
          '王xx先生',
          '汪xx先生',
          '戴xx士',
          '陈xx先生',
        ]
      },
      {
        departmentName: '薪酬委员会',
        members: [
          '王xx生',
          '汪xx生',
          '戴xx',
          '陈xx生',
        ]
      },
      {
        departmentName: '提名委员会',
        members: [
          '王xx先生',
          '汪xx先生',
          '戴xx士',
          '陈xx先生',
        ]
      },
    ]
  }
  return NextResponse.json({ data })
}
