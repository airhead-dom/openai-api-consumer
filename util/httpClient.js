import axios from 'axios'

const createClient = ({ baseUrl, defaultHeader } = {}) => {
    const _baseUrl = baseUrl || '';
    const _defaultHeader = defaultHeader || {};

    return axios.create({ baseURL: _baseUrl, headers: _defaultHeader })
}

export default createClient;