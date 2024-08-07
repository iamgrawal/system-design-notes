# Data Selection

Premium

Languages

JSTS

Difficulty

Hard

Recommended duration to spend during interviews

30 mins

Users completed

375 completed

A data set of gym sessions looks like this:

[

  { user: 8, duration: 50, equipment: ['bench'] },

  { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },

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

Implement a method `selectData`, which is used to return sessions from the data. It has the interface `selectData(sessions [, options])`. The options available should include:

- `user`: Select only sessions with this `id`. If not specified, include all users (subject to other filters).
- `minDuration`: Select only sessions with `duration` equal to or greater than this value. If not specified, include all sessions regardless of duration (subject to other filters).
- `equipment`: Select only sessions where at least one of the specified equipments were used. If not specified, include all sessions regardless of equipment used (subject to other filters).
- `merge`: If set to `true`
    - Sessions from the same `user` should be merged into one object. When merging:
        - Sum up the `duration` fields.
        - Combine all the `equipment` used, de-duplicating the values and sorting alphabetically.
    - The other filter options should be applied to the merged data.

The order of the results should always remain unchanged from the original set, and in the case of merging user sessions, the row should take the place of the **latest** occurrence of that `user`. The input objects should not be modified.

## Examples

The following examples use the data set above:

selectData(sessions);

// [

//   { user: 8, duration: 50, equipment: ['bench'] },

//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },

//   { user: 1, duration: 10, equipment: ['barbell'] },

//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },

//   { user: 7, duration: 200, equipment: ['bike'] },

//   { user: 2, duration: 200, equipment: ['treadmill'] },

//   { user: 2, duration: 200, equipment: ['bike'] },

// ];

selectData(sessions, { user: 2 });

// [

//   { user: 2, duration: 200, equipment: ['treadmill'] },

//   { user: 2, duration: 200, equipment: ['bike'] },

// ];

selectData(sessions, { minDuration: 200 });

// [

//   { user: 7, duration: 200, equipment: ['bike'] },

//   { user: 2, duration: 200, equipment: ['treadmill'] },

//   { user: 2, duration: 200, equipment: ['bike'] },

// ];

selectData(sessions, { minDuration: 400 });

// [];

selectData(sessions, { equipment: ['bike', 'dumbbell'] });

// [

//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },

//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },

//   { user: 7, duration: 200, equipment: ['bike'] },

//   { user: 2, duration: 200, equipment: ['bike'] },

// ];

selectData(sessions, { merge: true });

// [

//   { user: 8, duration: 50, equipment: ['bench'] },

//   { user: 1, duration: 10, equipment: ['barbell'] },

//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },

//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },

// ];

selectData(sessions, { merge: true, minDuration: 400 });

// [

//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },

//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },

// ];

# Similar Questions

- [Unique Array](https://www.greatfrontend.com/questions/javascript/unique-array)
    
    Difficulty
    
    Easy