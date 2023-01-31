import http from "../http-common"

class ClienteDataService {
    listar(){
        return http.get('/cliente/listar')
    }

    cadastrar(vendedor) {
        return http.post('/cliente', vendedor);
    }
}

export default new ClienteDataService();