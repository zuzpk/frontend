"use client"
import Done from '@/app/done';
import { API_URL, APP_NAME } from '@/config';
import Style from '@/ui';
import { useStore } from '@zuzjs/store';
import { Box, Button, css, Form, FORMVALIDATION, Input, Password, Text, TRANSITION_CURVES, TRANSITIONS, useMounted } from '@zuzjs/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

const Update = (props) => {

    const mounted = useMounted()
    const anim = useMemo(() => ({
        transition: TRANSITIONS.SlideInTop,
        curve: TRANSITION_CURVES.Spring,
        when: mounted,
        duration: 0.5
    }), [mounted])
    const { token } = useStore(`app`)
    const router = useRouter();
    const [ done, setDone ] = useState(null)

    const onSuccess = (resp) => {
        setDone(resp.name)
    }

    useEffect(() => {
        if ( !token ){
            router.push(`/u/recover?resend=2`)
        }
    }, [])

    return <Box as={`minH:calc[100vh - 150px] flex aic jcc`}>
        { done ? <Done
            type={`success`}
            title={`Good Job, ${done}`} 
            message={`Your password is updated. Go Sign in`} /> 
        : <Form 
            name={`recoverupdate`}
            action={`${API_URL}u/recover-update`}
            onSuccess={onSuccess}
            errors={{
                passw: `New Password is required`,
                repassw: `Passwords do not match`
            }}
            withData={{ token }}
            as={`flex aic jcc cols w:400 gap:12`}>
            
            <Text animate={{ ...anim, delay: 0.1 }} as={`s:30 b:900 mb:30`}>New Password</Text>

            <Password name={`passw`} as={Style.Input} placeholder={`New Password`} animate={{ ...anim, delay: 0.2 }} required />
            <Password name={`repassw`} as={Style.Input} placeholder={`Repeat Password`} animate={{ ...anim, delay: 0.2 }} required with={`match@passw`} />

            <Button type={`submit`} as={`${Style.Button} mt:25`} animate={{ ...anim, delay: 0.35 }}>Continue</Button>

        </Form>}
    </Box>
}

export default Update