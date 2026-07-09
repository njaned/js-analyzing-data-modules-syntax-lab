require('datejs');

function combineUsers(...allUserArrays) {

  const combinedObject = {
    users: []
  };

  for (const userArray of allUserArrays) {
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

// Export the function using CommonJS syntax to match your test files
module.exports = { combineUsers };