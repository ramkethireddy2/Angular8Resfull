import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const response = this.http.get('http://localhost:8080/api/users');
    response.subscribe((data) => this.users = data);
  }

}
