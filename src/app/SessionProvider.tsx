'use client'

import { SessionProvider as Provider } from 'next-auth/react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

const SessionProvider = ({ children }: Props) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}
export default SessionProvider
