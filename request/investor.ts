export type ListingDocsInfo = Array<{
  link: string;
  date?: string;
  title: string;
  subTitle?: string;
}>;

export async function getListingDocs(){
  return {
    data: [
      {
        link: "https://docs.github.com/",
        date: "2024-04-15",
        title: "全球发售",
      },
    ]
  }
}

export interface FinancialReportsInfo {
  list: Array<{
    date: string;
    link: string;
    title: string;
  }>;
}

export async function getFinancialReports(){
  return {
    data: {
      list: [
        {
          date: "2023",
          link: "https://docs.github.com/",
          title: "2023环境、社会及管治报告",
        },
        {
          date: "2024",
          link: "https://docs.github.com/",
          title: "2024年中期报告",
        },
      ],
    }
  }
}

export interface CorporateGovernanceResInfo {
  description: string;
  fileList: Array<{
    link: string;
    date?: string;
    title: string;
    subTitle?: string;
  }>;
}

export async function getCorporateGovernance(){
  return {
    data: {
      description:
        "我们为消费者，特别是注重茶饮品质的年轻一代，提供各种现制茶饮。我们对产品质量和产品开发的努力使茬白稻成为行业中的头部参与者，拥有广泛的消费群体。",
      fileList: [
        {
          link: "https://docs.github.com/",
          title: "董事名单与其角色和职能",
        },
        {
          link: "https://docs.github.com/",
          title: "薪酬委员会－ 职责和议事规则",
        },
        {
          link: "https://docs.github.com/",
          title: "提名委员会－ 职责和议事规则",
        },
        {
          link: "https://docs.github.com/",
          title: "审计委员会－ 职责和议事规则",
        },
        {
          link: "https://docs.github.com/",
          title: "章程",
        },
        {
          link: "https://docs.github.com/",
          title: "股东通讯政策",
        },
        {
          link: "https://docs.github.com/",
          title: "股东提名人选参选董事的程序",
        },
      ],
    }
  }
}

export interface AnnouncementsNoticesResInfo {
  records: Array<{
    link: string;
    date?: string;
    title: string;
    subTitle?: string;
  }>;
}
export async function getAnnouncementsNotices() {
  const data = {
    records: [
      {
        link: "https://docs.github.com/",
        title: "月报表",
        subTitle:
          "截至二零二五年三月三十一日止月份之股份发行人的证券变动月报表",
        date: "2024-04-15",
      },
      {
        link: "https://docs.github.com/",
        title: "公共与通函",
        subTitle: "截至二零二四年十二月三十一日止年度之末期股息",
        date: "2024-04-15",
      },
      {
        link: "https://docs.github.com/",
        subTitle: "截至2024年12月31日止年度之年度业绩公告",
        title: "月报表",
        date: "2024-04-15",
      },
      {
        link: "https://docs.github.com/",
        subTitle: "董事会会议召开日期",
        title: "公共与通函",
        date: "2024-04-15",
      },
      {
        link: "https://docs.github.com/",
        subTitle: "盈利警告",
        title: "公共与通函",
        date: "2024-04-15",
      },
      {
        link: "https://docs.github.com/",
        subTitle:
          "截至二零二五年二月二十八日止月份之股份发行人的证券变动月报表",
        date: "2024-04-15",
        title: "公共与通函",
      },
    ],
  };
  return {
    data
  }
}


export interface AnnouncementsNoticesResInfo {
  records: Array<{
    link: string;
    date?: string;
    title: string;
    subTitle?: string;
  }>;
}
export interface InvestorResInfo {
  description: string;
  listingDocsList: ListingDocsInfo;
  corporateGovernance: CorporateGovernanceResInfo;
  announcementsNotices: AnnouncementsNoticesResInfo;
}

export async function getInvestorPage(){
  const listingDocsRes: { data: ListingDocsInfo } = await getListingDocs();
  const corporateGovernanceRes: { data: CorporateGovernanceResInfo } =
    await getCorporateGovernance();
  const announcementsNoticesRes: { data: AnnouncementsNoticesResInfo } =
    await getAnnouncementsNotices();
  const data = {
    description:
      "自成立以来，茬白稻专注探索天然食材与中式茶饮的搭配，持续研发多元化茶饮产品，致力于提升消费者体验。我们通过互惠互利的加盟模式，现已经发展成为全国知名的现制茶饮企业。",
    listingDocsList: listingDocsRes.data,
    corporateGovernance: corporateGovernanceRes.data,
    announcementsNotices: announcementsNoticesRes.data,
  } as InvestorResInfo;
  return {
    data
  }
}
