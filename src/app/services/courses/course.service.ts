import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CoursesInterface } from 'src/app/models/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private readonly afs: AngularFirestore) { }

  onSaveCourse(courseNew: CoursesInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Courses")
        .add(courseNew)
        .then(async response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
    })
  }

  onUpdateCourse(uid: string, courseNew: CoursesInterface): Promise<void> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("Courses")
        .doc(uid)
        .update(courseNew)
        .then(async response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
    })
  }

  onDeleteCourse(uid: string) {
    return this.afs
      .collection("Courses")
      .doc(uid)
      .delete()
  }

  getCourses(): Observable<CoursesInterface[]> {
    return this.afs.collection("Courses").snapshotChanges()
  }

  getCourse(uid: string): Observable<CoursesInterface> {
    return this.afs
      .collection("Courses")
      .doc(uid)
      .valueChanges()
  }
}
