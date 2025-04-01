let chai, chaiHttp;

(async () => {
  chai = (await import('chai')).default;
  chaiHttp = (await import('chai-http')).default;

  chai.use(chaiHttp);

  var server = require('../server');
  var should = chai.should();
  var expect = chai.expect;

  describe('Photos', function() {
    it('should list ALL photos on / GET', function(done) {
      this.timeout(60000);
      chai.request(server)
        .get('/')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.html;
          res.body.should.be.a('object');
          done();
        });
    });
  });
})();
