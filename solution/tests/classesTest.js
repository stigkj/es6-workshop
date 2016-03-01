import Animal from "../js/classes/animal.js";
import Lion from "../js/classes/lion.js";

describe("classes", () => {
    it("creates a class", () => {
        let animal = new Animal("Lion");
        assert.equals(animal.name, "Lion");
    });


    it("uses subclass", () => {
        let lion = new Lion("roarrr");
        assert.equals(lion.speak(), "ROARRR!");
    });
});