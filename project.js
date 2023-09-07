// get books status
var bookName = document.getElementById('bookName');
var bookCatigory = document.getElementById('bookCatigory');
var bookNumber = document.getElementById('bookNumber');
var bookPrice = document.getElementById('bookPrice');
var bookDescription = document.getElementById('bookDescription');
var bookBook = document.getElementById('bookBook');
var bookReturn = document.getElementById('bookReturn');
var Submit = document.getElementById('Submit');
var Clear = document.getElementById('Clear');
var search = document.getElementById('search');
var deleteAll = document.getElementById('deleteAll');
var tbody = document.getElementById('tbody');
var tfoot = document.getElementById('tfoot');
var bookCount = document.getElementById('bookCount');
var Books;
var index;

if(localStorage.getItem('Books')){
    Books= JSON.parse(localStorage.getItem('Books'));
    displayData(); 
}
else
Books = [];

if(localStorage.getItem('totalPrice')){
  totalPrice= JSON.parse(localStorage.getItem('totalPrice'));
  sumPrice(); 
}
else
totalPrice = 0;

Submit.onclick = function(event){
    if(Submit.value == "Submit" && bookCount.value == 1){
    event.preventDefault();
    createOrder();
    PrintData();

    }

    else if(Submit.value == "Submit" && bookCount.value>1){
        event.preventDefault();
        booksCount();
        PrintData();
        displayData();
        sumPrice()
        clearData();
    }
    else if(Submit.value == "Submit" && bookCount.value<1){
        event.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your books count',
          })
    }

    else{
        event.preventDefault();
        updateData(index);
    }

     bookName.classList.remove('is-valid');
     bookCatigory.classList.remove('is-valid');
     bookNumber.classList.remove('is-valid');
     bookPrice.classList.remove('is-valid');
     bookDescription.classList.remove('is-valid');
     bookBook.classList.remove('is-valid'); 
     bookReturn.classList.remove('is-valid');

}




    Books[i]=book;



  //search
  search.onkeyup = function(){
    var data="";
    for(var i=0 ; i<Books.length ; i++){
    if(courses[i].bookName.toLowerCase().includes(search.value.toLowerCase())){
data+=`
<tr>
    <td>${i+1}</td>
    <td>${Books[i].bookName}</td>
    <td>${Books[i].bookCatigory}</td>
    <td>${Books[i].bookNumber}</td>
    <td>${Books[i].bookPrice}</td>
    <td>${Books[i].bookDescription}</td>
    <td>${Books[i].bookBook}</td>
    <td>${Books[i].bookReturn}</td>
    <td> <button class="btn btn-info" onclick="getCourse(${i})">Update</button> </td> 
    <td> <button class="btn btn-danger" onclick="deleteCourse(${i})">Delete</button> </td>
</tr>
`
tbody.innerHTML = data;
    }
    }
}

