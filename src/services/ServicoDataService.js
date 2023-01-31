import http from "../http-common"

class ServicoDataService {
    listar(){
        return http.get('/servico/listar')
    }

    cadastrar(servico) {
        return http.post('/servico', servico);
    }

}

export default new ServicoDataService();