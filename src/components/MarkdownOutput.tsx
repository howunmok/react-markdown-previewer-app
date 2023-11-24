// import React from "react"
import Markdown from "react-markdown"
import styled from "styled-components"

interface MarkdownOutputProps {
  markdown: string
  // setMarkdown: (markdown: string) => void
}

const OutputContainer = styled.div`
  width: 100%;
  background-color: #1f2937;
  border: 1px solid white;
  color: #e5e7eb;
  padding: 3%;
  border-radius: 10px;
  padding: 3%;
  margin: 1%;
  
`

const MarkdownOutput = ({ markdown }: MarkdownOutputProps) => {
  return (
    <OutputContainer>
      <Markdown>{markdown}</Markdown>
    </OutputContainer>
  )
}

export default MarkdownOutput
