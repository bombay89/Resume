const presentDate = document.getElementById('date');
const presentExperience = document.getElementById('exp');
const presentAge = document.getElementById('age');

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

presentDate.innerHTML = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
exp.innerHTML = year - 2011;
presentAge.innerHTML = year - 1989;
