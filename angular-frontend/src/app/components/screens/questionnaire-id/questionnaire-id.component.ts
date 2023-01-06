import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-questionnaire-id',
  templateUrl: './questionnaire-id.component.html',
  styleUrls: ['./questionnaire-id.component.css']
})
export class QuestionnaireIdComponent implements OnInit {
  id: String | undefined
  questionnaireURL = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.questionnaireURL = environment.env.HOST_URL + this.id;
  }

  onClickViewResult(){
    this.router.navigate(['/View/' + this.id]);
  }

}
