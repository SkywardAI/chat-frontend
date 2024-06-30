import request from "./request";

async function getVersions(ofEnd:'frontend'|'backend') {
    if(ofEnd === 'frontend') {
        return useRuntimeConfig().public.FRONTEND_APP_VERSION
    } else if(ofEnd === 'backend') {
        return (await request('/version')).version
    }
}

export default getVersions;