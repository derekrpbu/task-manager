const asyncWrapper = (fn) => {
   return async (req, res, next) => {
      try {
         await fn(req, res, next);
      } catch (error) {
         next(error); //check Express error handlers to understand
      }
   };
};

module.exports = asyncWrapper;
