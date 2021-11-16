import React from 'react'

interface Props {
  symbol: any
  label: string
}

const Emojis: React.FC<Props> = ({ symbol, label }: Props) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}

export default Emojis
