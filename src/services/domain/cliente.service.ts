import { API_CONFIG } from './../../config/api.config';
import { ClienteDTO } from './../../models/cliente.dto';
import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageService } from "../storage_service";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient,
        public storage: StorageService) {
    }

    findByEmail(email: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/${id}`);
    }

    /* METODO PARA BUSCAR IMAGEM DO CLIENTE NO BUCKET
    QUANDO CONSEGUIR ACESSO AO S3
        getImageFromBucket(id : string) : Observable<any> {
            let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
            return this.http.get(url, {responseType : 'blob'});
        }   
    */

    insert(obj: ClienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

}