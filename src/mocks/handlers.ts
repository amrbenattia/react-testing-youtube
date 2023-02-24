import { rest } from 'msw'
const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Amr Attia' },
        { name: 'Khadiga Amr' },
        { name: 'Ahmed Amr' },
      ])
    )
  }),
]
export default handlers
