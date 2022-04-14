import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoursesInterface } from 'src/app/models/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Observable<CoursesInterface[]>
  private courseCollection: AngularFirestoreCollection<CoursesInterface>;

  constructor(private readonly afs: AngularFirestore) {
    this.courseCollection = afs.collection<CoursesInterface>('courses');
    this.getCourses();
  }

  onDeleteCourse(uid: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.courseCollection.doc(uid).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }

  onSaveCourse(uid: string, courseNew: CoursesInterface): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.courseCollection.doc(uid).set(courseNew)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getCourses(): void {
    this.courses = this.courseCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data())
      )
    )
  }
}
