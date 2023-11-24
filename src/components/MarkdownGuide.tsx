import styled from "styled-components"

const GuideContainer = styled.div`
  background-color: #d1d5db;
`

const Title = styled.h2`
  color: #030712;
  font-size: 28px;
  text-align: center;
  text-decoration: underline;
  font-weight: 600;
  background-color: #e5e7eb;
`

const Topic = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #374151;
  margin-left: 30px;
  margin-top: 5px;
`
const Hints = styled.p`
  font-size: 18px;
  margin-left: 50px;
  color: #4b5563;
  display: flex;
  flex-direction: column;
`

const MarkdownGuide = () => {
  return (
    <GuideContainer>
      <Title>Markdown Cheat Sheet</Title>
      <Topic>Heading:</Topic>
      <Hints>
        <code># H1</code>
        <code>## H2</code>
        <code>### H3</code>
      </Hints>
      <Topic>Text Formatting:</Topic>
      <Hints>
        <code>*italic*</code>
        <code>**bc**</code>
      </Hints>
      <Topic>Link:</Topic>
      <Hints>
        <code>[Link](http://a.com)</code>
      </Hints>
      <Topic>Image:</Topic>
      <Hints>
        <code>![Image](http://url/a.png)</code>
      </Hints>
      <Topic>Inline and Block:</Topic>
      <Hints>
        <code>`inline code`</code>
        <code>```block code```</code>
      </Hints>
      <Topic>Lists:</Topic>
      <Hints>
        <code>- list item</code>
      </Hints>
    </GuideContainer>
  )
}

export default MarkdownGuide
