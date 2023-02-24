import { render, screen } from '@testing-library/react'
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import Skills from './skill'

describe('Skills', () => {
  const skills = ['html', 'javascript', 'css']

  it('render without crashing', () => {
    const div = document.createElement('div')
    const view = <Skills skills={skills} />
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      createRoot(div).render(view)
    })
  })

  it('render correctly', () => {
    render(<Skills skills={skills} />)
    const ulList = screen.getByRole('list')
    expect(ulList).toBeInTheDocument()
  })

  it('render list items', () => {
    render(<Skills skills={skills} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(skills.length)
  })

  it('render Login Button', () => {
    render(<Skills skills={skills} />)
    const loginbutton = screen.getByRole('button', { name: 'Login' })
    expect(loginbutton).toBeInTheDocument()
  })
  // since the element is not accessable by the dom so use queryByRole
  it('not render start learning Button', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  // start learning button appears after 1500 milliseconds so use findByRole that return a promise
  // also since promise is rejected after by default 1000ms passed so need to settime to more than 1500ms
  it('start learning Button rendered finally', async () => {
    // const view = render(<Skills skills={skills} />);
    render(<Skills skills={skills} />)
    // print roles for debug
    // logRoles(view.container);
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      { timeout: 2000 }
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})
