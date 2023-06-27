﻿var current = null;
var id = 0;

class Node {
    constructor(qustion, left, right, parent) {
        this.qustion = qustion;
        this.left = left || null;
        this.right = right || null;
        this.parent = parent || null;
    }

    GetNext(answer) {
        if (answer) {
            return this.right;
        } else {
            return this.left;
        }
    }

    show() {
        
        var div_all = document.createElement("div");
        div_all.id = "q_"+id;

        var p = document.createElement("p");
        p.innerText = this.qustion;


        //var p2 = document.createElement("p2");
        //p2.innerText = this.qustion;



        p.className ="p_div";
        
        var div = document.createElement("div");
        div.className = "qustiondiv_iner";
        div.appendChild(p);

        var div_btn = document.createElement("div");
        div_btn.className = "qustiondiv_btn";


        div_all.appendChild(div);
        div_all.appendChild(div_btn);
        document.getElementById("qustiondiv").appendChild(div_all);

        var button_q = document.createElement("button");
        var button_q1 = document.createElement("button");

        let inerr_id = id;
        button_q.id = "YesAnswear"+id;
        button_q.className = "yesnobtn";
        button_q.type = "button";
        button_q.onclick = function() {answer(true, inerr_id);button_q.className="yesnobtnclicked";/*button_q.onclick = function() {};button_q1.onclick = function() {};*/};
        button_q.innerText = "כן"

        button_q1.id = "NoAnswear"+id;
        button_q1.className = "yesnobtn";
        button_q1.type = "button";
        button_q1.onclick  = function() {answer(false, inerr_id);button_q1.className="yesnobtnclicked";/*button_q1.onclick = function() {};button_q.onclick = function() {};*/};
        button_q1.innerText = "לא"

        if(this.right != null)
        {
            div_btn.appendChild(button_q);
        }
        if(this.left != null)
        {
            div_btn.appendChild(button_q1);
        }
        id++;
    }

    clear(id_in, qustion_answer)
    {

        var current_qustion = document.getElementById("q_"+(id-1));
        var desierd_qustion = document.getElementById("q_"+id_in);
        while((id-1) != id_in)
        {
            if (current.parent != null)
            {
                current = current.parent;
            }
            else
            {
                break;
            }
            console.log("id : "+ "q_"+(id-1));
            current_qustion.remove();
            id--;
            current_qustion = document.getElementById("q_"+(id-1));
        }

       
        let bt1 = document.getElementById("YesAnswear"+id_in);
        let bt2 = document.getElementById("NoAnswear"+id_in);
        console.log(bt1.className);
        console.log(bt2.className);
        if (qustion_answer)
        {
            bt1.className = "yesnobtnclicked";
            bt2.className = "yesnobtn";
        }else
        {
            bt1.className = "yesnobtn";
            bt2.className = "yesnobtnclicked";
        }
        console.log(bt1.className);
        console.log(bt2.className);


        console.log(current.qustion);
    }

    clearall()
    {
        var current_qustion;
        for(var i = 0 ; i < id ; i++)
        {
            current_qustion = document.getElementById("q_"+(i));
            current_qustion.remove();
        }
        id = 0;
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//לחץ יניקה גבוה
//function create_tree_1() {
  //  let q1 = new Node("האם שיחון יתר( Superheat) תקין? בצע בדיקה שטמפרטורת גז ביציאה (במד טמפרטורה) מהמאייד גבוהה ב- º 8 - º 5 מהטמפרטורה בשעון LP", null, null, null);
    //אם שאלה1 כן
    //let q2 = new Node("האם קירור יתר (subcooling) תקין?בצע בדיקה שטמפרטורה ביציאה (במד טמפרטורה) מהמעבה נמוכה ב- º 7 - º 4  מטמפרטורה בשעון HP", null, null, null);
    //אם שאלה1 לא
    //התשובה סופית
    //let q3 = new Node("חוסר בקרר", null, null, null);
    //אם שאלה 2 כן ולא
    //let q4 = new Node("האם לחץ דחיסה (HP) נמוך יחסית?", null, null, null);
    //אם כן תשובה סופית
    //let q5 = new Node("תקלה מכנית במדחס", null, null, null);
    //  אם לא צריך לעבור לעץ לחץ ראש גבוה
    //let q6 = create_tree_3();

    //q1.left = q3;
    //q1.right = q2;
    //q2.left = q4;
    //q2.right = q4;
    //q4.left = q6;
    //q4.right = q5;

//    q3.parent = q1;
//    q2.parent = q1;
//    q4.parent = q2;
//    q5.parent = q4;
//    q6.parent = q4;

//    return q1;
//}


//לחץ יניקה גבוה
function create_tree_1() {
   
    let q1 = new Node("האם לחץ דחיסה (HP) נמוך יחסית? מתורגם לטמפרטורת רווית הקרר בערכים נמוכים שבין  30ᵒC-40ᵒC", null, null, null);
    //אם שאלה 1 כן - תשובה סופית
    let q2 = new Node("תקלה מכנית במדחס/מערכת פריקת עומסים/משאבת חום", null, null, null);
    //  אם לא צריך לעבור לעץ לחץ לחץ יניקה גבוה
   let q3 = create_tree_2();

    q1.left = q3;
    q1.right = q2;
    //q2.left = q4;
    //q2.right = q4;
    //q4.left = q6;
    //q4.right = q5;

    q3.parent = q1;
    q2.parent = q1;

    return q1;
}

//לחץ יניקה נמוך
function create_tree_2() {
    //שאלת פתיחה
    let q1 = new Node("האם שיחון יתר תקין? בצע בדיקת שיחון יתר (Super Heat) בעזרת מד טמפרטורה ביציאת המאייד ושעון לחץ LP המתורגם לטמפרטורה של הקרר האם טמפרטורת הגז ביציאה של המאייד גבוהה מטמפרטורת רוויה שבשעון לחץ LP ערכים תקינים בין 5ᵒC ל-8ᵒC ( כן - אם גבוה מ- 8ᵒC | לא - אם נמוך מ-5ᵒC)", null, null);
    //
    //אם שאלה 1 היא לא
    let q2 = new Node(" ΔT אוויר תקין chiller ΔT (6ᵒC-10ᵒC) D.X מים תקין   (4ᵒC-6ᵒC)  ", null, null);
    //אם שאלה 2 היא לא
    let q3 = new Node("חוסר בזרימת אוויר על סוללת המאייד D.X  או חוסר זרימת מים (chiller)", null, null);
    //אם שאלה 2 היא כן 
    let q4 = new Node("מאייד מלוכלך או שהחלפת החום ירודה", null, null);
    //אם שאלה 1 היא כן
    let q5 = new Node("בדיקת קירור יתר (subcooling), האם טמפרטורת הנוזל נמוכה מטמפרטורת הרוויה שבשעון לחץ HP? בצע בדיקה שטמפרטורה ביציאת המעבה נמוכה ב-4ᵒC -7ᵒC מטמפרטורה בשעון HP ( כן - אם גבוה מ-4ᵒC | לא - אם נמוך מ-3ᵒC)", null, null);
        //אם שאלה 5 היא כן
    let q6 = new Node("האם Δθ בקו הנוזל תקין?בצע בדיקה ש- ΔT  בין היציאה מהמעבה לטמפרטורה בכניסה לשסתום ההתפשטות אינו גדול מ- º 2", null, null);
    //אם שאלה 5 היא לא 
    let q7 = new Node("חוסר בקרר ", null, null);
    //אם שאלה 6 היא כן 
    let q8 = new Node("התפשטות מוקדמת בקו נוזל, החלף מסנן ", null, null);
     //אם שאלה 6 היא לא 
    let q9 = new Node(" תקלה בשסתום ההתפשטות", null, null);
    
   
    q1.left = q2;
    q1.right = q5;
    q2.left = q3;
    q2.right = q4;
    q5.left = q7;
    q5.right = q6;
    q6.left =q9 ;
    q6.right = q8;
 


   
    q2.parent=q1;
    q5.parent=q1;
    q3.parent=q2;
    q4.parent=q2;
    q7.parent=q5;
    q6.parent=q5;
    q9.parent=q6 ;
    q8.parent=q6;

    

    return q1;
}


//לחץ ראש גבוה
function create_tree_3() {
    let q1 = new Node("האם קירור יתר (subcooling) תקין? בצע בדיקה שטמפרטורה ביציאה מהמעבה נמוכה ב- º4 - º7 מטמפרטורה בשעון HP *קירור יתר גבוה יכול להצביע על עודף קרר", null, null);
    //אם שאלה 1 כן
    //
    let q2 = new Node(" האם קיימים גזים בלתי מעובים? (אוויר, חנקן) בצע בדיקה כאשר מדחס מופסק, בדוק אם קיים הפרש בין טמפרטורת הסביבה לטמפרטורת הקרר שתורגם מהלחץ שבשעון ", null, null);
    //אם שאלה 2 היא כן
    let q3 = new Node("קיימים בלתי מעובים", null, null);
    //אם שאלה 2 היא לא 
    let q4 = new Node("עודף בקרר ", null, null);
 //אם שאלה 1 היא לא
    let q5 = new Node("האם Δθ על האוויר קטן? ירידת תפוקה של מעבה ", null, null);
//בהכרח בא אחרי אין כן או לא
    //let q6 = new Node("האם Δθ על האוויר קטן?", null, null);
 //אם שאלה 6 היא כן
    let q7 = new Node("מעבה מלוכלך או שהחלפת החום של המעבה ירודה ", null, null);
 //אם שאלה 6 היא לא
    let q8 = new Node("חוסר זרימת אוויר על סוללת המעבה ΔT אוויר תקין בין  ΔT 5ᵒC-10ᵒ מים תקין בין  4.5ᵒC-5.5ᵒC      ", null, null);
    



    q1.left = q5;
    q1.right = q2;
    q2.left = q4;
    q2.right = q3;
    //q5.left = q6;
   // q5.right = q6;
    q5.left = q8;
    q5.right = q7;

    q5.parent = q1;
    q2.parent = q1;
    q4.parent = q2;
    q3.parent = q2;
    //q6.parent = q5;
    q7.parent = q5;
    q8.parent = q5;



    return q1;
}

function onloadpage(id_in) {

    if (current != null) {

        current.clearall();

    }

    if (id_in == "Tree1") {
        current = create_tree_1();
        title = document.getElementById("swiping_title");
        title.innerText = "לחץ יניקה (LP) גבוה";
        p = document.getElementById("swiping_p");
        p.innerText = "לחץ יניקה LP מתורגם לטמפרטורת רוויה של הקרר גבוה מ - 10°";
        //p2.innerText = "ענו על השאלות בהתאם לבדיקות ואתרו את התקלה"

    } else if (id_in == "Tree2") {
        current = create_tree_2();
        title = document.getElementById("swiping_title");
        title.innerText = "לחץ יניקה (LP) נמוך";
        p = document.getElementById("swiping_p");
        p.innerText = "טמפרטורת איוד תקין 4ᵒC + (-/+2)";
        //p2.innerText = "ענו על השאלות בהתאם לבדיקות ואתרו את התקלה"


    } else if (id_in == "Tree3") {
        current = create_tree_3();
        title = document.getElementById("swiping_title");
        title.innerText = "לחץ ראש/דחיסה גבוה (HP)";
        p = document.getElementById("swiping_p");
        p.innerText = "ערכים תקינים לחץ ראש גבוה HP המתורגם לטמפרטורת הקרר. 45ᵒC-55ᵒC (עיבוי אוויר) 35ᵒC-45ᵒC (עיבוי מים)";
        //p2.innerText = "ענו על השאלות בהתאם לבדיקות ואתרו את התקלה";
    }
    console.log(id);
    current.show();
    console.log(current.qustion);
    // document.getElementById("1").style.display = "none";
    // document.getElementById("2").style.display = "none";
    // document.getElementById("3").style.display = "none";
    document.getElementById("qustiondiv").style.display = "block";
    // document.getElementById("back").style.display = "initial";



}

function onloadpage_1() {
    window.scrollBy(0, 260);
    document.getElementById("qustiondiv").style.display = "none";
    //document.getElementById("back").style.display = "none";

}

function answer(qustion_answer, id_in) {
    console.log("id_in: "+id_in);
    console.log("remove id: "+ (id-1));
    if(id_in < id-1)// the qustion is alrady answerd 
    { 
        console.log("inside");
        current.clear(id_in,qustion_answer);
    }
    let temp = current.GetNext(qustion_answer);
    if (temp != null) {
        current = temp;
        current.show();
    }

}

//function login() {
//    var username = document.getElementById("username").value;
//    var password = document.getElementById("password").value;
//    if (username === "Telem" && password === "1234") {
//        window.location.href = "http://localhost:64152/LandingPage.html"; // redirect to landing page
//       /* document.getElementById("message").innerHTML = "Login successful";*/
//        // redirect to the desired page
//    } else {
//        document.getElementById("message").innerHTML = "שם משתמש או סיסמה לא חוקיים";
//    }
//}

//function TooltipOpen() {
//    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//        return new bootstrap.Tooltip(tooltipTriggerEl)
//    })
//    console.log('The Script will load now.');
//}




