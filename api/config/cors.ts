//let whitelist = ['http://localhost:3000'];
export default {
    // origin: (origin:any, callback:any)=>{
    //     if (whitelist.indexOf(origin) !== -1) {
    //         callback(null, true)
    //     } else {
    //         callback(new Error('Not allowed by CORS'))
    //     }
    // },
    credentials: true,
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
