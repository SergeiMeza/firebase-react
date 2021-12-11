import { FirebaseError } from 'firebase/app';
import { AuthProvider, User, UserCredential } from 'firebase/auth';
export default function useLinkWithPopup(): readonly [
    (user: User, provider: AuthProvider) => Promise<void>,
    UserCredential | undefined,
    boolean,
    FirebaseError | undefined
];
