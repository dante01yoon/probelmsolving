import { testSet } from './stack'; 

const { push, pop, peek } = testSet; 

test('push test', () => {
  expect(push()).toBe([false, 1, 0 ]); 
}); 

test('pop test', () => {
  expect(pop()).toBe([0,1,false]);
})

test('peek test', () => {
  expect(peek()).toBe([ 0,1 ] );
})
