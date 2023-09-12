import { useEffect } from 'react'

export const useKey = (key, callback) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === key) callback()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [key, callback])
}
