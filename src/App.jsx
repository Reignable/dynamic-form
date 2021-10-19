import React from 'react'
import { DynamicForm } from './DynamicForm'
import { getForm } from './getForm'

export default function App() {
  const formConfiguration = getForm()

  return (
    <DynamicForm
      configuration={formConfiguration}
      onSubmit={(values) => console.log(values)}
    />
  )
}
