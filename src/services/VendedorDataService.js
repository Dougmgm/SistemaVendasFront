import http from "../http-common"

class VendedorDataService {
    listar(){
        return http.get('/vendedor/listar');
    }

    cadastrar(vendedor) {
        return http.post('/Vendedor', vendedor);
    }

    atualizar(id, vendedor) {
        return http.put(`/vendedor/${id}`, vendedor); //interpolação de strings
    }

    obterPorId(id) {
        return http.get(`/vendedor/${id}`, vendedor);
    }
}

export default new VendedorDataService();