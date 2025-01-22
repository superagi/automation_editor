import { EmptyTag } from '@/components/common/EmptyTag/EmptyTag'

interface InfoItemProps {
  source: string
  title: string
  value?: string | null
}

export function InfoItem({ source, title, value }: InfoItemProps) {
  return (
    <div id={`${source}_info_item`} className={'form_col'}>
      <span className={'text-xs secondary_color'}>{title}</span>
      <div className={'flex flex-col'}>
        {value ? <span className={'text-sm'}>{value}</span> : <EmptyTag />}
      </div>
    </div>
  )
}
