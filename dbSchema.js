let db = {
  users: [
    {
      userId: "dh23ggj5h34g284j5gf20",
      email: "user@mail.com",
      handle: "user",
      createdAt: "2019-03-20T10:59:52.8976",
      imageUrl: "image/dsfdkghsdkfgs/dgksldi",
      bio: "Hello, my name is bean, cool bean",
      website: "https://user.com",
      location: "Merica, Missouruh",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2021-05-27T03:55:01.707Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kdjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "kdjsfgdksuufhgkdsufky",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "N43KJ5H43KJHREW4J5H3JWMERHB",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.798Z",
    imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "Lonodn, UK",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh7O5oWfWucVzGbHH2pa",
    },
    {
      userHandle: "user",
      screamId: "3IOnFoQexRcofs5OhBXO",
    },
  ],
};
