var client_id = "74279caccabd4f18b9d28b4c6f37d000";
var redirect_uri = "d18754301c5e42499abcae04e58519b";

var app = express();

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  var scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});
