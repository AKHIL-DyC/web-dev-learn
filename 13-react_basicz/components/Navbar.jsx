/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8jkcAXAX273
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link}from "react-router-dom"

export default function Component() {
  return (

    <div
      className="flex h-16 w-full items-center justify-between bg-[#1a1b1e] px-4 md:px-6"
      style={{ display:'flex',justifyContent:'space-between',color: "#f4f4f5", fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500,width:'70vw',gap:'4vw' }}
    >
      <Link to="/"
        className="flex items-center gap-2"
        style={{ color: "#f4f4f5", textDecoration: "none" }}
        prefetch={false}
      >
        <CatIcon className="h-6 w-6" />
        <span>akhildyc</span>
      </Link>
      <div style={{display:"flex",justifyContent:"space-between",width:'10vw'}}>
        <Link to="#"
          className="hover:underline hover:underline-offset-4"
          style={{ color: "#f4f4f5", textDecoration: "none" }}
          prefetch={false}
        >
          Theory
        </Link>
        <Link to="/propdrilling"
          className="hover:underline hover:underline-offset-4"
          style={{ color: "#f4f4f5", textDecoration: "none" }}
          prefetch={false}
        >
          propdrilling
        </Link>
        <Link to="/recoil"
          className="hover:underline hover:underline-offset-4"
          style={{ color: "#f4f4f5", textDecoration: "none" }}
          prefetch={false}
        >
          recoil
        </Link>
      </div>
    </div>
  )
}

function CatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}