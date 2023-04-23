import { sha256sum } from '#preload';
import { useState, useMemo } from 'react';

import '/@/components/ReactiveHash.scss';


export default function ReactiveHash() {
  const [ rawString, setRawString ] = useState('Hello World');
  const hashedString = useMemo(() => sha256sum(rawString), [rawString]);

  return (
    <>
      <table role="table">
        <tr role="row">
          <th role="rowheader">
            <label htmlFor="reactive-hash-raw-value">Raw value :</label>
          </th>
          <td role="cell">
            <input
              id="reactive-hash-raw-value"
              type="text"
              value={rawString}
              onChange={(e) => setRawString(e.target.value)}
            />
          </td>
        </tr>
        <tr role="row">
          <th role="rowheader">
            <label htmlFor="reactive-hash-hashed-value">Hashed by node:crypto :</label>
          </th>
          <td role="cell">
            <input
              id="reactive-hash-hashed-value"
              value={hashedString}
              readOnly
              type="text"
            />
          </td>
        </tr>
      </table>
      <code>packages/renderer/src/components/ReactiveHash.tsx</code>
    </>
  );
}
