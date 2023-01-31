import http from "../http-common"

class ServicoDataService {
    listar(){
        return http.get('/servico/listar')
    }
}

export default new ServicoDataService();