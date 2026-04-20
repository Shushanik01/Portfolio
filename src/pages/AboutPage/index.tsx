import { Space, Tag, Typography } from 'antd'
import { portfolioData } from '../../data/portfolio'
import { ABOUT_PAGE_COPY } from './consts'
import { sortSkills } from './utils'
import styles from './style.module.css'

const { Title, Paragraph, Text } = Typography

function AboutPage() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <Title level={2}>{ABOUT_PAGE_COPY.title}</Title>
        <Paragraph>{portfolioData.about}</Paragraph>
        <Text strong>{ABOUT_PAGE_COPY.subtitle}</Text>
        <Space wrap>
          {sortSkills(portfolioData.skills).map((skill) => (
            <Tag key={skill} color="geekblue">
              {skill}
            </Tag>
          ))}
        </Space>
      </div>
    </section>
  )
}

export default AboutPage
