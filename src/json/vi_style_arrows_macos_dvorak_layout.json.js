// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Vi Style Arrows (MacOS Dvorak layout support)',
        rules: [
          {
            description: 'Change Control + h/j/k/l (j/c/v/p in MacOS Dvorak Layout) to Arrows',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'j', modifiers: { mandatory: ['control'] } },
                to: [{ key_code: 'left_arrow' }],
              },
              {
                type: 'basic',
                from: { key_code: 'c', modifiers: { mandatory: ['control'] } },
                to: [{ key_code: 'down_arrow' }],
              },
              {
                type: 'basic',
                from: { key_code: 'v', modifiers: { mandatory: ['control'] } },
                to: [{ key_code: 'up_arrow' }],
              },
              {
                type: 'basic',
                from: { key_code: 'p', modifiers: { mandatory: ['control'] } },
                to: [{ key_code: 'right_arrow' }],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
