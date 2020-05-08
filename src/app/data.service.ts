import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private listOfRegistrars: Array<Registration> = [];

  private personDoTuples: Array<[string, string]> = [
    ["Hans", "get the Flammenwerfer"],
    ["Peter", "fuhr im komplett verwahlosten Taxi durch München"],
    ["Panzer of the Lake", "What is your wisdom?"]
  ]

  constructor() { }

  private getDataForIdentifier(id: string): string {
    const found = this.personDoTuples.find(tuple => tuple[0] == id)
    if (found) {
      return found[1];
    } else {
      return null;
    }
  }

  setDataForIdentifier(id: string, content: string) {
    const foundIndex = this.personDoTuples.findIndex(tuple => {
      return tuple[0] == id
    })
    if (foundIndex != -1) {
      this.personDoTuples[foundIndex][1] = content;
    } else {
      return;
    }

    this.listOfRegistrars.filter(tuple => tuple.id == this.personDoTuples[foundIndex][0]).forEach(tuple => {
      //console.dir(tuple)
      tuple.changeRegistrar.inputUpdatedDataHere(content);
    })

    // console.dir(this.personDoTuples)
  }

  registerForChangeInformation(changeRegistrar: DataChangeRegistrar, id: string): string {
    this.listOfRegistrars.push({ changeRegistrar, id })
    return this.getDataForIdentifier(id);
  }

}

export interface DataChangeRegistrar {
  inputUpdatedDataHere(stringy: string);
  //useThisToInformServiceOfUpdate(string: string)
}

interface Registration {
  changeRegistrar: DataChangeRegistrar;
  id: string;
}