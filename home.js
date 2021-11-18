window.addEventListener('DOMConetntLoaded',(event) =>{
    createInnerHtml();
});

const createInnerHtml=() =>{
    const headerHtml = "th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                    "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    
    let empPayrollData = createEmployeePayrollJSON()[0]
                    const innerHTML =`${headerHtml}

                <tr>
                    <td><img class="porfile" alt="" src="${empPayrollData._profilePic}"</td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td><div class='dept-label'>${empPayrollData._department[0]}</div>
                    <div class='dept-label'>${empPayrollData._department[1]}</div></td>
                    <td>${empPayrollData._salary}</td>
                    <td>${empPayrollData._startDate}</td>
                    <td>
                        <img id="${empPayrollData._id}"  onclick="delete(this)" alt="delete"
                        src="delete1.png">
                        
                        <img id="${empPayrollData._id}"  onclick="update(this)" alt="edit"
                        src="edit.png">
                        
                    </td> 
                </tr> 
                `;
                document.querySelector('#table-display').innerHTML=innerHtml;
            }

            const createEmployeePayrollJSON=()=>{
                let empPayrollListLocal =[
                    {
                        _name:'Raghavendra Wandre',
                        _gender:'male',
                        _department: ['Engineer',
                                     'EnTC'   
                    ],
                    _salary:'500000',
                    _startDate:'29 Oct 2019',
                    _note:'',
                    _id:new Date().getTime(),
                    _profilePic:'profile2.jfif' 
                    },
                    {
                        _name:'Gunjan Wandre',
                        _gender:'male',
                        _department: ['Engineer',
                                     'Electronic'   
                    ],
                    _salary:'505000',
                    _startDate:'29 Oct 2019',
                    _note:'',
                    _id:new Date().getTime()+1,
                    _profilePic:'profile3.jfif' 
                    }
                ];
                
            }