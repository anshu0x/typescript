//  it is used to set constraint values 
var AuthMethod;
(function (AuthMethod) {
    AuthMethod["push"] = "Push";
    AuthMethod["sms"] = "SMS";
    AuthMethod["voice"] = "Voice";
})(AuthMethod || (AuthMethod = {}));
function fetchData(data) {
    return data;
}
console.log(fetchData(AuthMethod.push));
