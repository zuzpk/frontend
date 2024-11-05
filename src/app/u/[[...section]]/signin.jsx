import { APP_NAME } from '@/config';
import Style from '@/ui';
import { Button, css, Form, FORMVALIDATION, Input, Password, Text } from '@zuzjs/ui';
import Link from 'next/link';
import React, { useEffect, useMemo } from 'react';

const Signin = ({ anim }) => {

    useEffect(() => {}, [])

    return <Form 
        name={`signin`}
        action={`/@/u/signin`}
        errors={{
            em: `Valid email is required`,
            passw: `Password is required`,
        }}
        as={`flex aic jcc cols w:400 gap:12`}>
        
        <Text animate={{ ...anim, delay: 0.1 }} as={`s:30 b:900 mb:30`}>Signin to {APP_NAME}</Text>

        <Input name={`em`} as={Style.Input} placeholder={`Email`} animate={{ ...anim, delay: 0.1 }} required with={FORMVALIDATION.Email} />
        <Password name={`passw`} as={Style.Input} placeholder={`Password`} animate={{ ...anim, delay: 0.2 }} required />
        
        <Button type={`submit`} as={`${Style.Btn} mt:25`} animate={{ ...anim, delay: 0.35 }}>Sign in</Button>

        <Text as={`mt:35`} animate={{ ...anim, delay: 0.4 }}><Link className={css(`${Style.Link} bold`)} href={`/u/recover`}>Forgot Password?</Link></Text>
        <Text animate={{ ...anim, delay: 0.45 }}>New here? <Link className={css(`${Style.Link} bold`)} href={`/u/signup`}>Create account</Link></Text>

    </Form>
}

export default Signin;