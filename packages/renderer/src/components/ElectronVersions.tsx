import { versions } from '#preload';

import '/@/components/ElectronVersions.scss';


export default function ElectronVersions() {
  return (
    <>
      <table id="process-versions" role="table">
        {
          Object.entries(versions).map(([ lib, version ]) => (
            <tr key={lib} role="row">
              <th role="rowheader">{ lib } :</th>
              <td role="cell">{ version }</td>
            </tr>
          ))
        }
      </table>
      <code>packages/renderer/src/components/ElectronVersions.tsx</code>
    </>
  );
}
