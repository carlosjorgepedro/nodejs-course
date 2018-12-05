const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        saveUser: expect.createSpy((user) => {})
    };
    app.__set__('db', db);

    it('Should call the spy correctly',
        () => {
            var users = [];
            var spy = expect.createSpy((user) => {
                users.push(user);
            });
            spy({});
            expect(spy).toHaveBeenCalled();
        }
    );

    it('Should save user', () => {
        app.handleSignUp('email', 'password');
        expect(db.saveUser).toHaveBeenCalledWith({
            email: 'email',
            password: 'password'
        });
    });
});