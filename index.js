var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
let clientName = 'FNBRChris-RPC'
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Code FNBRChris",
assets : {
large_image : "code_fnbrchris",
large_text : "USING CODE FNBRChris"
},
buttons : [{label : "Affilate Referal" , url : "https://store.epicgames.com/fnbrchris/fortnite"},{label : "Twitter",url : "https://twitter.com/FNBRChris"}]
}
})
})
client.on('ready', () => {
    console.log(`${clientName} is Online!`)
})
client.login({ clientId : "814144442461323345" }).catch(console.error);