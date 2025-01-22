import React from 'react'
import { CustomSkeletonLoaderProps } from './type'
import styles from './styles.module.css'
import { loaderPages } from '@/constants/loaderConstants'
import InfoGrid from '../infoGrid/InfoGrid'
import Image from 'next/image'
import imagePath from '@/constants/imagePath'
import CustomContainer from '../customContainer/CustomContainer'

const CustomSkeletonLoader: React.FC<CustomSkeletonLoaderProps> = ({
  page,
  index = 0,
  rskSize = 34,
  text,
  containerHeight = '',
}) => {
  const renderEntityPropertiesSkeleton = () => (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto px-4 md:px-8 py-8">
      <div className="flex items-center gap-2">
        <div
          className={`h-[20px] w-[100px] ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
        />
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`w-11 h-11 ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
        />
        <div className="flex flex-col gap-1.5">
          <div
            className={`h-[18px] w-[200px] ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
          />
          <div
            className={`h-[14px] w-[100px] ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-4 mb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-[30px] w-1/3 ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-4">
              {[1, 2, 3].map((j) => (
                <div
                  key={j}
                  className={`h-[40px] w-1/3 ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDetailSkeleton = () => (
    <div className="grid grid-cols-12 gap-4 w-full">
      <div className="col-span-3 flex flex-col gap-2">
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[30px]`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20vh]`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[44vh]`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[16vh]`}
        />
      </div>

      <div className="col-span-6 flex flex-col gap-4">
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[30px]`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[50vh]`}
        />
      </div>

      <div className="col-span-3 flex flex-col gap-2">
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[30vh]`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[30vh]`}
        />
      </div>
    </div>
  )

  const renderEmailSkeleton = () => (
    <div
      className={`col-span-12 flex flex-col gap-2 ${styles.bg_dark_4} w-full`}
    >
      <div
        className={`h-[15px] w-full ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
      />
      <div
        className={`h-[15px] w-1/2 ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
      />
      <div
        className={`h-[15px] mt-3 w-full ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
      />
      <div
        className={`h-[15px] w-full ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
      />
      <div
        className={`h-[15px] w-1/2 ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
      />
      <div
        className={`h-[15px] mt-3 w-full ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
      />
      <div
        className={`h-[15px] w-1/2 ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
      />
      {index === 0 && (
        <>
          <div
            className={`h-[15px] mt-3 w-full ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
          />
          <div
            className={`h-[15px] w-full ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
          />
          <div
            className={`h-[15px] w-1/2 ${styles.bg_dark_6} ${styles.hsk} ${styles.pulse}`}
          />
        </>
      )}
    </div>
  )

  const renderConversationLeftPanelSkeleton = () => (
    <div className="flex flex-col h-full border_right">
      <div className="flex flex-col gap-3 border_bottom p-3">
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[40px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[30px] w-full`}
        />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[68px] w-full`}
        />
      </div>
    </div>
  )

  const renderConversationRightPanelSkeleton = () => (
    <div className="flex flex-col h-full my-4 mx-3 gap-2">
      <div
        className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[200px] w-full`}
      />
      <div
        className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[460px] w-full`}
      />
      <div
        className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[40px] w-full`}
      />
    </div>
  )

  const renderConversationRightPanelListSkeleton = () => (
    <div
      className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[180px] w-full my-4 mx-3`}
    />
  )

  const renderOutreachResearchSkeleton = () => (
    <div className="grid grid-cols-12 gap-4 w-full h-[500px]">
      <div
        className={`col-span-12 flex flex-col gap-2 ${styles.bg_dark_4} w-full`}
      >
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-1/2`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] mt-3 w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-1/2`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] mt-3 w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-full`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[15px] w-1/2`}
        />
      </div>
    </div>
  )

  const renderOnboardingSkeleton = () => (
    <div
      className="h-screen flex flex-col"
      style={{ height: `calc(100vh - (78px + var(--banner-height)))` }}
    >
      <div className="w-full h-full grid grid-cols-2 gap-4">
        <div className="flex flex-col overflow-y-auto px-[13.2vw] py-[16vh]">
          <div
            className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[38px] w-4/5`}
          />
          <div
            className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-full mt-3`}
          />
          <div
            className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-1/3 mt-1`}
          />
          <div
            className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[32px] w-full mt-8`}
          />
        </div>

        <div className="flex items-center justify-center rounded-lg p-6">
          <div
            className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} size-full`}
          />
        </div>
      </div>
    </div>
  )

  const renderHomeOverviewSkeleton = () => {
    return (
      <div className="grid grid-cols-2 gap-2">
        {[...Array(2)].map((_, outerIndex) => (
          <div key={outerIndex} className="col-span-1 flex flex-col gap-2">
            <div
              className={`flex flex-col min-h-[400px] ${styles.container_bg_color} rounded-lg p-3 gap-4`}
            >
              {[...Array(2)].map((_, innerIndex) => (
                <div key={innerIndex} className="flex flex-col gap-4">
                  <div className="flex flex-row gap-4 items-center">
                    <div
                      className={`${styles.bg_dark_6} ${styles.rsk} ${styles.pulse} size-10`}
                    />
                    <div
                      className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-[180px]`}
                    />
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <div
                      className={`${styles.bg_dark_6} ${styles.rsk} ${styles.pulse} size-10`}
                    />
                    <div
                      className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-[280px]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderHomeAnalyticsSkeleton = () => (
    <div className="grid grid-cols-3 gap-2">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`${styles.container_bg_color} min-h-[206px] p-3`}
        >
          <div
            className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-[200px]`}
          />
        </div>
      ))}
    </div>
  )

  const renderHomeActivitySkeleton = () => <div></div>

  const renderGetStartedSkeleton = () => (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-1">
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[40px] w-[280px] mt-1`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[24px] w-[180px] mt-1`}
        />
      </div>

      {[...Array(2)].map((_, index) => (
        <div key={index} className="flex flex-col gap-3">
          <div
            className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[28px] w-[180px] mt-1`}
          />
          <div className="flex flex-row gap-4">
            {[...Array(Math.floor(4 / (index + 1)))].map((_, dindex) => (
              <div
                key={dindex}
                className={`${styles.container_bg_color} w-[310px] h-[314px] rounded-lg flex flex-col gap-1 justify-end p-4`}
              >
                <div
                  className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-[40px] mt-1`}
                />
                <div
                  className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-[190px] mt-1`}
                />
                <div className="flex flex-col">
                  <div
                    className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-[280px] mt-1`}
                  />
                  <div
                    className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-[180px] mt-1`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const renderProfileIconSkeleton = () => (
    <div
      className={`size-[${rskSize}px] ${styles.bg_dark_6} ${styles.pulse} ${styles.rsk} `}
    />
  )

  const renderGenerateNumberSkeleton = () => (
    <div className={`${styles.bg_white_4} flex flex-col gap-1 p-4 rounded-lg`}>
      <div
        className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[30px] w-[230px]`}
      />
      <div
        className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[14px] w-[130px]`}
      />
    </div>
  )

  const renderCallDetailsSkeleton = () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[14px] w-[100px]`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[26px] w-[180px]`}
        />
      </div>

      <InfoGrid>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col gap-2">
              <div
                className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[14px] w-[100px]`}
              />
              <div
                className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[26px] w-[180px]`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <div
                className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[14px] w-[100px]`}
              />
              <div
                className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[26px] w-[180px]`}
              />
            </div>
          </div>
        ))}
      </InfoGrid>

      <div className="flex flex-col gap-2">
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[14px] w-[80px]`}
        />
        <div
          className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[300px] w-full`}
        />
      </div>
    </div>
  )

  const renderCallCampaignEntities = () => (
    <div className="flex flex-col gap-1">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="flex flex-row gap-2 p-[6px]">
          <div
            className={`size-[42px] ${styles.bg_dark_6} ${styles.rsk} ${styles.pulse}`}
          />

          <div className="flex flex-col gap-1">
            <div
              className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[18px] w-[180px]`}
            />
            <div
              className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[18px] w-[120px]`}
            />
          </div>
        </div>
      ))}
    </div>
  )

  const renderContainerInfoItemSkeleton = () => (
    <div className="flex flex-col size-full font-medium text-white">
      <span className="text-sm">{text}</span>
      <div
        className={`${styles.hsk} h-[14px] w-[80px] ${styles.bg_dark_6} ${styles.pulse} mt-2`}
      />

      <div className="size-full flex items-center justify-center">
        <div
          className={`${styles.hsk} size-[40%] ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>
    </div>
  )
  const renderAnalyticsSkeleton = () => (
    <div className={`flex flex-col gap-2`}>
      <div className={`flex flex-col gap-4`}>
        {/* First Row */}
        <div className={`flex flex-row gap-1`}>
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[20px] w-[90px] mx-3 my-2`}
            />
          ))}
        </div>

        {/* Second Row */}
        <div className={`flex flex-row gap-1`}>
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[18px] w-[60px] mx-3 my-2`}
            />
          ))}
        </div>
      </div>

      {/* Grid 1 */}
      <div className={`grid grid-cols-3 gap-2`}>
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={`col-span-1 h-[210px] w-full gap-2 rounded-lg ${styles.container_bg_color} p-3`}
          >
            <div
              className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[18px] w-[180px]`}
            />
          </div>
        ))}
      </div>

      {/* Grid 2 */}
      <div className={`grid grid-cols-2 gap-2`}>
        {Array.from({ length: 2 }, (_, index) => (
          <div
            key={index}
            className={`col-span-1 h-[320px] w-full gap-2 rounded-lg ${styles.container_bg_color} p-3`}
          >
            <div
              className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[18px] w-[180px]`}
            />
          </div>
        ))}
      </div>

      {/* Grid 3 */}
      <div className={`grid grid-cols-1 gap-2`}>
        <div
          key={0}
          className={`col-span-1 h-[320px] w-full gap-2 rounded-lg ${styles.container_bg_color} p-3`}
        >
          <div
            className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[18px] w-[180px]`}
          />
        </div>
      </div>
    </div>
  )

  const renderAnalyticsChartTableSkeleton = () => (
    <div
      className={`${styles.bg_dark_6} ${styles.hsk} ${styles.pulse} h-[310px] w-full`}
    />
  )

  const renderTableSkeleton = () => (
    <div className="flex items-center justify-center">
      <Image
        className={`size-[96px]  my-[44px] ${styles.pulse}`}
        src={imagePath?.common?.tableLoader}
        alt="table_loader"
      />
    </div>
  )

  const renderChartSkeleton = () => (
    <div className="flex items-center justify-center">
      <Image
        className={`${styles.pulse} size-[96px] my-[44px]`}
        src={imagePath.common.chartLoader}
        alt="chart_loader"
      />
    </div>
  )

  const renderWorkspaceSectionSkeleton = () => (
    <div className="flex flex-col gap-8 w-full items-center justify-center mt-32">
      <div className="flex flex-col gap-2">
        <div
          className={`${styles.hsk} h-[38px] w-[330px] ${styles.bg_dark_6} ${styles.pulse}`}
        />
        <div
          className={`${styles.hsk} h-[18px] w-[220px] ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>

      <div
        className={`${styles.hsk} h-[32px] w-[180px] ${styles.bg_dark_6} ${styles.pulse}`}
      />
    </div>
  )

  const renderAudioPlayerSkeleton = () => (
    <div
      className={`${styles.hsk} h-[34px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
    />
  )

  const renderNavListSkeleton = () => (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="flex flex-row gap-3 items-center py-3 px-4">
          <div
            className={`${styles.rsk} size-[${rskSize}px] min-w-[${rskSize}px] min-h-[${rskSize}px] ${styles.bg_dark_6} ${styles.pulse}`}
          />

          <div className="flex flex-col gap-2 w-full">
            <div
              className={`${styles.hsk} h-[18px] w-4/5 ${styles.bg_dark_6} ${styles.pulse}`}
            />
            <div
              className={`${styles.hsk} h-[18px] w-2/5 ${styles.bg_dark_6} ${styles.pulse}`}
            />
          </div>
        </div>
      ))}
    </div>
  )

  const renderCallLogDetailsSkeleton = () => (
    <div className="flex flex-col gap-4">
      <InfoGrid gap={8} columns={3}>
        {Array.from({ length: 7 }, (_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div
              className={`${styles.hsk} h-[18px] w-4/5 ${styles.bg_dark_6} ${styles.pulse}`}
            />
            <div
              className={`${styles.hsk} h-[18px] w-2/5 ${styles.bg_dark_6} ${styles.pulse}`}
            />
          </div>
        ))}
      </InfoGrid>

      <div className="border_bottom" />

      <div className="flex flex-col gap-2">
        <div
          className={`${styles.hsk} h-[18px] w-[100px] ${styles.bg_dark_6} ${styles.pulse}`}
        />
        <div
          className={`${styles.hsk} h-[18px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
        />
        <div
          className={`${styles.hsk} h-[18px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>
    </div>
  )

  const renderCallLogRecordingAndTranscriptSkeleton = () => (
    <div className="flex flex-col gap-2">
      <CustomContainer padding="p-4">
        <div
          className={`${styles.hsk} h-[34px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </CustomContainer>

      <CustomContainer padding="p-4">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="flex flex-row gap-3 items-center">
              <div
                className={`${styles.rsk} size-[${rskSize}px] ${styles.bg_dark_6} ${styles.pulse}`}
              />
              <div className="flex flex-col gap-2">
                <div
                  className={`${styles.hsk} h-[18px] w-[220px] ${styles.bg_dark_6} ${styles.pulse}`}
                />
                <div
                  className={`${styles.hsk} h-[18px] w-[90px] ${styles.bg_dark_6} ${styles.pulse}`}
                />
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </div>
  )

  const renderEntityDetailsSkeleton = () => (
    <div className="flex flex-col gap-2">
      <div className={`container_bg_color ${styles.bg_dark_6}`}>
        <div className="flex flex-col">
          <div className="flex flex-row gap-3 items-center py-4 px-2">
            <div
              className={`${styles.rsk} size-[${rskSize}px] ${styles.bg_dark_6} ${styles.pulse}`}
            />

            <div className="flex flex-col gap-2">
              <div
                className={`${styles.hsk} h-[18px] w-[220px] ${styles.bg_dark_6} ${styles.pulse}`}
              />
              <div
                className={`${styles.hsk} h-[18px] w-[90px] ${styles.bg_dark_6} ${styles.pulse}`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 p-2">
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index} className="flex flex-row gap-2">
                <div
                  className={`${styles.hsk} h-[30px] w-5/12 ${styles.bg_dark_6} ${styles.pulse}`}
                />
                <div
                  className={`${styles.hsk} h-[30px] w-3/12 ${styles.bg_dark_6} ${styles.pulse}`}
                />
                <div
                  className={`${styles.hsk} h-[30px] w-4/12 ${styles.bg_dark_6} ${styles.pulse}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`container_bg_color ${styles.bg_dark_6}`}>
        <div className="flex flex-col">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="flex flex-col gap-2 p-2">
              <div
                className={`${styles.hsk} h-[20px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
              />
              <div
                className={`${styles.hsk} h-[20px] w-3/5 ${styles.bg_dark_6} ${styles.pulse}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSalesforceSyncSkeleton = () => (
    <div className="flex flex-col gap-6">
      <div
        className={`${styles.hsk} h-6 w-[100px] ${styles.bg_dark_6} ${styles.pulse}`}
      />
      <div
        className={`${styles.hsk} h-16 w-full ${styles.bg_dark_6} ${styles.pulse}`}
      />
      <div className="form_col">
        <div
          className={`${styles.hsk} h-[14px] w-[100px] ${styles.bg_dark_6} ${styles.pulse}`}
        />
        <div
          className={`${styles.hsk} h-[34px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>

      <div className="flex flex-row gap-2 items-center justify-end">
        <div
          className={`${styles.hsk} h-[34px] w-24 ${styles.bg_dark_6} ${styles.pulse}`}
        />
        <div
          className={`${styles.hsk} h-[34px] w-32 ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>
    </div>
  )

  const renderUpdateCallRouteSkeleton = () => (
    <div className="flex flex-col gap-6">
      <div className="form_col">
        <div
          className={`${styles.hsk} h-[18px] w-1/6 ${styles.bg_dark_6} ${styles.pulse}`}
        />
        <div
          className={`${styles.hsk} h-[30px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>

      {Array.from({ length: 2 }, (_, index) => (
        <div key={index} className="form_col">
          <div
            className={`${styles.hsk} h-[18px] w-1/6 ${styles.bg_dark_6} ${styles.pulse}`}
          />
          <div
            className={`${styles.hsk} h-[30px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
          />
          <div
            className={`${styles.hsk} h-[14px] w-1/2 ${styles.bg_dark_6} ${styles.pulse}`}
          />
        </div>
      ))}
    </div>
  )

  const renderTransferCallSkeleton = () => (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 px-2 py-2 border_bottom">
        <div
          className={`${styles.hsk} h-[34px] w-full ${styles.bg_dark_6} ${styles.pulse}`}
        />

        <div className="flex flex-col gap-[18px]">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="flex flex-row items-center gap-3">
              <div
                className={`${styles.rsk} min-w-[${rskSize}px] min-h-[${rskSize}px] ${styles.bg_dark_6} ${styles.pulse}`}
              />
              <div className="flex flex-col gap-1 w-full">
                <div
                  className={`${styles.hsk} h-[18px] w-4/5 ${styles.bg_dark_6} ${styles.pulse}`}
                />
                <div
                  className={`${styles.hsk} h-[12px] w-2/5 ${styles.bg_dark_6} ${styles.pulse}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-end gap-2 p-4">
        <div
          className={`${styles.hsk} h-[34px] w-1/2 ${styles.bg_dark_6} ${styles.pulse}`}
        />
        <div
          className={`${styles.hsk} h-[34px] w-1/2 ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>
    </div>
  )

  const renderInfoItemSkeleton = () => (
    <div
      className={`${styles.hsk} h-5 w-1/2 ${styles.bg_dark_6} ${styles.pulse}`}
    />
  )

  const renderDialerSkeleton = () => (
    <div className="flex flex-col items-center gap-3 p-2 pointer-events-none w-full">
      <div
        className={`${styles.rsk} size-[${rskSize}px] ${styles.bg_dark_6} ${styles.pulse}`}
      />
      <div className="flex flex-col items-center w-full gap-3">
        <div className="flex flex-col gap-[6px] items-center w-full">
          <div
            className={`${styles.hsk} h-[24px] w-1/2 ${styles.bg_dark_6} ${styles.pulse}`}
          />
          <div
            className={`${styles.hsk} h-[18px] w-1/3 ${styles.bg_dark_6} ${styles.pulse}`}
          />
        </div>

        <div
          className={`${styles.hsk} h-[14px] w-2/5 ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>
    </div>
  )

  const renderCallParticipantsSkeleton = () => (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3 w-full">
          <div
            className={`${styles.rsk} w-[38px] h-[32px] ${styles.bg_dark_6} ${styles.pulse}`}
          />
          <div className="flex flex-col gap-[6px] w-full">
            <div
              className={`${styles.hsk} h-[20px] w-1/2 ${styles.bg_dark_6} ${styles.pulse}`}
            />
            <div
              className={`${styles.hsk} h-[14px] w-1/5 ${styles.bg_dark_6} ${styles.pulse}`}
            />
          </div>
        </div>

        <div
          className={`${styles.rsk} w-[44px] h-[38px] ${styles.bg_dark_6} ${styles.pulse}`}
        />
      </div>
    </div>
  )

  // Add more render methods for other page types...

  const renderContent = () => {
    switch (page) {
      case loaderPages?.ENTITY_PROPERTIES:
        return renderEntityPropertiesSkeleton()
      case loaderPages?.DETAIL:
        return renderDetailSkeleton()
      case loaderPages?.EMAIL:
        return renderEmailSkeleton()
      case loaderPages?.CONVERSATION_LEFT_PANEL:
        return renderConversationLeftPanelSkeleton()
      case loaderPages?.CONVERSATION_RIGHT_PANEL:
        return renderConversationRightPanelSkeleton()
      case loaderPages?.CONVERSATION_RIGHT_PANEL_LIST:
        return renderConversationRightPanelListSkeleton()
      case loaderPages?.OUTREACH_RESEARCH:
        return renderOutreachResearchSkeleton()
      case loaderPages?.ONBOARDING:
        return renderOnboardingSkeleton()
      case loaderPages?.HOME_OVERVIEW:
        return renderHomeOverviewSkeleton()
      case loaderPages?.HOME_ANALYTICS:
        return renderHomeAnalyticsSkeleton()
      case loaderPages?.HOME_ACTIVITY:
        return renderHomeActivitySkeleton()
      case loaderPages?.GET_STARTED:
        return renderGetStartedSkeleton()
      case loaderPages?.PROFILE_ICON:
        return renderProfileIconSkeleton()
      case loaderPages?.GENERATE_NUMBER:
        return renderGenerateNumberSkeleton()
      case loaderPages?.CALL_DETAILS:
        return renderCallDetailsSkeleton()
      case loaderPages?.CALL_CAMPAIGN_ENTITIES:
        return renderCallCampaignEntities()
      case loaderPages?.CONTAINER_INFO_ITEM:
        return renderContainerInfoItemSkeleton()
      case loaderPages?.ANALYTICS:
        return renderAnalyticsSkeleton()
      case loaderPages?.ANALYTICS_CHART_TABLE:
        return renderAnalyticsChartTableSkeleton()
      case loaderPages?.TABLE:
        return renderTableSkeleton()
      case loaderPages?.CHART:
        return renderChartSkeleton()
      case loaderPages?.WORKSPACE_SECTION:
        return renderWorkspaceSectionSkeleton()
      case loaderPages?.AUDIO_PLAYER:
        return renderAudioPlayerSkeleton()
      case loaderPages?.NAV_LIST:
        return renderNavListSkeleton()
      case loaderPages?.CALL_LOG_DETAILS:
        return renderCallLogDetailsSkeleton()
      case loaderPages?.CALL_LOG_RECORDING_AND_TRANSCRIPT:
        return renderCallLogRecordingAndTranscriptSkeleton()
      case loaderPages?.ENTITY_DETAILS:
        return renderEntityDetailsSkeleton()
      case loaderPages?.SALESFORCE_SYNC:
        return renderSalesforceSyncSkeleton()
      case loaderPages?.UPDATE_CALL_ROUTE:
        return renderUpdateCallRouteSkeleton()
      case loaderPages?.TRANSFER_CALL:
        return renderTransferCallSkeleton()
      case loaderPages?.INFO_ITEM:
        return renderInfoItemSkeleton()
      case loaderPages?.DIALER:
        return renderDialerSkeleton()
      case loaderPages?.CALL_PARTICIPANTS:
        return renderCallParticipantsSkeleton()
      default:
        return null
    }
  }

  return (
    <div id={`${page}_skeleton_loader`} className={`${containerHeight} w-full`}>
      {renderContent()}
    </div>
  )
}

export default CustomSkeletonLoader
