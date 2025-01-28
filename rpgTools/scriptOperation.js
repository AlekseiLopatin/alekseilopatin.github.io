const operationGenerator = document.getElementById('operation-generator');
const locationDropdown = document.getElementById('entry-dropdown');
const commanderFocus = document.getElementById('entry-dropdown1');
const GMFocus = document.getElementById('entry-dropdown2');
const commanderSpentIntel = document.getElementById('commanderSpentIntel');
const regenerate = document.getElementById('regenerate');
const regenerateButton = document.getElementById('regenerate-btn');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

//Exceptions for locations//
const assault = ['talgon-forest'];
const recon = ['maw'];
const religious = ['western-front', 'long-road', 'barrak-mines', 'sunstrider-camp', 'high-road'];
const supply = ['western-front', 'long-road', 'gallows-pass', 'sunstrider-camp', 'duresh-forest', 'talgon-forest', 'high-road', 'maw'];

//Subtypes for operations//
const subAssault = ['Люди', 'Природа', 'Нежить', 'Нежить', 'Могучая Нежить', 'Могучая Нежить'];
const subRecon = ['Разведка Месности', 'Разведка Маршрута', 'Разведка Войск', 'Проникновение', 'Эвакуация', 'Выбери Сам + Опасность'];
const subReligious = ['Сопровождение', 'Очищение', 'Защита', 'Обнаружение', 'Выбери Сам + Дар Божества', 'Выбери Сам + Дар Божества'];
const subSupply = ['Выживание или Торговля', 'Выживание или Торговля', 'Спасение Припасов', 'Спасение Припасов', 'Наёмная Работа', 'Наёмная Работа'];

//Rewards for operations//
const rewardAssault = ['Боевой Дух +2', 'Боевой Дух +3', 'Боевой Дух +4', 'Боевой Дух +2. Припасы +1', 'Боевой Дух +2. Разведданные +1', 'Боевой Дух +2. Время -1'];
const rewardRecon = ['Разведданные +2', 'Разведданные +2', 'Разведданные +1. Ресурс', 'Разведданные +1. Ресурс или Войска', 'Время -1. Разведданные +1', 'Разведданные +3'];
const rewardReligious = ['Время -1. Опыт +2', 'Боевой Дух +2. Финальный Счёт +10', 'Боевой Дух +2. Разведданные +1', 'Добротный Ресурс', 'Исключительный Ресурс', 'Специалист'];
const rewardSupply = ['Припасы +1. Ресурс', 'Припасы +1. Ресурс', 'Припасы +2', 'Припасы +2. Ресурс', 'Припасы +3', 'Припасы +3'];

//Penalty for operations//
const penaltyAssault = ['Время +1. Натиск +1', 'Время +1', 'Припасы -1', 'Натиск +1', 'Натиск +1', 'Натиск +1'];
const penaltyRecon = ['Время +1', '2 Смерти', '1 Смерть', 'Натиск +1', 'Натиск +1', 'Отсутствует'];
const penaltyReligious = ['Боевой Дух -1. Натиск +1', 'Натиск +1', 'Натиск +1', 'Боевой Дух -1', 'Боевой Дух -1', 'Отсутствует'];
const penaltySupply = ['', '', '', '', '', ''];

let type = "";
let subType = "";
let reward = "";
let penalty = "";
let gift = "";
let specialist = "";
let thirdOperation = "";
let comm = false;
let gm = false;

let numberOperations = () => {
  const num = Math.floor(Math.random() * 6 + 1);
  if (num === 1 || num === 2) {
    thirdOperation = "Есть"; 
  } else if (num === 3) {
    const rollNumOperation = Math.floor(Math.random() * 6 + 1);
    if (rollNumOperation === 1) {
      specialist = "Латник";
    } else if (rollNumOperation === 2) {
      specialist = "Медик";
    } else if (rollNumOperation === 3) {
      specialist = "Лазутчик";
    } else if (rollNumOperation === 4) {
      specialist = "Стрелок";
    } else if (rollNumOperation === 5) {
      specialist = "Офицер";
    } else {
      specialist = "Алхимик или Милостивец";
    }
    thirdOperation = "Специалист";
  } else if (num === 4) {
    thirdOperation = "Отсутствует Третья";
  } else if (num === 5) {
    const rollNumOperation = Math.floor(Math.random() * 6 + 1);
    if (rollNumOperation === 1) {
      gift = "Праведность";
    } else if (rollNumOperation === 2) {
      gift = "Таинства";
    } else if (rollNumOperation === 3) {
      gift = "Слава";
    } else if (rollNumOperation === 4) {
      gift = "Знание";
    } else if (rollNumOperation === 5) {
      gift = "Милосердие";
    } else {
      gift = "Природа";
    }
    thirdOperation = "Дар Божества";
  } else {
    thirdOperation = "Особая";
  }
};

const rollType = (oper) => {
  //Функция с if внутри//
  let repeat = true;
  let rollNumType = Math.floor(Math.random() * 6 + 1);
  //If location is not available the WHILE will start again//
  while (repeat) {
    if (rollNumType === 1) {
      if (assault.includes(locationDropdown.value)) {
        rollNumType = 2;
      } else {
      type = "Штурмовая";
      oper.innerHTML = `
        <span> ${type} Операция </span>
        <hr>
        `;
      repeat = false;
      };

    } else if (rollNumType === 2) {
        if (recon.includes(locationDropdown.value)) {
          rollNumType = 3;
        } else {
        type = "Разведывательная";
        oper.innerHTML = `
          <span> ${type} Операция </span>
          <hr>
          `;
        repeat = false;
        };

    } else if (rollNumType === 3) {
        if (religious.includes(locationDropdown.value)) {
          rollNumType = 4;
        } else {
          type = "Религиозная";
          oper.innerHTML = `
            <span> ${type} Операция </span>
            <hr>
            `;
          repeat = false;
        };

    } else if (rollNumType === 4) {
        if (supply.includes(locationDropdown.value)) {
          rollNumType = 5;
        } else {
          type = "Снабженческая";
          oper.innerHTML = `
            <span> ${type} Операция </span>
            <hr>
            `;
          repeat = false;
        };

    } else if (rollNumType === 5) {
        //Check if the commander's focus is not available in this location//
        if (
        (commanderFocus.value === 'assault' && assault.includes(locationDropdown.value)) || 
        (commanderFocus.value === 'recon' && recon.includes(locationDropdown.value)) || 
        (commanderFocus.value === 'religious' && religious.includes(locationDropdown.value)) ||
        (commanderFocus.value === 'supply' && supply.includes(locationDropdown.value))
        ) {
          rollNumType = 6;
        } else {
          //Check whether there is a operation chosen by commander//
          if (comm === false) {
            type = commanderFocus.options[commanderFocus.selectedIndex].text;
            oper.innerHTML = `
              <span> ${type} Операция </span>
              <hr>
              <p class="notice">По выбору Командира.</p>
              `;
            repeat = false;
            comm = true;
          } else {
            rollNumType = 6;
          };
        };

    } else if (rollNumType === 6) {

      //Check if the GM's focus is not available in this location//
      if (
        (GMFocus.value === 'assault' && assault.includes(locationDropdown.value)) || 
        (GMFocus.value === 'recon' && recon.includes(locationDropdown.value)) || 
        (GMFocus.value === 'religious' && religious.includes(locationDropdown.value)) ||
        (GMFocus.value === 'supply' && supply.includes(locationDropdown.value))
        ) {
          rollNumType = 1;
        } else {
          //Check whether there is a operation chosen by GM//
          if (gm === false) {
            type = GMFocus.options[GMFocus.selectedIndex].text;
            oper.innerHTML = `
              <span> ${type} Операция </span>
              <hr>
              <p class="notice">По выбору ГМа.</p>
              `;
            repeat = false;
            gm = true;
          } else {
            rollNumType = 1;
          };
        };
      };
  };
};

const fillOutput = (outputBox) => {
  
  const rollSubType = Math.floor(Math.random() * 6 + 1);
  if (type === "Штурмовая") {
    subType = subAssault[rollSubType - 1];
  } else if (type === "Разведывательная") {
    subType = subRecon[rollSubType - 1];
  } else if (type === "Религиозная") {
    subType = subReligious[rollSubType - 1];
  } else if (type === "Снабженческая") {
    subType = subSupply[rollSubType - 1];
  }
  
  const rollReward = Math.floor(Math.random() * 6 + 1);
  if (type === "Штурмовая") {
    reward = rewardAssault[rollReward - 1];
  } else if (type === "Разведывательная") {
    reward = rewardRecon[rollReward - 1];
  } else if (type === "Религиозная") {
    reward = rewardReligious[rollReward - 1];
  } else if (type === "Снабженческая") {
    reward = rewardSupply[rollReward - 1];
  }

  const rollPenalty = Math.floor(Math.random() * 6 + 1);
  if (type === "Штурмовая") {
    penalty = penaltyAssault[rollPenalty - 1];
  } else if (type === "Разведывательная") {
    penalty = penaltyRecon[rollPenalty - 1];
  } else if (type === "Религиозная") {
    penalty = penaltyReligious[rollPenalty - 1];
  } else if (type === "Снабженческая") {
    penalty = penaltySupply[rollPenalty - 1];
  }

  outputBox.insertAdjacentHTML('beforeend', `
    <p>Тип - ${subType} </p>
    <p>Награда - ${reward} </p>
    <p>Расплата - ${penalty} </p>    
    `);

  if (commanderSpentIntel.checked) {
    thirdOperation = "Особая";
  }

  if (thirdOperation === "Особая") {
    output2.innerHTML = "";
    output2.innerHTML = `
    <span>Особая Операция! </span>
    <hr>
    <p><i class="fa-solid fa-hand-fist"></i></p>
    `;
  } else if (thirdOperation === "Отсутствует Третья") {
    output2.innerHTML = "";
    output2.innerHTML = `
    <span>Отсутствует Третья Операция! </span>
    <hr>
    <p><i class="fa-solid fa-xmark"></i></p>
    `;
  };
};

function generateOperations(e) {
  e.preventDefault();
  clearForm();
  numberOperations();
  rollType(output);
  fillOutput(output);
  rollType(output1);
  fillOutput(output1);
  rollType(output2);
  fillOutput(output2);
  
  if (thirdOperation === "Специалист") {
    output.insertAdjacentHTML('beforeend', `
      <p>Доп Специалист - ${specialist} </p>
      <p class="notice">В этой операции требуется Специалист.</p>
      `);
  } else if (thirdOperation === "Дар Божества") {
    output.insertAdjacentHTML('beforeend', `
      <p>Дар Божества - ${gift} </p>
      <p class="notice">В этой операции есть возможность получить Дар Божества.</p>
      `);
  }
  
  output.classList.remove('hide');
  output1.classList.remove('hide');
  output2.classList.remove('hide');
}

function clearForm() {
  output.innerHTML = "";
  output1.innerHTML = "";
  output2.innerHTML = "";

  type = "";
  subType = "";
  reward = "";
  penalty = "";
  gift = "";
  specialist = "";
  thirdOperation = "";
  gm = false;
  comm = false;
  
  output.classList.add('hide');
  output1.classList.add('hide');
  output2.classList.add('hide');
}

operationGenerator.addEventListener("submit", generateOperations);
clearButton.addEventListener("click", clearForm);
