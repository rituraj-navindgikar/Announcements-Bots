const Discord = require('discord.js')

const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();

const { B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16,B17,B18,B19,B20 } = require('./Tokens')

const PREFIX = '!'

var membersArray, total_with_role, context, contextresult, role;
let SIGNAL = false

const clientArray = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12
    , client13, client14, client15, client16, client17, client18, client19, client20 ]

for(var i=0; i<clientArray.length; i++)
{
    log(i);
}

client1.on('message', message => {
    if(message.author.bot) return   
    if(message.type == 'DM')return
    if(!message.content.startsWith(`${PREFIX}massdm`))return
    if(SIGNAL == true){
        message.reply('Pehle previous command hone de bhai... pls rukja DAYA kro!!!')
        return
    }
    if(!message.member.hasPermission('MANAGE_GUILD'))return;

    const args = message.content.slice(PREFIX.length).split(/ +/); 
    context = args.slice(2).join(" ")
    if(!context) return message.channel.send('Type a message to send')

    role = message.mentions.roles.first() 
    if(!role) return message.channel.send('Mention a role')
        
    contextresult = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setDescription(context)
        .setTimestamp()
        .setFooter("From MTB Management Team")

    membersArray = message.guild.roles.cache.get(role.id).members.array();
    total_with_role = membersArray.length
    SIGNAL = true  
    console.log(`${membersArray.length} have that role`)
    message.channel.send(`${membersArray.length} have that role`)
})

let executed1 = false
let executed2 = false
let executed3 = false
let executed4 = false
let executed5 = false
let executed6 = false
let executed7 = false
let executed8 = false
let executed9 = false
let executed10 = false
let executed11 = false
let executed12 = false
let executed13 = false
let executed14 = false
let executed15 = false
let executed16 = false
let executed17 = false
let executed18 = false
let executed19 = false
let executed20 = false
// 1      2       3      4      5      6      7      8      9     10     11     12     13     14     15     16     17     18      19      20
//19000, 23000, 29000, 31000, 37000, 41000, 43000, 47000, 53000, 59000, 61000, 67000, 71000, 73000, 79000, 83000, 89000, 97000, 101000, 103000
client1.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed1){
        executed1 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client1.user.username}** ready!`)
        }, 1000);
        
        let interval = setInterval(() => {     
            if(membersArray.length == 0)
            {
                clearInterval(interval);
                message.channel.send(`Sent your message successfully ${total_with_role}`)
                executed1 = false
                SIGNAL = false
                console.log("1 work done")
                return
            }  
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client1.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 1 "+member_id + ' sending')

            }, 19000);
    }
})
client2.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed2){
        executed2 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client2.user.username}** ready!`)
        }, 1500);
        
        let interval = setInterval(() => { 
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed2 = false
                SIGNAL = false
                console.log("2 work done")
                return
            }       
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client2.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 2 "+member_id + ' sending')

            }, 23000);
    }
})
client3.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed3){
        executed3 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client3.user.username}** ready!`)
        }, 2100);
        
        let interval = setInterval(() => { 
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed3 = false
                SIGNAL = false
                console.log("3 work done")
                return
            }        
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client3.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 3 "+member_id + ' sending')

            },29000);
    }
})
client4.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed4){
        executed4 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client4.user.username}** ready!`)
        }, 2500);
        
        let interval = setInterval(() => {   
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed4 = false
                SIGNAL = false
                console.log("4 work done")
                return
            }      
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client4.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 4 "+member_id + ' sending')

            }, 31000);
    }
})
client5.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed5){
        executed5 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client5.user.username}** ready!`)
        }, 3000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed5 = false
                SIGNAL = false
                console.log("5 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client5.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 5 "+member_id + ' sending')

            }, 37000);
    }
})
client6.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed6){
        executed6 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client6.user.username}** ready!`)
        }, 3500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed6 = false
                SIGNAL = false
                console.log("6 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client6.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 6 "+member_id + ' sending')

            }, 41000);
    }
})
client7.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed7){
        executed7 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client7.user.username}** ready!`)
        }, 4000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed7 = false
                SIGNAL = false
                console.log("7 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client7.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 7 "+member_id + ' sending')

            }, 43000);
    }
})
client8.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed8){
        executed8 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client8.user.username}** ready!`)
        }, 4500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed8 = false
                SIGNAL = false
                console.log("8 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client8.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 8 "+member_id + ' sending')

            }, 47000);
    }
})
client9.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed9){
        executed9 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client9.user.username}** ready!`)
        }, 5000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed9 = false
                SIGNAL = false
                console.log("9 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client9.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 9 "+member_id + ' sending')

            }, 53000);
    }
})
client10.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed10){
        executed10 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client10.user.username}** ready!`)
        }, 5500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed10 = false
                SIGNAL = false
                console.log("10 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client10.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 10 "+member_id + ' sending')

            }, 59000);
    }
})
client11.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed11){
        executed11 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client11.user.username}** ready!`)
        }, 6000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed11 = false
                SIGNAL = false
                console.log("11 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client11.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 11 "+member_id + ' sending')

            }, 61000);
    }
})
client12.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed12){
        executed12 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client12.user.username}** ready!`)
        }, 6500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed12 = false
                SIGNAL = false
                console.log("12 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client12.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 12 "+member_id + ' sending')

            }, 67000);
    }
})
client13.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed13){
        executed13 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client13.user.username}** ready!`)
        }, 7000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed13 = false
                SIGNAL = false
                console.log("13 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client13.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 13 "+member_id + ' sending')

            }, 71000);
    }
})
client14.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed14){
        executed14 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client14.user.username}** ready!`)
        }, 7500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed14 = false
                SIGNAL = false
                console.log("14 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client14.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 14 "+member_id + ' sending')

            }, 73000);
    }
})
client15.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed15){
        executed15 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client15.user.username}** ready!`)
        }, 8000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed15 = false
                SIGNAL = false
                console.log("15 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client15.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 15 "+member_id + ' sending')

            }, 79000);
    }
})
client16.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed16){
        executed16 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client16.user.username}** ready!`)
        }, 8500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed16 = false
                SIGNAL = false
                console.log("16 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client16.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 16 "+member_id + ' sending')

            }, 83000);
    }
})
client17.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed17){
        executed17 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client17.user.username}** ready!`)
        }, 9000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed17 = false
                SIGNAL = false
                console.log("17 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client17.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 17 "+member_id + ' sending')

            }, 89000);
    }
})
client18.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed18){
        executed18 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client18.user.username}** ready!`)
        }, 9500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed18 = false
                SIGNAL = false
                console.log("18 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client18.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 18 "+member_id + ' sending')

            }, 97000);
    }
})
client19.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed19){
        executed19 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client19.user.username}** ready!`)
        }, 10000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed19 = false
                SIGNAL = false
                console.log("19 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client19.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 19 "+member_id + ' sending')

            }, 101000);
    }
})
client20.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed20){
        executed20 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client20.user.username}** ready!`)
        }, 11000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed20 = false
                SIGNAL = false
                console.log("20 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client20.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 20 "+member_id + ' sending')

            }, 103000);
    }
})


client1.login(B1)
client2.login(B2)
client3.login(B3)
client4.login(B4)
client5.login(B5)
client6.login(B6)
client7.login(B7)
client8.login(B8)
client9.login(B9)
client10.login(B10)
client11.login(B11)
client12.login(B12)
client13.login(B13)
client14.login(B14)
client15.login(B15)
client16.login(B16)
client17.login(B17)
client18.login(B18)
client19.login(B19)
client20.login(B20)

function log(i) {
    setTimeout(function() {
        console.log(`MTBxAnnouncement${i+1} is Online!`)
    }, 500 * i);
}

function arrayIsEmpty(array) {
    if(array.length == 0){return true}
    else return false; 
}

function filterOutNums(member){
    let member_id4 = member.replace('<' , '');
    let member_id3 = member_id4.replace('@' , '');
    let member_id2 = member_id3.replace('!' , '');
    let member_id = member_id2.replace('>', '');
    return member_id;
}

/*
1.  https://discord.com/api/oauth2/authorize?client_id=879464376850055248&permissions=8&scope=bot
2.  https://discord.com/api/oauth2/authorize?client_id=879464445921865798&permissions=8&scope=bot
3.  https://discord.com/api/oauth2/authorize?client_id=879464487474851840&permissions=8&scope=bot
4.  https://discord.com/api/oauth2/authorize?client_id=879464517640290346&permissions=8&scope=bot
5.  https://discord.com/api/oauth2/authorize?client_id=879464551714791464&permissions=8&scope=bot
6.  https://discord.com/api/oauth2/authorize?client_id=881264530427101254&permissions=8&scope=bot
7.  https://discord.com/api/oauth2/authorize?client_id=881264586886639637&permissions=8&scope=bot
8.  https://discord.com/api/oauth2/authorize?client_id=881264688116170783&permissions=8&scope=bot
9.  https://discord.com/api/oauth2/authorize?client_id=881264750976200705&permissions=8&scope=bot
10. https://discord.com/api/oauth2/authorize?client_id=881264853635981362&permissions=8&scope=bot
11. https://discord.com/api/oauth2/authorize?client_id=881959579846606949&permissions=8&scope=bot
12. https://discord.com/api/oauth2/authorize?client_id=881960683623817228&permissions=8&scope=bot
13. https://discord.com/api/oauth2/authorize?client_id=881960720584036352&permissions=8&scope=bot
14. https://discord.com/api/oauth2/authorize?client_id=881960778004058173&permissions=8&scope=bot
15. https://discord.com/api/oauth2/authorize?client_id=881960815610187857&permissions=8&scope=bot
16. https://discord.com/api/oauth2/authorize?client_id=881960847788896297&permissions=8&scope=bot
17. https://discord.com/api/oauth2/authorize?client_id=881960900725194783&permissions=8&scope=bot
18. https://discord.com/api/oauth2/authorize?client_id=881961008472686593&permissions=8&scope=bot
19. https://discord.com/api/oauth2/authorize?client_id=881961042526220328&permissions=8&scope=bot
20. https://discord.com/api/oauth2/authorize?client_id=881961077712248922&permissions=8&scope=bot

<a:blacktick:836509943313072168>
*/        
