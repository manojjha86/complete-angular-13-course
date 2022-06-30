import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service: CoursesService, private route: ActivatedRoute) { }

  course;
  courseId: number;

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    //this.courseId = this.route.snapshot.params['name'];
    this.course = this.service.courses.find(x => x.id == this.courseId);
  }

}
