import http from "../http-common"

class VendedorDataService {
    listar(){
        return http.get('/vendedor/listar');
    }

    cadastrar(vendedor) {
        return http.post('/Vendedor', vendedor);
    }

    obterPorId(id, vendedor) {
        return http.get(`/vendedor/${id}`, vendedor);
    }

    atualizar(id, vendedor) {
        return http.put(`/vendedor/${id}`, vendedor); //interpolação de strings
    }

    async deletar(id) {
        return await http.delete(`/vendedor/${id}`);
    }
    
}

export default new VendedorDataService();