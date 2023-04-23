import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import ElectronVersions from '../src/components/ElectronVersions';

vi.mock('#preload', () => {
  return {
    versions: {lib1: 1, lib2: 2},
  };
});

test('ElectronVersions component', async () => {
  expect(ElectronVersions).toBeTruthy();

  render(React.createElement(ElectronVersions));

  const rows = screen.getAllByRole('row');
  expect(rows.length).toBe(2);

  expect(within(rows[0]).getByRole('rowheader').textContent).toBe('lib1 :');
  expect(within(rows[0]).getByRole('cell').textContent).toBe('1');

  expect(within(rows[1]).getByRole('rowheader').textContent).toBe('lib2 :');
  expect(within(rows[1]).getByRole('cell').textContent).toBe('2');
});
