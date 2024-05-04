import Link from 'next/link'
import { Button } from 'actify'
import Logo from '@/components/Logo'
import { config } from '@/lib/config'
import { ArrowRight, Github, HelpCircle } from 'lucide-react'

export const generateMetadata = () => {
  return {
    title: `${config.metadata.title} — 🌻React Tailwind CSS Material Design 3 Components Library`
  }
}

export default function Home() {
  return (
    <main className="col-start-1 col-end-3 bg-surface/75">
      <div className="flex flex-col gap-4 pt-2">
        <div className="mx-auto w-80 max-sm:w-40">
          <Logo />
        </div>
        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold ">
          React Material Design 3 Components Library
        </p>
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <Link href="/getting-started/installation" tabIndex={-1}>
            <Button className="sm:before:content-['Get']">
              Started
              <ArrowRight />
            </Button>
          </Link>
          <Link href="/getting-started/why-actify" tabIndex={-1}>
            <Button color="secondary" className="sm:after:content-['Actify']">
              <HelpCircle />
              Why
            </Button>
          </Link>
          <Button
            target="_blank"
            variant="outlined"
            href="https://github.com/actifyjs/actify"
          >
            <Github />
            GitHub
          </Button>
        </div>
      </div>
    </main>
  )
}
