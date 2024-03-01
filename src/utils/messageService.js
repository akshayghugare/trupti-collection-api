
const testSID = 'AC365e14e1b1281c40ee4912ba496c3843';
const testAuth = '824e15c0a53e1298753f928ae837cc28';

const SID = process.env.TWILIO_SID;
const auth = process.env.TWILIO_AUTH;
const FROM = process.env.TWILIO_FROM; 
const accountSid = SID;
const authToken = auth;
const client = require('twilio')(accountSid, authToken);
/* SM85dc38356a8bc5b73d66c7e6ff9d468d ,SM177621957095df9e9c8ff1a4bae9fa36 */
const sendMsg = (messageBody) => {
    console.log("|||| SEND SMS ||||");
    client.messages.create(messageBody).then(message =>
        console.log("sendMsg ::::>",message.sid)
        /* TODO : add to db */
    ).catch((err) => console.log("error",err));
}

const signUpOtpMessage = ({ to, countryCode, smsBody }) => {
    try {
        console.log('to',to,'countryCode',`+${countryCode}`,'smsBody',smsBody)
        let messageBody = { body: smsBody, from: FROM, to: `+${countryCode}${to}` };
        sendMsg(messageBody);
    } catch (error) {
        console.log("SMS error",error.message);
    }
}
const welcomePhiliEvent = ({ to, countryCode, smsBody }) => {
    try {
        console.log('to',to,'countryCode',`+${countryCode}`,'smsBody',smsBody)
        let messageBody = { body: smsBody, from: FROM, to: `+${countryCode}${to}` };
        sendMsg(messageBody);
    } catch (error) {
        console.log("SMS error",error.message);
    }
}

module.exports = {
    signUpOtpMessage,
    welcomePhiliEvent
};