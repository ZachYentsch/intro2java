// NOTE function homerun() {
//     document.getElementById('total').innerText = h++; h++; h++; h++
//     document.getElementById('phrase').innerText = "MOONSHOT"
// }
// function single() {
//     console.log('ok')
//     document.getElementById('total').innerText = s++
//     document.getElementById('phrase').innerText = "Nice Hit"
// }
// function double() {
//     console.log('nice')
//     document.getElementById('total').innerText = d++; d++
//     document.getElementById('phrase').innerText = "Double Trouble"
// }
// function triple() {
//     console.log('sweet')
//     document.getElementById('total').innerText = t++; t++; t++
//     document.getElementById('phrase').innerText = "Got Wheels?"
// }
// let s = 1;
// let d = 2;
// let t = 3;
// let h = 4

const hits = [
    {
        type: 'homerun',
        bases: 4,
        call: ['safe', 'out'],
        runs: 1,
        phrase: 'Moonshot'
    },
    {
        type: 'triple',
        bases: 3,
        call: ['safe', 'out'],
        runs: .75,
        phrase: 'Got Wheels?'
    },
    {
        type: 'double',
        bases: 2,
        call: ['safe', 'out'],
        runs: .5,
        phrase: 'Double Trouble'
    },
    {
        type: 'single',
        bases: 1,
        call: ['safe', 'out'],
        runs: .25,
        phrase: 'Nice Hit'
    },

]


function hitAll() {
    let list = ''
    let bases = ''
    for (let b = 0; b < hits.length; b++) {
        const hit = hits[b];
        list += `<li>${hit.type}</li>`
    }
    for (let y = 0; hit < hits.length; y++) {
        const hit = hits[y];
        bases = `${hit.bases}`
    }
    document.getElementById('list').innerHTML = list;
    document.getElementById('total').innerText = bases
}

