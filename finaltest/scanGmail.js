function listMessages(userId, query, callback) {
  var getPageOfMessages = function(request, result) {
    request.execute(function(resp) {
      result = result.concat(resp.messages);
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken) {
        request = gapi.client.gmail.users.messages.list({
          'userId': me,
          'pageToken': nextPageToken,
          'q': query
        });
        getPageOfMessages(request, result);
      } else {
        callback(result);
      }
    });
  };
  var initialRequest = gapi.client.gmail.users.messages.list({
    'userId': me,
    'q': query
    
  });
  getPageOfMessages(initialRequest, []);
}

listMessages("lovezoo2000@gmail.com", "www.googleapis.com/gmail/v1/users/userId/messages", console.log("it works"));


//15de26e1309e79f8
//data[1].raw