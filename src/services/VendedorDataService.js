import http from "../http-common"

class VendedorDataService {
    listar(){
        return http.get('/vendedor/listar');
    }

    cadastrar(vendedor) {
        return http.post('/Vendedor', vendedor);
    }

    atualizar(id, vendedor) {
        return http.put('/Vendedor', id, vendedor); //interpolação de strings
    }
}

export default new VendedorDataService();