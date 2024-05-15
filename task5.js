/*  Завдання - 5:
 
Виведіть на екран властивості first та last з вкладеного об'єкта name. 
Змініть значення властивості balance на '$2000'.
Видаліть властивість email.
Виведіть на екран весь зміст об'єкта за допомогою кода console.log(user) */

let user = {
    balance: '$1,250.89',
    age: 24,
    name: {
        first: 'Golden',
        last: 'Clements'
    },
    company: 'EWAVES',
    email: 'golden.clements@ewaves.io',
    friends: [
        {
            id: 0,
            name: 'Buchanan Austin'
        },
        {
            id: 1,
            name: 'Richmond Garrison'
        },
        {
            id: 2,
            name: 'Burns Cook'
        },
        {
            id: 3,
            name: 'Sally Mcpherson'
        }
    ],
    favoriteFruit: 'strawberry',

    // Method to return full name
    fullName: function () { 
        return `User name is: ${this.name.first} ${this.name.last}`;
    },
    //Method to update balance
    setBalance: function (newBalance) {  
        return this.balance = newBalance 
    },
    // Method to delete key in object 
    deleteByKey: function (key) {   
        if (key in this) {
            if (typeof this[key] === 'function') {   
                console.log(`Key "${key}" is a function of Object, and can't be deleted`);
            } else {
                delete this[key];    // Delete key in Object
                console.log(`Key "${key}" was successfully deleted`);  
            }
        } else {
            console.log('Key is missing');  
        }
    }
   
}

// Log the user's full name
console.log(user.fullName());

// Change the balance value to '$2000'
user.setBalance("$2000");

// Delete the 'email' key
user.deleteByKey('email');

// Log the updated user object
console.log(user);



