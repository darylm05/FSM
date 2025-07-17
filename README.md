# FSM Modulo Three Assessment By Daryl Majul

## Setup

Install dependencies:

```powershell
npm install
```

## Usage

### Run the function from the terminal

```powershell
node runModThree.js <binary_string>
```

Example:

```powershell
node runModThree.js 1011
```

Output:

```
Result: 2
```

### Run tests

```powershell
npm test
```

## Files

- `modThree.js`: Exports the `modThree` function, which takes a binary string and returns its remainder modulo 3.
- `modThree.test.js`: Contains comprehensive Jest tests for all possible binary string cases and edge cases.
- `runModThree.js`: Script to run the `modThree` function from the terminal.

## Function Details

- Only accepts strings containing `0` and `1`.
- Returns `undefined` for invalid input.
- Returns the state (0, 1, or 2) representing the remainder modulo 3.
