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
    return `GetFullName\n${this.firstName} ${this.lastName}\n------------`;
  }

  public resetPassword(): string {
    this.password = this.generatePassword();
    console.log("Wachtwoord succesvol gereset.");
    // console.log("Nieuw paswoord:", this.password);
    console.log("--------------");

    return this.password;
  }

  private generatePassword(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "@#$%";
    const allChars = letters + numbers + specialChars;

    const passwordArray: string[] = [
      letters[Math.floor(Math.random() * letters.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      specialChars[Math.floor(Math.random() * specialChars.length)],
    ];

    const extraCount = Math.floor(Math.random() * 6) + 5;
    for (let i = 0; i < extraCount; i++) {
      passwordArray.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    passwordArray.sort(() => 0.5 - Math.random());

    return passwordArray.join("");
  }

  public showUserInfo(): void {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Email: ${this.email}`);
  }

  set setPaswoord(password: string) {
    if (this.isValidPassword(password)) {
      this.password = password;
      console.log("Wachtwoord succesvol ingesteld.");
      console.log("--------------");
    } else {
      console.log("Wachtwoord voldoet niet aan de vereisten.");
    }
  }

  private isValidPassword(password: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%])[A-Za-z\d@#$%]{8,13}$/;
    return regex.test(password);
  }
}

const user1 = new User("John", "Doe", "john.doe@example.com", " ");
const user2 = new User("Jane", "Smith", "jane.smith@example.com", " ");

console.log("Log user info:");
user1.showUserInfo();
console.log("----------");
console.log("Log user info:");
user2.showUserInfo();
console.log("----------");
console.log(user1.getFullName);
const generatedPassword = user1.resetPassword();
user1.setPaswoord = generatedPassword;
