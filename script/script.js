// Создайте HTML-страницу с элементом <p>, содержащим текст "Привет, мир!". 
// С использованием JavaScript измените текст этого элемента на "Привет, JavaScript!".
const e = document.querySelector("p");
e.innerText = "Hello, JavaScript!";

// Создайте массив из строк. Напишите функцию, которая получает этот массив и 
// создает нумерованный список из этих строк в html документе.
const array = ["hello","world","!!!"];
function getList(array){
    const olNode = document.createElement("ol");
    array.forEach(e => {
        const li = document.createElement("li");
        li.innerText = e;
        olNode.append(li);
    });
    return olNode;
}
const root = document.querySelector('#root');
root.append(getList(array));

// Подготовьте массив из объектов со свойствами label и link. 
// Создайте функцию, которая проходится циклом по этому массиву
// и создает ссылки, ведущие на link с содержимым label.
const arr = [
    {label:"A", link:"1"},
    {label:"B", link:"2"},
    {label:"C", link:"3"},
    {label:"D", link:"4"}
];
function createLink(array){
    const container = document.createElement("div");
    array.forEach(({label,link}) => {
    const linkNode = document.createElement("a");
    linkNode.innerText = label;
    linkNode.href = link;
    container.append(linkNode);
});
return container;
};
root.append(createLink(arr));