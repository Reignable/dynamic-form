import styled from '@emotion/styled'

const Fieldset = styled.fieldset`
  color: #fff;
  margin-bottom: 2rem;
`

const Legend = styled.legend`
  font-family: 'Ruda', sans-serif;
  font-size: 3rem;
  background-image: linear-gradient(90deg, #6d2ed5, #cd5120);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;
  margin-block-end: 1rem;
`

function Question({ title, children }) {
  return (
    <Fieldset>
      <Legend>{title}</Legend>
      {children}
    </Fieldset>
  )
}

export { Question }
