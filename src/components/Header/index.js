import useTheme from '@/hooks/useTheme'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import OffcanvasMenu from './OffcanvasMenu'

const menuItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/orders', label: 'Orders' },
  { href: '/holdings', label: 'Holdings' },
  { href: '/positions', label: 'Positions' },
  { href: '/bids', label: 'Bids' },
  { href: '/funds', label: 'Funds' },
  { href: '/price-feeds', label: 'Feeds' },
]

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <DesktopHeader
        btcPrice={'btcPrice'}
        ethPrice={'ethPrice'}
        menuItems={menuItems}
        pathname={pathname}
        toggleTheme={toggleTheme}
      />
      <MobileHeader
        pathname={pathname}
        toggleTheme={toggleTheme}
        handleShow={handleShow}
      />
      <OffcanvasMenu
        show={show}
        handleClose={handleClose}
        menuItems={menuItems}
        pathname={pathname}
        toggleTheme={toggleTheme}
      />
    </>
  )
}

export default Header
