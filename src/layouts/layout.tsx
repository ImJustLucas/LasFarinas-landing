import styled from 'styled-components'

import { FarineHeader } from '@components/FarineHeader'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <FarineHeader />
      <main>{children}</main>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  background-color: var(--color-red);
`
