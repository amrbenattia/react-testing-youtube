import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import CounterTwo from './CounterTwo'

describe('counter two', () => {
  it('render correct', () => {
    render(<CounterTwo count={0} />)
    expect(screen.getByText(/counter two/i)).toBeInTheDocument()
    const handleIncrement = screen.queryByRole('button', { name: 'Increment' })
    expect(handleIncrement).not.toBeInTheDocument()
    const handleDecrement = screen.queryByRole('button', { name: 'Decrement' })
    expect(handleDecrement).not.toBeInTheDocument()
  })

  it('handlers are called', async () => {
    user.setup()
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    )
    expect(screen.getByText(/counter two/i)).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    expect(decrementButton).toBeInTheDocument()

    await user.click(incrementButton)
    await user.click(decrementButton)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
