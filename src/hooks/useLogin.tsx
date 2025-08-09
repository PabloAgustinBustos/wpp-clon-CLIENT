import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

type Data = {
  username: string
  password: string
}

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const login = async (inputs: Data) => {
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(inputs)
      })

      const data = await res.json()

      if(!res.ok) throw new Error(data.error)

      setAuthUser(data)

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { loading, login }
}

export default useLogin