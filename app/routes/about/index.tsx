import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    about: [
      {
        test: "life is good!",
      },
    ],
  });
};

export default function About() {
  const { about } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1 className="text-4xl">test</h1>
      <ul>
        {about.map((each) => (
          <li key={each.test}>{each.test}</li>
        ))}
      </ul>
    </main>
  );
}
