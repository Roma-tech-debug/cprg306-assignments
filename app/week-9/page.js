'use client';

import { useEffect } from "react";
import { useUserAuth } from "./utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

 
    useEffect(() => {
        if (!user) {
            gitHubSignIn(); 
        }
    }, [user, gitHubSignIn]); 

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={firebaseSignOut}>Sign out</button>

                    <div>
                        <Link href="/app/week-9/shopping-list" className="text-orange-200 hover:underline">
                           Your Shopping List
                        </Link>
                    </div>
                </>
            ) : (
                <button onClick={gitHubSignIn}>Sign In GitHub</button>
            )}
        </div>
    );
}
