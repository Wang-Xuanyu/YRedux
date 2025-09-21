export default function wrapFunctions(obj, prefix) {
  const newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      const originalFn = obj[key];
      newObj[key] = (payload) => {
        return {
          type: `${prefix}/${key}`,
          payload
        };
      };
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
