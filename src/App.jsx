import React from 'react'
import { DynamicForm } from './DynamicForm'
import { getForm } from './getForm'

export default function App() {
  const formConfiguration = getForm()

  return (
    <DynamicForm
      configuration={{
        questions: [
          {
            title: 'Question 1',
            fields: [{ name: 'field1', type: 'text', label: 'Field 1' }],
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
      }}
      onSubmit={(values) => console.log(values)}
    />
  )
}
