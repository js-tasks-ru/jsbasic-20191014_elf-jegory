// --By Egor Nazarovich--
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
  friends.map(friend => {
    let liAver = document.createElement('li');
    liAver.innerHTML = `${friend.firstName} ${friend.lastName}`;
    ul.append(liAver);
  });
  return ul;
}