import React from 'react';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { GrUserAdmin } from "react-icons/gr";

const ActiveIcon: React.FC = async () => {
    const session = await auth();

    // Render the admin icon link if the user is authenticated
    if (session) {
        return (
            <div className='admin-icon'>
                <Link href="/addpost">
                    <GrUserAdmin />
                </Link>
            </div>
        );
    }

    // Optionally, render something else or nothing if the user is not authenticated
    return null;
};

export default ActiveIcon;
