import styled from '@emotion/styled'

const SubmitButton = styled.button`
  font-family: 'Ruda', sans-serif;
  font-size: 2rem;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  background: none;
  background-image: linear-gradient(90deg, #6d2ed5, #cd5120);
  transition: background-size 150ms ease-in-out;
  background-size: 0;
  background-repeat: no-repeat;

  &:hover,
  &:focus {
    outline: none;
    background-size: 100%;
  }

  &:active {
    transition: background-size 50ms linear;
    background-size: 0;
  }
`
SubmitButton.defaultProps = {
  type: 'submit',
  children: 'Submit',
}

export { SubmitButton }
