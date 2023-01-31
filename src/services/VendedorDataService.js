import http from "../http-common"

class VendedorDataService {
    listar(){
        return http.get('/vendedor/listar');
    }

    cadastrar(vendedor) {
        http.post('/vendedor', vendedor);
    }
}

export default new VendedorDataService();