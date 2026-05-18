import React, { useMemo } from 'react';

export function useAboutModal() {
  return useMemo(
    () => ({
      title: 'about',
      body: (
        <React.Fragment>
          «VONAVI is a music producer and composer
          <br />
          known for crafting cinematic,
          emotionally charged soundscapes.
          <br />
          <br />
          His music has been featured in
          <br />
          Marvel’s Cloak and Dagger
          and How to Get Away With Murder,
          <br />
          showcasing his talent for blending
          atmosphere with storytelling.
          <br />
          <br />
          With a signature style that is both
          immersive and introspective,
          <br />
          VONAVI creates music that resonates
          deeply with listeners.»
        </React.Fragment>
      ),
    }),
    []
  );
}
