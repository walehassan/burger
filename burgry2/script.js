const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu'); 

dropdownToggle.addEventListener('mouseenter', function(){
    if(dropdownMenu.style.display === "none" || dropdownMenu.style.display === ''){
        dropdownMenu.style.display = 'block';
    }else {
        dropdownMenu.style.dispaly = 'none';
    }
})

// to close window when you click away from the page menu
window.addEventListener('mouseout', function(event){
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)){
        dropdownMenu.style.display = 'none';
    }
})



// write a function that closes the  dropdown menu window when you hover elsewhere