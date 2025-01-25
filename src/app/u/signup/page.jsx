"use client"
import { API_URL, APP_NAME } from '@/config';
import Style from '@/ui';
import { useStore } from '@zuzjs/store';
import { Box, Button, Form, FORMVALIDATION, Input, Password, Size, Text, TRANSITION_CURVES, TRANSITIONS, useMounted } from '@zuzjs/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

const Signup = (props) => {

    const mounted = useMounted()
    const anim = useMemo(() => ({
        transition: TRANSITIONS.SlideInTop,
        curve: TRANSITION_CURVES.Spring,
        when: mounted,
        duration: 0.5
    }), [mounted])
    const { dispatch } = useStore(`user`)
    const router = useRouter();

    const onSuccess = (resp) => {

        if ( resp.u ){
            for( const key in resp.u ){
                Cookies.set(`${SESS_PREFIX}${key}`, `${`string` == typeof resp.u[key] ? resp.u[key] : JSON.stringify(resp.u[key])}`, { expires: 90 })
            }
            dispatch({ ...resp.u.ud }).then(() => router.push(`/apps?v=${Date.now()}`))
        }
        else{
            router.push(`/u/verify/${resp.token}/${encodeURIComponent(resp.email)}`)
        }
    }

    useEffect(() => {
        document.title = `Sign Up`
    }, [])

    return <Box as={`minH:calc[100vh - 70px] flex aic jcc`}>
        <Form 
            name={`signup`}
            action={`/@/u/signup`}
            onSuccess={onSuccess}
            errors={{
                nm: `Name is required`,
                em: `Valid email is required`,
                passw: `Password is required`,
                repassw: `Passwords do not match`
            }}
            as={`flex aic jcc cols w:400 gap:12`}>
            
            <Text animate={{ ...anim, delay: 0.1 }} as={`s:30 b:900 mb:30`}>Sign up for {APP_NAME}</Text>

            <Input size={Size.Small} name={`nm`} placeholder={`Name`} animate={anim} required />
            <Input size={Size.Small} name={`em`} placeholder={`Email`} animate={{ ...anim, delay: 0.1 }} required with={FORMVALIDATION.Email} />
            <Password size={Size.Small} name={`passw`} placeholder={`Password`} animate={{ ...anim, delay: 0.2 }} required />
            <Password size={Size.Small} name={`repassw`} placeholder={`Repeat Password`} animate={{ ...anim, delay: 0.3 }} required with={`match@passw`} />

            <Button size={Size.Small} type={`submit`} as={`w:100%! mt:25`} animate={{ ...anim, delay: 0.35 }}>Create Account</Button>

            <Text as={`mv:35`} animate={{ ...anim, delay: 0.4 }}>By clicking "Create account", you agree to the <Link className={Style.Link} href={`/help/terms`}>{APP_NAME} TOS</Link> and <Link className={Style.Link} href={`/help/privacy`}>Privacy Policy.</Link></Text>
            <Text animate={{ ...anim, delay: 0.45 }}>Already have an account? <Link className={Style.Link} href={`/u/signin`}>Sign in here</Link></Text>

        </Form>
    </Box>
}

export default Signup;