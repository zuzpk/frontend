"use client"
import { Box, Heading } from "@zuzjs/ui"
import { ADMIN_EMAIL } from "@/config"

const Error = ( { code, message }, ref ) => {

    return (
        <Box as={`app-error flex cols aic jcc abs abc c:777`}>
            <Heading as={`s:50 b:900`}>{code || `ta'da`}</Heading>
            <Heading as={`${code == 404 ? `s:24` : `s:30`} ${code == 404 ? `b:900` : ``}`}>{message || `it's not you, it's us`}</Heading>
            {!code && <Heading as={`mt:20 s:18`}>we're experiencing an internal server problem.</Heading>}
            {!code && <Heading as={`s:18`}>please try again in few or contact <b>{ADMIN_EMAIL}</b></Heading>}
        </Box>
    )

}

export default Error