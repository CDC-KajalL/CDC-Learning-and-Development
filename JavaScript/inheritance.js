class student {
    constructor() {
        this.name = "K";
        this.age = 18;
    }
    info(ins, type) {
        this.name = "K"; //global
        this.age = 18; //can be accessed by friend and school makes it global
        this.mother = "X"; //can be accessed by friend and school
        this.father = "Y"; //can be accessed by friend and school
        let sister = "x"; //can be accessed by friend for basic knowledge
        let password = 50500; //private info no one should access
        if (type === "friend" && ins == 1) {
            return sister;
        } else if (type === "outsider" && ins == 1) {
            return "Can't reveal";
        } else if (type === "friend" && ins == 2) {
            return "Hey I can't reveal that!";
        } else {
            return "Can't reveal!";
        }
    }
    menu() {
        console.log("Press 1 to know name");
        console.log("Press 2 to know age");
        console.log("Press 3 to know mother's name");
        console.log("Press 4 to know father's name");
        console.log("Press 5 to know sister's name");
        console.log("Press 6 to know password");
        this.i = prompt("Enter any no from the menu:");
        if (this.i == 1) {
            console.log("Name:", this.name);
        } else if (this.i == 2) {
            console.log("Age: ", this.age);
        } else if (this.i == 3) {
            console.log("Mother's Name:", this.mother);
        } else if (this.i == 4) {
            console.log("Father's name: ", this.father);
        } else if (this.i == 5) {
            let ins = 1;
            let type = prompt("Enter type:"); //friend or outsider
            let res = this.info(ins, type);
            console.log("Sister's name: ", res);
        } else if (this.i == 6) {
            let ins = 2;
            let type = prompt("Enter type:"); //friend or outsider
            let res2 = this.info(ins, type);
            console.log("Password: ", res2);
        }
    }
}
class coaching extends student {
    //coaching is accessing student basic info
    constructor() {
        super() //to call the constructor of the parent class
        this.name = "MMC";
    }
    menu() {
        console.log("Press 1 to get info of the courses ongoing.");
        console.log("Press 2 to get the details of a specific course.");
        console.log("Press 3 to get details of student data");
        this.num = prompt("Enter the number from the menu:");
        if (this.num == 2) {
            this.info();
            console.log("Press 1 to get details of Alpha batch");
            console.log("Press 2 to get details of Beta batch");
            console.log("Press 3 to get details of gamma batch");
            this.num2 = prompt("Enter the number from the menu:");
            this.get_details(this.num2);
        } else if (this.num == 1) {
            this.info();
        } else if (this.num == 3) {
            student.menu();
        }
    }
    info() {
        console.log("We have three batches going on which are:");
        console.log("Alpha Batch");
        console.log("Beta Batch");
        console.log("Gamma Batch");
    }
    get_details(num) {
        let course_name = "";
        let capacity = 0;
        let no_of_students = 0;
        let fee = 0;
        if (num == 1) {
            course_name = this.Alpha_batch.course_name;
            capacity = this.Alpha_batch.capacity;
            no_of_students = this.Alpha_batch.no_of_students;
            fee = this.Alpha_batch.fee;
            this.display(course_name, capacity, no_of_students, fee)
        } else if (num == 2) {
            course_name = this.Beta_batch.course_name;
            capacity = this.Beta_batch.capacity;
            no_of_students = this.Beta_batch.no_of_students;
            fee = this.Beta_batch.fee;
            this.display(course_name, capacity, no_of_students, fee)
        } else if (num == 3) {
            course_name = this.gamma_batch.course_name;
            capacity = this.gamma_batch.capacity;
            no_of_students = this.gamma_batch.no_of_students;
            fee = this.gamma_batch.fee;
            this.display(course_name, capacity, no_of_students, fee)
        } else {
            console.log("Value entered out of scope");
        }
        
    }
    Alpha_batch() {
        //for batches of age greater then 15
        course_name = "Alpha batch";
        capacity = 50;
        no_of_students = 49;
        fee = 25000;
    }
    Beta_batch() {
        //for batches of age greater than 18
        course_name = "Beta batch";
        capacity = 30;
        no_of_students = 30;
        fee = 45000;
    }
    gamma_batch() {
        //for batches of age greater than 20
        course_name = "Gamma batch";
        capacity = 50;
        no_of_students = 27;
        fee = 60000;
    }
    display(course_name, capacity, no_of_students, fee){
        console.log("Name of the course: ", course_name);
        console.log("capacity: ", capacity);
        console.log("no_of_students: ", no_of_students);
        console.log("fee: ", fee);
    }
}
//main
const friend = new student();
let n = 1;
while (n != 2) {
    console.log("Press 1 to display menu");
    console.log("Press 2 to end");
    console.log("Press 3 to create an outsider object ")
    n = prompt("Enter any no. from the menu:");
    if(n == 1){
        friend.menu();
    }else if(n == 3){
        const outsider = new coaching();
        console.log("Press 1 to view menu");
        console.log("Press 2 to end the program");
        let t = prompt("Enter any no from the menu:")
        if(t == 1){
            outsider.menu();
        }else if(t==2){
            break;
        }
    }
}

