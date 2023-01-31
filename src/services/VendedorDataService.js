import http from "../http-common"

class VendedorDataService {
    listar(){
        return http.get('/vendedor/listar');
    }

    cadastrar(vendedor) {
        return http.post('/Vendedor', vendedor);
    }
}

export default new VendedorDataService();