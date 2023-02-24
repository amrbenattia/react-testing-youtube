import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  it('render component', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toBeInTheDocument()
    const buttonElement = screen.getByRole('button', { name: /increment/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('initial count is zero', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  it('increment to 1 after click increment button', async () => {
    user.setup()
    render(<Counter />)
    const buttonElement = screen.getByRole('button', { name: /increment/i })
    await user.click(buttonElement)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
    await user.click(buttonElement)
    expect(countElement).toHaveTextContent('2')
  })

  it('increment to 2 after double click increment button', async () => {
    user.setup()
    render(<Counter />)
    const buttonElement = screen.getByRole('button', { name: /increment/i })
    await user.dblClick(buttonElement)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('2')
  })

  it('set count to 10 after Set button is clicked', async () => {
    user.setup()
    render(<Counter />)
    const amountElement = screen.getByRole('spinbutton')
    await user.type(amountElement, '10')
    expect(amountElement).toHaveValue(10)
    const setButton = screen.getByRole('button', { name: /Set/i })
    await user.click(setButton)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toHaveTextContent('10')
  })

  it('focus elements in the right order', async () => {
    user.setup()
    render(<Counter />)
    const incrementElement = screen.getByRole('button', { name: /increment/i })
    const amountElement = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: /Set/i })
    await user.tab()
    expect(incrementElement).toHaveFocus()
    await user.tab()
    expect(amountElement).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })

  it('test multiple selection', async () => {
    user.setup()
    render(<Counter />)
    const selectJobs = screen.getByRole('listbox', { name: 'Job location' })
    await user.selectOptions(selectJobs, ['Canada', 'India'])
    expect(
      (screen.getByRole('option', { name: 'Canada' }) as HTMLOptionElement)
        .selected
    ).toBeTruthy()
    expect(
      (screen.getByRole('option', { name: 'India' }) as HTMLOptionElement)
        .selected
    ).toBe(true)

    await user.deselectOptions(selectJobs, ['Canada'])
    expect(
      (screen.getByRole('option', { name: 'Canada' }) as HTMLOptionElement)
        .selected
    ).toBe(false)
    expect(
      (
        screen.getByRole('option', {
          name: 'Australia',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false)
  })

  it('test upload a file', async () => {
    user.setup()
    render(<Counter />)
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    const uploadFileButton = screen.getByLabelText(/upload file/i)
    await user.upload(uploadFileButton, file)
    expect((uploadFileButton as HTMLInputElement).files?.item(0)).toBe(file)
    expect((uploadFileButton as HTMLInputElement).files).toHaveLength(1)
  })
})
