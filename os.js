const os=require('os');

//current user info
const user=os.userInfo();
console.log(user);

//system return in seconds
console.log(`The system uptime ${os.uptime()} seconds`);