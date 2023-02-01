import http from "../http-common"

class PedidoDataService {
    listar(){
        return http.get('/pedido/listar')
    }

    cadastrar(pedido) {
        return http.post('/pedido', pedido);
    }

    obterPorId(id, pedido) {
        return http.get(`/pedido/${id}`, pedido);
    }

    atualizar(id, pedido) {
        return http.put(`/pedido/${id}`, pedido); //interpolação de strings
    }

    async deletar(id) {
        return await http.delete(`/pedido/${id}`);
    }
}

export default new PedidoDataService();