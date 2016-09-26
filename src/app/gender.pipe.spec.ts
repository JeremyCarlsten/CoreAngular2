/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GenderPipe } from './gender.pipe';

describe('Pipe: Gender', () => {
  let pipe;
  beforeEach(function(){
    pipe = new GenderPipe();
  });

  it('should return female if F', () => {
    expect(pipe.transform('F')).toEqual('Female');
  });
    it('should return Male if M', () => {
    expect(pipe.transform('M')).toEqual('Male');
  });
    it('should return value if unknown', () => {
    expect(pipe.transform('Foo')).toEqual('Foo');
  });
});
