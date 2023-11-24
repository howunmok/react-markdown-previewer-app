import "./App.css"
import { useState } from "react"
import MarkdownInput from "./components/MarkdownInput"
import MarkdownOutput from "./components/MarkdownOutput"
import Header from "./components/Header"
import MarkdownGuide from "./components/MarkdownGuide"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #111827;
`

function App() {
  const [markdown, setMarkdown] = useState<string>("# Hello World")
  const [showGuide, setShowGuide] = useState<boolean>(false)

  const onToggleGuide = () => setShowGuide(!showGuide)
  const handleChange = (value: string) => {
    setMarkdown(value)
  }

  return (
    <>
      <Header onToggleGuide={onToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </Container>
    </>
  )
}

export default App
