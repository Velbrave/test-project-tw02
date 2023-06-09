const { Content } = require('../../models/tweet');
const { RequestError } = require('../../helpers');

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Content.findById(id);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json(result);
};
module.exports = getById;
