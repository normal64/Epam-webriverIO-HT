
// Helper function to search by id locator
function findByID(idLocator) {
    // login logic  here
    return $(`#${idLocator}`);
  }
  
  // Export the helper functions
  module.exports = {
    findByID,
  };