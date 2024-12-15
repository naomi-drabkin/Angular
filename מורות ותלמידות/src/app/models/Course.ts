import { courses } from "./enum_Course";

export class Course{

    constructor(
        public  IdCourse:Number,
        public NameCourse:String,
        public Subject:courses
    
    ){}
}
