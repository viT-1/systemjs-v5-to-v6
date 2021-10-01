import { msgGreet } from './greeter-conf';

export class Greeter {
	private greeting: string;

	public constructor(message: string) {
		this.greeting = message;
	}

	public greet(): string {
		return `${msgGreet} ${this.greeting}`;
	}
}
