// cSpell:ignore esversion vercel bitstream
/*jshint esversion: 6 */

import Link from 'next/link'

export default function FirstPost() {
    // return <h1>First Post</h1>

    return (
        <>
        <h1>First Post</h1>
        <h2>
            <p>Back to 
            <Link href="/">
                <a>Home</a>
            </Link>
            .</p>
        </h2>
        </>
    )

}