describe("test hello" , function() {
    it("test hello", function() {
        var o = require('../object1');
        expect(o("world")).toEqual("world");
    });
});