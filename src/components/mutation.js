import produce from "immer"

let demonSlayer = [
    'Tanjiro',
    'Rengoku',
    'Tengen',
    'Openai',
    'Mitsuri',
    'Shinobu'
]

// demonSlayer.push('Zenetsu');

// demonSlayer = ['Zenetsu', 'Inoske'];

// const hashiras = ['Zenetsu', 'Inoske' ...demonSlayer];

// console.log(demonSlayer);

const nextState = produce(demonSlayer, (draft) => {
    draft.push('Zenetsu');
});