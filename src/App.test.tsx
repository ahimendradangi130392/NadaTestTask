import { render, screen } from '@testing-library/react'
import App from './App'

test('check react app description', () => {
  render(<App />)
  const description = screen.getByText(/React App/i)
  expect(description).toBeInTheDocument()
})
