import { AppIcons } from '@/types/imagePath'

import emailSelected from '../../public/images/selected/email.svg'
import emailUnselected from '../../public/images/unselected/email.svg'
import updateEntitySelected from '../../public/images/selected/update_entity.svg'
import updateEntityUnselected from '../../public/images/unselected/update_entity.svg'
import backArrow from '../../public/images/common/back_arrow.svg'
import linkedin from '../../public/images/common/linkedin.svg'

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
  },
}

export default imagePath
