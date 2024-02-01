const os = require('os');

// os.uptime()
const systemUptime = os.uptime();

// os.userInfo()
const userInfo = os.userInfo();

// We will store some other information about my WindowsOS in this object:
// os.type() - Tells the name of the Operating System
// os.release() - Tells the release version of the Operating System
// os.totalMem() - Tells the total amount of memory available in bytes
// os.freeMem() - Tells the total amount of free memory available in bytes
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

// Let's Check The Results:
console.log(systemUptime);
console.log(userInfo);
console.log(otherInfo);