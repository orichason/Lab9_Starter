window.addEventListener('error', e => {
  console.error('Global error caught:', e.message);
});

// ── Custom error class ────────────────────────────────────────────────────────

class CalculatorError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CalculatorError';
  }
}

// ── Calculator ────────────────────────────────────────────────────────────────

const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const output = document.querySelector('output');
  const firstNum = document.querySelector('#first-num').value;
  const secondNum = document.querySelector('#second-num').value;
  const operator = document.querySelector('#operator').value;

  try {
    if (operator === '/' && Number(secondNum) === 0) {
      throw new CalculatorError('Cannot divide by zero');
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (err) {
    if (err instanceof CalculatorError) {
      console.error('CalculatorError:', err.message);
      output.innerHTML = `Error: ${err.message}`;
    } else {
      console.error('Unexpected error:', err);
      output.innerHTML = 'Error: invalid input';
    }
  } finally {
    console.log('Calculation attempt finished');
  }
});

// ── Console-method buttons ────────────────────────────────────────────────────

document.getElementById('console-log-btn').addEventListener('click', () => {
  console.log({ user: 'Ori', course: 'CSE 110', lab: 9 });
});

document.getElementById('console-error-btn').addEventListener('click', () => {
  console.error('Something went wrong: failed to fetch user data from /api/profile');
});

document.getElementById('console-count-btn').addEventListener('click', () => {
  console.count('clicks');
});

document.getElementById('console-warn-btn').addEventListener('click', () => {
  console.warn('Using eval() for math — fine for lab demos, never in production.');
});

document.getElementById('console-assert-btn').addEventListener('click', () => {
  console.assert(1 === 2, 'Assertion failed: one does not equal two');
});

document.getElementById('console-clear-btn').addEventListener('click', () => {
  console.clear();
});

document.getElementById('console-dir-btn').addEventListener('click', () => {
  console.dir(document.body);
});

document.getElementById('console-dirxml-btn').addEventListener('click', () => {
  console.dirxml(document.querySelector('form'));
});

document.getElementById('console-group-start-btn').addEventListener('click', () => {
  console.group('Calculator Details');
  console.log('Inputs:', document.querySelector('#first-num').value, document.querySelector('#operator').value, document.querySelector('#second-num').value);
  console.log('Result:', document.querySelector('output').innerHTML);
  console.log('Timestamp:', new Date().toISOString());
});

document.getElementById('console-group-end-btn').addEventListener('click', () => {
  console.groupEnd();
});

document.getElementById('console-table-btn').addEventListener('click', () => {
  console.table([
    { name: 'Guacamole',  category: 'Dip',   prepTime: 10 },
    { name: 'Tacos',      category: 'Entree', prepTime: 25 },
    { name: 'Churros',    category: 'Dessert',prepTime: 30 },
  ]);
});

document.getElementById('start-timer-btn').addEventListener('click', () => {
  console.time('demoTimer');
});

document.getElementById('end-timer-btn').addEventListener('click', () => {
  console.timeEnd('demoTimer');
});

document.getElementById('console-trace-btn').addEventListener('click', () => {
  function innermost() { console.trace('Trace from innermost'); }
  function middle()    { innermost(); }
  function outer()     { middle(); }
  outer();
});

// ── Global error button ───────────────────────────────────────────────────────

document.getElementById('global-error-btn').addEventListener('click', () => {
  throw new Error('This is an uncaught global error');
});
