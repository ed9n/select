let multiselect = document.createElement('div');
multiselect.className = 'multiselect';
document.body.prepend(multiselect);

let containerMultiselect = document.createElement('div');
containerMultiselect.className = 'containerMultiselect';
multiselect.prepend(containerMultiselect);

let blockInputBtn = document.createElement('div');
blockInputBtn.className = 'blockInputBtn';
containerMultiselect.prepend(blockInputBtn);

let title = document.createElement('h2');
title.className = 'title';
title.innerHTML = 'Товары'
blockInputBtn.prepend(title)

let inpBtn = document.createElement('input');
inpBtn.type = 'button';
inpBtn.className = 'inpBtn';
inpBtn.value = '';
blockInputBtn.append(inpBtn);

let selectBox = document.createElement('div');
selectBox.className = 'selectBox';
containerMultiselect.append(selectBox);

let select = document.querySelector('select');
selectBox.prepend(select);

let checkboxes = document.createElement('div');
checkboxes.id = 'checkboxes';
document.body.append(checkboxes);

let containerCheckboxes = document.createElement('div');
containerCheckboxes.className = 'containerCheckboxes';
checkboxes.prepend(containerCheckboxes);


let label1 = document.createElement('label');
label1.for = '1';
label1.innerHTML = 'Ковры и ковровые изделия';
label1.className = 'label';
containerCheckboxes.append(label1)
let input1 = document.createElement('input');
input1.type = 'checkbox';
input1.className = 'checkbox';
input1.id = '1';
label1.prepend(input1);

let label2 = document.createElement('label');
label2.for = '2';
label2.innerHTML = 'Ковры и ковровые покрытия';
label2.className = 'label';
containerCheckboxes.append(label2)
let input2 = document.createElement('input');
input2.type = 'checkbox';
input2.className = 'checkbox';
input2.id = '2';
label2.prepend(input2);

let label3 = document.createElement('label');
label3.for = '3';
label3.innerHTML = 'Легковые пассажирские автомобили';
label3.className = 'label';
containerCheckboxes.append(label3)
let input3 = document.createElement('input');
input3.type = 'checkbox';
input3.className = 'checkbox';
input3.id = '3';
label3.prepend(input3);

let label4 = document.createElement('label');
label4.for = '4';
label4.innerHTML = 'Напольные покрытия(кроме ковров)';
label4.className = 'label';
containerCheckboxes.append(label4)
let input4 = document.createElement('input');
input4.type = 'checkbox';
input4.className = 'checkbox';
input4.id = '4';
label4.prepend(input4);

let label5 = document.createElement('label');
label5.for = '5';
label5.innerHTML = 'Оборудование и инструменты для садов и парков, включая газонокосилки';
label5.className = 'label';
containerCheckboxes.append(label5)
let input5 = document.createElement('input');
input5.type = 'checkbox';
input5.className = 'checkbox';
input5.id = '5';
label5.prepend(input5);

let label6 = document.createElement('label');
label6.for = '6';
label6.className = 'label';
label6.innerHTML = 'Шелковые ткани';
containerCheckboxes.append(label6)
let input6 = document.createElement('input');
input6.type = 'checkbox';
input6.className = 'checkbox';
input6.id = '6';
label6.prepend(input6);

let blockBtns = document.createElement('div');
blockBtns.className = 'blockBtns';
containerCheckboxes.append(blockBtns);

let btnAdd = document.createElement('button');
btnAdd.innerHTML = 'Применить';
btnAdd.className = 'btn';
blockBtns.prepend(btnAdd);

let btnDelete = document.createElement('button');
btnDelete.innerHTML = 'Очистить';
btnDelete.className = 'btn';
blockBtns.append(btnDelete);

let blockBtnChoose = document.createElement('div');
blockBtnChoose.className = 'blockBtnChoose';
containerMultiselect.append(blockBtnChoose);

let btnСhoose = document.createElement('button');
btnСhoose.innerHTML = 'Выбрать товары';
btnСhoose.className = 'btn';
containerMultiselect.append(btnСhoose)




let expanded = false;

function hides() {
    let checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.opacity = "1";
        checkboxes.style.pointerEvents = 'all';
        expanded = true;
    } else {
        checkboxes.style.opacity = "0";
        checkboxes.style.pointerEvents = 'none';
        expanded = false;
    };
};

containerCheckboxes.addEventListener('click', function (e) {
    e.stopPropagation();
});

btnСhoose.addEventListener('click', hides);

checkboxes.addEventListener('click', hides);

selectBox.addEventListener('click', hides);

inpBtn.addEventListener('click', hides);

btnAdd.addEventListener('click', hides);

document.querySelectorAll('input[type="checkbox"]').forEach(function (elem) {
    let btn = document.querySelector('input[type="button"]');
    btn.value = 'Показать выбранное(0)';
    elem.addEventListener('click', function () {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
        btn.value = `Показать выбранное(${checkboxes})`;
    });
});

function addElements() {
    document.querySelectorAll('input[type="checkbox"]').forEach(function (inp) {
        document.querySelectorAll('label').forEach(function (label) {
            let opt = document.createElement('option');
            if (inp.id === label.for && inp.checked === true) {
                opt.id = label.for;
                opt.className = 'opt';
                opt.innerHTML = label.innerHTML;
                select.append(opt);
            }
            document.querySelectorAll('option').forEach(function(option) {
                if(inp.id === option.id && inp.checked === false){
                    option.remove();
                }
            });
        });
    });
};

btnAdd.addEventListener('click', addElements);
checkboxes.addEventListener('click', addElements);

btnDelete.addEventListener('click', function () {
    let btn = document.querySelector('input[type="button"]');
    btn.value = 'Показать выбранное(0)';
    document.querySelectorAll('input[type="checkbox"]').forEach(function (elem) {
        elem.checked = false;
    });
});



















