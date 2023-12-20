import React from 'react'
import { X, Search, ChevronDown } from 'lucide-react'

interface Props {
  className?: string
}

export const CloseIcon: React.FC<Props> = ({ className }) => {
  return <X className={className} />
}

export const ChevronIcon: React.FC<Props> = ({ className }) => {
  return <ChevronDown className={className} />
}

export const SearchIcon: React.FC<Props> = ({ className }) => {
  return <Search className={className} />
}
