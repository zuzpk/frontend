import { APP_NAME } from '@/config';
import Style from '@/ui';
import { Button, Form, FORMVALIDATION, Input, Password, Text } from '@zuzjs/ui';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Signup = ({ anim }) => {

    useEffect(() => {}, [])

    return <Form 
        name={`signup`}
        action={`/@/u/signup`}
        errors={{
            nm: `Name is required`,
            em: `Valid email is required`,
            passw: `Password is required`,
            repassw: `Passwords do not match`
        }}
        as={`flex aic jcc cols w:400 gap:12`}>
        
        <Text animate={{ ...anim, delay: 0.1 }} as={`s:30 b:900 mb:30`}>Sign up for {APP_NAME}</Text>

        <Input name={`nm`} as={Style.Input} placeholder={`Name`} animate={anim} required />
        <Input name={`em`} as={Style.Input} placeholder={`Email`} animate={{ ...anim, delay: 0.1 }} required with={FORMVALIDATION.Email} />
        <Password name={`passw`} as={Style.Input} placeholder={`Password`} animate={{ ...anim, delay: 0.2 }} required />
        <Password name={`repassw`} as={Style.Input} placeholder={`Repeat Password`} animate={{ ...anim, delay: 0.3 }} required with={`match@passw`} />

        <Button type={`submit`} as={`${Style.Btn} mt:25`} animate={{ ...anim, delay: 0.35 }}>Create Account</Button>

        <Text as={`mv:35`} animate={{ ...anim, delay: 0.4 }}>By clicking "Create account", you agree to the <Link className={Style.Link} href={`/help/terms`}>{APP_NAME} TOS</Link> and <Link className={Style.Link} href={`/help/privacy`}>Privacy Policy.</Link></Text>
        <Text animate={{ ...anim, delay: 0.45 }}>Already have an account? <Link className={Style.Link} href={`/u/signin`}>Sign in here</Link></Text>

    </Form>
}

export default Signup;