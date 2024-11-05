"use client"
import { Box, Button, Text } from "@zuzjs/ui"
import { APP_NAME, APP_VERSION } from "@/config"
import { useEffect } from "react"
import { useStore } from "@zuzjs/store"

const Page = () => {

  const { version, dispatch } = useStore(`app`)

  useEffect(() => {
    document.title = APP_NAME
  }, [])

  return <Box as={`dashboard p:25 flex aic jcc w:100vw h:100vh cols abs abc`}>
    <Text as={`flex s:120 b:900`}>ZuzCMS</Text>
    <Text as={`flex s:40`}>ZuzJS Boilerplate</Text>
    <Text as={`flex s:50 b:900 mt:25`}>v{version}</Text>
  </Box>
}

export default Page