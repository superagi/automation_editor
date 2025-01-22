import Image from 'next/image'
import styles from './empty.module.css'
import imagePath from '@/constants/imagePath'

export function EmptyTag() {
  return (
    <div className={'flex flex-row gap-1 items-center'}>
      <Image
        className={'size-4'}
        src={imagePath.alert.yellowAlert}
        alt={'yellow_alert'}
      />

      <span className={`${styles.yellow_alert_text} text-sm font-normal`}>
        Empty!
      </span>
    </div>
  )
}
