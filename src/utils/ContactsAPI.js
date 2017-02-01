var firebase = require ('firebase');

  var config = {
    //Place FireBase Config Here
  };
  firebase.initializeApp(config);


export default {
	getContacts: () => {
		return new Promise((resolve, reject) => {			
			firebase.database().ref('users').once('value')
				.then((dataSnapshot) => {
					let users = [];
					dataSnapshot.forEach(childSnapshot => {
						users.push(childSnapshot.val());
					})
					resolve(users);
				})
				.catch(err => console.log(err))
		});
	},
	saveContact: (contact) => {
		return new Promise((resolve, reject) => {
			firebase.database().ref('users/'+contact.id).set(contact);
		});
	},
	deleteContact: (id) => {
		return new Promise((resolve, reject) => {
			firebase.database().ref('users/'+id).remove()
				.then(() => {
					resolve();
				})
				.catch(err => console.log(err))
		});
	}
}