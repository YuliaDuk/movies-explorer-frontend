class Api {
    constructor({baseUrl}){
        this._baseUrl = baseUrl
    }
    getSavedMovies(){
        const token = localStorage.getItem('token')
         return fetch(`${this._baseUrl}/movies`, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        .then(this._getResponseData)
    }
    getProfileInfo(){
        const token = localStorage.getItem('token')
        return fetch(`${this._baseUrl}/users/me`,{
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        .then(this._getResponseData)
    }
    redProfile(name, email){
        const token = localStorage.getItem('token')
       return fetch(`${this._baseUrl}/users/me`,{
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
       })
       .then(this._getResponseData)
    }
   
    addNewMovie({country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId}){
        const token = localStorage.getItem('token');
         return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId
            })
        })
        .then(this._getResponseData)
        
    }

    deleteMovie(movieId){
        const token = localStorage.getItem('token');
        return fetch (`${this._baseUrl}/movies/${movieId}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
            },
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
const mainApi = new Api({
    // baseUrl: 'http://localhost:3000',
    baseUrl: 'https://api.yuliaduk.nomoredomains.xyz' 
});
export default mainApi