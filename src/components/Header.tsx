import styled from "styled-components"

interface HeaderProps {
  onToggleGuide: () => void
}

const HeaderContainer = styled.header`
  background-color: #111827;
  height: 80px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 160px;
    justify-content: center;
  }
`
const Title = styled.h1`
  color: #e5e7eb;
  font-size: 30px;
  padding-left: 40px;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    font-size: 25px;
    padding-left: 0px;
    margin-top: 10px;
  }
`

const Button = styled.button`
  font-size: 20px;
  color: #eab308;
  box-sizing: border-box;
  background-color: #111827;
  border: 3px solid #eab308;
  margin-right: 40px;
  padding: 8px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #eab308;
    color: #111827;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin-right: 0px;
  }
`

const Header = ({ onToggleGuide }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  )
}

export default Header
