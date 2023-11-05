import { Button } from 'actify'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-grow items-center justify-center">
      <div className="rounded-lg bg-surface p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p>Oops! The page you are looking for could not be found.</p>
        <Link to="/">
          <Button>Go back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
