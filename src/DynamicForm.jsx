import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { Field, Question, SubmitButton } from './components'

const Form = styled.form`
  padding: 1rem;
  color: #fff;
`

function DynamicForm({ configuration, onSubmit }) {
  const { register, handleSubmit } = useForm()

  return (
    <Form onSubmit={handleSubmit((v) => onSubmit?.(v))}>
      {configuration?.questions.map(({ fields, title }) => (
        <Question key={title} title={title}>
          {fields?.map((field) => (
            <Field key={field.name} register={register} {...field} />
          ))}
        </Question>
      ))}
      <SubmitButton />
    </Form>
  )
}

export { DynamicForm }
