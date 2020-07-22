const isXid = require('./index');

test('return false if the given id has not enought characters', () => {
    expect(isXid('bs6ni8d4pi40r1cu1eh')).toEqual(false);
});

test('return false if the given id has too much characters', () => {
    expect(isXid('bs6ni8d4pi40r1cu1ehgr')).toEqual(false);
});

test('return true if the given id is a xid', () => {
    expect(isXid('bs6ni8d4pi40r1cu1ehg')).toEqual(true);
});
