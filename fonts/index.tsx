import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* Heading */
      @font-face {
        font-family: 'RammettoOne';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./one/RammettoOne-Regular.ttf');
      }
      `}
  />
)

export default Fonts