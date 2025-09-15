import Footer from '@/components/Footer/Footer'
import AssestClass from '@/components/PriceFeeds/AssetClass'
import AssestClass2 from '@/components/PriceFeeds/AssetClass2'
import Blockchains from '@/components/PriceFeeds/Blockchains'
import Developers from '@/components/PriceFeeds/Developers'
import Header from '@/components/PriceFeeds/Header'
import Images from '@/components/PriceFeeds/Images'
import InfiniteSlider from '@/components/PriceFeeds/InfiniteSlider'
import LogoCards from '@/components/PriceFeeds/LogoCards'
import LogoSlider from '@/components/PriceFeeds/LogoSlider'
import MarketData from '@/components/PriceFeeds/MarketData'
import MarketEdge from '@/components/PriceFeeds/MarketEdge'
import styles from '@/components/PriceFeeds/pricefeeds.module.css'
import Reliable from '@/components/PriceFeeds/Reliable'
import Section1 from '@/components/PriceFeeds/Section1'

export default function PriceFeeds() {
  return (
    <div className={styles.feedsBody}>
      <div className="fixed-top">
        <Header />
      </div>
      <Section1 />
      <LogoSlider />
      <AssestClass />
      <InfiniteSlider />
      <AssestClass2 />
      <MarketData />
      <LogoCards />
      <Blockchains />
      <MarketEdge />
      <Developers />
      <Images />
      <Reliable />
      <Footer />
    </div>
  )
}

PriceFeeds.getLayout = function pageLayout(page) {
  return page
}
