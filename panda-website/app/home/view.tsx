'use client'
import Image from "next/image";
import {PandaTeaIntroduction} from "@/components/introduction";
import { HomeInfo } from "@/app/home/api/route";
import {motion} from "motion/react";
import {genVariant, genVariantX} from "@/utils";
import {Wave} from "@/components/wave";
import {ProductCarousel} from "@/components/product-carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import {
    EnvironmentFilled, HeartFilled,
    IeCircleFilled,
    MailFilled,
    PhoneFilled,
    WarningFilled,
    WechatFilled
} from "@ant-design/icons";
import {InfoCard} from "@/components/info-card";
import './style.css'
import {useTranslations} from "next-intl";
import {useMemo} from "react";
export interface HomePageProps {
    data: HomeInfo
}
export default function HomePage(props: HomePageProps) {
   const {
       shopContactList,
       intro,
       headquarter,
       operationCenters,
       news
   } = props.data;

  const t = useTranslations('common');
  const products = useMemo(() => {
      return [
          'product1',
          'product2',
          'product3',
          'product4',
          'product5',
          'product6',
          'product7',
      ].map(key => {
          return t(`products.${key}`)
      })
  }, [t])
  return (
      <div className="chapanda-tea-home overflow-x-hidden bg-cbd-white w-full">
          {/*TODO: 动画*/}
          <div className="w-full h-[800px] bg-cbd-brand-5 pr overflow-hidden">
              <div className="w-[70%] pa top-[170px] left-[12%] z-[1]">
                  <p className='text-[60px] leading-[1.2] text-white'>茬白稻</p>
                  <p className='text-[60px] leading-[1.2] text-white'>全国门店超<span
                      className='text-cbd-yellow-2'>8000+</span></p>
                  <div className='flex mt-[50px]'>
                      {
                          shopContactList.map((item, index) => {
                              return (<a key={item.name} className="fsc flex-col mr-[30px]" href={item.link}
                                         target='_blank'>
                                  <Image
                                      aria-hidden
                                      src={`/home/shop-contact${index}.webp`}
                                      alt="shop-contact"
                                      width={137}
                                      height={132}
                                  />
                                  <p className='mt-[8px] text-cbd-white text-[16px] leading-[28px]'>{item.name}</p>
                              </a>)
                          })
                      }
                  </div>
              </div>

              <div className='bubble right-[50px] top-[100px] pa pt-[100px] w-[100px] bg-[#1256e9] rounded-[100%]'>

              </div>

              <div className='bubble right-[60%] bottom-[100px] pa pt-[80px] w-[80px] bg-[#1256e9] rounded-[100%]'>

              </div>

              <div className='bubble right-[50px] bottom-[100px] pa pt-[400px] w-[400px] border-solid border-1 border-cbd-green-4 rounded-[100%]'>

              </div>
              <div className='bubble right-[300px] -bottom-[200px] pa pt-[400px] w-[400px]  bg-[#0946cc] rounded-[100%]'>

              </div>
              <Image
                  aria-hidden
                  src={`/home/shop-bg.webp`}
                  alt="shop-contact"
                  className='pa right-0 -bottom-[150px]'
                  width={535}
                  height={535}
              />

              <div className='bubble -left-[100px] -bottom-[100px] pa pt-[260px] w-[260px] border-solid border-1 border-cbd-green-4 rounded-[100%]'>

              </div>
              <div className='bubble left-[0] -top-[30%] pa pt-[20%] w-[20%] bg-[#0946cc] rounded-[100%]'>

              </div>
          </div>
          <PandaTeaIntroduction intro={intro} id='home_introduction'/>
          <video id="slider" autoPlay loop controls className='mx-auto my-0 max-w-[1500px] min-w-[1200px] w-[94%]'>
              <source src="https://i02.appmifile.com/37_operatorx_operatorx_xm/21/08/2024/cb3e152f01ffc96f512693bbc46aa232.mp4" type="video/mp4"/>
          </video>
          <motion.div
              className='overflow-hidden w-full flex-col pr left-0 top-0'
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once: true, amount: 0.4}}>
              <div className='mx-auto mb-[180px] max-w-[1500px] min-w-[1200px] w-[94%] mt-[100px]'>
                  <motion.div
                      variants={genVariant(0)}
                      className='text-[44px] text-cbd-brand-5  leading-[1] font-bold'>
                      Product
                      <br/>
                      Recommendation
                  </motion.div>
                  <motion.div
                      variants={genVariant(0.5)}
                      className='text-[32px] text-cbd-gray-6 mt-[10px]'>
                      产品推荐
                  </motion.div>
              </div>
              <div className='w-full'>
                  <div className='w-full h-[150px] overflow-hidden pr left-0 top-0 '>
                      <Wave/>
                  </div>
                  <div className='bg-cbd-brand-5 h-[580px]'>
                      <div className='fcc pr left-0 -top-[320px]'>
                          <ProductCarousel list={products}/>
                      </div>
                      <div className=' my-0 w-full pr left-0 -top-[320px]'>
                          <div className='w-[46%] bg-[#2545cb] pt-[46%] rounded-full left-0 top-[100px] pa'></div>
                          <div
                              className='w-[50%] border-solid border border-cbd-green-4 pt-[50%] rounded-full left-[30%] top-[100px] pa'></div>
                          <div className='w-[16%] bg-[#2545cb] pt-[16%] rounded-full -right-[8%] -top-[200px] pa'></div>
                          <div className='w-[6%] bg-[#2545cb] pt-[6%] rounded-full right-[6%] top-[120px] pa'></div>
                      </div>
                  </div>
              </div>
          </motion.div>

          <motion.div
              className='overflow-hidden w-full flex-col pr left-0 top-0 bg-cbd-gray-1 home-investor'
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once: true, amount: 0.6}}>
              <div className='w-full h-full bg-cbd-black/40'>
                <div className='pa w-[800px] h-[800px] border-1 border-cbd-gray-25 border-solid -left-[450px] rounded-full top-[100px]'>
                    <motion.a
                        target='_blank'
                        href='./home'
                        variants={genVariantX(0.2, -30)}
                        className=' w-[380px] h-[124px] left-[640px] pa top-[60px] fsc'>
                       <div className='w-[80px] h-[80px] bg-cbd-brand-5 rounded-full fcc dot'>
                           <Image
                               src="/home/t13.png"
                               alt="home investor advantage"
                               width={36}
                               height={36}
                               priority
                           />
                       </div>
                        <div className=' h-full fcs flex-col ml-[30px]'>
                            <p className='text-[32px] text-cbd-white'>加盟优势</p>
                            <p className='text-[22px] text-cbd-gray-25'>Advantage</p>
                        </div>
                    </motion.a>
                    <motion.a
                        target='_blank'
                        href='./home'
                        variants={genVariantX(0.4, -30)}
                        className=' w-[380px] h-[124px] left-[740px] pa top-[250px] fsc'>
                        <div className='w-[80px] h-[80px] bg-cbd-brand-5 rounded-full fcc dot'>
                           <Image
                               src="/home/t14.png"
                               alt="home investor Process"
                               width={36}
                               height={36}
                               priority
                           />
                       </div>
                        <div className=' h-full fcs flex-col ml-[30px]'>
                            <p className='text-[32px] text-cbd-white'>加盟流程</p>
                            <p className='text-[22px] text-cbd-gray-25'>Process</p>
                        </div>
                    </motion.a>
                    <motion.a
                        target='_blank'
                        href='./home'
                        variants={genVariantX(0.6, -30)}
                        className=' w-[380px] h-[124px] left-[740px] pa bottom-[250px] fsc'>
                        <div className='w-[80px] h-[80px] bg-cbd-brand-5 rounded-full fcc dot'>
                            <Image
                                src="/home/t15.png"
                                alt="home investor fee"
                                width={36}
                                height={36}
                                priority
                            />
                        </div>
                        <div className=' h-full fcs flex-col ml-[30px]'>
                            <p className='text-[32px] text-cbd-white'>投资费用</p>
                            <p className='text-[22px] text-cbd-gray-25'>Fee</p>
                        </div>
                    </motion.a>
                    <motion.a
                        target='_blank'
                        href='./home'
                        variants={genVariantX(0.8, -30)}
                        className=' w-[380px] h-[124px] left-[660px] pa bottom-[60px] fsc'>
                        <div className='w-[80px] h-[80px] bg-cbd-brand-5 rounded-full fcc dot'>
                            <Image
                                src="/home/t16.png"
                                alt="home investor application"
                                width={36}
                                height={36}
                                priority
                            />
                        </div>
                        <div className=' h-full fcs flex-col ml-[30px]'>
                            <p className='text-[32px] text-cbd-white'>加盟申请</p>
                            <p className='text-[22px] text-cbd-gray-25'>Application</p>
                        </div>
                    </motion.a>

                </div>
                  <div className='pa right-[80px]  top-[100px]'>
                      <motion.p
                          variants={genVariantX(0, 30)}
                          className='text-[44px] text-cbd-white  text-right leading-[1] font-bold'>
                          Franchise
                      </motion.p>
                      <motion.p
                          variants={genVariantX(0.2, 30)}
                          className='text-[32px] text-cbd-white  text-right mt-[10px]'>
                          招商加盟
                      </motion.p>
                      <motion.p
                          variants={genVariantX(0.4, 30)}
                          className='text-[16px] leading-[1.8] text-cbd-gray-4 text-right mt-[30px]'>
                          茬白稻火热加盟中ing..
                      </motion.p>
                      <motion.p
                          variants={genVariantX(0.6, 30)}
                          className='text-[16px] leading-[1.8] text-cbd-gray-4  text-right'>
                          标准化操作 / 整店输出 / 全程帮扶 / 0经验也可以开店
                      </motion.p>
                  </div>
              </div>
          </motion.div>

          <motion.div
              className='overflow-hidden w-full flex-col pr left-0 top-0 bg-cbd-gray-1'
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once: true, amount: 0.6}}>
              <div className='mx-auto mb-[60px] max-w-[1500px] min-w-[1200px] w-[94%] mt-[120px]'>
                  <motion.div
                      variants={genVariant(0)}
                      className='text-[44px] text-cbd-brand-5  leading-[1] font-bold'>
                      News Center
                  </motion.div>
                  <motion.div
                      variants={genVariant(0.5)}
                      className='text-[32px] text-cbd-gray-6 mt-[10px]'>
                      新闻中心
                  </motion.div>
                  <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      autoplay={{
                          delay: 3500,
                          disableOnInteraction: false,
                      }}
                      freeMode={true}
                      pagination={{
                          clickable: true,
                          horizontalClass: 'news-swiper-pagination-horizontal',
                          bulletActiveClass: 'news-bullet-active swiper-pagination-bullet-active',
                          bulletClass: 'news-bullet swiper-pagination-bullet',
                      }}
                      modules={[Autoplay, FreeMode, Pagination]}
                      className="mt-[40px]"
                  >
                      {
                          news.map((item, index) => {
                              return <SwiperSlide key={index}>
                                      <div className="grid grid-cols-3 gap-[20px] h-[260px]">
                                          {
                                              item.map((info) => {
                                                  return <motion.div
                                                      key={info.id}
                                                      variants={genVariant(0.6)}
                                                      className='text-[32px] text-cbd-gray-6'>
                                                      <InfoCard info={info} className='bg-cbd-white'/>
                                                  </motion.div>
                                              })
                                          }
                                      </div>
                              </SwiperSlide>
                          })
                      }
                  </Swiper>
              </div>
          </motion.div>

          <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once: true, amount: 0}}
              className='w-full fcc  overflow-hidden h-[900px] pr bg-cbd-gray-1'>
              <motion.div
                  variants={genVariant(0.3)}
                  className=' pa z-[2] rounded-[20px] h-[870px] max-w-[1500px] min-w-[1200px] w-full'>
                  <div className='fsc flex-col'>
                      <div
                          className='text-[44px] text-cbd-brand-5 leading-[1.5] font-bold'>
                          Contact Us
                      </div>
                      <div
                          className='text-[32px] text-cbd-gray-6'>
                          联系我们
                      </div>
                  </div>
                  <div className='bg-cbd-white fsc flex-col mt-[30px] rounded-[40px] overflow-y-auto py-[40px]'>
                      <div className=' h-[260px] fsc w-full mt-[35px]'>
                          <div className='w-1/5 fcc text-cbd-brand-5 leading-[72px] text-[30px] font-bold'>
                              {headquarter.name}
                          </div>
                          <div className='grid grid-cols-2 gap-x-60 text-cbd-gray-6 fsc text-[16px] leading-[32px]'>
                              <div className='fsc'><EnvironmentFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.address}</div>
                              <div className='fsc'><WechatFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.weChat}</div>
                              <div className='fsc'><IeCircleFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.website}</div>
                              <div className='fsc'><PhoneFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.supervisionPhone}
                              </div>
                              <div className='fsc'><MailFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.email}</div>
                              <div className='fsc'><WarningFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.networkSecurity}
                              </div>
                              <div className='fsc'><PhoneFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.franchiseHotline}
                              </div>
                              <div className='fsc'><HeartFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.reportingMobile}
                              </div>
                              <div className='fsc'><PhoneFilled
                                  className='!text-cbd-brand-5 text-[23px] mr-[15px]'/>{headquarter.customerServiceHotline}
                              </div>
                          </div>
                      </div>
                      <div className='fsc w-full'>
                          <div className='w-1/5'/>
                          <div
                              className='grid grid-cols-2  text-cbd-gray-6 text-[16px] leading-[36px] text-left w-full'>
                              {
                                  operationCenters.map(c => {
                                      return <div key={c.address}>
                                          {c.name}: {c.address}
                                      </div>
                                  })
                              }
                          </div>
                      </div>
                  </div>

              </motion.div>
          </motion.div>
      </div>
  );
}
