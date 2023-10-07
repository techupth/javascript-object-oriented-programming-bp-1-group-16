class EmailNotification { 
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


class SMSNotification { 
    constructor(notificationId, createdTime, content, phonenumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phonenumber = phonenumber;
    }
    send(){
        console.log(`Notification has been sent to ${this.phonenumber}`);
    }
}


const JanesEmail = new EmailNotification("123456789", "13.59 PM","exercise1 content", "Janes1239999@jmail.com");
const JanesPhonenumber = new SMSNotification("123456789", "14.00 PM","exercise1 content", "0999992659599");

JanesEmail.send();
JanesPhonenumber.send();


/*ให้สร้าง Class ที่ชื่อว่า EmailNotification ซึ่งมีคุณสมบัติดังนี้
มี Methods ทั้งหมด 2 ตัว
constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class 
โดยมี Property ดังนี้
notificationId คือตัวบ่งชี้ของอีเมลชุดนั้นเป็น String
createdTime คือเวลาส่งอีเมลเป็น String
content คือข้อความในอีเมลเป็น String
receiver คืออีเมลของผู้รับเป็น String

send เป็น Method ที่ส่ง Notification ไปยัง Email เมื่อเรียกใช้ Method นี้ 
ระบบจะแสดงผลข้อความผ่านหน้าจอด้วย console.log() 
ในรูปแบบนี้ "Notification has been sent to <email>"
<email> คืออีเมลของผู้รับ
*/


/*สร้าง Class ที่ชื่อว่า SMSNotification
มี Methods ทั้งหมด 2 ตัว
constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class 
โดยมี Property ดังนี้
notificationId คือตัวบ่งชี้ของ SMS ชุดนั้นเป็น String
createdTime คือเวลาที่ส่ง SMS เป็น String
content คือข้อความใน SMS เป็น String
phoneNumber คือเบอร์โทรศัพท์ของผู้รับเป็น String

send เป็น Method ที่ส่ง Notification ด้วย SMS ไปยังโทรศัพท์มือถือ 
โดยที่ให้ Log ข้อความว่า "Notification has been sent to <phoneNumber>"
<phoneNumber> นี้ให้ใส่เป็น Value ของ Property phoneNumber จริงๆ
*/