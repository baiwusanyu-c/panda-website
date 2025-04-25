'use client'

import {motion} from "motion/react";
import {genVariant} from "@/utils";
import {CorporateGovernanceResInfo} from "@/app/investor/corporate-governance/api/route";
import {PdfCard} from "@/components/pdf-card";
export interface InvestorProps {
  data: CorporateGovernanceResInfo
}
export default function CorporateGovernanceView(props: InvestorProps) {
  const { data } = props;

  return (
    <div className="panda-tea-about overflow-x-hidden bg-cbd-white w-full">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.2}}
        className='overflow-hidden w-full fcc flex-col pt-[40px]'>
        <motion.div
          variants={genVariant(0)}
          className='text-[32px] text-cbd-gray-6 fcc flex-col'>
          企业管治
          <p className='w-[80px] h-[6px] rounded-2xl bg-cbd-brand-5 mt-[20px]'></p>
        </motion.div>


        <div className="grid grid-cols-3 gap-10 max-w-[1500px] min-w-[1200px] overflow-hidden mt-[60px] mx-auto w-[94%]">
          {
            data.membersList.map((info) => {
              return <motion.div
                key={info.departmentName}
                variants={genVariant(0.6)}
                className='rounded-tr-[20px] rounded-bl-[20px] h-[263px] bg-cbd-gray-1 hover:shadow-xl py-[30px]'>
                <p className='px-[30px] text-[24px] hover:text-cbd-brand-5 mb-[12px] font-bold'>{info.departmentName}</p>
                {
                  info.members.map((member) => {
                    return <p
                      className='px-[30px] text-[16px] hover:bg-cbd-brand-5 hover:text-cbd-white leading-[40px]'
                      key={info.departmentName + member}>
                      {member}
                    </p>
                  })
                }
              </motion.div>
            })
          }
        </div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.2}}
        className='overflow-hidden w-full fsc flex-col pt-[80px]'>
        <motion.div
          variants={genVariant(0.1)}
          className='text-[24px] text-cbd-gray-6 font-bold max-w-[1500px] min-w-[1200px] overflow-hidden mx-auto w-[94%] text-left'>
          治理文件
        </motion.div>
        <div className="grid grid-cols-2 gap-[30px] max-w-[1500px] min-w-[1200px] overflow-hidden pb-[80px] mt-[20px] mx-auto w-[94%]">
          {
            data.fileList.map((info) => {
              return <PdfCard key={info.title} data={info} />
            })
          }
        </div>
      </motion.div>
    </div>
  );
}
