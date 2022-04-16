import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesInterface } from 'src/app/models/courses';
import { StatusInterface } from 'src/app/models/status';
import { CourseService } from 'src/app/services/courses/course.service';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: CoursesInterface[]
  status: StatusInterface[]
  constructor(
    private router: Router,
    private courseSvc: CourseService,
    private statusSvc: StatusService
  ) {
    if (sessionStorage.getItem('userID') === null) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.courseSvc.getCourses().subscribe(
      (resCourses) => {
        this.statusSvc.getStatus().subscribe(
          resStatus => {
            this.courses = resCourses
            for (const iterator of this.courses) {
              for (const iteratorStatus of resStatus) {
                if (iterator.status === iteratorStatus.id) {
                  iterator.status = iteratorStatus.description
                }
              }
            }
          })
      })
  }

}
