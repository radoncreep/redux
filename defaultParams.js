const obj = {
    age: 21,
    name: 'chamberlain'
};

const fix = (newObj = obj) => {
    return `${newObj.age} ${newObj.name}`;
};

console.log(fix());