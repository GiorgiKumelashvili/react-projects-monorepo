import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const http = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});

class Http {
	constructor(
		private readonly http: AxiosInstance,
		private readonly url: string,
		private readonly configs?: { logError: boolean }
	) {}

	then(success: CallableFunction, errorCl?: (err: any) => Error | AxiosError) {
		return this.http
			.get(this.url)
			.then(res => {
				return success(res);
			})
			.catch((err: Error | AxiosError) => {
				if (this.configs?.logError) {
					console.log(`logging from url: "${this.url}"`);
					console.log(`===============================`);

					if (axios.isAxiosError(err)) {
						console.log(err.toJSON());
					} else {
						console.dir(err);
					}
				}

				if (errorCl) {
					return errorCl(err);
				}
			});
	}
}

function either(url: string, configs?: { logError: boolean }) {
	return new Http(http, url, configs);
}

either('/commentsx', { logError: true }).then((res: AxiosResponse<any>) => {
	console.log(res.data);
});
