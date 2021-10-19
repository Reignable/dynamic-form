import { render, screen } from '@testing-library/react'
import { DynamicForm } from './DynamicForm'

describe(`<DynamicForm />`, () => {
  it('Renders a form based on the provided configuration', () => {
    const configuration = {
      questions: [
        {
          title: 'Question 1',
          fields: [{ name: 'field_one', type: 'text', label: 'Field 1' }],
        },
        {
          title: 'Question 2',
          fields: [
            {
              type: 'dropdown',
              name: 'field2',
              label: 'Field 2',
              options: ['Option1', 'Option2'],
            },
          ],
        },
      ],
    }
    const { getByRole } = render(<DynamicForm configuration={configuration} />)
    console.log(getByRole('textbox', { name: /field 1/i }))
    expect(getByRole('textbox', { name: /field 1/i })).toBeInTheDocument()
    // configuration.questions.forEach((question) => {
    //   expect(screen.getByText(question.title)).toBeInTheDocument()
    //   question.fields.forEach((field) =>
    //     expect(
    //       screen.getByRole(field.type === 'dropdown' ? 'combobox' : 'textbox', {
    //         name: new RegExp(field.label, 'i'),
    //       }),
    //     ).toBeInTheDocument(),
    //   )
    // })
  })
})
