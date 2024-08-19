// Define a common interface
export interface Animal {
    speak(): void;
}

// Implement the interface in different classes
export class Dog implements Animal {
    speak() {
        console.log("Woof!");
    }
}

export class Cat implements Animal {
    speak() {
        console.log("Meow!");
    }
}