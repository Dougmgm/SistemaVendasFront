import http from "../http-common"

class ItemPedidoDataService {
    listar(){
        return http.get('/itempedido/listar');
    }

    listarPorId(id)
    {
        return http.get(`/itempedido/ObterPorPedidoId/${id}`)
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