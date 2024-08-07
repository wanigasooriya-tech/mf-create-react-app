import { ClickCounter } from './ClickCounter'
import PRIMARY_LOGO_SVG from './wani-logo-primary.svg'

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack Starter Template --- {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img
        src={`${process.env.PUBLIC_URL}/wani-logo-primary.png`}
        alt="Wani Logo"
        width="300"
        height="100"
      ></img>
      <img src={PRIMARY_LOGO_SVG} alt="Wani Logo" width="300"></img>
      <ClickCounter />
    </>
  )
}

export default App
