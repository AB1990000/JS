function filter(obj, key, value) {
    let res_obj = []
    for (let i in obj) {
        if (obj[i][key] == value) {
            res_obj.push(obj[i])
        }
    }
    
    return res_obj
}

let objects = [
{ "name": "Василий", "surname": "Васильев" },
{ "name": "Иван", "surname": "Иванов" },
{ "name": "Пётр", "surname": "Петров" }
]

console.log(filter(objects, "surname", "Петров"))