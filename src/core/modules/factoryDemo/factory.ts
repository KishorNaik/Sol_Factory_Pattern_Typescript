import { Animal, Cat, Dog } from "./factoryImplement";

export enum AnimalKind {
    Cat = "cat",
    Dog = "dog"
}

type AnimalType = new () => Animal;
export class Factory {
    private static instance: Factory;
    private map:Map<AnimalKind,AnimalType> = new Map();

    private constructor() {
        this.register();
    }

    public static getInstance(): Factory {
        if (!Factory.instance) {
            Factory.instance = new Factory();
        }
        return Factory.instance;
    }

    private register(){
        this.map.set(AnimalKind.Cat,Cat);
        this.map.set(AnimalKind.Dog,Dog);
    }

    public instance(type:AnimalKind):Animal{
        const typeObj=this.map.get(type);
        if(!typeObj)
            throw new Error(`Invalid animal type ${type}`);
        return new typeObj();
    }
}