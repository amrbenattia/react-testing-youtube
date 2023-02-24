import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Application from './Application'

describe('application', () => {
  it('should render correctly', () => {
    render(<Application />)
    // header1 by role
    const hearder1Element = screen.getByRole('heading', {
      level: 1,
    })
    expect(hearder1Element).toBeInTheDocument()
    // header2 by role
    const hearder2Element = screen.getByRole('heading', {
      level: 2,
    })
    expect(hearder2Element).toBeInTheDocument()
    // paragraph getbytext match full text
    const pElement = screen.getByText('All fields are mandatory')
    expect(pElement).toBeInTheDocument()
    // paragraph getbytext match substring text
    const p1Element = screen.getByText(' fields are mandat', { exact: false })
    expect(p1Element).toBeInTheDocument()
    // paragraph getbytext match ignore case
    const p2Element = screen.getByText('all fields are mandatory', {
      exact: false,
    })
    expect(p2Element).toBeInTheDocument()
    // paragraph getbytext match regexp substring
    const p3Element = screen.getByText(/lds are man/)
    expect(p3Element).toBeInTheDocument()
    // paragraph getbytext match regexp substring, ignorecase
    const p4Element = screen.getByText(/all F/i)
    expect(p4Element).toBeInTheDocument()
    // paragraph getbytext match regexp full string, ignorecase
    const p5Element = screen.getByText(/^all fields are mandatory$/i)
    expect(p5Element).toBeInTheDocument()
    // paragraph getbytext match by a function
    const p6Element = screen.getByText((text) => text.startsWith('All '))
    expect(p6Element).toBeInTheDocument()
    // span by title
    const spanElement = screen.getByTitle('close')
    expect(spanElement).toBeInTheDocument()
    // image by alt
    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()
    // div by testId
    const divElement = screen.getByTestId('custom-element')
    expect(divElement).toBeInTheDocument()
    // name by role
    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()
    // name by label
    const name2Element = screen.getByLabelText('Name')
    expect(name2Element).toBeInTheDocument()

    // name by placeholder
    const name3Element = screen.getByPlaceholderText('Fullname')
    expect(name3Element).toBeInTheDocument()
    // name by value
    const name4Element = screen.getByDisplayValue('Vishwas')
    expect(name4Element).toBeInTheDocument()
    // bio by role
    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()
    // job by role
    const selectJobs = screen.getByRole('combobox', { name: 'Job location' })
    expect(selectJobs).toBeInTheDocument()

    // checkbox by role
    const termElement = screen.getByRole('checkbox', {
      name: 'I agree to the terms and conditions',
    })
    expect(termElement).toBeInTheDocument()
    // checkbox by label
    const term2Element = screen.getByLabelText(
      'I agree to the terms and conditions',
      { selector: 'input' }
    )
    expect(term2Element).toBeInTheDocument()
    // textarea with selector as it share same label as checkbox input
    const term3Element = screen.getByLabelText(
      'I agree to the terms and conditions',
      { selector: 'textarea' }
    )
    expect(term3Element).toBeInTheDocument()
    const submitButton = screen.getByRole('button', { name: 'Submit' })
    expect(submitButton).toBeInTheDocument()

    expect(submitButton).toBeDisabled()
  })

  it('test selected option from dropdown menu', async () => {
    user.setup()
    render(<Application />)
    const selectJobs = screen.getByRole('combobox', { name: 'Job location' })
    await user.selectOptions(selectJobs, 'Canada')
    expect(
      (screen.getByRole('option', { name: 'Canada' }) as HTMLOptionElement)
        .selected
    ).toBe(true)
  })
})
