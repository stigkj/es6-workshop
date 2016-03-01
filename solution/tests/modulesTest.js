import foo from "../js/modules/defaultModule.js";
import {add, multiply} from "../js/modules/mathModule.js";
import bar from "../js/modules/moduleWithDependency.js";

describe("modules", () => {
    it("should use a module with default export", () => {
        let result = foo(2);
        assert.equals(result, 2);
    });

    it("should use a module with multiple exports", () => {
        assert.equals(multiply(2,4), 8);
        assert.equals(add(2,4), 6);
    });

    it("should mock a modules dependencies", () => {
        bar.__Rewire__("foo", () => 2);

        assert.equals(bar(7), 2);

        bar.__ResetDependency__("url");
    });
});