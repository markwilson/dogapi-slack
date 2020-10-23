const axios = require("axios");

const slackUrl = process.env.SLACK_URL;

axios
  .get("https://dog.ceo/api/breeds/image/random", {
    headers: {
      Accept: "application/json",
    },
  })
  .then(({ data }) => {
    axios
      .post(slackUrl, data)
      .then((response) => console.log(response))
      .catch(console.error);
  })
  .catch(console.error);
