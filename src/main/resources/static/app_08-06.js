// $(async function () {
//     await getTableWithUsers();
//     //getNewUserForm();
//     getDefaultModal();
//     addNewUser();
// })
//
// const userFetchService = {
//     head: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Referer': null
//     },
//     // bodyAdd : async function(user) {return {'method': 'POST', 'headers': this.head, 'body': user}},
//     findAllUsers: async () => await fetch('/admin/test'),
//     findAllRoles: async () => await fetch('/admin/test/roles'),
//     findOneUser: async (id) => await fetch(`/users-update/${id}/edit`),
//     // addNewUser: async (user) => await fetch('/users-add', {method: 'POST', headers: userFetchService.head, body: JSON.stringify(user)}),
//     //addNewUser: async (user) => await fetch('/users-add'),
//
//     updateUser: async (user, id) => {
//         console.log(`123 ${JSON.stringify(user)}`,id);
//         return await fetch(`/users-update/${id}`, {method: 'PUT', headers: userFetchService.head, body: JSON.stringify(user)})
//     },
//
//     //08-06
//     addNewUser: async (user) => await fetch('/users-add', {method: 'POST', headers: userFetchService.head, body: JSON.stringify(user)}),
//
//     // addNewUser: async (user) => {
//     //     console.log(`123 ${JSON.stringify(user)}`);
//     //     return await fetch(`/users-add`, {method: 'POST', headers: userFetchService.head, body: JSON.stringify(user)})
//     // },
//
//     // updateUser: async (user, id) => {
//     //     $.post(`/users-update11/${id}`, user, function(response){
//     //         console.log(response);
//     //     });
//     // },
//
//     // updateUser: async (user, id) => {
//     //     $.get(`/users-update11/${id}`, function(response){
//     //         console.log(response);
//     //     });
//     // },
//
//
//     deleteUser: async (id) => await fetch(`users-delete/${id}`, {method: 'GET', headers: userFetchService.head})
// }
//
// //31-05 allusers
// async function getTableWithUsers() {
//     let table = $('#mainTableWithUsers tbody');     //в html ищет этот тег и вставляет инфу в tbody
//     table.empty();
//
//     await userFetchService.findAllUsers()
//         .then(res => res.json())
//
//         //06-06
//         // .then(userDTOs => {
//         //     userDTOs.forEach(user => {
//         //         let dataArray = user.role;
//         //          for(let o in dataObject) {
//         //              dataArray.push(dataObject[o]);
//         //          }
//         //     })
//
//
//         .then(userDTOs => {
//             userDTOs.forEach(user => {
//
//                 //06-06
//                 // let dataArray = user.role;
//                 // for(let o in dataArray) {
//                 //     //dataArray.push(user.dataArray[o]);
//                 //     alert(dataArray[o]);
//                 // }
//
//                 //06-06
//                 //let  arr = ["I", "go", "home", "qqw","I", "go", "home", "qqw","I", "go", "home", "qqw"];
//                 let arr = user.role;
//                 console.log(arr[0]);
//                 // console.log(arr.length);
//                 // console.log(arr[0]);
//                 // ["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
//                 // arr.forEach((item, index, array) => {
//                 //     console.log(`${item} имеет позицию ${index} в ${array}`);
//                 // });
//
//                 // let tooth = {
//                 //     statusList123: [
//                 //         {id: 1, code: "G", "decode": "Здоров"},
//                 //         {id: 2, code: "S", "decode": "Пломба"},
//                 //         {id: 3, code: "C", "decode": "Коронка"},
//                 //         {id: 4, code: "I", "decode": "Искусственный зуб"},
//                 //     ]
//                 // };
//
//                 //06-06 вытаскиваем из сета нужный нам элемент
//                 //foreach работает только в области действия переменной
//                 //если нужно вытащить элемент внутри элемента - надо делать два уровня форича
//                 arr.map(role => {
//                     console.log(`id: ${role.id}, name: ${role.name}`);
//
//                     //html code
//                     let tableFilling2 = `$(
//                         <tr>
//                             <td>${user.id}</td>
//                             <td>${user.name}</td>
//                             <td>${user.job}</td>
//                             <td>${user.age}</td>
//                             <!--06-06 вывод СЕТА РОЛЕЙ! Нужно вытащить конкретную роль-->
//                             <td>${role.name}</td>
//
//                             <!--<td></td>-->
//                             <td>
//                             <!--рабочая кнопка-->
//                              <!--<button type="button" data-userid="${user.id}" data-action="edit" class="btn btn-info btn-sm"
//                                 data-bs-toggle="modal" data-bs-target="#editgsdvcdscsdcs">Edit3</button>-->
//
//                             <!--01-06 пример-->
//                             <button type="button" data-userid="${user.id}" data-action="edit" class="btn btn-info btn-sm"
//                                 data-toggle="modal" style="color: #ffffff" data-target="#someDefaultModal">Edit</button>
//
//                             </td>
//                             <td>
//                             <!--02-06 кнопка Delete-->
//                             <button type="button" data-userid="${user.id}" data-action="delete1" class="btn btn-danger btn-sm"
//                                 data-toggle="modal" data-target="#someDefaultModal">Delete</button>
//                             </td>
//
//
//
//
//                         </tr>
//                     )`;
//                     table.append(tableFilling2);
//                 });
//
//                 // let tableFilling = `$(
//                 //
//                 // )`;
//                 // table.append(tableFilling);
//             })
//         })
//
//     // //05-06  ROLES
//     // await userFetchService.findAllRoles()
//     //     .then(res => res.json())
//     //     .then(roleDTOs => {
//     //         roleDTOs.forEach(role => {
//     //             let tableFillingRole = `$(
//     //                     <tr>
//     //                         <td>${role.name}</td>
//     //                         <td>${role.id}</td>
//     //
//     //
//     //
//     //
//     //
//     //                     </tr>
//     //             )`;
//     //             table.append(tableFillingRole);
//     //         })
//     //     })
//
//     //01-06
//     // обрабатываем нажатие на любую из кнопок edit или delete
//     // достаем из нее данные и отдаем модалке, которую к тому же открываем
//     $("#mainTableWithUsers").find('button').on('click', (event) => {
//         let defaultModal = $('#someDefaultModal');
//
//         let targetButton = $(event.target);
//         let buttonUserId = targetButton.attr('data-userid');
//         let buttonAction = targetButton.attr('data-action');
//
//         defaultModal.attr('data-userid', buttonUserId);
//         defaultModal.attr('data-action', buttonAction);     //устанавливает значение buttonAction атрибуту data-action
//         defaultModal.modal('show');                         //показывает модальное окно. Название окна defaultModal
//     })
// }
//
//
// //04-06
// // async function getNewUserForm() {
// //     let button = $(`#SliderNewUserForm`);
// //     let form = $(`#defaultSomeForm`)
// //     // button.on('click', () => {
// //     //     if (form.attr("data-hidden") === "true") {
// //     //         form.attr('data-hidden', 'false');
// //     //         form.hide();
// //     //         button.text('Hide panel');
// //     //     } else {
// //     //         form.attr('data-hidden', 'true');
// //     //         form.show();
// //     //         button.text('Show panel');
// //     //     }
// //     // })
// // }
//
//
// //01-06
// // что то деалем при открытии модалки и при закрытии
// // основываясь на ее дата атрибутах
// async function getDefaultModal() {
//     $('#someDefaultModal').modal({
//         keyboard: true,                         //предотвратить закрытие модального окна начальной загрузки при нажатии снаружи
//         backdrop: "static",
//         show: false
//     }).on("show.bs.modal", (event) => {     //"on" устанавливает обработчики событий на выбранные элементы страницы.
//         let thisModal = $(event.target);    //event.target содержит элемент, на котором сработало событие
//         let userid = thisModal.attr('data-userid'); //attr название атрибута, которое нужно получить
//         let action = thisModal.attr('data-action');
//         //data-userid конкретный юзер на кнопке
//         //data-action edit на кнопке
//
//         switch (action) {
//             case 'edit':
//                 editUser(thisModal, userid);        //функция editUser ниже. Передает элемент-событие + attr('data-userid')
//                 // deleteUser(thisModal, userid);   // модалку открывает
//                 break;
//             case 'delete1':
//                 deleteUser1(thisModal, userid);
//                 // editUser(thisModal, userid);
//                 break;
//             case 'delete':
//                 deleteUser(thisModal, userid);
//                 break;
//         }
//     }).on("hidden.bs.modal", (e) => {
//         let thisModal = $(e.target);                //event.target содержит элемент, на котором сработало событие
//         thisModal.find('.modal-title').html('');   //find вернет все элементы modal-title, находящиеся внутри thisModal
//         thisModal.find('.modal-body').html('');
//         thisModal.find('.modal-footer').html('');    //html строка которую нужно вставить в элемент
//
//         //modal-title название окна типа <h5>Edit users</h5>
//         //modal-body в него оборачивается form
//         //modal-footer в него обоарчивается кнопка закрытие/edit
//     })
// }
//
//
// //дергает этот метод из свитч-кейс switch (action)
// // редактируем юзера из модалки редактирования, забираем данные, отправляем
// async function editUser(modal, id) {        //функция editUser выше. Получает элемент-событие + attr('data-userid')
//     let preuser = await userFetchService.findOneUser(id);  //подгружаем инфу из json замапленного на (users-update/{id}/edit)
//     let user = preuser.json();                  //json декодирует ответ в формате JSON
//
//     modal.find('.modal-title').html('Edit user');   //find вернет все элементы modal-title, находящиеся внутри modal
//                                                     //html строка которую нужно вставить в элемент
//
//     console.log(user.id);
//     let editButton = `<button  class="btn btn-primary" id="editButton">Edit</button>`;
//     let closeButton = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`
//     modal.find('.modal-footer').append(closeButton);
//     modal.find('.modal-footer').append(editButton);     //найти modal-footer добавить html код в конце
//
//     user.then(user => {         //Добавляет обработчики, которые будут запущены при изменении состояния объекта user
//         let arr = user.role;
//         arr.map(role => {
//             console.log(`id: ${role.id}, name: ${role.name}`);
//
//             //html code
//             let bodyForm2 = `
//
//                             <form class="form-group text-center" id="editUser">
//                 <label for="name" ><b>ID</b></label><br/>
//                 <input type="text" class="form-control" id="id" name="id" value="${user.id}" disabled><br>
//                 <label class="col-form-label" ><b>First name</b></label><br>
//                 <input class="form-control" type="text" id="name" value="${user.name}"><br>
//                 <label class="col-form-label" ><b>Job</b></label><br>
//                 <input class="form-control" type="text" id="job" value="${user.job}"><br>
//                 <label class="col-form-label" ><b>Age</b></label><br>
//                 <input class="form-control" type="number" id="age" value="${user.age}"><br>
//                 <label class="col-form-label" ><b>Password</b></label><br>
//
//                 <input class="form-control" type="password" id="password"><br>      <!--type password скрывает пас-->
//                 <!--<label class="col-form-label" style="padding: 10px 0px 0px 0px;"><b>Role</b></label><br>
//                 <input class="form-control" type="text" id="role" value="Role"><br>-->
//                 <label><b>Role</b>
//                     <select id="mesto" multiple size="2" name="roles" class="form-control" style="width:466px">
//                         <option>ROLE_ADMIN</option>
//                         <option>ROLE_USER</option>
//
//                         <!--<option
//                                 text="${role.name}"
//                                 value="${role.name}"></option>-->
//                     </select>
//                 </label>
//                 <!--<div id="mesto111"></div>-->
//             </form>
//
//                     `;
//             modal.find('.modal-body').append(bodyForm2);
//         });
//     })
//     //08-06
//     // await userFetchService.findAllRoles()
//     //     .then(res => res.json())
//     //     .then(roleDTOs => {
//     //         roleDTOs.forEach(role => {
//     //             let tableFillingRole5 = `$(
//     //                     <tr>
//     //                         <td>${role.name}</td>
//     //                         <td>${role.id}</td>
//     //
//     //
//     //
//     //
//     //
//     //                     </tr>
//     //             )`;
//     //             $("#mesto11").html(tableFillingRole5);
//     //         })
//     //     })
//
//     //06-06? not work map.
//     // await userFetchService.findAllRoles()
//     //     .then(res => res.json())
//     //     .then(userDTOs => {
//     //         userDTOs.forEach(user => {
//     //             let arr = user.role;
//     //
//     //             console.log(arr);
//     //
//     //             arr.map(role => {
//     //                 console.log(`test111 id: ${role.id}, name: ${role.name}`);
//     //
//     //                 //html code
//     //                 let tableFillingRole3 = `$(
//     //                         <option>${role.name}</option>
//     //                 )`;
//     //                 $("#mesto").html(tableFillingRole3);
//     //             });
//     //
//     //         })
//     //     })
//
//     // //06-06  ROLES ALL
//     // await userFetchService.findAllRoles()
//     //     .then(res => res.json())
//     //     .then(roleDTOs => {
//     //         roleDTOs.forEach(role => {
//     //             let arr = user.role;
//     //             arr.map(role => {
//     //                 console.log(`id: ${role.id}, name: ${role.name}`);
//     //
//     //             let tableFillingRole3 = `$(
//     //                 ${role.name}
//     //             )`;
//     //
//     //             $("#mesto").html(tableFillingRole3);
//     //             });
//     //         })
//     //     })
//
//
//     //08-06
//     //getElementById метод интерфейса документ, возвращающий элемент, которому соотвествует id (в html)
//     //selectedOptions содержит список <option>элементов. Пример let collection = itemList.selectedOptions;
//     // let roles = selectRole(Array.from(document.getElementById("addRole").selectedOptions)
//     //     .map(r => r.value));
//
//
//     //08-06
//     // <div class="form-group">
//     //     <label><b>Role</b></label>
//     // <select multiple class="form-control form-control-sm" name="addRole"
//     // size=2 id="addRole">
//     //     <option value="ADMIN">ADMIN</option>
//     //     <option value="USER">USER</option>
//     //     </select>
//     //     </div>
//
//     // await userFetchService.findAllRoles()
//     //     .then(res => res.json())
//     //     .then(roleDTOs => {
//     //         roleDTOs.forEach(role => {
//     //             console.log(`role name edit:${role.name}`);
//     //
//     //             let i = 0;
//     //             while (i < 3) { // выводит 0, затем 1, затем 2
//     //                 console.log( i );           //i
//     //                 i++;
//     //             }
//     //
//     //             let tableFillingRole3 = `$(
//     //
//     //                     <option>${role.name}</option>
//     //
//     //         )`;
//     //             console.log(`role name tableFillingRole3:${tableFillingRole3}`)
//     //             $("#mesto111").html(tableFillingRole3);
//     //         })
//     //     })
//
//     $("#editButton").on('click', async () => {
//         let id = modal.find("#id").val().trim();            //val достаём значение из find("#id")
//         let name = modal.find("#name").val().trim();        //trim убирает пробелы в начале и конце из результата val
//         let job = modal.find("#job").val().trim();
//         let age = modal.find("#age").val().trim();
//         let password = modal.find("#password").val().trim();
//         let data = {                                        //???? некий массив чтоли????
//             id: id,
//             name: name,
//             job: job,
//             age: age,
//             password: password
//         };
//         console.log(data,id);
//         const response = await userFetchService.updateUser(data, id);       //наш массив используем
//         //очень похоже, что в выше id попадает стринг?????????????????????
//
//         console.log(response);
//
//         console.log(response.ok);
//
//         if (response.ok) {
//             getTableWithUsers();                //getTableWithUsers мейн юзеры
//             modal.modal('hide');                //скрытие модалки
//         } else {                                    //если ответ кривой - вылетает ошибка в модалке
//             let body = await response.json();       //${body.info} ниже не попадает инфа
//             let alert = `<div class="alert alert-danger alert-dismissible fade show col-12" role="alert" id="sharaBaraMessageError">
//                             ${body.info}
//                             DANGERSLAG_alex
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>`;
//             modal.find('.modal-body').prepend(alert);
//         }
//     })
// }
//
//
//
// //04-06 delete modal
// async function deleteUser1(modal, id) {        //функция editUser выше. Получает элемент-событие + attr('data-userid')
//     //await userFetchService.deleteUser(id);
//     let preuser = await userFetchService.findOneUser(id);  //подгружаем инфу из json замапленного на (users-update/{id}/edit)
//     let user = preuser.json();                  //json декодирует ответ в формате JSON
//
//     modal.find('.modal-title').html('Delete user');   //find вернет все элементы modal-title, находящиеся внутри modal
//     //html строка которую нужно вставить в элемент
//
//
//
//
//
//     console.log(user.id);
//     let editButton1 = `<button type="button" data-userid="${user.id}" data-action="delete" class="btn btn-danger"
//     data-toggle="modal" data-target="#someDefaultModal" id="editButton1">Delete</button>`;
//
//     // let editButton = `<button  class="btn btn-primary" id="editButton">Edit111</button>`;
//     let closeButton = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`
//     modal.find('.modal-footer').append(closeButton);
//     modal.find('.modal-footer').append(editButton1);     //найти modal-footer добавить html код в конце
//
//     user.then(user => {         //Добавляет обработчики, которые будут запущены при изменении состояния объекта user
//         let bodyForm = `
//             <form class="form-group text-center" id="editUser">
//                 <label for="name" ><b>ID</b></label><br/>
//                 <input type="text" class="form-control" id="id" name="id" value="${user.id}" disabled><br>
//                 <label class="col-form-label" ><b>First name</b></label><br>
//                 <input class="form-control" type="text" id="name" value="${user.name}" disabled><br>
//                 <label class="col-form-label" ><b>Job</b></label><br>
//                 <input class="form-control" type="text" id="job" value="${user.job}" disabled><br>
//                 <label class="col-form-label" ><b>Age</b></label><br>
//                 <input class="form-control" type="number" id="age" value="${user.age}" disabled><br>
//                 <label class="col-form-label" ><b>Password</b></label><br>
//                 <input class="form-control" type="password" id="password" disabled><br>      <!--type password скрывает пас-->
//                 <label><b>Role</b>
//                     <select id="mesto" multiple size="2" name="roles" class="form-control" style="width:466px" disabled>
//                         <option>ROLE_ADMIN</option>
//                         <option>ROLE_USER</option>
//
//                     </select>
//                 </label>
//             </form>
//         `;
//         modal.find('.modal-body').append(bodyForm);
//     })
//
//     $("#editButton1").on('click', async () => {
//         let id = modal.find("#id").val().trim();            //val достаём значение из find("#id")
//         let name = modal.find("#name").val().trim();        //trim убирает пробелы в начале и конце из результата val
//         let job = modal.find("#job").val().trim();
//         let age = modal.find("#age").val().trim();
//         let password = modal.find("#password").val().trim();
//         let data = {                                        //???? некий массив чтоли????
//             id: id,
//             name: name,
//             job: job,
//             age: age,
//             password: password
//         };
//         console.log(data,id);
//         //const response = await userFetchService.updateUser(data, id);       //наш массив используем
//         const response = await userFetchService.deleteUser(id);
//         //очень похоже, что в выше id попадает стринг?????????????????????
//
//
//         console.log(response);
//
//         console.log(response.ok);
//
//         if (response.ok) {
//             getTableWithUsers();                //getTableWithUsers мейн юзеры
//             modal.modal('hide');                //скрытие модалки
//         } else {                                    //если ответ кривой - вылетает ошибка в модалке
//             let body = await response.json();       //${body.info} ниже не попадает инфа
//             let alert = `<div class="alert alert-danger alert-dismissible fade show col-12" role="alert" id="sharaBaraMessageError">
//                             ${body.info}
//                             DANGERSLAG_alex
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>`;
//             modal.find('.modal-body').prepend(alert);
//         }
//     })
// }
//
// // удаляем юзера из модалки удаления
// async function deleteUser(modal, id) {
//     await userFetchService.deleteUser(id);  //await заставляет JavaScript ждать пока не выполнится справа
//     getTableWithUsers();
//     modal.find('.modal-title').html('');
//     modal.find('.modal-body').html('User was deleted');
//     let closeButton = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`
//     modal.find('.modal-footer').append(closeButton);
// }
//
//
// //04-06
// async function addNewUser() {
//     $('#addNewUserButton').click(async () =>  {
//         let addUserForm = $('#defaultSomeForm')
//
//         // let login = addUserForm.find('#AddNewUserLogin').val().trim();
//         // let password = addUserForm.find('#AddNewUserPassword').val().trim();
//         // let age = addUserForm.find('#AddNewUserAge').val().trim();
//
//         let name = addUserForm.find("#name").val().trim();        //trim убирает пробелы в начале и конце из результата val
//         let job = addUserForm.find("#job").val().trim();
//         let age = addUserForm.find("#age").val().trim();
//         let password = addUserForm.find("#password").val().trim();
//         // let role = addUserForm.find("#role").val().trim();
//         let data = {                                        //???? некий массив чтоли????
//             name: name,
//             job: job,
//             age: age,
//             password: password
//         };
//
//         // let data = {
//         //     login: login,
//         //     password: password,
//         //     age: age
//         // }
//         const response = await userFetchService.addNewUser(data);
//         if (response.ok) {
//             getTableWithUsers();
//             // addUserForm.find('#AddNewUserLogin').val('');
//             // addUserForm.find('#AddNewUserPassword').val('');
//             // addUserForm.find('#AddNewUserAge').val('');
//
//             addUserForm.find("#name").val('');        //trim убирает пробелы в начале и конце из результата val
//             addUserForm.find("#job").val('');
//             addUserForm.find("#age").val('');
//             addUserForm.find("#password").val('');
//         } else {
//             let body = await response.json();
//             let alert = `<div class="alert alert-danger alert-dismissible fade show col-12" role="alert" id="sharaBaraMessageError">
//                             ${body.info}
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>`;
//             addUserForm.prepend(alert)
//         }
//     })
// }