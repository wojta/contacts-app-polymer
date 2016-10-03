var logger = require('winston');
var server = require('../../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
var chaiJsonEqual = require('chai-json-equal');
var seed = require('../../seed/seed');
var User = require('../../models/user');
var expect = require('chai').expect;

chai.should();
chai.use(chaiHttp);
chai.use(chaiJsonEqual);
var url = 'http://127.0.0.1:8001';


describe('Users', function () {

    // Before our test suite
    before(function (done) {
        // Start our app on an alternative port for acceptance tests
        server.listen(8001, function () {
            logger.info('Listening at http://localhost:8001 for acceptance tests');

            // Seed the DB with our users
            seed(function (err) {
                done(err);
            });
        });
    });

    //test of CRUDL List operation
    describe('/GET users', function () {
        it('should return a list of users', function (done) {
            chai.request(url)
                .get('/users')
                .end(function (err, res) {
                    res.body.should.be.a('array');
                    res.should.have.status(200);
                    res.body.length.should.be.eql(100);
                    done();
                });
        });
    });

    //test of CRUDL Read operation
    describe('/GET users/:id', function () {
        it('should return a single user', function (done) {
            // Find a user in the DB
            User.findOne({}, function (err, user) {
                var id = user._id;

                // Read this user by id
                chai.request(url)
                    .get('/users/' + id)
                    .end(function (err, res) {
                        res.should.have.status(200);
                        expect(res.body).to.be.a('object');
                        expect(res.body.name.first).to.be.a('string');
                        done();
                    });
            });
        });
    });

    //test of CRUDL Create operation
    describe('/POST users', function () {
        var user = require('./test-user.json');
        var userid;
        it('should add a single user', function (done) {
            chai.request(url)
                .post('/users')
                .send(user)
                .end(function (err, res) {
                    res.should.have.status(200);
                    expect(res.body).to.be.a('object');
                    res.body.should.have.property('_id');
                    userid = res.body._id;
                    done();
                })
        });
        it('should check if added user exists', function (done) {
            expect(userid).to.not.be.undefined;
            User.findById(userid, function (err, checkedUser) {
                expect(err).to.not.be.true;
                var obj = checkedUser.toObject();
                delete obj.__v;
                delete obj._id;  //deletes mongodb columns for comparison
                obj.should.jsonEqual(user);
                done();
            });
        });

    });

    //test of CRUDL Update operation
    describe('/PUT users/:id', function () {
        var user = require('./test-user.json');
        var userid;
        it('should update a single user', function (done) {
            User.findOne({}, function (err, randomUser) {
                userid = randomUser._id;
                chai.request(url)
                    .put('/users/' + userid)
                    .send(user)
                    .end(function (err, res) {
                        res.should.have.status(200);
                        done();
                    })
            });


        });
        it('should check if updated user is equal to data updated', function (done) {
            expect(userid).to.not.be.undefined;
            User.findById(userid, function (err, checkedUser) {
                expect(err).to.not.be.true;
                var obj = checkedUser.toObject();
                delete obj.__v;
                delete obj._id;  //deletes mongodb columns for comparison
                obj.should.jsonEqual(user);
                done();
            });
        });

    });

    //test of CRUDL DELETE operation
    describe('/DELETE users/:id', function () {
        var userid;
        it('should delete a single user', function (done) {
            User.findOne({}, function (err, randomUser) {
                userid = randomUser._id;
                chai.request(url)
                    .delete('/users/' + userid)
                    .end(function (err, res) {
                        res.should.have.status(200);
                        done();
                    });
            });


        });
        it('should check if deleted user doesn\'t exist', function (done) {
            expect(userid).to.not.be.undefined;
            User.findById(userid, function (err, checkedUser) {
                expect(checkedUser).to.be.null;
                done();
            });
        });

    });


});
