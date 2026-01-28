export default class Login {
  id: number;
  email: string;
  password: string;

  private static proximoID = 1;

  constructor(email: string, password: string) {
    this.id = Login.proximoID++;
    this.email = email;
    this.password = password;
  }
}
