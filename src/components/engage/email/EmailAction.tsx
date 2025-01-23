import { Select, Switch } from 'antd'
import { useState } from 'react'
import { EmailActionManual } from '@/components/engage/email/EmailActionManual'
import { EmailActionPersonalize } from '@/components/engage/email/EmailActionPersonalize'

export function EmailAction() {
  const [isPersonalized, setIsPersonalized] = useState(false)
  const [selectedEmail, setSelectedEmail] = useState<string>()

  const fromOptions = ['abc123@gmail.com', 'qwerty12@gmail.com']

  const options = fromOptions.map((email) => ({
    value: email,
    label: email,
  }))

  const handleEmailChange = (value: string) => {
    setSelectedEmail(value)
  }

  const handleToggleChange = (checked: boolean) => {
    setIsPersonalized(checked)
  }

  return (
    <div id={'email_action'} className={'flex flex-col gap-6'}>
      <div id={'from'} className={'flex flex-col gap-2'}>
        <span className="text-sm secondary_color">From</span>
        <Select
          placeholder="Select email"
          value={selectedEmail}
          onChange={handleEmailChange}
          options={options}
          className="w-full"
        />
      </div>

      <div id={'email_type'} className="flex items-center gap-2">
        <span className={`text-sm ${!isPersonalized ? 'font-medium' : ''}`}>
          Manual emails
        </span>
        <Switch
          size={'small'}
          checked={isPersonalized}
          onChange={handleToggleChange}
          className="mx-2"
        />
        <span className={`text-sm ${isPersonalized ? 'font-medium' : ''}`}>
          Personalize emails
        </span>
      </div>

      <div id={'email_component'}>
        {isPersonalized ? <EmailActionPersonalize /> : <EmailActionManual />}
      </div>
    </div>
  )
}
