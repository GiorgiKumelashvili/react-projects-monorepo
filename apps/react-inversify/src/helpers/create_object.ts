// for intelisensing object values where key is [key as string]
// basically helper function for typings
export const createObject = <T,>() => <S extends T>(obj: S): S => obj; // prettier-ignore
export const createFrozeObject = <T,>() => <S extends T>(obj: S): S => Object.freeze(obj); // prettier-ignore
