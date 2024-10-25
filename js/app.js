const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Ali', family: 'Shakeri' },
    { id: 7, name: 'Mohammad', family: 'khosravi' },
    { id: 8, name: 'Taha', family: 'Esfandyari' },
    { id: 9, name: 'Saleh', family: 'Fasihi' },
    { id: 10, name: 'Mohsen', family: 'Rosta' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];

let userListContainer = document.querySelector('.list')
let paginationContainer = document.querySelector('.pagenumbers')

let currentPage = 1
let rowscount = 5

function displayUsersList(allUsersArray, userContainer, rowsCount, currentPage) {
    userContainer.innerHTML = ''
    let endIndex = rowsCount * currentPage
    let startIndex =  endIndex - rowsCount

    let paginatedUsers = allUsersArray.slice(startIndex,endIndex)

    paginatedUsers.forEach(user => {
        let userElem = document.createElement('div')
        userElem.classList.add('item')
        userElem.innerHTML = user.name + ' ' + user.family

        userListContainer.append(userElem)
    });
    
}

function setupPageination(allUsersArray, pagesContainer, rowsCount) {
    pagesContainer.innerHTML = ''
    let pageCount = Math.ceil(allUsersArray.length / rowsCount)

    for (let i = 1 ; i < pageCount + 1; i++)   {
        let btn = paginationButtonGenerator(i, allUsersArray)
        pagesContainer.append(btn)
    }

}


function paginationButtonGenerator(page, allUsersArray) {
    
    let button = document.createElement('button')
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('active')
    }

    button.addEventListener('click', function () {
        currentPage = page
        displayUsersList(allUsersArray, userListContainer, rowscount, currentPage)

        let prevPage = document.querySelector('button.active')

        prevPage.classList.remove('active')

        button.classList.add('active')

    })

    return button
}


displayUsersList(listItems, userListContainer, rowscount, currentPage)
setupPageination(listItems, paginationContainer, rowscount)