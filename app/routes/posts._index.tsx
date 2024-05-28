import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Posts</h1>
      <ul className="flex">
        {posts.map((post) => (
          <Link to={post.slug} key={post.slug}>
            <li className="border-2 border-green-100 bg-slate-200 m-3 p-4">
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
