import { AxiosRequestConfig } from 'axios';

export type TTokenSubscribers = (error: Error | null, accessToken?: string) => void;
export interface ICustomAxiosRequestConfig extends Omit<AxiosRequestConfig, 'headers'> {
  headers: any;
}
