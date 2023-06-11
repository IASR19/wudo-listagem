import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
});

export class HTTPClient {
  private static readonly userRoute = '/user';
  private static readonly servicesRoute = '/services';

  static async authUser(user: any): Promise<AxiosResponse | any> {
    try {
        const response = await axiosInstance.post(`${this.userRoute}/login`, user);
        return response;
    } catch (error) {
        return {
            status: 500,
            statusText: "ServerError"
        };
    }
  }

  static async createUser(user: any): Promise<AxiosResponse | any> {
    try {
        const response = await axiosInstance.post(`${this.userRoute}/create`, user);
        return response;
    } catch (error) {
        return {
            status: 500,
            statusText: "ServerError"
        };
    }
  }

  static async createService(service: any): Promise<AxiosResponse | any> {
    try {
        const response = await axiosInstance.post(`${this.servicesRoute}/create`, service);
        return response;
    } catch (error) {
        return {
            status: 500,
            statusText: "ServerError"
        };
    }
  }

  static async listServices(setServicesList: any): Promise<AxiosResponse | any> {
    try {
        const response = await axiosInstance.get(`${this.servicesRoute}/list`);
        console.log('r', response.data)
        setServicesList(response.data);
    } catch (error) {
        return {
            status: 500,
            statusText: "ServerError"
        };
    }
  }
}