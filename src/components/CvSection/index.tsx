import Markdown from 'react-markdown'
import cvContent from '../../api/cv.md?raw'
import styles from './style.module.css'

interface Props {
  section?: string
}

export default function CvSection({ section }: Props) {
  const content = section
    ? cvContent.split('---').find(part => part.includes(`**${section}**`)) ?? ''
    : cvContent

  return (
    <div className={styles.container}>
      <Markdown>{content}</Markdown>
    </div>
  )
}