import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "language"
})
export class LanguagePipe implements PipeTransform {
  languageset = {
    ENGLISH: {
      HI: "Hi"
    },
    TAMIL: {
      HI: "இருக்கிறது"
    }
  };
  transform(value: string, args?: any): any {
    console.log(value);
    console.log(args);
    value = value.toUpperCase();
    // return "Maths";
    let language = "TAMIL";
    if (this.languageset[language][value]) {
      return this.languageset[language][value];
    }
    return "Maths";
  }
}
