const v8 = require('v8');

let person = {
    name: "Anna",
    age: 30,
    status: "single",
    animals: [
        {
            cats: [
                {
                    name: "Vasya", age: 2, kitten: {
                        name: "Bean", age: 0
                    }
                },
                {name: "Bun", age: 5},
                {name: "Zephyr", age: 4}
            ]
        },
        {
            dogs: [
                {name: "Rylai", age: 3},
                {name: "Mars", age: 7}
            ]
        }
    ],
    dob: new Date(1990, 11, 4)
}

/*
deepCopy() works fine only if there are no such datatypes as:
Dates, functions, undefined, Infinity, RegExps, Maps, Sets,
Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays (and other complex types)
within the object.
 */

const deepCopy = object => JSON.parse(JSON.stringify(object));

const deepCopyFunc = object => {
    let highLevelObject, value, key;

    if (typeof object !== "object" || object === null) {
        return object
    }

    highLevelObject = Array.isArray(object) ? [] : {}

    for (key in object) {
        value = object[key]
        highLevelObject[key] = deepCopyFunc(value)
    }
    return highLevelObject
}

/*
accessible in NodeJS only because of the require statement
to enable, uncomment the first line of code in the file and type in console "node deepCopy.js"
 */

const structuredClone = object => v8.deserialize(v8.serialize(object));
let personCopy = deepCopy(person);
let personCopy2 = deepCopyFunc(person);
let personCopy3 = structuredClone(person);

