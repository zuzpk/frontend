"use client"
import { Box, TRANSITION_CURVES, TRANSITIONS, useMounted } from '@zuzjs/ui';
import { useParams } from 'next/navigation';
import React from 'react';
import Signup from './signup';
import Signin from './signin';
import Recover from './recover';

const Page = (props) => {

    const { section } = useParams()
    const mounted = useMounted(10)
    const anim = {
        transition: TRANSITIONS.SlideInTop,
        curve: TRANSITION_CURVES.Spring,
        when: mounted,
        duration: 0.5
    }

    return <Box as={`minH:calc[100vh - 70px] flex aic jcc`}>
        {section == `signin` && <Signin anim={anim} />}
        {section == `signup` && <Signup anim={anim} />}
        {section == `recover` && <Recover anim={anim} />}
    </Box>
}

export default Page;