//1. Для удаления скобок с текстом внутри

string.replace(/ \(.+\)/, '') 

//2. Для парсинга данных из localStorage (например строка с идентификаторами)

const onLocalStorageParse = (lStorage, list) => {
    list = lStorage
        .replace(/[,]+/g, " ")
        .split(' ');
    list = list.map(item => Number(item));

    return list;
}