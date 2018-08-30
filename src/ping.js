exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: console.log(JSON.stringify(event))
  });
}
