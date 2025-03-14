class User {
  private firstName: string;
  private lastName: string;
  protected email: string;
  private password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  get getFullName(): string {
    return `<p>getFullName</p><p>${this.firstName} ${this.lastName}<p><p>----------</p>`;
  }

  public resetPassword(): void {
    this.password = this.generatePassword();
  }

  private generatePassword(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "@#$%";
    const allChars = letters + numbers + specialChars;

    let password = [
      letters[Math.floor(Math.random() * letters.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      specialChars[Math.floor(Math.random() * specialChars.length)],
    ];

    const extraLength = Math.floor(Math.random() * 6) + 8;
    for (let i = 0; i < extraLength; i++) {
      password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    return password.sort(() => 0.5 - Math.random()).join("");
  }

  public showUserInfo(): string {
    return `<p>Log user info:</p><p>Name: ${this.firstName} ${this.lastName}</p><p>Email: ${this.email}</p><p>----------</p>`;
  }

  set setPaswoord(password: string) {
    if (this.isValidPassword(password)) {
      this.password = password;
      console.log("Wachtwoord succesvol ingesteld.");
    } else {
      console.log("Wachtwoord voldoet niet aan de vereisten.");
    }
  }

  private isValidPassword(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@#$%]{8,}$/;
    return regex.test(password);
  }
}

const user1 = new User("John", "Doe", "john.doe@example.com", "password123");
const user2 = new User(
  "Jane",
  "Smith",
  "jane.smith@example.com",
  "password123"
);
