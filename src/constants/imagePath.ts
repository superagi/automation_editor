import { AppIcons } from '@/types/imagePath'

import emailSelected from '@/assets/images/selected/email.svg'
import emailUnselected from '@/assets/images/unselected/email.svg'
import updateEntitySelected from '@/assets/images/selected/update_entity.svg'
import updateEntityUnselected from '@/assets/images/unselected/update_entity.svg'
import backArrow from '@/assets/images/common/back_arrow.svg'
import linkedin from '@/assets/images/common/linkedin.svg'
import dragIcon from '@/assets/images/common/drag_icon.svg'

export const imagePath: AppIcons = {
  selected: {
    email: emailSelected,
    updateEntity: updateEntitySelected,
  },
  unselected: {
    email: emailUnselected,
    updateEntity: updateEntityUnselected,
  },
  common: {
    backArrow: backArrow,
    linkedin: linkedin,
    dragIcon: dragIcon,
  },
}

export default imagePath
