class Api {
    constructor({baseUrl}){
        this._baseUrl = baseUrl
    }
    getMovies(){
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify()
        })
        .then(this._getResponseData)
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`) 
        }
        return res.json()
    }
}
const movieApi = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
});
export default movieApi