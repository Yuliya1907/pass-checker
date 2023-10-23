import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pass-checker';
  password = '';
  passwordStrength1 = 'gray';
  passwordStrength2 = 'gray';
  passwordStrength3 = 'gray';

  onPasswordChange() {
    const password = this.password;
    const passwordLength = password.length;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*]/.test(password);

    if (passwordLength === 0) {
      this.passwordStrength1 = 'gray';
      this.passwordStrength2 = 'gray';
      this.passwordStrength3 = 'gray';
    } else if (passwordLength < 8) {
      this.passwordStrength1 = 'red';
      this.passwordStrength2 = 'red';
      this.passwordStrength3 = 'red';
    } else if (hasLetters && hasSymbols && hasNumbers) {
      this.passwordStrength1 = 'green';
      this.passwordStrength2 = 'green';
      this.passwordStrength3 = 'green';
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasNumbers) ||
      (hasNumbers && hasSymbols)
    ) {
     this.passwordStrength1 = 'yellow';
     this.passwordStrength2 = 'yellow';
     this.passwordStrength3 = 'gray';
    } else if (hasLetters || hasSymbols || hasNumbers) {
      this.passwordStrength1 = 'red';
      this.passwordStrength2 = 'gray';
      this.passwordStrength3 = 'gray';
    }
  }
}
