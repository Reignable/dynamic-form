import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  font-family: 'Roboto Slab', sans-serif;

  & + & {
    margin-top: 1rem;
  }

  & label {
    width: max-content;
    margin-block-end: 0.5rem;
    font-size: 1.25rem;

    &::after {
      display: block;
      content: '';
      border-bottom: 3px solid #cd5120;
      transform: scaleX(0);
      transform-origin: 0% 50%;
      transition: transform 150ms ease-in-out;
    }
  }

  &:hover label::after,
  &:focus-within label::after {
    transform: scaleX(1);
  }

  & input,
  & select {
    font-family: inherit;
    padding: 0.5em;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    &:focus {
      outline: none;
    }
  }
`

function Field({ type, name, label, options, register }) {
  const id = `${type}-${name}`
  const sharedProps = { id, name, ...register(name) }

  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      {type === 'dropdown' ? (
        <select {...sharedProps}>
          {options.map((option) => (
            <option style={{ color: 'black' }} key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type="text" {...sharedProps} />
      )}
    </Wrapper>
  )
}

export { Field }
