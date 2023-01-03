import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-questionnaire-screen',
  templateUrl: './single-questionnaire-screen.component.html',
  styleUrls: ['./single-questionnaire-screen.component.css']
})
export class SingleQuestionnaireScreenComponent implements OnInit {
  id: string | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
  }

}
