export class ApiError {
  status : number;
  timestamp : string;
  message : string;
  debugMessage : string
  subErrors : ApiError[]
}
