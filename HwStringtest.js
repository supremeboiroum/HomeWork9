describe('String tasks', function () {

    describe('checkSymbol', () => {
        //Given
        const testData = [
            {
                str: 'hhhhTTTTnn',
                elem1: 'h',
                elem2: 't',
                expected: true
            },
            {
                str: 'hhhhTTTTnn',
                elem1: 'h',
                elem2: 'n',
                expected: false
            },
            {
                str: 'bad mad ted',
                elem1: 'd',
                elem2: 'b',
                expected: false
            },

        ];

        testData.forEach(data => {
            //When
            const { str, elem2, elem1, expected } = data;

            const actual = checkSymbol(str, elem2, elem1);

            //Then
            it(`Должно вернуть '${expected}' после сравнения елементов '${elem1}' '${elem2}' в строке '${str}'`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('truncate', () => {
        //Given
        const testData = [
            {
                str: 'hhhhTTTTnn',
                maxlength: 6,
                expected: 'hhh...'
            },
            {
                str: 'snake snake snake snake',
                maxlength: 10,
                expected: 'snake s...'
            },
            {
                str: 'bad bad tad bad mad',
                maxlength: 16,
                expected: 'bad bad tad b...'
            },
        ];

        testData.forEach(data => {
            //When
            const { str, maxlength, expected } = data;

            const actual = truncate(str, maxlength);

            //Then
            it(`Должен вернуть '${expected}' когда строка '${str}' и  maxlength '${maxlength}'`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('deleteFoundRow', () => {
        //Given
        const testData = [
            {
                str1: '',
                str2: 'строка',
                expected: ''
            },
            {
                str1: 'Здесь строка должна быть строка СТРОКА строка',
                str2: 'строка',
                expected: 'Здесь  должна быть  СТРОКА '
            },
            {
                str1: 'Здесь должна быть строка СТРОКА с т р о к а строка строка',
                str2: 'совпадение',
                expected: 'Здесь должна быть строка СТРОКА с т р о к а строка строка'
            },
            {
                str1: '12 1 4 5 6 7 8 1 24 321',
                str2: '444',
                expected: '12 1 4 5 6 7 8 1 24 321'
            },
            {
                str1: '12 1 4 5 6 7 8 1 24 321',
                str2: '12',
                expected: ' 1 4 5 6 7 8 1 24 321'
            },
          
        ];
        testData.forEach(data => {
            const { str1, str2, expected } = data;
            //when
            const actual = deleteFoundRow(str1, str2);
            //Then
            it(`Должно вернуть '${expected}' когда str1 = ${str1} и str2 = '${str2}'`, () => {
                assert.strictEqual(actual, expected)
            });
        });
    });
});
