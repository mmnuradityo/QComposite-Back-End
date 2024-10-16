const appIDRaw = "adV123SDf-Hasfim%43";

const agentRawEmail = "agent@mail.com";
const spvRawEmail = "spv@mail.com";
const adminRawEmail = "admin@mail.com";

const passwordRaw = "12Axe#$i"

const getName = (email) => {
    if (email === adminRawEmail) return "dobleh";
    else if (email === agentRawEmail) return "jamal";
    else return "kaboer";
}

const getAccountType = (email) => {
    if (email === adminRawEmail) return 1;
    else if (email === agentRawEmail) return 2;
    else return 3;
}

const validate = (email, password, appID) => {
    if (password !== passwordRaw) {
        console.log("password validate" + password)
        return false;
    }
    if (email === adminRawEmail) {
        console.log("admin validate")
        return true;
    } else if (email === agentRawEmail || email === spvRawEmail) {
        console.log(email + "validate")
        return appID !== null && appID === appIDRaw
    }

    return false;
}

const getUser = (email) => {
        return {
            email: email,
            name: getName(email),
            appID: appIDRaw,
            type: getAccountType(email),
            token: "Ab23$56tHG-+24=7&909sdFGTH!"
       };
}

module.exports = { getUser, validate };
