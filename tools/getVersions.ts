import { FRONTEND_APP_VERSION } from "~/types/version";

async function getVersions(ofEnd:'frontend'|'backend') {
    if(ofEnd === 'frontend') {
        return FRONTEND_APP_VERSION;        
    } else {
        // TODO: call backend api to get version
    }
}

export default getVersions;