import http from "../http-common"

class ClienteDataService {
    listar(){
        return http.get('/cliente/listar')
    }
}

export default new ClienteDataService();