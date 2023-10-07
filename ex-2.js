class Notification { 
    constructor (notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification {
    constructor (notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
    }    
}

class SMSNotification extends Notification { 
    constructor (notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
    }
}

const JanesEmail = new EmailNotification("123456789", "13.59 PM","exercise1 content", "Janes1239999@jmail.com");
const JanesPhonenumber = new SMSNotification("123456789", "14.00 PM","exercise1 content", "0999992659599");

JanesEmail.send();
JanesPhonenumber.send();

/*สร้าง Class ที่ชื่อว่า Notification
มี Methods ทั้งหมด 2 ตัว
constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class 
โดยมี Property ดังนี้
notificationId คือตัวบ่งชี้ของ Notification ชุดนั้นเป็น String
createdTime คือเวลาที่ส่ง Notification เป็น String
content คือข้อความใน Notification เป็น String
receiver คือผู้รับ Notification เป็น String

send เป็น Method ที่ส่ง Notification 
โดยที่ให้ Log ข้อความว่า "Notification has been sent to <receiver>"


จากนั้นให้แก้ไข Class ที่ชื่อว่า EmailNotification และ SMSNotification 
ในข้อ 1 โดยที่ให้ Inherit Property และ Method ทั้งหมดมาจาก Class 
ที่ชื่อว่า Notification

ต่อมาให้สร้าง Object จาก Class ที่ชื่อว่า EmailNotification 
และ SMSNotification

แล้วให้ลอง Execute ตัว Method send จาก Object EmailNotification 
และ Object SMSNotification ที่สร้างขึ้นมา
*/



