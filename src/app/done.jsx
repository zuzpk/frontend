import { Box, Icon, Text, TRANSITION_CURVES, TRANSITIONS, useMounted } from '@zuzjs/ui';
import React from 'react';

const Done = ({ type, title, message, action }) => {

    const mounted = useMounted()
    
    return <Box as={`w:500 p:20 r:$radius flex aic jcc cols`}>
        <Icon 
            name={type == `error` ? `lamp-on` : `emoji-happy`} 
            as={[
                `s:50 mb:25`,
                `${type == `error` ? `c:$red-800` : `c:$green-700`}`
            ]} 
            animate={{
                transition: TRANSITIONS.SlideInTop,
                curve: TRANSITION_CURVES.Bounce,
                duration: .5,
                when: mounted
            }} />
        <Text 
            as={`s:24 bold`}
            animate={{
                transition: TRANSITIONS.SlideInBottom,
                curve: TRANSITION_CURVES.Bounce,
                duration: .5,
                delay: 0.1,
                when: mounted
            }}>{title || `Good Job`}</Text>
        <Text 
            as={`s:16`}
            animate={{
                transition: TRANSITIONS.SlideInBottom,
                curve: TRANSITION_CURVES.Bounce,
                duration: .5,
                delay: 0.2,
                when: mounted
            }}>{message || `That was easy. You did it :)`}</Text>
    </Box>
}

export default Done;