var arr = new Array(5);


function fillArray() {//Заполняем массив случайными числами от -100 дл 100

var rand; //переменная случайного числа от -100 до 100
for(i=0;i<arr.length;i++){
rand = (Math.round((Math.random() * 200)))-100;//формула по которой рамдон выбирает число от 0 до 200 и путем отнятия 100 - от -100 до 100
arr[i] = rand;//заполняю массив
}

function replaceFromArray () {//Меняем отрицательные числа на 0
fillArray();//вызываю функцию заполнения массива
for(i=0;i<arr.length;i++){
	if (arr[i]<0){//присваиваю значения всему что меньше 0 - 0.
		arr[i]=0;
	}
}

function addToArray() {//вставка -1 после 0
	replaceFromArray();//Вызываю предыдущую функцию
	for(i=0;i<arr.length;i++){
	if (arr[i]==0){//если элемент равен 0, методом splise вставляю один элемент вперёд и увеличиваю индекс
	arr.splice(i+1, 0, -1);
	i+=1;
	}
}

/*для проверки
	for(j=0;j<arr.length;j++){
		console.log(arr[j] + "    ");
	}*/
}
