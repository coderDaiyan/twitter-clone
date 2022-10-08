export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in tweet",
      type: "string",
    },
    {
      name: "blockTweet",
      title: "Block tweet",
      type: "boolean",
      description:
        "ADMIN Controls: Toggle if the tweet is deemed inappropriate",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "image",
      title: "Tweet Image",
      type: "string",
    },
  ],
};
