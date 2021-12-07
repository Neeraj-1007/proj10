
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { BasicsComponent } from './basics/basics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyListComponent } from './faculty/faculty-list.component'
import { CourseListComponent } from './course/course-list.component'
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role/role-list.component';




const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'course',
        component:CourseComponent
    },
    {
        path: 'course/:id',
        component: CourseComponent
    },
    {
        path:'courselist',
        component:CourseListComponent

    },
   
    {
        path:'subject',
        component:SubjectComponent
    },
    {
        path:'subject/:id',
        component:SubjectComponent
    },
    {
        path:'subjectlist',
        component:SubjectListComponent
    },
    {
        path:'faculty',
        component:FacultyComponent
    },
    {
        path: 'faculty/:id',
        component: FacultyComponent
    },
    {
        path:'facultylist',
        component:FacultyListComponent
    },
    {
        path:'timetable',
        component:TimetableComponent
    },
    
    {
        path:'timetable/:id',
        component:TimetableComponent
},
    {   
        path:'timetablelist',
        component:TimetableListComponent
},
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'message',
        component: MessageComponent
    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent
    },
    {
        path: 'marksheet',
        component: MarksheetComponent
    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent
    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent
    },
    {
        path: 'college',
        component: CollegeComponent
    },
    {
        path: 'college/:id',
        component: CollegeComponent
    },
    {
        path: 'collegelist',
        component: CollegeListComponent
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'student/:id',
        component: StudentComponent
    },
    {
        path: 'studentlist',
        component: StudentListComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: 'userlist',
        component: UserListComponent
    },
    {
        path: 'role',
        component: RoleComponent
    },
    {
        path: 'role/:id',
        component: RoleComponent
    },
    {
        path: 'rolelist',
        component: RoleListComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }