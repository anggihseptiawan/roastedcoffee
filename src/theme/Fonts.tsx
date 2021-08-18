import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* Heading */
      @font-face {
        font-family: 'Rammetto One';
        font-style: normal;
        font-display: swap;
        src: url('../../assets/fonts/one/RammettoOne-Regular.ttf');
      }
      `}
  />
);

export default Fonts;
