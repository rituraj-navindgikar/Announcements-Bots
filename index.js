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

const { B1,B2,B3,B4,B5,B6,B7,B8,B9,B10 } = require('./Tokens')

const PREFIX = '!'

var membersArray, total_with_role, context, contextresult, role;
let SIGNAL = false

const clientArray = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]

for(var i=0; i<clientArray.length; i++)
{
    log(i);
}

client1.on('message', message => {
    if(message.author.bot) return   
    if(message.type == 'DM')return
    if(!message.content.startsWith(`${PREFIX}massdm`))return

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

client1.on('message', message => {

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
            }  
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client1.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 1 "+member_id + ' sending')

            }, 30000);
    }
})
client2.on('message', message => {

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
            }       
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client2.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 2 "+member_id + ' sending')

            }, 33000);
    }
})
client3.on('message', message => {

    if(SIGNAL && !executed3){
        executed3 = true
        setTimeout(() => {
            message.channel.send(`<a:blacktick:836509943313072168> **${client3.user.username}** ready!`)
        }, 2000);
        
        let interval = setInterval(() => { 
            if(membersArray.length == 0)
            {
                clearInterval(interval)
                executed3 = false
                SIGNAL = false
                console.log("3 work done")
            }        
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client3.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 3 "+member_id + ' sending')

            }, 35000);
    }
})
client4.on('message', message => {

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
            }      
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client4.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 4 "+member_id + ' sending')

            }, 37000);
    }
})
client5.on('message', message => {

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
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client5.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 5 "+member_id + ' sending')

            }, 39000);
    }
})
client6.on('message', message => {

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
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client6.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 6 "+member_id + ' sending')

            }, 41000);
    }
})
client7.on('message', message => {

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
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client7.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 7 "+member_id + ' sending')

            }, 43000);
    }
})
client8.on('message', message => {

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
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client8.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 8 "+member_id + ' sending')

            }, 45000);
    }
})
client9.on('message', message => {

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
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client9.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 9 "+member_id + ' sending')

            }, 47000);
    }
})
client10.on('message', message => {

    if(SIGNAL && !executed10){
        executed9 = true
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
            }         
            let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
            let member_id = filterOutNums(member)

            client10.users.fetch(member_id, false).then((user) =>{
                user.send(contextresult).catch(() =>
                message.channel.send('member <@'+member_id+'> not received'));
                })
                console.log("Bot 10 "+member_id + ' sending')

            }, 49000);
    }
})

client1.login(B1)
client2.login(B2)
client3.login(B3)
client4.login(B4)
client5.login(B5)

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
<a:blacktick:836509943313072168>
*/        
