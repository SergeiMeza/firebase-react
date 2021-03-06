import { FirebaseError } from 'firebase/app';
import { Auth, UserCredential } from 'firebase/auth';
export default function useSignInWithCustomToken(auth: Auth): readonly [
    (customToken: string) => Promise<void>,
    UserCredential | undefined,
    boolean,
    FirebaseError | undefined
];
