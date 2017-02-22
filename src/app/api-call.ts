export interface IApiCall {
  name: string;
  url: string;
  httpVerb: string;
  params?: Object;
  payload?: Object;
}
