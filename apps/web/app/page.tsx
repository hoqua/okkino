import { gql } from '../data-access/graphq-client'

export default async function Page() {
  const { users } = await gql.GetUsers()

  return users.map((user) => (
    <figure key={user.id} className="m-6 rounded-xl bg-slate-100 p-8 text-white dark:bg-slate-800">
      <img
        className="mx-auto h-24 w-24 rounded-full"
        src={`https://i.pravatar.cc/150?u=${user.id}`}
        alt=""
        width="384"
        height="512"
      />
      <div className="space-y-4 pt-6">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I&apos;ve seen scale on large teams. It’s easy
            to customize, adapts to any design, and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>{user.id}</div>
          <div>{user.email}</div>
        </figcaption>
      </div>
    </figure>
  ))
}
