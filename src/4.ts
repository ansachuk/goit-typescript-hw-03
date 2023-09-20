class Key {
	private signature: number = Math.random();

	getSignature = (): number => this.signature;
}

interface IPerson {
	key: Key;
	getKey(): number;
}

class Person implements IPerson {
	constructor(public key: Key) {}

	getKey = (): number => this.key.getSignature();
}

abstract class House {
	protected isDoorOpen: boolean = false;
	protected key: number;
	protected tenants: Array<Person> = [];

	constructor(key: Key) {
		this.key = key.getSignature();
	}

	abstract openDoor(key: Person): void;

	comeIn = (tenant: Person): void => {
		if (this.isDoorOpen) {
			this.tenants.push(tenant);
			console.log(this.tenants);
		}
	};
}

class MyHouse extends House {
	openDoor = (person: Person): void => {
		if (person.key.getSignature() === this.key) {
			this.isDoorOpen = true;
		}
	};
}

const key = new Key();

const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person);

house.comeIn(person);

export {};
