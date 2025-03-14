import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'
import fastify from 'fastify'

export const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
