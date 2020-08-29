class ReqController {
    passReq (req, res) {
      console.log(JSON.stringify(req.body));
      res.json('request passed');
    }
}

module.exports = new ReqController();
