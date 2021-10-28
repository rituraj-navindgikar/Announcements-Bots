function log(i) {
    setTimeout(function() {
        console.log(`MTBxAnnouncement${i+1} is Online!`)
    }, 250 * i);
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
module.exports = { log, arrayIsEmpty, filterOutNums}