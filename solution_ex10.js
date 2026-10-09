
console.log("1. FUNCTION DECLARATION");
console.log("Ket qua goi truoc khi khai bao:", calculatePower(100, 2));

function calculatePower(powerWatts, quantity) {
  return powerWatts * quantity;
}

console.log("Ket qua goi sau khi khai bao:", calculatePower(100, 2));

console.log("2. FUNCTION EXPRESSION");

const calculateTotalPower = function(powerWatts, quantity) {
  return powerWatts * quantity;
};

console.log("Tong cong suat:", calculateTotalPower(200, 3));

console.log("3. ARROW FUNCTION");

const calculateDevicePower = (powerWatts, quantity) => powerWatts * quantity;

console.log("Cong suat thiet bi:", calculateDevicePower(150, 4));

console.log("4. SO SANH KET QUA");

console.log("Function Declaration:", calculatePower(100, 2));
console.log("Function Expression:", calculateTotalPower(200, 3));
console.log("Arrow Function:", calculateDevicePower(150, 4));

console.log("5. KIEM TRA GIA TRI");

console.log(calculatePower(100, 2) === 200);
console.log(calculateTotalPower(200, 3) === 600);
console.log(calculateDevicePower(150, 4) === 600);
