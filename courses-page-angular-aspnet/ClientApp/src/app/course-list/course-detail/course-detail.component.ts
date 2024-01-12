import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  course!: any;

  constructor(public coursesService: CoursesService, public router: Router, public actRoute: ActivatedRoute){  }
  ngOnInit(): void {

    const id: number | null = Number(this.actRoute.snapshot.paramMap.get('id'));
    if (typeof id === 'number') {
      this.subscription = this.coursesService.getCourse(id).subscribe(data => this.course = data);
    }


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
