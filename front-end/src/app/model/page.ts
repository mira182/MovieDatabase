import {Movie} from "./movie";

export interface Page {
  content : Array<Movie>;
  first : boolean;
  last : boolean;
  number : number;
  numberOfElements : number;
  size : number;
  totalElements : number;
  totalPages : number;
}
