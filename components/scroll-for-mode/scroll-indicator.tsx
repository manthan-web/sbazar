import dynamic from 'next/dynamic'

const ScrollIndicatorClient = dynamic(() => import('./Scroll-indicator.client'), { ssr: false })

const ScrollIndicator = () => {
  return <ScrollIndicatorClient />
}

export default ScrollIndicator