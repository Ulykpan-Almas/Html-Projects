users = [

  {"id": 1, "name": "BBC", "des": "While the speedy development of multiple vaccines has offered reason for hope of more normal life after the coronavirus pandemic, a brewing vaccination fight is just one example of how managing this public-health crisis in the coming months will not be an easy task for the Biden administration.", "rating":8.1},
  {"id": 2, "name": "CNN", "des": "While the speedy development of multiple vaccines has offered reason for hope of more normal life after the coronavirus pandemic, a brewing vaccination fight is just one example of how managing this public-health crisis in the coming months will not be an easy task for the Biden administration.", "rating":8.1},
  {"id": 3, "name": "BBB", "des": "While the speedy development of multiple vaccines has offered reason for hope of more normal life after the coronavirus pandemic, a brewing vaccination fight is just one example of how managing this public-health crisis in the coming months will not be an easy task for the Biden administration.", "rating":8.1},
  {"id": 4, "name": "TAC", "des": "While the speedy development of multiple vaccines has offered reason for hope of more normal life after the coronavirus pandemic, a brewing vaccination fight is just one example of how managing this public-health crisis in the coming months will not be an easy task for the Biden administration.", "rating":8.1},
  {"id": 5, "name": "NEWS", "des": "While the speedy development of multiple vaccines has offered reason for hope of more normal life after the coronavirus pandemic, a brewing vaccination fight is just one example of how managing this public-health crisis in the coming months will not be an easy task for the Biden administration.", "rating":8.1},
  {"id": 6, "name": "PAPER", "des": "While the speedy development of multiple vaccines has offered reason for hope of more normal life after the coronavirus pandemic, a brewing vaccination fight is just one example of how managing this public-health crisis in the coming months will not be an easy task for the Biden administration.", "rating":8.1},
  {"id": 7, "name": "CNN", "des": "While the speedy development of multiple vaccines has offered reason for hope of more normal life after the coronavirus pandemic, a brewing vaccination fight is just one example of how managing this public-health crisis in the coming months will not be an easy task for the Biden administration.", "rating":8.1}

];

idIndex = 8;

editUserIndex = -1;

function loadData() {
  
  htmlContent = "";

  for(i=0;i<users.length;i++){
    htmlContent+="<tr>";
    htmlContent+="<td>"+users[i]["id"]+"</td>";
    htmlContent+="<td>"+users[i]["name"]+"</td>";
    htmlContent+="<td>"+users[i]["des"]+"</td>";
    htmlContent+="<td>"+users[i]["rating"]+"</td>";
    htmlContent+="<td><button class = 'btn btn-primary btn-sm mr-0' onclick = 'editUserModal("+i+")'>EDIT</button><button class = 'btn btn-danger btn-sm m-1' onclick = 'deleteUser()'>DELETE</button></td>";
  
    htmlContent+="</tr>";
  }

  document.getElementById("tableBody").innerHTML = htmlContent;

}

function addNewModal(){

  $('#addUserModal').modal('show');

}

function addUser(){

  userName = document.getElementById("addUserName").value;
  userSurname = document.getElementById("addUserDes").value;
  userAge = document.getElementById("addUserRat").value;

  users.push({
    "id": idIndex,
    "name": userName,
    "des": userSurname,
    "rating": userAge
  });

  idIndex++;

  loadData();

  $('#addUserModal').modal('hide');

  document.getElementById("addUserName").value = "";
  document.getElementById("addUserDes").value = "";
  document.getElementById("addUserRat").value = "0";

}

function editUserModal(index){

  document.getElementById("editUserName").value = users[index]["name"];
  document.getElementById("editUserDes").value = users[index]["des"];
  document.getElementById("editUserRat").value = users[index]["rating"];

  editUserIndex = index;

  $("#editUserModal").modal('show');

}

function saveUser(){

  users[editUserIndex]["name"] = document.getElementById("editUserName").value;
  users[editUserIndex]["des"] = document.getElementById("editUserDes").value;
  users[editUserIndex]["rating"] = document.getElementById("editUserRat").value;

  loadData();

  $("#editUserModal").modal('hide');

}

function deleteUser(){

  tmpArr = [];

  for(i=0;i<users.length;i++){
    if(i!=editUserIndex){
      tmpArr.push(users[i]);
    }
  }

  users = tmpArr;

  loadData();
}




