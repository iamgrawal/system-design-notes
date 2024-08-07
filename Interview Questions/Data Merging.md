# Data Merging

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

314 completed

A data set of gym sessions looks like this:

[

  { user: 8, duration: 50, equipment: ['bench'] },

  { user: 7, duration: 150, equipment: ['dumbbell'] },

  { user: 1, duration: 10, equipment: ['barbell'] },

  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },

  { user: 7, duration: 200, equipment: ['bike'] },

  { user: 2, duration: 200, equipment: ['treadmill'] },

  { user: 2, duration: 200, equipment: ['bike'] },

];

Each session has the following fields:

- `user`: User ID of the session's user.
- `duration`: Duration of the session, in minutes.
- `equipment`: Array of equipment used during the sessions, in alphabetical order. There are only 5 different equipments.

Implement a method `mergeData`, which is used to return a unified view of each user's activities by merging data from each user. It has the interface `mergeData(sessions)`. Sessions from the same `user` should be merged into one object. When merging:

- Sum up the `duration` fields.
- Combine all the `equipment` used, de-duplicating the values and sorting alphabetically.

The order of the results should always remain unchanged from the original set, and in the case of merging sessions with the same users, the row should take the place of the **earliest** occurrence of that `user`. The input objects should not be modified.

## Examples

The following example uses the data set above:

mergeData(sessions);

// [

//   { user: 8, duration: 50, equipment: ['bench'] },

//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },

//   { user: 1, duration: 10, equipment: ['barbell'] },

//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },

// ];

Data of user 7 and user 2 are merged into the first occurrence of that user.

# Similar Questions

- [Unique Array](https://www.greatfrontend.com/questions/javascript/unique-array)
    
    Difficulty
    
    Easy
    
- [Data Selection](https://www.greatfrontend.com/questions/javascript/data-selection)
    
    Difficulty
    
    Hard