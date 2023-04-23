import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import ReactiveHash from '../src/components/ReactiveHash';

vi.mock('#preload', () => {
  return {
    sha256sum: vi.fn((s: string) => `${s}:HASHED`),
  };
});

test('ReactiveHash component', async () => {
  expect(ReactiveHash).toBeTruthy();

  const { container } = render(React.createElement(ReactiveHash));

  const dataInput = container.querySelector('input:not([readonly])') as HTMLInputElement;
  const hashInput = container.querySelector('input[readonly]') as HTMLInputElement;

  const dataToHashed = Math.random().toString(36).slice(2, 7);
  fireEvent.change(dataInput, {target: {value: dataToHashed}});
  expect(hashInput.value).toBe(`${dataToHashed}:HASHED`);
});
