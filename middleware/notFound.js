const notFound = async (req, res) => {
  res.status(404).send("Route does not exist:D");
};

module.exports = notFound;
