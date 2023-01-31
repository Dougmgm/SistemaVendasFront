import http from "../http-common"

class ClienteDataService {
    listar(){
        return http.get('/cliente/listar')
    }

    cadastrar(cliente) {
        return http.post('/cliente', cliente);
    }

    obterPorId(id, cliente) {
        return http.get(`/vendedor/${id}`, cliente);
    }

    atualizar(id, cliente) {
        return http.put(`/vendedor/${id}`, cliente); //interpolação de strings
    }
}

export default new ClienteDataService();