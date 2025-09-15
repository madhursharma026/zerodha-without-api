// components/Layout/Layout.jsx
import Header from '@/components/Header'
import styles from '@/components/Layout/Layout.module.css'
import MainContent from '@/components/Layout/MainContent'
import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import { Card, Row } from 'react-bootstrap'

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Header />
      <div className="containerWidthGlobalCSS h-100">
        <Card className={`${styles.card} border-0 rounded-0 mt-1 p-0 m-0`}>
          <Card.Body className="px-2 py-0">
            <Row>
              <LeftSidebar />
              <MainContent>{children}</MainContent>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
