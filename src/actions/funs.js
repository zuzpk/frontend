import { SESS_KEYS, SESS_PREFIX } from "@/config"
import Cookies from "js-cookie"

export const oauth = () => {
    const __ = {}
    for( const k of SESS_KEYS ){
        const ck = Cookies.get(`${SESS_PREFIX}${k}`)
        if ( ck ) __[k] = ck            
    }

    if ( Object.keys(__).length == SESS_KEYS.length ){
        __.ud = Cookies.get(`${SESS_PREFIX}ud`)
        try{
            return JSON.parse(__.ud)
        }catch(e){
            return { ID: null }        
        }
    }
    return { ID: null }
}