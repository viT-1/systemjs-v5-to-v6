export class Greeter {
	private greeting: string;

	public constructor(message: string) {
		this.greeting = message;
	}

	public greet(): string {
		return `Nice to see you, ${this.greeting}`;
	}
}
