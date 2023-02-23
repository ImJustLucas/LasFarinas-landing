import styled from 'styled-components'

export const Menu = () => {
  return (
    <MenuContainer>
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Télécharger</NavItem>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
`

const NavItem = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`
