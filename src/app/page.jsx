"use client"
import { Box, Button, Text, TextWheel } from "@zuzjs/ui"
import { APP_NAME, APP_VERSION } from "@/config"
import { useEffect, useState } from "react"
import { useStore } from "@zuzjs/store"

const Page = () => {

  const { version, dispatch } = useStore(`app`)

  const [ _version, setVersion ] = useState(`v0.0.0`)


  useEffect(() => {
    document.title = APP_NAME
    setTimeout(() => setVersion(`v${version}`), 200)
  }, [])

  return <Box as={`dashboard p:25 flex aic jcc w:100vw h:100vh cols abs abc`}>
    <Text as={`flex s:50 b:900`}>ZuzJS Boilerplate</Text>
    <Text as={`flex s:30`}>built with @zuzjs/ui</Text>
    <TextWheel value={_version} as={`flex s:50 b:900 mt:25`} />
  </Box>
}

export default Page