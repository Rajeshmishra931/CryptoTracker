import React, { Children, createContext } from 'react'

const Crypto = createContext()

const CryptoContext = ({Children}) => {
  return (
    <Crypto.Provider>{Children}</Crypto.Provider>
  )
}

export default CryptoContext;