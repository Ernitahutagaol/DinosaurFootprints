const dinosaur = [
    '     __',
    '    / _)',
    '  .-\' /',
    '  \\  /',
    '  / /',
    ' / /',
    '/ /',
    '( (_',
    '\\\\\'-\\\\\\',
];

const footprint = [
    '  ___     ',
    ' // \\\\   ',
    '((- -))  ',
    ' \\_-_/   ',
];

function printDinosaurFootprints() {
    const length = Math.max(dinosaur.length, footprint.length);

    for (let i = 0; i < length; i++) {
        const dinoLine = dinosaur[i] || '';
        const footLine = footprint[i] || '';

        console.log(dinoLine + ' '.repeat(6) + footLine);
    }
}

printDinosaurFootprints();
