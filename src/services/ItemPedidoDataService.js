import http from "../http-common"

class ItemPedidoDataService {
    listar(){
        return http.get('/itempedido/listar');
    }

    cadastrar(itemPedido) {
        return http.post('/itempedido', itemPedido);
    }

    obterPorId(id, itemPedido) {
        return http.get(`/itempedido/${id}`, itemPedido);
    }

    atualizar(id, itemPedido) {
        return http.put(`/itempedido/${id}`, itemPedido); //interpolação de strings
    }

    async deletar(id) {
        return await http.delete(`/itempedido/${id}`);
    }
    
}

export default new ItemPedidoDataService();