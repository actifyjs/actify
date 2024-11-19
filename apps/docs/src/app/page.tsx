import { Icon, LinkButton } from 'actify'

import Link from 'next/link'
import Logo from '@/components/Logo'
import Sponsors from '@/components/Sponsors'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

export const generateMetadata = () => {
  return {
    title: 'Actify — 🌻React Material Design 3 Components Library'
  }
}

export default function Page() {
  return (
    <main className="col-start-1 col-end-3 bg-surface">
      <div className="flex flex-col gap-4 pt-2">
        <div className="mx-auto w-40 sm:w-60">
          <Logo />
        </div>
        <p className="text-center text-secondary text-2xl md:text-3xl lg:text-4xl font-extrabold ">
          React Material Design 3 Components Library
        </p>
        <div className="flex flex-col sm:flex-row p-4 sm:p-0 items-center justify-center gap-4">
          <Link
            tabIndex={-1}
            className="max-sm:w-full"
            href="/getting-started/installation"
          >
            <LinkButton
              variant="filled"
              className="max-sm:w-full flex justify-center"
            >
              Get Started
              <Icon>arrow_forward</Icon>
            </LinkButton>
          </Link>
          <Link
            tabIndex={-1}
            className="max-sm:w-full text-center"
            href="/getting-started/why-actify"
          >
            <LinkButton
              variant="tonal"
              className="max-sm:w-full flex justify-center"
            >
              <Icon>help</Icon>
              Why Actify
            </LinkButton>
          </Link>
          <a
            tabIndex={-1}
            target="_blank"
            className="max-sm:w-full"
            href="https://github.com/actifyjs/actify"
          >
            <LinkButton
              variant="outlined"
              className="max-sm:w-full flex justify-center"
            >
              <Icon>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
              </Icon>
              GitHub
            </LinkButton>
          </a>
        </div>
        <div className="w-full max-w-md mx-auto">
          <SyntaxHighlighter lang="shell">pnpm add actify</SyntaxHighlighter>
        </div>
        <Sponsors />
      </div>
    </main>
  )
}
