import { oauth } from '@/actions/funs';
import { API_URL, APP_NAME, SESS_KEYS, SESS_PREFIX } from '@/config';
import { useStore } from '@zuzjs/store';
import { Box, Button, Cover, css, Image, Sheet, Size, Spinner, Text, useMounted, withPost } from '@zuzjs/ui';
import Cookies from 'js-cookie';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const Header = (props) => {

    const mounted = useMounted()
    const me = useStore(`user`)
    const [ signOut, setSignout ] = useState(false)
    const toast = useRef()

    const u = useCallback(() => {
        const _me = oauth()
        if ( _me.ID ){
            me.dispatch({ loading: false, ..._me })
        }
        else{
            me.dispatch({ loading: false })
            console.log(`not logged in`)
        }
    }, [])

    const signMeOut = () => {
        me.dispatch({ loading: true })
        withPost( `${API_URL}u/signout` )
        .then(resp => {
            me.dispatch({ loading: false, ID: null })
            for( const key in SESS_KEYS ){
                Cookies.remove(`${SESS_PREFIX}${key}`)
            }
            setSignout(false)
            toast.current.success(resp.message || `Signed out successfully`)
        })
        .catch(err => {
            me.dispatch({ loading: false })
            toast.current.error(err.message || `Failed to sign out`)
        })

    }

    useEffect(() => {
        u()
    }, [])

    return (
        <>
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
                    <Image src="/imgs/zuz-logo.png" alt={APP_NAME} as={`w:45`} />
                </Box>
            </Box>            
            <Box as={`you flex aic jce flex:1 gap:20`}>
                { me.loading ? <Spinner size={Size.Small} /> : me.ID ? <>
                    <Text as={`s:15 bold`}>Hi, {me.nm}</Text>
                    <Button onClick={signMeOut} as={`tdn btn link s:15 bold &hover(tdu)`}>Sign out</Button>
                </> : <>
                    <Link href={`/u/signup`} className={css(`tdn btn link s:15 bold &hover(tdu)`)}>Create Account</Link>
                    <Link href={`/u/signin`} className={css(`tdn btn link s:15 bold &hover(tdu)`)}>Sign in</Link>
                </>}
            </Box>
        </Box>
        <Sheet ref={toast} />
        </>
    );
}

export default Header;