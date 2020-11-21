import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "language"
})
export class LanguagePipe implements PipeTransform {
  languageset = {
    ENGLISH: {
      HI: "Hi",
      HELLO: "Hello",
      LOGIN: "Login",
      SIGNUP: "Signup",
      USERNAME: "Username",
      PASSWORD: "Password",
      RETYPE PASSWORD: "Retype Password"
    },
    TAMIL: {
      HI: "இருக்கிறது",
      HELLO: "வணக்கம்",
      LOGIN: "உள்நுழைய",
      SIGNUP: "பதிவுபெறுதல்",
      USERNAME: "பயனர்பெயர்",
      PASSWORD: "கடவுச்சொல்",
      RETYPE PASSWORD: "கடவுச்சொல்லை மீண்டும் தட்டச்சு செய்க"
    },
    HINDI: {
      HI: "இருக்கிறது",
      HELLO: "नमस्ते",
      LOGIN: "H Login",
      SIGNUP: "साइन अप करें",
      USERNAME: "उपयोगकर्ता नाम",
      PASSWORD: "कुंजिका",
      RETYPE PASSWORD: "पासवर्ड फिर से लिखें"
    },
    FRENCH: {
      HI: "EST",
      HELLO: "BONJOUR",
      LOGIN: "F Login",
      SIGNUP: "s'inscrire",
      USERNAME: "Nom d'utilisateur",
      PASSWORD: "Mot de passe",
      RETYPE PASSWORD: "Retaper le mot de passe"
    }
  };
  transform(value: string, args?: string): any {
    console.log(value);
    console.log(args);
    value = value.toUpperCase();
    // return "Maths";
    let language = args ? args : "FRENCH";
    if (localStorage.getItem("Language")) {
      language = localStorage.getItem("Language");
    }
    if (this.languageset[language][value]) {
      return this.languageset[language][value];
    }
    return "Maths";
  }
}
