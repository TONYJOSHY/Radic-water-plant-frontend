import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/core/snackbar/snackbar.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,
    // private matSnackbar: MatSnackBar
  ) { }

  customSnackBar(message: string, type: string) {
    // this.matSnackbar.openFromComponent(SnackbarComponent, {
    //   data: {
    //     message,
    //     type: type,
    //   },
    //   duration: 3000,
    // });
  }

  getData(url: string) {
    return this.http.get(this.baseUrl + url)
  }

  getFile(url: string) {
    return this.http.get(this.baseUrl + url, this.option2())
  }

  getDataWithParams(url: string, params: any) {
    return this.http.get(this.baseUrl + url, this.option1(params))
  }

  postData(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data)
  }

  deleteData(url: string) {
    return this.http.delete(this.baseUrl + url)
  }

  option1(params: any) {
    const httpOptions = {
      params: new HttpParams({ fromObject: params })
    }
    return httpOptions
  }

  option2() {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json',
    }
    return httpOptions
  }

}
