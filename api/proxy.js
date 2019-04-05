var request = require("request");
var api = require("./api.js").url;

module.exports = {
  owner: function(path, params, owner, cb) {
    var options = {
      // proxy: 'http://statica3751:55bf24467ab2b31b@sl-ams-01-guido.statica.io:9293',
      url: api + path,
      json: params,
      method: "POST",
      headers: {
        "User-Agent": "node.js",
        owner: owner
      }
    };

    request(options, cb);
  },
  get: function(path, cb) {
    var options = {
      // proxy:  'http://statica3751:55bf24467ab2b31b@sl-ams-01-guido.statica.io:9293',
      uri: api + path,
      headers: {
        "User-Agent": "node.js"
      }
    };

    request(options, cb);
  },
  post: function(path, params, cb) {
    console.log("post", `${api}${path}`);
    var options = {
      // proxy: 'http://statica3751:55bf24467ab2b31b@sl-ams-01-guido.statica.io:9293',
      url: api + path,
      json: params,
      method: "POST",
      headers: {
        "User-Agent": "node.js"
      }
    };

    request(options, cb);
  },
  pdfPost: function(path, params, cb) {
    var options = {
      // proxy: 'http://statica3751:55bf24467ab2b31b@sl-ams-01-guido.statica.io:9293',
      url: path,
      json: params,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer secretCats"
      }
    };

    request(options, cb);
  },

  getWebApi: function(path, cb) {
    var options = {
      uri: webApi + path,
      method: "GET",
      headers: {
        "User-Agent": "node.js"
      }
    };
    console.log("webapi url ", options.uri);
    request(options, cb);
  },

  postWebApi: function(path, params, cb) {
    var options = {
      url: webApi + path,
      json: params,
      method: "POST",
      headers: {
        "User-Agent": "node.js"
      }
    };
    console.log("webapi url ", options.url);
    request(options, cb);
  }
};
