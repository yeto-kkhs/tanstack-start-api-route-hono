import {
  createStartAPIHandler,
  defaultAPIFileRouteHandler,
} from '@tanstack/react-start/api'
import { app } from './hono'

export default createStartAPIHandler(({request}) => app.fetch(request))
