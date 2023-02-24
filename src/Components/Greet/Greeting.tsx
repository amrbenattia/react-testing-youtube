import { greet } from './Greet.types'

const Greeting = ({ name }: greet) => {
  return <div>Hello {name ? name : 'guest'}</div>
}

export default Greeting
