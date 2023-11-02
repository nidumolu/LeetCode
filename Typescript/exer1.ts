/**
 * @param {number} millis
 * @return {Promise}
 */


async function sleepTS(millis: number): Promise<void> {
    let t = Date.now();
    await new Promise(resolve => setTimeout(()=>console.log(" time is Elapsed is:",Date.now() - t," and current date is", new Date(Date.now()).toDateString()), millis));
    //return new Promise(resolve=> setTimeout(()=>console.log(" time is Elapsed is:",Date.now() - t," and current date is", new Date(Date.now()).toDateString()), millis))
};

let temp1 = sleepTS(200);
//export {};


