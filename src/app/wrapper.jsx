"use client"
import { useEffect, useMemo } from "react"
import { Box, CookiesConsent, NetworkStatus, useColorScheme } from "@zuzjs/ui";
import "@zuzjs/ui/styles";
import Header from "./header";
import createStore from "@zuzjs/store";
import { APP_VERSION } from "@/config";

const Wrapper = ({ children }) => {

  const { colorScheme } = useColorScheme()
  
  useEffect(() => {
    
    document.body.classList.remove(`dark`, `light`)
    document.body.classList.add(colorScheme)

  }, []);

  return <Main children={children} />

}

const Main = ({ children }) => {

  const { Provider } = createStore(`app`, {
    version: APP_VERSION,
    debug: true,
    token: null
  })
  const { Provider: UserProvider } = createStore(`user`, {
    loading: true,
    ID: null
  })

  useEffect(() => {


  }, []);

  return <Provider>
    <UserProvider>
      <Box as={`app flex minH:100vh cols`}>
        <Header />
        {children}
      </Box>
      <CookiesConsent />
      <NetworkStatus />
    </UserProvider>
  </Provider>


}

export default Wrapper