const questionDisplay = document.querySelector('#questions');;
const answerDisplay = document.querySelector('#answer');

const  questions = [
    {
        id:0,
        question:"Pick some food",
        answers:[
            {text:"Pizza",
            image:"https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            alt :"photo of New York Empire State Building ",
            credit:"Oliver Nibert"
        },
        
        {
            text:"Sandwich",
            image:"https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            alt:"Picture of cars on time-lapse bridge",
            credit:"Joel jee"
        },

        {
            text:"Pasta",
            image:"https://plus.unsplash.com/premium_photo-1664472655781-3a2abd8caad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFzdGElMjB3aXRoJTIwdG9tYXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            alt:"Highrise building",
            credit:"Joe Austin"
        },

        {
            text:"Ham Burger",
            image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFtYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            alt:"Road with people and house ",
            credit:"James Bond"
        }
        ]
    },
    {
        id:1,
        question:"Pick a vacation destination",
        answers:[
            {text:"New York",
            image:"https://images.unsplash.com/photo-1620545391948-8a4e666ddc3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGljdHVyZSUyMG9mJTIwdGhlJTIwZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZyUyME5ldyUyMFlvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            alt :"photo of New York Empire State Building ",
            credit:"Oliver Nibert"
        },
        
        {
            text:"Austin",
            image:"https://images.unsplash.com/photo-1520950237264-dfe336995c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGluJTIwdGltZSUyMGxhcHNlJTIwYnJpZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            alt:"Picture of cars on time-lapse bridge",
            credit:"Joel jee"
        },

        {
            text:"Portland",
            image:"https://images.unsplash.com/photo-1530891671629-3a053324e4f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXMlMjBvZiUyMHBvcnRsYW5kJTIwYnJpZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            alt:"Highrise building",
            credit:"Joe Austin"
        },

        {
            text:"New Orleans",
            image:"https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljdHVyZXMlMjBvZiUyMG5pY2UlMjBwbGFjZXMlMjBpbiUyMG5ldyUyME9ybGVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            alt:"Road with people and house ",
            credit:"James Bond"
        }
        ]
    },
    {
        id:2,
        question:"Pick a home this time!",
        answers:[
            {text:"Traditional Home",
            image:"https://images.unsplash.com/photo-1523760957528-55d1d540360d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWRpdGlvbmFsJTIwJTIwaHV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            alt :"photo of New York Empire State Building ",
            credit:"Oliver Nibert"
        },
        
        {
            text:"Modern Home",
            image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt:"Picture of cars on time-lapse bridge",
            credit:"Joel jee"
        },

        {
            text:"Actual House with a garden",
            image:"https://images.unsplash.com/photo-1590291127104-4402e279523d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlJTIwd2l0aCUyMGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt:"Highrise building",
            credit:"Joe Austin"
        },

        {
            text:"Mountains",
            image:"https://images.unsplash.com/photo-1537197518227-a36efeafd477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhYmluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt:"Road with people and house ",
            credit:"James Bond"
        }
        ]
    }
]

const answers = [
    {
        combination:["New York"," Pizza", "Traditional Home"],
        text:"Blue cheese",
        image:"https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" ,
        alt:"blue cheese"

    },
    {
        combination:["Austin"," Pasta", "Modern Home"],
        text:"Cheddar",
        image:"https://images.unsplash.com/photo-1618164435735-413d3b066c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZGRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" ,
        alt:"Cheddar"

    },
    {
        combination:["Portland","Sandwich", "Mountains"],
        text:"Feta",
        image:"https://images.unsplash.com/photo-1605092338945-dd32028c031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmV0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" ,
        alt:"Feta"

    },
    {
        combination:["New Orleans","Ham burger", "House"],
        text:"Halloumi",
        image:"https://media.istockphoto.com/id/483205524/photo/fresh-sliced-halloumi.webp?b=1&s=170667a&w=0&k=20&c=dWjqqvHVoU-610hK2l0miSqgcMfhUeLpCFl6QfCwkwo=" ,
        alt:"Halloumi"

    }
]

//new to have a default answer to compensate for lack of result

const unAnsweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () =>{
    questions.forEach(item => {
        const titleBlock = document.createElement('div');
        titleBlock.id = item.id;
        titleBlock.classList.add('title-block');//making a class
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = item.question;
        //always append to the element that you want to find it in
        titleBlock.append(titleHeading);
        //put it into the questionsDisplay
        questionDisplay.append(titleBlock);
        const answersBlock = document.createElement('div');
        answersBlock.id = item.id + "-questions";
        answersBlock.classList.add("answer-options");
        unAnsweredQuestions.push(item.id);


        item.answers.forEach(answer =>{
            const answerBlock = document.createElement('div');
            answerBlock.classList.add("answer-block");
            answerBlock.addEventListener('click',()=>handleClick(item.id,answer.text));
            const answerImage = document.createElement('img');
            answerImage.setAttribute('src', answer.image);
            answerImage.setAttribute('alt',answer.alt);
            
            const answerTile = document.createElement('h3')
            answerTile.textContent = answer.text

            const answerInfo = document.createElement('p');
            const imageLink = document.createElement('a');
            imageLink.setAttribute('href',answer.credit);
            imageLink.textContent = answer.credit
            const source = document.createElement('a');
            source.textContent = 'UnSplash';
            source.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink,' to ',source)

            answerBlock.append(answerImage,answerTile,answerInfo);
            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock);

    })
}
populateQuestions();

const handleClick = (questionId,chosenAnswer) => {
if(unAnsweredQuestions.includes(questionId)){
    chosenAnswers.push(chosenAnswer);
    const itemToRemove = unAnsweredQuestions.indexOf(questionId);

    if(itemToRemove > -1){
        unAnsweredQuestions.splice(itemToRemove,1);
    }
}
console.log(chosenAnswers)
console.log(unAnsweredQuestions)

disableQuestionBlock(questionId,chosenAnswer);
//scroll to top most unanswered
const lowestQuestionId = Math.min(...unAnsweredQuestions);
location.href = '#' +  lowestQuestionId;

if(!unAnsweredQuestions.length){
    //scroll to answer div
    location.href = '#answer';
    showAnswer();
}
}

const showAnswer = () =>{
let result
answers.forEach(answer =>{
    if(
    chosenAnswers.includes(answer.combination[0])+
    chosenAnswers.includes(answer.combination[1])+
    chosenAnswers.includes(answer.combination[2])
    ) {
        result = answer;
        return;
    }
    else if (!result){
        result = answers[0];
    }

})
    console.log(result);

    const answerBlock = document.createElement('div');
    answerBlock.classList.add('result-block');
    const answerTitle = document.createElement('h3');
    answerTitle.textContent = result.text;
    const answerImage = document.createElement('img');
    answerImage.setAttribute('src', result.image);
    answerImage.setAttribute('alt',result.alt);

    answerBlock.append(answerTitle,answerImage)
    answerDisplay.append(answerBlock);

    const allAnswerBlocks = document.querySelectorAll('.answer-block');
    Array.from(allAnswerBlocks).forEach(answerBlock =>{
        answerBlock.replaceWith(answerBlock.cloneNode(true))
    })
}

const disableQuestionBlock = (questionId, chosenAnswer) =>{
    const currentQuestions = document.getElementById(questionId + "-questions");
    Array.from(currentQuestions.children).forEach(block =>{
        if(block.children.item(1).innerText != chosenAnswer){
            block.style.opacity = '50%';
            console.log("im here")
        }
    })
}