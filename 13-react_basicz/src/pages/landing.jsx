/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nZrUV9QaydH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from "react-router-dom"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-secondary">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Learn React Basics
          </h1>
          <p className="max-w-[700px] text-primary-foreground/90 md:text-xl/relaxed">
            Dive into the fundamentals of React and build your first web application.
          </p>
          <Link to="/rerender"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          
          >
            Learn Now
          </Link>
        </div>
      </div>
    </section>
  )
}