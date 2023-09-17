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

abstract class House {
	protected isDoorOpen: boolean = false;
	protected key: number;
	protected tenants: Array<IPerson> = [];

	constructor(key: IKey) {
		this.key = key.getSignature();
	}

	abstract openDoor(key: IPerson): void;

	comeIn = (tenant: IPerson) => {
		if (this.isDoorOpen) {
			this.tenants.push(tenant);
			console.log(this.tenants);
		}
	};
}

class MyHouse extends House {
	constructor(key: IKey) {
		super(key);
	}
	openDoor = (person: IPerson) => {
		if (person.getKey() === this.key) {
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
