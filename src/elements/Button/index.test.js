import React from 'react'
import { render } from '@testing-library/react'
import Button from '.'

test('should not allowed click', () => {
  const {container } = render(<Button isDisabled></Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
})
test('should not allowed click', () => {
  const {container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument();
})
