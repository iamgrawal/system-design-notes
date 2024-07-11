# Get

PremiumCompleted

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

3102 completed

Before the optional chaining operator (`?.`) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

const john = {

  profile: {

    name: { firstName: 'John', lastName: 'Doe' },

    age: 20,

    gender: 'Male',

  },

};

const jane = {

  profile: {

    age: 19,

    gender: 'Female',

  },

};

function getFirstName(user) {

  return user.profile.name.firstName;

}

Doing `getFirstName(john)` works but `getFirstName(jane)` will error because the `name` property doesn't exist for `jane.profile`.

## Lodash's Get method

Lodash's `_.get` method was created as a solution for such use cases.

Let's write our own version as a `get` function. The function gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place. The function signature is as such:

get(object, path, [defaultValue]);

- `object`: The object to query.
- `path`: The path of the property to get. It can be a string with `.` as the separator between fields, or an array of path strings.
- `defaultValue`: Optional parameter. The value returned if the resolved value is `undefined`.

## Examples

get(john, 'profile.name.firstName'); // 'John'

get(john, 'profile.gender'); // 'Male'

get(jane, 'profile.name.firstName'); // undefined

Arrays can also be accessed if numerical indices are provided.

get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3

There's no need to support syntax resembling `get(object, 'a[0].b.c')`.

# Similar Questions

- [Squash Object](https://www.greatfrontend.com/questions/javascript/squash-object)
    
    Difficulty
    
    Medium