import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/core/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,
    private matSnackbar: MatSnackBar) { }

  customSnackBar(message: string, type: string) {
    this.matSnackbar.openFromComponent(SnackbarComponent, {
      data: {
        message,
        type: type,
      },
      duration: 3000,
    });
  }

  getData(url: string) {
    this.http.get(url)
  }

  getFile(url: string) {
    this.http.get(url, this.option2())
  }

  getDataWithParams(url: string, params: any) {
    this.http.get(url, this.option1(params))
  }

  postData(url: string, data: any) {
    this.http.post(url, data)
  }

  deleteData(url: string) {
    this.http.delete(url)
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
