import http from "../http-common"

class ServicoDataService {
    listar(){
        return http.get('/servico/listar')
    }

    cadastrar(servico) {
        return http.post('/servico', servico);
    }

    obterPorId(id, servico) {
        return http.get(`/servico/${id}`, servico);
    }

    atualizar(id, servico) {
        return http.put(`/servico/${id}`, servico); //interpolação de strings
    }

    async deletar(id) {
        return await http.delete(`/servico/${id}`);
    }

}

export default new ServicoDataService();