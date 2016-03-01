// import stuff here
import bar from "../js/modules/moduleWithDependency.js";

describe("modules", () => {
    //implement default export in defaultModule.js, and import it in this file.
    it.skip("should use a module with default export", () => {
        let result = foo(2);
        assert.equals(result, 2);
    });

    // implement mutiple methods in mathModule.js, and export them and import "multiply" and "add" in this file
    it.skip("should use a module with multiple exports", () => {
        assert.equals(multiply(2,4), 8);
        assert.equals(add(2,4), 6);
    });

    // Must mock the foo import in moduleWithDependency.js, using rewire.
    it.skip("should mock a modules dependencies", () => {
        assert.equals(bar(7), 2);
    });
});