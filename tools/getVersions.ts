import { FRONTEND_APP_VERSION } from "~/types/version";
import request from "./request";

async function getVersions(ofEnd:'frontend'|'backend') {
    if(ofEnd === 'frontend') {
        return FRONTEND_APP_VERSION;        
    } else if(ofEnd === 'backend') {
        return (await request('/version')).version
    }
}

export default getVersions;