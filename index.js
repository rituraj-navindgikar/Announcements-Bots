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
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();


const { B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12, B13, B14, B15, B16, B17, B18, B19, B20, B21, B22,
    B23, B24, B25, B26, B27, B28, B29, B30, B31, B32, B33, B34, B35, B36, B37, B38, B39, B40 } = require('./Tokens')

const { t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22,
    t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40 } = require('./Time')

const { log, filterOutNums, arrayIsEmpty } = require('./Functions')        

const PREFIX = '!'

var membersArray, total_with_role, context, contextresult, role;
let SIGNAL = false

const clientArray = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, 
    client11, client12, client13, client14, client15, client16, client17, client18, client19, client20, client21, 
    client22, client23, client24, client25, client26, client27, client28, client29, client30, client31, client32,
    client33, client34, client35, client36, client37, client38, client39, client40 ]

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
    if(!message.member.hasPermission('ADMINISTRATOR'))return;

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
let executed21 = false
let executed22 = false
let executed23 = false
let executed24 = false
let executed25 = false
let executed26 = false
let executed27 = false
let executed28 = false
let executed29 = false
let executed30 = false
let executed31 = false
let executed32 = false
let executed33 = false
let executed34 = false
let executed35 = false
let executed36 = false
let executed37 = false
let executed38 = false
let executed39 = false
let executed40 = false

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

            }, t1);
    }
})
client2.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed2){
        executed2 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client2.user.username}** ready!`)
        }, 1250);
        
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

            }, t2);
    }
})
client3.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed3){
        executed3 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client3.user.username}** ready!`)
        }, 1500);
        
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

            },t3);
    }
})
client4.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed4){
        executed4 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client4.user.username}** ready!`)
        }, 1750);
        
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

            }, t4);
    }
})
client5.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed5){
        executed5 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client5.user.username}** ready!`)
        }, 2000);
        
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

            }, t5);
    }
})
client6.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed6){
        executed6 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client6.user.username}** ready!`)
        }, 2250);
        
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

            }, t6);
    }
})
client7.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed7){
        executed7 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client7.user.username}** ready!`)
        }, 2500);
        
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

            }, t7);
    }
})
client8.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed8){
        executed8 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client8.user.username}** ready!`)
        }, 2750);
        
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

            }, t8);
    }
})
client9.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed9){
        executed9 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client9.user.username}** ready!`)
        }, 3000);
        
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

            }, t9);
    }
})
client10.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed10){
        executed10 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client10.user.username}** ready!`)
        }, 3250);
        
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

            }, t10);
    }
})
client11.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed11){
        executed11 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client11.user.username}** ready!`)
        }, 3500);
        
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

            }, t11);
    }
})
client12.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed12){
        executed12 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client12.user.username}** ready!`)
        }, 3750);
        
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

            }, t12);
    }
})
client13.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed13){
        executed13 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client13.user.username}** ready!`)
        }, 4000);
        
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

            }, t13);
    }
})
client14.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed14){
        executed14 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client14.user.username}** ready!`)
        }, 4250);
        
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

            }, t14);
    }
})
client15.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed15){
        executed15 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client15.user.username}** ready!`)
        }, 4500);
        
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

            }, t15);
    }
})
client16.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed16){
        executed16 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client16.user.username}** ready!`)
        }, 4750);
        
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

            }, t16);
    }
})
client17.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed17){
        executed17 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client17.user.username}** ready!`)
        }, 5000);
        
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

            }, t17);
    }
})
client18.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed18){
        executed18 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client18.user.username}** ready!`)
        }, 5250);
        
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

            }, t18);
    }
})
client19.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed19){
        executed19 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client19.user.username}** ready!`)
        }, 5500);
        
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

            }, t19);
    }
})
client20.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed20){
        executed20 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client20.user.username}** ready!`)
        }, 5750);
        
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

            }, t20);
    }
})
client21.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed21){
        executed21 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client21.user.username}** ready!`)
        }, 6000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed21 = false
                SIGNAL = false
                console.log("21 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client21.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 21 "+member_id + ' sending')

            }, t21);
    }
})
client22.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed22){
        executed22 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client22.user.username}** ready!`)
        }, 6250);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed22 = false
                SIGNAL = false
                console.log("21 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client22.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 22 "+member_id + ' sending')

            }, t22);
    }
})
client23.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed23){
        executed23 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client23.user.username}** ready!`)
        }, 6500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed23 = false
                SIGNAL = false
                console.log("23 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client23.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 23 "+member_id + ' sending')

            }, t23);
    }
})
client24.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed24){
        executed24 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client24.user.username}** ready!`)
        }, 6750);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed24 = false
                SIGNAL = false
                console.log("24 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client24.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 24 "+member_id + ' sending')

            }, t24);
    }
})
client25.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed25){
        executed25 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client25.user.username}** ready!`)
        }, 7000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed25 = false
                SIGNAL = false
                console.log("25 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client25.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 25 "+member_id + ' sending')

            }, t25);
    }
})
client26.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed26){
        executed26 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client26.user.username}** ready!`)
        }, 7250);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed26 = false
                SIGNAL = false
                console.log("26 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client26.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 26 "+member_id + ' sending')

            }, t26);
    }
})
client27.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed27){
        executed27 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client27.user.username}** ready!`)
        }, 7500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed27 = false
                SIGNAL = false
                console.log("27 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client27.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 27 "+member_id + ' sending')

            }, t27);
    }
})
client28.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed28){
        executed28 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client28.user.username}** ready!`)
        }, 7750);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed28 = false
                SIGNAL = false
                console.log("28 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client28.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 28 "+member_id + ' sending')

            }, t28);
    }
})
client29.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed29){
        executed29 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client29.user.username}** ready!`)
        }, 8000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed29 = false
                SIGNAL = false
                console.log("29 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client29.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 29 "+member_id + ' sending')

            }, t29);
    }
})
client30.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed30){
        executed30 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client30.user.username}** ready!`)
        }, 8250);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed30 = false
                SIGNAL = false
                console.log("30 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client30.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 30 "+member_id + ' sending')

            }, t30);
    }
})
client31.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed31){
        executed31 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client31.user.username}** ready!`)
        }, 8500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed31 = false
                SIGNAL = false
                console.log("31 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client31.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 31 "+member_id + ' sending')

            }, t31);
    }
})
client32.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed32){
        executed32 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client32.user.username}** ready!`)
        }, 8500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed32 = false
                SIGNAL = false
                console.log("32 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client32.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 32 "+member_id + ' sending')

            }, t32);
    }
})
client33.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed33){
        executed33 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client33.user.username}** ready!`)
        }, 8750);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed33 = false
                SIGNAL = false
                console.log("33 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client33.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 33 "+member_id + ' sending')

            }, t33);
    }
})
client34.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed34){
        executed34 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client34.user.username}** ready!`)
        }, 9000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed34 = false
                SIGNAL = false
                console.log("34 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client34.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 34 "+member_id + ' sending')

            }, t34);
    }
})
client35.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed35){
        executed35 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client35.user.username}** ready!`)
        }, 9250);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed35 = false
                SIGNAL = false
                console.log("35 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client35.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 35 "+member_id + ' sending')

            }, t35);
    }
})
client36.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed36){
        executed36 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client36.user.username}** ready!`)
        }, 9500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed36 = false
                SIGNAL = false
                console.log("36 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client36.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 36 "+member_id + ' sending')

            }, t36);
    }
})
client37.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed37){
        executed37 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client37.user.username}** ready!`)
        }, 9750);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed37 = false
                SIGNAL = false
                console.log("37 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client37.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 37 "+member_id + ' sending')

            }, t37);
    }
})
client38.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed38){
        executed38 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client38.user.username}** ready!`)
        }, 10000);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed38 = false
                SIGNAL = false
                console.log("38 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client38.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 38 "+member_id + ' sending')

            }, t38);
    }
})
client39.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed39){
        executed39 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client39.user.username}** ready!`)
        }, 10250);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed39 = false
                SIGNAL = false
                console.log("39 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client39.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 39 "+member_id + ' sending')

            }, t39);
    }
})
client40.on('message', message => {
    if(message.type == 'DM')return
    if(SIGNAL && !executed40){
        executed40 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client40.user.username}** ready!`)
        }, 10500);
        
        let interval = setInterval(() => {  
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed40 = false
                SIGNAL = false
                console.log("40 work done")
                return
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client40.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'))
                })
                console.log("Bot 40 "+member_id + ' sending')

            }, t40);
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
client21.login(B21)
client22.login(B22)
client23.login(B23)
client24.login(B24)
client25.login(B25)
client26.login(B26)
client27.login(B27)
client28.login(B28)
client29.login(B29)
client30.login(B30)
client31.login(B31)
client32.login(B32)
client33.login(B33)
client34.login(B34)
client35.login(B35)
client36.login(B36)
client37.login(B37)
client38.login(B38)
client39.login(B39)
client40.login(B40)
/*
<a:blacktick:836509943313072168>
https://cdn.discordapp.com/app-icons/881264750976200705/5e359aa5ccc9d472e5a7741e531cd7c6.png?size=256
*/        
