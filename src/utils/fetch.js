// import URL from 'url'

// import Axios from 'axios'
// // import { saveAs } from 'file-saver'

// // process.env.REACT_APP_ENV = process.env.REACT_APP_ENV || 'LOCAL';
// // const envFound = dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// const ENV = process.env.REACT_APP_ENV

// const endpoint = process.env[`REACT_APP_ENDPOINT_${process.env.REACT_APP_ENV}`]
// console.log(process.env.REACT_APP_ENV, endpoint)
// export const fetch = async ({ method, url, data, query }) => {
// 	const headers = {
// 		'Content-Type': 'application/json; charset=utf-8',
// 	}
// 	if (window.localStorage.getItem(`authen-token-${ENV}`)) {
// 		headers.Authorization = `Bearer ${window.localStorage.getItem(
// 			`authen-token-${ENV}`
// 		)}`
// 	}
// 	try {
// 		const response = await Axios({
// 			method,
// 			url: `${endpoint}${url}${URL.format({ query })}`,
// 			data,
// 			headers,
// 		})
// 		return { status: response.status, data: response.data }
// 	} catch (error) {
// 		if (error.response) {
// 			console.log('error.response', error.response, typeof error.response)
// 			if (error.response.status === 401) {
// 				window.localStorage.removeItem(
// 					`authen-token-${process.env.REACT_APP_ENV}`
// 				)
// 				window.location.href = '/'
// 			}
// 			return { status: error.response.status, data: error.response.data }
// 		}
// 		if (error.request) {
// 			console.log(error.request)
// 			return { status: '500', data: 'Server is out of reach' }
// 		}
// 		console.log('Error', error.message)
// 		return { status: '500', data: 'Fetch error' }
// 	}
// }
