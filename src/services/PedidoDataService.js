import http from "../http-common"

class PedidoDataService {
    listar(){
        return http.get('/pedido/listar')
    }

    cadastrar(pedidos) {
        return http.post('/pedido', pedidos);
    }

    obterPorId(id, pedidos) {
        return http.get(`/pedido/${id}`, pedidos);
    }

    atualizar(id, pedidos) {
        return http.put(`/pedido/${id}`, pedidos); 
    }

    async deletar(id) {
        return await http.delete(`/pedido/${id}`);
    }
}

export default new PedidoDataService();