import navbar from './navbar.module.css'
import Image from 'next/image'
import imagePath from '@/constants/imagePath'

export default function Navbar() {
  return (
    <div
      id={'navbar'}
      className={`${navbar.navbar} flex flex-row items-center justify-between text-white proxima_nova px-4`}
    >
      <div
        id={'navbar_left_section'}
        className={'flex flex-row items-center gap-4'}
      >
        <Image
          className={'size-4'}
          src={imagePath.common.backArrow}
          alt={'back_arrow'}
        />
        <span className={'text-base font-semibold '}>automation name here</span>
      </div>

      <div id={'navbar_center_section'}></div>

      <div
        id={'navbar_right_section'}
        className={'flex flex-row items-center gap-2'}
      >
        <button className={'secondary_medium'}>Save As Draft</button>
        <button className={'primary_medium'}>Launch Automation</button>
      </div>
    </div>
  )
}
