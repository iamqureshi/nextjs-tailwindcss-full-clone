import Image from "next/image";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className="container md:max-w-5xl">
      <div className="navbar py-6 px-4 md:px-0 flex justify-between">
        <Link href="/">
          <div className="logo flex items-center space-x-2 hover:cursor-pointer">
            <Image
              src={"/assets/logo.svg"}
              width={30}
              height={30}
              alt="logo.svg"
            />
            <h1 className="text-xl font-bold">Next Tails</h1>
          </div>
        </Link>
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="hidden md:flex ul-li items-center space-x-12">
          <ul className="flex space-x-8 font-medium text-lg">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <button className="bg-primary hover:bg-primary-dark font-bold text-xl text-white px-4 py-1.5 rounded-md">
            Get Template
          </button>
        </div>
      </div>

      <div className="py-28 flex flex-col md:flex-row md:justify-between ">
        <div className="left text-sm md:text-5xl font-bold text-left md:w-5/12">
          <div className="herTitle font-extrabold text-center md:text-left ">
            <h1 className="text-3xl md:text-5xl">
              The ultimate starter templates for your project{" "}
              <span className="text-primary font-bold">
                Save months of coding time.
              </span>
            </h1>
            <p className="text-lg md:text-xl font-medium pt-8">
              Build beautiful websites using the latest and greatest front end
              tools. Save yourself months of headache by starting with optimized
              & production ready templates.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 py-6">
            <button className="bg-primary text-lg md:text-1xl px-4 py-2 rounded-md text-white hover:bg-primary-dark">
              Get Started
            </button>
            <button className="bg-white text-lg md:text-1xl px-4 py-2 rounded-md border border-primary hover:bg-slate-200 text-primary">
              Contact us
            </button>
          </div>
        </div>
        <div className="right hidden md:block">
          <Image
            className="rounded-xl"
            width={570}
            height={570}
            src={"/assets/man_with_laptop.jpeg"}
            alt="logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
