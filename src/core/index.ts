import 'reflect-metadata';
import { NODE_ENV } from './config/env';
import { AnimalKind, Factory } from './modules/factoryDemo/factory';
console.log(`Node Env : ${NODE_ENV}`);
console.log(`Directory : ${__dirname}`);


const factory=Factory.getInstance();
const catObj=factory.instance(AnimalKind.Cat);
catObj.speak();

const dogObj=factory.instance(AnimalKind.Dog);
dogObj.speak();