const { UPDATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  const { name, url, description, archived, _id: id } = JSON.parse(event.body);
  const variables = { name, url, description, archived, id };
  try {
    const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);
    return formattedResponse(200, updatedLink);
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { err: "Something is wrong" });
  }
};
