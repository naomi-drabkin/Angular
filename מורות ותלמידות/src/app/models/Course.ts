import { courses } from "./enum_Course";

export class Course{

    constructor(
        public  IdCourse:String,
        public NameCourse:String,
        public Subject:courses,
        public numSemster:String,
        public Price:String,
    ){}
}
