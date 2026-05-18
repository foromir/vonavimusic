import React, { useMemo } from 'react';

export function useContactsModal() {
  return useMemo(
    () => ({
      title: 'Contact',
      body: (
        <React.Fragment>
          MANAGEMENT
          <br />
          <br />
          Reza Davoudi
          <br />
          <a className="mailto" href="mailto:reza@nineteen95.com">
            reza@nineteen95.com
          </a>
          <br />
          nineteen95 management
          <br />
          847 Lexington Ave
          <br />
          NY, USA
          <br />
          +1 323 649 3207
          <br />
          <br />
        </React.Fragment>
      ),
    }),
    []
  );
}
