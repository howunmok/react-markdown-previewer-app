import React from "react"
import styled from "styled-components"

interface MarkdownInputProps {
  value: string
  onChange: (e: string) => void
}

const InputContainer = styled.div`
  width: 100%;
  background-color: #1f2937;
  border: 1px solid white;
  border-radius: 10px;
  padding: 3%;
  margin: 1%;
`

const StyledTextArea = styled.textarea`
  color: #e5e7eb;
  background-color: #1f2937;
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 1.5em;
  border: 0;
`

const MarkdownInput = ({ value, onChange }: MarkdownInputProps) => {
  return (
    <InputContainer>
      <StyledTextArea
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
      />
    </InputContainer>
  )
}

export default MarkdownInput
