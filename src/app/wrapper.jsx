"use client"
import { useEffect, useMemo } from "react"
// import { Provider } from "@zuzjs/store"
import { Box } from "@zuzjs/ui";
import "@zuzjs/ui/styles";
import Header from "./header";
import createStore from "@zuzjs/store";

const Wrapper = ({ children }) => {

  useEffect(() => {
        
  }, []);

  return <Main children={children} />

}

const Main = ({ children }) => {

  const { Provider } = createStore(`app`, {
    version: 1.1,
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
    </UserProvider>
  </Provider>


}

export default Wrapper