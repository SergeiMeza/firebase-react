import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, UserCredential, signInWithEmailAndPassword } from 'firebase/auth'

export default function useSignInWithEmailAndPassword(
  auth: Auth,
): readonly [
  (email: string, password: string) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true)
      try {
        const credential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        )
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_signInWithEmailAndPassword, credential, loading, error] as const
}
