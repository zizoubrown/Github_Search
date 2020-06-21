import { GithubService } from './../github-service/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:any;
  repo:any;
  username:string;

  constructor(private GithubService:GithubService) { }

  ngOnInit(): void {
  }
  search(){
    this.GithubService.changeUserName(this.username);
    this.GithubService.getUser().subscribe(user =>{
      this.user = user;
    });
    this.GithubService.getRepo().subscribe(repo =>{
      this.repo = repo;
    });
  }
}
