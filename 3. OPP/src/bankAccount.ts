class BankAccount {
    private static nextId: number = 1; // Следващото ID за нов акаунт
    private static interestRate: number = 0.02; // Глобален лихвен процент (по подразбиране 0.02)

    private id: number;
    private balance: number;

    constructor() {
        this.id = BankAccount.nextId++; // Увеличаваме ID за всеки нов акаунт
        this.balance = 0; // Начален баланс 0
    }

    // Метод за задаване на лихвения процент
    public static setInterestRate(rate: number): void {
        BankAccount.interestRate = rate;
    }

    // Метод за депозиране на пари
    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${this.id}`);
    }

    // Метод за изчисляване на лихвата
    public getInterest(years: number): number {
        return this.balance * BankAccount.interestRate * years;
    }

    // Метод за връщане на ID-то на акаунта
    public getId(): number {
        return this.id;
    }
}

// Функция за обработка на командите
function processCommands(commands: string[]): void {
    const accounts: BankAccount[] = [];

    commands.forEach(command => {
        const [action, ...args] = command.split(" ");

        if (action === "Create") {
            const account = new BankAccount();
            accounts.push(account);
            console.log(`Account ID${account.getId()} created`);

        } else if (action === "Deposit") {
            const accountId = Number(args[0]);
            const amount = Number(args[1]);
            const account = accounts.find(acc => acc.getId() === accountId);

            if (account) {
                account.deposit(amount);
            } else {
                console.log(`Account does not exist`);
            }

        } else if (action === "SetInterest") {
            const interestRate = Number(args[0]);
            BankAccount.setInterestRate(interestRate);
            console.log(`Interest rate set to ${interestRate}`);

        } else if (action === "GetInterest") {
            const accountId = Number(args[0]);
            const years = Number(args[1]);
            const account = accounts.find(acc => acc.getId() === accountId);

            if (account) {
                const interest = account.getInterest(years);
                console.log(interest.toFixed(2));
            } else {
                console.log(`Account does not exist`);
            }

        } else if (action === "End") {
            console.log("End of commands");
        }
    });
}

// Пример за тестовите команди
const commands = [
    "Create",
    "Deposit 1 20",
    "GetInterest 1 10",
    "End"
];

processCommands(commands);

// Втори пример:
const commands2 = [
    "Create",
    "Create",
    "Deposit 1 20",
    "Deposit 2 10",
    "SetInterest 1.5",
    "GetInterest 1 1",
    "GetInterest 2 1",
    "End"
];

processCommands(commands2);
