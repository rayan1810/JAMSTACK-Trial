const { DELETE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const variables = { id };
  try {
    const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables);
    return formattedResponse(200, { id: deletedLink });
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { err: "Something is wrong" });
  }
};
