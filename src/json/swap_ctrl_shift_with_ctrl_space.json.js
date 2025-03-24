// JavaScript should be written in ECMAScript 5.1.

function main() {
    console.log(
      JSON.stringify(
        {
          title: 'Swap Ctrl+Shift with Ctrl+Space for Input Source Switching',
          rules: [
            {
                "description": "Remaps the keyboard shortcut for input source switching, swapping Ctrl+Shift with Ctrl+Space for easier language switching.",
                "manipulators": [
                    {
                        "from": {
                            "key_code": "left_shift",
                            "modifiers": { "mandatory": ["left_control"] }
                        },
                        "to": [
                            {
                                "key_code": "spacebar",
                                "modifiers": ["control"]
                            }
                        ],
                        "type": "basic"
                    }
                ]
            }
          ],
        },
        null,
        '  '
      )
    )
  }
  
  main()
  