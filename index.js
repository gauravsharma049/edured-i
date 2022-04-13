
window.onscroll = function addclassname(){
    let newclass =  document.getElementById('navbar');
    newclass.addclassname = 'sticky-navbar';
    
    
    if(!dark){
        if(isTop()){
            newclass.style.backgroundColor = '#b8dde3';
            newclass.style.boxShadow = 'none';
            console.log("is at top");
        }
        
        if(window.scrollY >20){
            newclass.style.backgroundColor = 'white';
            newclass.style.boxShadow = '0px 2px 10px rgb(80, 89, 96)';
        }
        
    }


}


function isTop() {
    return window.pageYOffset == 0;
}
