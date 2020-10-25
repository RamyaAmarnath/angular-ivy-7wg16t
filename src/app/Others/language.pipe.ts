import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "language"
})
export class LanguagePipe implements PipeTransform {
  languageset = {
    ENGLISH: {
      HI: "Hi",
      HELLO:'Hello'
    },
    TAMIL: {
      HI: "இருக்கிறது",
      HELLO: "வணக்கம்"
    },
    HINDI: {
      HI: "இருக்கிறது",
      HELLO: "नमस्ते"
    }
  };
  transform(value: string, args?: string): any {
    console.log(value);
    console.log(args);
    value = value.toUpperCase();
    // return "Maths";
    let language = args? args: "TAMIL";
    if (this.languageset[language][value]) {
      return this.languageset[language][value];
    }
    return "Maths";
  }
}
