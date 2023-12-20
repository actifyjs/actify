import React from 'react'
import { CircularProgress } from '@actify/CircularProgress'

interface Props {}

const Spinner: React.FC<Props> = () => {
  return <CircularProgress indeterminate size="xs" className="w-5 h-5 mr-0.5" />
}

export default Spinner
