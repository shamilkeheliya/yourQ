import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-questionnaires-screen',
  templateUrl: './all-questionnaires-screen.component.html',
  styleUrls: ['./all-questionnaires-screen.component.css']
})
export class AllQuestionnairesScreenComponent implements OnInit {
  uid: string | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.paramMap.get('uid')!
  }

}
