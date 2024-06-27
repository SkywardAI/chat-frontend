export function emailRule(input:string) {
    return (
        /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        .test(input) || "Email address invalid!"
    )
}

export function notEmptyRule(input:string) {
    return !!input || "This field shouldn't left empty!";
}

export function testRules(rules:Array<Function>, input:string) {
    for(const rule of rules) {
        // looks silly but the rules might return string or false, so have to equals true XD
        if(rule(input) !== true) return false;
    }
    return true;
}