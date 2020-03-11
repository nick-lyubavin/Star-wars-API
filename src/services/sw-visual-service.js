export default class SwVisualService {

    _baseUrl = 'https://starwars-visualguide.com/assets/img/planets/';

    getImage = async (id) => {
        const res = await fetch(this._baseUrl+id+'.jpg');

        return res;
    }
}