interface IKey {
	getSignature(): number;
}

class Key implements IKey {
	private signature: number;

	constructor() {
		this.signature = Math.random();
	}

	getSignature = (): number => this.signature;
}

interface IPerson {
	getKey(): number;
}

class Person implements IPerson {
	private key: number;

	constructor(key: IKey) {
		this.key = key.getSignature();
	}

	getKey = (): number => this.key;
}

abstract class House {}

class MyHouse implements House {}

const key = new Key();

const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
