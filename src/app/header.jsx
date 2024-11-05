import { APP_NAME } from '@/config';
import { Box, Button, css, Image, Text, useMounted } from '@zuzjs/ui';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = (props) => {

    const mounted = useMounted()

    useEffect(() => {
        
    }, [])

    return (
        <Box as={[
            `header flex aic p:40,5vw rel zIndex:99 &ph(p:20) h:70`,
        ]}>
            <Box as={`&hover(p:10) &ph(p:10 &hover(p:20)) teamp`} />
            <Box as={`nav flex aic flex:1 gap:20`}>
                {[
                    { label: `Home`, href: `/` },
                    { label: `Components`, href: `/comps` },
                ].map(n => <Link key={`nav-${n.label.replace(/\s+/g, `-`).toLowerCase()}`} href={n.href} className={css(`tdn s:15 bold`)}>{n.label}</Link>)}
            </Box>
            <Box as={`logo flex aic jcc flex:1`}>
                <Box as={`logo rel w:40 h:40 r:50 bg:$primary overflow:hidden flex aic jcc`} animate={{
                    from: { opacity: 0, scale: 0, rotate: 45 },
                    to: { opacity: 1, scale: 1, rotate: 0 },
                    duration: .5,
                    when: mounted,
                    curve: `spring`,
                }}>
                    <Image src="/imgs/logo.png" alt={APP_NAME} as={`w:45`} />
                </Box>
            </Box>            
            <Box as={`you flex aic jce flex:1 gap:20`}>
                <Link href={`/u/signup`} className={css(`tdn btn link s:15 bold &hover(tdu)`)}>Create Account</Link>
                <Link href={`/u/signin`} className={css(`tdn btn link s:15 bold &hover(tdu)`)}>Sign in</Link>
            </Box>
        </Box>
    );
}

export default Header;