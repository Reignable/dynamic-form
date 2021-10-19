import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DynamicForm } from './DynamicForm'
import faker from 'faker'

const testFormConfiguration = {
  questions: [
    {
      title: 'Tell us about yourself',
      fields: [
        { name: 'first_name', label: 'First Name', type: 'text' },
        { name: 'last_name', label: 'Last Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'text' },
        { name: 'phone_number', label: 'Phone Number', type: 'text' },
      ],
    },
    {
      title: 'Where do you live?',
      fields: [
        { name: 'street_address', label: 'Street Address', type: 'text' },
        { name: 'post_code', label: 'Post Code', type: 'text' },
        {
          name: 'country',
          label: 'Country',
          type: 'dropdown',
          options: ['Canada', 'USA'],
        },
      ],
    },
  ],
}

describe(`<DynamicForm />`, () => {
  it('Renders a form based on the provided configuration', () => {
    render(<DynamicForm configuration={testFormConfiguration} />)
    testFormConfiguration.questions.forEach((question) => {
      expect(screen.getByText(question.title)).toBeInTheDocument()
      question.fields.forEach((field) => {
        expect(
          screen.getByRole(field.type === 'dropdown' ? 'combobox' : 'textbox', {
            name: new RegExp(field.label, 'i'),
          }),
        ).toBeInTheDocument()
        if (field.type === 'dropdown') {
          field.options.forEach((option) =>
            expect(
              screen.getByRole('option', { name: option }),
            ).toBeInTheDocument(),
          )
        }
      })
    })
  })

  it('Calls onSubmit with the form values when submitted', async () => {
    const onSubmit = jest.fn()
    const testData = {
      country: 'USA',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      post_code: faker.address.zipCode(),
      street_address: faker.address.streetAddress(),
    }
    render(
      <DynamicForm configuration={testFormConfiguration} onSubmit={onSubmit} />,
    )
    userEvent.type(
      screen.getByRole('textbox', { name: /first name/i }),
      testData.first_name,
    )
    userEvent.type(
      screen.getByRole('textbox', { name: /last name/i }),
      testData.last_name,
    )
    userEvent.type(
      screen.getByRole('textbox', { name: /email/i }),
      testData.email,
    )
    userEvent.type(
      screen.getByRole('textbox', { name: /phone number/i }),
      testData.phone_number,
    )
    userEvent.type(
      screen.getByRole('textbox', { name: /street address/i }),
      testData.street_address,
    )
    userEvent.type(
      screen.getByRole('textbox', { name: /post code/i }),
      testData.post_code,
    )
    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /country/i }),
      'USA',
    )
    userEvent.click(screen.getByRole('button', { name: /submit/i }))
    await waitFor(() => expect(onSubmit).toBeCalledWith(testData))
  })
})
