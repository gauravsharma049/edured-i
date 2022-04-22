let i = 1;
let newParaAdded = 0;
let currentId = 1;
let elementDeleted = false;

function addTopic() {
    let topicText = document.getElementById('topic').value;
    let topicDescriptionText = document.getElementById('topicDescription').value;
    let headingText = document.getElementById('heading').value;
    let headingExplainText = document.getElementById('explainHeading').value;




    let node1 = document.createElement('div');
    let topic = document.createElement('h1');
    let topicDescription = document.createElement('p');
    let heading = document.createElement('h2');
    let headingExplain = document.createElement('p');

    node1.className = 'loadContent';
    topic.className = 'main-topic';
    topicDescription.className = 'explain-topic';
    heading.className = 'subtopic';
    headingExplain.className = 'explain-topic';

    topic.innerHTML = topicText;
    topicDescription.innerHTML = topicDescriptionText;
    heading.innerHTML = headingText;
    headingExplain.innerHTML = headingExplainText;


    node1.appendChild(topic);
    node1.appendChild(topicDescription);
    node1.appendChild(heading);
    node1.appendChild(headingExplain);
    let elem = [];
    let elemValue = [];
    let newId;
    if (newParaAdded > 0) {
        console.log('hi');
        for (let j = 0; j < currentId - 1; j++) {
            newId = 'paragraph' + (j + 1);
            console.log('not working');
            elemValue[j] = document.getElementById(newId).value;
            elem[j] = document.createElement('p');
            elem[j].className = 'explain-topic';
            elem[j].innerHTML = elemValue[j];
            node1.appendChild(elem[j]);
        }
    }
    var w = window.open('http://127.0.0.1:5501/parts/lessons.html');
    w.onload = function () {
        var p_prime = node1.cloneNode(true);
        let pageLoader = document.getElementById('courseContent');
        // w.document.body.appendChild(p_prime);
        w.document.getElementById('courseContent').appendChild(p_prime);
    };


    // w.document.body.appendChild(node1);
    // document.body.appendChild(node1);
    console.log(topicText);

}


function addPara() {
    newParaAdded++;
    let paragraphTemplate = `<div id="addtext${currentId}">
                                <textarea name="" class="paragraph-textarea" id="paragraph${currentId}" placeholder="paragraph ${currentId}"></textarea>
                                <button onclick="deleteElement('addtext'+${currentId})">delete</button>
                             </div>
                            `
    document.getElementById("postBtn").insertAdjacentHTML("beforebegin", paragraphTemplate);
    console.log(currentId);
    currentId++;
}

function deleteElement(id) {
    let text = 'Are you sure want to delete ?'
    if (confirm(text) == true) {
        document.getElementById(id).remove();
        elementDeleted = true;
        currentId--;
    }
    console.log(currentId);
}