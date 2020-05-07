import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';
import _ from 'lodash';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App should run without error', () => {
  test('App component renders without crashing', () => {
    // user container as root
    render(<App />, container);
    
    unmountComponentAtNode(container);
  });

  test('trancateStringByLength should return correct result', () => {
    const testStrings = [
        {
            data:"1234567890123456789012345",
            maxLength: 20,
        },
        {
            data:"1234567890",
            maxLength: 20,
        },
        {
            data:"ABCDEFG",
            maxLength: 20,
        },
        {
          data:"",
          maxLength: 20,
      },
      ];
    let result = testStrings.map((item)=>{
        return trancateStringByLength(item.data,item.maxLength)
    });
    let testValue = _.cloneDeep(result);
    // this example display how to import library from NPM
    console.log(testValue.length);
    result.forEach((item,index)=>{
        expect(item.length <= testStrings[index].maxLength).toBeTruthy();
    });
    
  });
  

});

function trancateStringByLength(inputString,maxLength = Number.MAX_SAFE_INTEGER) {
    if(inputString != null && typeof inputString === "string"){
        if(inputString.length > maxLength){
          return inputString.substring(0,maxLength);
        }
    }
  return inputString;
}