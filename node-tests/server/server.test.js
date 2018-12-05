
const server = require('./server');

const request = require('supertest');
const expect = require('expect');
var app = server.app;

describe('Utils', () => {

    it('Should return Hello world response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found.'
                });
            })
            .expect(404)
            .end(done);
    });

    it('Should return an array of users', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toContain({
                    age: 42,
                    name: 'Catarina'
                }).toContain({
                    age: 41,
                    name: 'Carlos'
                });
            })
            .end(done);
    });
});