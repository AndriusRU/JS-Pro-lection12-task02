import Movie from "../Movie";
import Cart from "../Cart";

test('add new position', () => {
  const myCart = new Cart();
  const newMovie = new Movie(
    1,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000
  );

  myCart.add(newMovie);

  expect(myCart.list[0]).toEqual(newMovie);

})

test('remove position', () => {
  const myCart = new Cart();
  const newMovie = new Movie(
    10,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000
  );

  myCart.add(newMovie);
  myCart.removeItem(10);

  expect(myCart.list.length).toEqual(0);

})

test('Sum without discount', () => {
  const myCart = new Cart();
  const movie1 = new Movie(
    10,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000
  );

  const movie2 = new Movie(
    1,
    '1408',
    2007,
    'USA',
    '«Отель «Дельфин» приглашает Вас остановиться в любом из наших роскошных номеров. Кроме одного…»',
    'horror',
    '104 мин',
    500
  );


  myCart.add(movie1);
  myCart.add(movie2);
  const expectSumm = 1500;

  expect(myCart.totalSum()).toEqual(expectSumm);

})

test('Sum with discount', () => {
  const myCart = new Cart();
  const movie1 = new Movie(
    10,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000
  );

  const movie2 = new Movie(
    1,
    '1408',
    2007,
    'USA',
    '«Отель «Дельфин» приглашает Вас остановиться в любом из наших роскошных номеров. Кроме одного…»',
    'horror',
    '104 мин',
    500
  );


  myCart.add(movie1);
  myCart.add(movie2);
  const discount = 10;
  const expectSumm = 1350;

  expect(myCart.totalSumDiscount(discount)).toEqual(expectSumm);

})