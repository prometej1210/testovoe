var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]

model.sort((a, b) => a.user.id - b.user.id);//Сортирую методом sort, аргумент a предыдущий, b следующий элемент

//Проверка вывода после сортировки

for (i=0;i<model.length;i++){

document.write("id: " + model[i].user.id + "<br/>");
document.write("name: " + model[i].user.name + "<br/>");
document.write("posts: " + model[i].id + "<br/>" + model[i].title + "<br/>" + model[i].text + "<br/>");
}
