import styled from 'styled-components'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <main className="content">{children}</main>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  background-color: var(--color-red);
`
