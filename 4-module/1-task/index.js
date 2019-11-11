let friends = [
    {
        firstName: 'Artsiom',
        lastName: 'Mezin'
    },
    {
        firstName: 'Ilia',
        lastName: 'Kantor'
    },
    {
        firstName: 'Christopher',
        lastName: 'Michael'
    }
]; 

function makeFriendsList(friends) {
let ul = document.createElement('ul');
document.body.append(ul);

return friends.map(friend => {
let liAver = document.createElement('li');
liAver.innerHTML = `$(friend.firstName) '/n' $(friend.lastName)`;
return ul.append(liAver);
})

}
makeFriendsList(friends);

console.log(makeFriendsList(friends));