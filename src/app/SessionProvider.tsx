
'use client';

import { SessionProvider as Provider } from 'next-auth/react';
import { Session } from 'next-auth';

type Props = {
    children: React.ReactNode;
    session?: Session | null;
}

const ClientSessionProvider = ({ children, session }: Props) => {
    return (
        <Provider>
            {children}
        </Provider>
    );
}

export default ClientSessionProvider;
