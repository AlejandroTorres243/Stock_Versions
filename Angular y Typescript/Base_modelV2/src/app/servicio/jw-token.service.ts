import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwTokenService {

  //Se usa como seccion
  token: string;

  constructor() { }
}
