import Markdown from 'react-markdown'
import cvContent from '../../api/cv.md?raw'
import styles from './style.module.css'

export default function CvSection() {
  return (
    <div className={styles.container}>
      <Markdown>{cvContent}</Markdown>
    </div>
  )
}