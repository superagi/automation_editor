import { NodeOption } from '@/types'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'

interface MarketResearchNodeProps {
  id: string
  data: NodeOption
}

export function MarketResearchNode({ data, id }: MarketResearchNodeProps) {
  return (
    <CustomNode
      id={id}
      data={data}
      title="Market Research"
      icon={imagePath.neutral.marketResearchIcon}
    >
      <div id={'market_research_node_content'} className={'flex flex-col'}>
        <span>Research for Object name</span>
      </div>
    </CustomNode>
  )
}
