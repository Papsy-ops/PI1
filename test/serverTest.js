process.env.NODE_ENV = 'test';   

import * as chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);


var should = chai.should();
var expect = chai.expect;

describe('Photos', function(){


    it('should list ALL photos on / GET', function(done){
        this.timeout(60000);
        chai.request(server)
        .get('/')
        .end(function(err,res){
            res.should.have.status(200);
            res.should.be.html;
            res.body.should.be.a('object')
            done();
        })
    });
})
