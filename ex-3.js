//  Start coding here
/*
ให้สร้าง Class โดยที่ Class ต้องมี Property และ Methods 
ให้รองรับการใช้งานเว็บไซต์ Facebook 

รายละเอียดในส่วน User Requirement มีดังนี้

ผู้ใช้งานสามารถสร้างโพสต์ใหม่

ผู้ใช้งานสามารถแชร์ไปให้เพื่อนๆ ได้

ผู้ใช้งานสามารถเพิ่มคอมเม้นต์ลงในโพสต์ได้ แล้วก็สามารถที่จะไลค์คอมเม้นต์ได้

ผู้ใช้งานสามารถที่จะสร้างกลุ่มหรือเพจได้

ระบบสามารถส่ง Notification ไปหาผู้ใช้งานเวลามีข้อความใหม่ๆ 
หรือเวลาที่เพื่อนคอมเม้นต์มาที่โพสต์ของผู้ใช้งาน 


รายละเอียดในส่วน Technical Requirement มีดังนี้

ตัว Class User มีรายละเอียดดังนี้
มี Methods ทั้งหมด 1 ตัว
constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class 
โดยมี Property ดังนี้
id คือตัวบ่งชี้ของผู้ใช้นั้นเป็น String
name คือชื่อของผู้ใช้เป็น String
email คืออีเมลของผู้ใช้เป็น String
*/
class User{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}


/*
ตัว Class postList มีรายละเอียดดังนี้
มี Methods ทั้งหมด 1 ตัว
constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class 
โดยมี Property ดังนี้
posts เป็น Array ของ Object Post
addPost เป็น Method ที่สามารถเพิ่ม Post เข้าไปใน posts
sharePost เป็น Method ที่สามารถแสดงผล title ของ Post ได้
แสดงผลข้อความออกมาทางหน้าจอด้วย console.log() ในข้อความรูปแบบนี้
You've shared post “<post-title>” to your friend.
<post-title> คือหัวข้อของ Post
*/
class postList{
    constructor(posts){
        this.posts = posts;
    }
    addPost(newPost){
        this.posts.push(newPost);
    }
    sharePost(post){
        let postTitle = post.split("\n")[0];
        console.log(`You've shared post ${postTitle}.`);
    }
}

let CurrentPosts = new postList(["Hello\nHello World and Hi Python", "Hello\nHello World and Hi Python3"]);
const JanesNewPost = "HelloJS\nHello World and Hi JavaScript";
CurrentPosts.addPost(JanesNewPost);
//ผู้ใช้งานสามารถสร้างโพสต์ใหม่
console.log(CurrentPosts);

CurrentPosts.sharePost(JanesNewPost);
//ผู้ใช้งานสามารถแชร์ไปให้เพื่อนๆ ได้
/*
ตัว Class Post มีรายละเอียดดังนี้
มี Methods ทั้งหมด 2 ตัว
constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class 
โดยมี Property ดังนี้
id คือตัวบ่งชี้ของ Post นั้นเป็น String
title คือหัวข้อของ Post นั้นเป็น String
content คือข้อความของ Post นั้นเป็น String
comment คือคอมเมนต์ใน Post เป็น Array
addComment เป็น Method ที่สามารถเพิ่มคอมเมนต์เข้าไปใน comment ของPostนั้นๆได้
*/
class Post{
    constructor(id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = comment;
    }
    addComment(newcommenttext){
        this.comment.push(newcommenttext);
    }
}

const currentPostComments = new Post("000026265954", "Welcome back Janes", "Everyone please greeting with Janes",["Good morning", "Hi,", "Hello friend"]);
currentPostComments.addComment("Good bye, Janes");
console.log(currentPostComments);
//ผู้ใช้งานสามารถเพิ่มคอมเม้นต์ลงในโพสต์ได้ 

/*
ตัว Class Comment มีรายละเอียดดังนี้
มี Methods ทั้งหมด 2 ตัว
constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class 
โดยมี Property ดังนี้
id คือตัวบ่งชี้ของคอมเมนต์นั้นเป็น String
content คือข้อความของคอมเมนต์นั้นเป็น String
createdBy คือชื่อของคอมเมนต์เป็น String
like คือจำนวนไลค์มีค่าเริ่มต้นเป็น 0
addLike เป็น Method ที่สามารถเพิ่มไลค์เข้าไปใน like ของคอมเมนต์นั้นๆได้ 
(เพิ่มทีละ 1)
*/
class Comment extends Post{
    constructor(commentid, commentcontent, createdBy, like, id, title, content) {
        super(id, title, content);
        this.commentid = commentid;
        this.commentcontent = commentcontent;
        this.createdBy = createdBy;
        this.like = like;
    }
    addlike(){
        this.like += 1;
    }
}

const currentComments = new Comment("0000326544499", "Good bye, Janes", "Mario", 55, "000026265954", "Welcome back Janes", "Everyone please greeting with Janes");
currentComments.addlike();
console.log(currentComments);
//ผู้ใช้สามารถที่จะไลค์คอมเม้นต์ได้

/*
ตัว Class Facebook มีรายละเอียดดังนี้
มี Methods ทั้งหมด 2 ตัว
constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class 
โดยมี Property ดังนี้
groupList เป็น Array ของ Facebook Group
pageList เป็น Array ของ Facebook Page
addGroup เป็น Method ที่สามารถเพิ่ม Facebook Group เข้าไปใน groupList 
(เพิ่มทีละ 1)
addPage เป็น Method ที่สามารถเพิ่ม Facebook Page เข้าไปใน pageList 
(เพิ่มทีละ 1)
*/
class Facebook{
    constructor(groupList, pageList) {
        this.groupList = groupList;
        this.pageList = pageList;
    }
    addGroup(newFBGroupName){
        this.groupList.push(newFBGroupName);
    }
    addPage(newFBPageName){
        this.pageList.push(newFBPageName);
    }
}

const currentgrouplistpagelist = new Facebook(['กลุ่มกำนัน','กลุ่มผู้ใหญ่บ้าน','ชมรมคนเลี้ยงปลา'],['ของประดับยานยนต์','ร้านคาเฟ่','Merciless Bolt']);

currentgrouplistpagelist.addGroup('Chinese restaurants group');

currentgrouplistpagelist.addPage('Accountant Federation page');
currentgrouplistpagelist.addPage('Iph 90 page');
//ผู้ใช้งานสามารถที่จะสร้างกลุ่มหรือเพจได้

console.log(currentgrouplistpagelist);


/*
ตัว Class FacebookPage มีรายละเอียดดังนี้
มี Methods ทั้งหมด 1 ตัว
constructor เป็น Method ที่สามารถ Set ค่าเริ่มต้นให้กับ Property ใน Class 
โดยมี Property ดังนี้
name คือชื่อของ Facebook Page เป็น String
*/
class FacebookPage{
    constructor(name){
        this.name = name;
    }
}


/*
ตัว Class FacebookGroup มีรายละเอียดดังนี้
มี Methods ทั้งหมด 1 ตัว
constructor เป็น Method ที่สามารถ Set ค่าเริ่มต้นให้กับ Property ใน Class 
โดยมี Property ดังนี้
name คือชื่อของ Facebook Group เป็น String
*/
class FacebookGroup{
    constructor(name){
        this.name = name;
    }
}

/*
ตัว Class Notification มีรายละเอียดดังนี้
มี Methods ทั้งหมด 2 ตัว
constructor เป็น Method ที่สามารถ Set ค่าเริ่มต้นให้กับ Property ใน Class 
โดยมี Property ดังนี้
id คือตัวบ่งชี้ของ Notification เป็น String
send เป็น Method ที่สามารถแสดงผล Notification ของ Post ได้
แสดงผลข้อความออกมาทางหน้าจอด้วย console.log() ในข้อความรูปแบบนี้
Notification: <comment-createdBy> has just commented on this post—"<post-title>”
<comment-createdBy> คือชื่อของผู้คอมเมนต์
<post-title> คือหัวข้อของ Post
*/

class Notification extends Comment{
    constructor(commentid, commentcontent, createdBy, like, id, title, content, idNoti) {
        super(commentid, commentcontent, createdBy, like, id, title, content);
        this.idNoti = idNoti;
    }
    send(){
        //console.log(this.createdBy);
        //console.log(this.title);
        console.log(`Notification: <comment-${this.createdBy}> has just commented on this post—"<${this.title}>`);
    }
}

const notiMSGMario = new Notification("0000326544499", "Good bye, Janes", "Mario", 55, "026265954", "Welcome back Janes", "Everyone please greeting with Janes", "N26529916");

notiMSGMario.send();

/*ระบบสามารถส่ง Notification ไปหาผู้ใช้งานเวลามีข้อความใหม่ๆ 
หรือเวลาที่เพื่อนคอมเม้นต์มาที่โพสต์ของผู้ใช้งาน */