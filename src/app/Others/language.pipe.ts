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
      SIGNUP: "Signup"
    },
    TAMIL: {
      HI: "இருக்கிறது",
      HELLO: "வணக்கம்",
      LOGIN: "உள்நுழைய",
      SIGNUP: "பதிவுபெறுதல்"
    },
    HINDI: {
      HI: "இருக்கிறது",
      HELLO: "नमस्ते",
      LOGIN: "H Login",
      SIGNUP: "साइन अप करें"
    },
    FRENCH: {
      HI: "EST",
      HELLO: "BONJOUR",
      LOGIN: "F Login",
      SIGNUP: "s'inscrire"
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
