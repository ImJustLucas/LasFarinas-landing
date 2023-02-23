import styled from 'styled-components'

import { Menu } from '@components/Menu'

export const FarineHeader = () => {
  return (
    <FarineHeaderContainer>
      <TitleContainer>Las Farinas</TitleContainer>
      <Menu />
    </FarineHeaderContainer>
  )
}

const FarineHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 1220px;
  margin: 0 auto;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: var(--color-beige);

  @media (max-width: 1221px) {
    margin: 0 20px;
  }
`

const TitleContainer = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    animation: GoofySpin infinite 1s ease-in-out;
  }
`
