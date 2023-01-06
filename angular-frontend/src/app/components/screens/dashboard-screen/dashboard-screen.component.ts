import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionnaireService } from './../../../services/questionnaire.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.css']
})
export class DashboardScreenComponent implements OnInit {
  questionnaires: any | undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){

    (await this.questionnaireService.getAllQuestionnaires()).subscribe((response) => {

      if (response.status == 200) {

        // const data: any = response.body;
        // console.log(data);

        this.questionnaires = response.body;

        return;
      }
      else{
        this.snackBar.open(
          'Connot get Questionnaires!',
          'OK',
          { duration: 2000 }
        );

        return;
      }

    });

  }

  onSelectedQuestionnaire(id: String){
    this.router.navigate(['/View/' + id]);

  }

  onClickCreateQuestionnaire(){
    this.router.navigate(['/Create-Questionnaire']);
  }


}
