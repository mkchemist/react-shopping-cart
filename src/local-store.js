function toJson(data) {
  return JSON.stringify(data);
}

function toObject(data) {
  return JSON.parse(data);
}

export function setItem(key, value) {
  if (localStorage.getItem(key)) {
    return false;
  } else {
    localStorage.setItem(key, toJson(value));
  }
}

function createStore(key, value) {
  localStorage.setItem(key, toJson(value));
}

export function getItem(key) {
  let data = localStorage.getItem(key);
  if (data) {
    return toObject(data);
  }
  return null;
}

export function addToItem(key, data, name = null) {
  let item = getItem(key);
  if (item) {
    switch (typeof item) {
      case "string":
        item = data;
        break;
      default:
        if (item instanceof Array) {
          item.push(data);
        } else if (typeof item === "object") {
          item[name] = data;
        }
    }
    createStore(key, item);
  }
}


export function removeItem(key) {
  if(getItem(key)) {
    localStorage.removeItem(key);
  }
}

export function removeFromItem(key, name) {
    let data = getItem(key);
    if(data) {
      switch(typeof data) {
        case "string" :
          removeItem(key)
          break;
        default :
          if(data instanceof Array) {
            let index = data.indexOf(name);
            data.splice(index, 1);
          } else if(typeof data === 'object' && data instanceof Array === false) {
            if(data[name]) {
              delete data[name];
            }
          }
      }
    }
    createStore(key, data);
}
