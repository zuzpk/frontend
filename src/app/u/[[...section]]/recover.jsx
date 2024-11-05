import { APP_NAME } from '@/config';
import Style from '@/ui';
import { Button, css, Form, FORMVALIDATION, Input, Text } from '@zuzjs/ui';
import Link from 'next/link';
import React, { useEffect, useMemo } from 'react';

const Recover = ({ anim }) => {

    useEffect(() => {}, [])

    return <Form 
        name={`recover`}
        action={`/@/u/recover`}
        errors={{
            em: `Valid email is required`,
        }}
        as={`flex aic jcc cols w:400 gap:12`}>
        
        <Text animate={{ ...anim, delay: 0.1 }} as={`s:30 b:900 mb:30`}>Recover {APP_NAME} Account</Text>

        <Input name={`em`} as={Style.Input} placeholder={`Email`} animate={{ ...anim, delay: 0.1 }} required with={FORMVALIDATION.Email} />
        
        <Button type={`submit`} as={`${Style.Btn} mt:25`} animate={{ ...anim, delay: 0.35 }}>Continue</Button>

        <Text as={`mt:35`} animate={{ ...anim, delay: 0.45 }}>Already have an account? <Link className={css(`${Style.Link} bold`)} href={`/u/signin`}>Sign in here</Link></Text>
        <Text animate={{ ...anim, delay: 0.45 }}>New here? <Link className={css(`${Style.Link} bold`)} href={`/u/signup`}>Create account</Link></Text>

    </Form>
}

export default Recover