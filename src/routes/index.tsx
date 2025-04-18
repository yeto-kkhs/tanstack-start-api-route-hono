import { Await, createFileRoute } from '@tanstack/react-router'
import { client } from '~/hono'

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {
    const helloHono = await client.api.hello.$get().then((res) => res.json())
    const helloTanstack = client.api.hello[':name'].$get({ param: { name: "TanStack Start" }}).then((res) => res.json())
    return {
      hono: helloHono,
      tanstack: helloTanstack,
    }
  }
})

function Home() {
  const {hono, tanstack} = Route.useLoaderData()
  return (
    <div className="p-2">
      <p>{hono.message}</p>
      <Await promise={tanstack} fallback={<p>loading...</p>} children={({message}) => <p>{message}</p>} />
    </div>
  )
}
