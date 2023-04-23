import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import ReactiveCounter from '../src/components/ReactiveCounter';

test('ReactiveHash component', async () => {
  expect(ReactiveCounter).toBeTruthy();

  render(React.createElement(ReactiveCounter));

  const button = screen.getByRole('button');

  expect(button.textContent).toBe('count is: 0');
  fireEvent.click(button);
  expect(button.textContent).toBe('count is: 1');
});
